// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    dialog_show: false,
    showOptions: false,
    select_pop: false,
    languageOptions:['英语','中文'],
    nowLanguage:"英语",
    selectIndex: 0,
    inputBut:true,
    motto: '欢迎使用Ai人工智能翻译',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  // 点击选择语言，显示弹出层
  onVoiceInput(){
    this.setData({
      select_pop: true
    })
  },
  // 关闭弹出层
  close_pop(){
    this.setData({
      select_pop: false
    })
  },
  // 弹出层确定
  onConfirm(e){
    let {index} = e.detail
    this.setData({
      select_pop: false,
      selectIndex: index
    })
  },
  // 弹出层取消
  onCancel(){
    this.setData({
      select_pop: false
    })
  },

  // 语音录入
  speech_input(){
    console.log(6666);
  },

  // 点击翻译
  translate(){

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
  onShow(){
    let userInfo = wx.getStorageSync('userInfo')
    console.log(userInfo);
    if(!userInfo){
      this.setData({
        dialog_show: true
      })
    }
    
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
        wx.setStorageSync('userInfo',res.userInfo)
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
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
