
Page({
  data: {},
  getImage() {
    const canvasWidth = 420
    const ctx = wx.createCanvasContext('share-canvas')
    ctx.setFontSize(20)
    ctx.setFillStyle('AliceBlue')
    ctx.setFillStyle('rgb(179,179,179)')
    ctx.fillText('test', 0, 20, canvasWidth)
    ctx.drawImage('img', 0, 50, canvasWidth, 210)
    const gradient = ctx.createLinearGradient(0, 50, 0, 210)
    gradient.addColorStop(0, 'Black')
    gradient.addColorStop(0.5, '#abcdef')
    gradient.addColorStop(1, 'rgba(0,0,0,0.4)')
    ctx.setFillStyle(gradient)
    ctx.fillRect(0, 50, canvasWidth, 210)

    ctx.setStrokeStyle('#fff')
    ctx.setLineJoin('round')
    ctx.setLineWidth(6)
    ctx.strokeRect(20, 198, 76, 76)
    ctx.drawImage('abc', 20, 198, 76, 76)

    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: 'share-canvas',
        quality: 1,
        success: ({ tempFilePath }) => {
          this.setData({ shareImage: tempFilePath })
        },
      })
    })
  },
})
