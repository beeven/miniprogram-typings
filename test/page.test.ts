Page({
    extend: {
        k: 'v'
    },
    data: {
        x: 123,
        o: {
            b: false,
            n: 2,
            s: 'sss'
        }
    },
    onLoad() {
        this.route
        this.tapOnBtn()
    },
    onHide() {

    },
    onShow() {
        this.setData({
            x: 2,
            'o.k': 12
        })
        this.route;
        this.extend.k = this.data.o.s
    },
    onReady() {
        const tabbar = this.getTabBar<{ active: number }>()
        if (tabbar) {
            tabbar.setData({ active: 1 })
        }
    },
    tapOnBtn() {
        this.onLoad()
    },
})

Page({
    data: {
        n: 1
    },
    onLoad(op: Page.OnLoadQuery) {
        this.setData({
            n: +(op['n'] || 0),
        })
    }
})



Page<{},{backdata:{},f():void}>({
    onLoad(e) {
        e['x']
    },
    backdata:{},
    f(){

    },
})

Page({
    onLoad(e:{x:string}){
        this.setData(e);
    },
    f() {
    },
    onPageScroll() {
    },
    onShareAppMessage(e) {
        e.from
        return {}
    },
    onResize(e){
        this.f()
        e.size.windowHeight
    }
})
Page({})