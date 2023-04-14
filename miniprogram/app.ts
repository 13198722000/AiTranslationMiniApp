// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })

    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.record']) { 
    //       wx.authorize({ 
    //         scope: 'scope.record', success() { } 
    //       })
    //     }
    //   }
    // })

    // wx.showModal({
    //   title: '提示',
    //   content: '当前未登录，是否登录',
    //   showCancel: true,
    //   success (res) {
    //     if (res.confirm) {
          
    //     } else if (res.cancel) {
    //       wx.showToast({
    //         icon: 'none',
    //         title: '取消登录'
    //       })
    //     }
    //   }
    // })
  },
})