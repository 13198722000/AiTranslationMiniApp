// pages/user/user.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quota_pop_show: false
  },

  // 获取额度，显示弹出层
  show_quota(){
    this.setData({
      quota_pop_show: true
    })
  },
  close_quota(){
    this.setData({
      quota_pop_show: false
    })
  },

  // 登录
  login(){
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        wx.showToast({
          icon: 'none',
          title: '登录成功'
        })
        wx.setStorageSync('userInfo', res.userInfo)
        this.setData({
          user_info: res.userInfo
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let user_info = wx.getStorageSync('userInfo') || {}
    this.setData({
      user_info
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})