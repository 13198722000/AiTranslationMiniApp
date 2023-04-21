// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    dialog_show: false,
    showOptions: false,
    select_pop: false,
    textareaValue: '' ,
    languageOptions: [["英语", "EN"], ["中文（简体）", "ZH-CN"], ["中文（繁体）", "ZH-TW"], ["日语", "JA"], ["韩语", "KO"], ["法语", "FR"], ["西班牙语", "ES"], ["意大利语", "IT"], ["德语", "DE"], ["土耳其语", "TR"], ["俄语", "RU"], ["葡萄牙语", "PT"], ["越南语", "VI"], ["印尼语", "ID"], ["泰语", "TH"], ["马来语", "MS"], ["阿拉伯语", "AR"], ["荷兰语", "NL"], ["希腊语", "EL"], ["瑞典语", "SV"], ["挪威语", "NO"], ["丹麦语", "DA"], ["波兰语", "PL"], ["匈牙利语", "HU"]],
    nowLanguage: ["英语", "EN"],
    selectIndex: 0,
    inputBut: true,
    motto: '欢迎使用Ai人工智能翻译',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 点击选择语言，显示弹出层
  onVoiceInput() {
    this.setData({
      select_pop: true
    })
  },
  // 关闭弹出层
  close_pop() {
    this.setData({
      select_pop: false
    })
  },
  // 输入事件处理函数，每次输入都会触发
  onInput: function(event) {
    this.setData({
      textareaValue: event.detail.value // 将 textarea 的值存入 data 中
    });
  },
  // 取消登录
  cancel_login(){
    this.setData({
      dialog_show: false
    })
  },

  clickItem(v) {
    this.setData({
      selectIndex: v.detail.index,
      select_pop: false
    })

  },

  // 弹出层确定
  onConfirm(e) {
    let { index } = e.detail
    this.setData({
      select_pop: false,
      selectIndex: index
    })
  },
  // 弹出层取消
  onCancel() {
    this.setData({
      select_pop: false
    })
  },

  // 语音录入
  speech_input() {
    this.checkLogin();
    console.log(6666);
  },

  // 点击翻译
  translate() {
    const selIndex = this.data.selectIndex
    console.log("nowLanguage",this.data.languageOptions[selIndex][1]);
    console.log("textareaValue",this.data.textareaValue);
    this.checkLogin();
    // wx.request({
    //     url: 'https://your-server.com/api/your-endpoint',
    //     method: 'POST',
    //     data: {
    //       openId:"123123",
    //       content:"",
    //       language:this.data.nowLanguage[1]
    //     },
    //     success: (result) => {
    //       // 翻译成功
    //       console.log("用户OpenID：");
    //     },
    //     fail: (error) => {
    //       console.error("翻译失败", error);
    //     }
    //   });
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  // 进入页面时触发生命周期
  onShow() {
    this.checkLogin();
  },

  // 检查用户是否登录，如果没有，就请求登录
  checkLogin() {
    if (!wx.getStorageSync('userInfo')) {
      this.setData({
        dialog_show: true
      })
      wx.login({
        success: (res) => {
          if (res.code) {
            // 发送请求到您的服务器，使用code换取用户的OpenID和session_key
            console.log("helloLogin", res);
            // wx.request({
            //   url: 'https://your-server.com/api/your-endpoint',
            //   method: 'POST',
            //   data: {
            //     code: res.code
            //   },
            //   success: (result) => {
            //     // 在此处处理您的服务器返回的用户OpenID
            //     console.log("用户OpenID：", result.data.openid);
            //   },
            //   fail: (error) => {
            //     console.error("获取用户OpenID失败：", error);
            //   }
            // });
          } else {
            console.error("登录失败：" + res.errMsg);
          }
        },
        fail: (error) => {
          console.error("调用wx.login失败：", error);
        }
      });
    }
  },

  // 授权获取到用户信息后，调用后端接口解密
  loginAndGetOpenId: function () {
    
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    this.setData({
      dialog_show: false,
    })
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        wx.setStorageSync('userInfo', res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  toggleOptions() {
    this.setData({
      showOptions: !this.data.showOptions,
    });
  },
  // getUserInfo(e: any) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
