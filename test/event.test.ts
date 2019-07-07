Page({
	data: {
		keyboardHeihgt: 0
	},
	onFocus(event: event.InputFocus){
		const height: number = event.detail.height || 0
		this.setData({keyboardHeihgt: height})
	},
})
