
Component({
    data: {
        x: 'xx',
        b: {
            nn: 1,
            bb: false
        }
    },
    properties: {
        yy: String,
        lll: {
            value: 124,
            type: Number,
            observer(newVal: number, oldVal: number) {
                const x = newVal + oldVal + this.data.b.nn;
                this.KKKK();
                this.setData({
                    x: 'y',
                    yy: 'y'
                })
            }
        }
    },
    lifetimes: {
        ready() {
            this.KKKK()
            //$ExpectError
            // this.data.x=1;
            this.properties.lll;
            this.data;
            this.setData({
                ll: 12,
                'uu.x': ''
            }, (d) => {
                d.yy;
                d.b.bb;
            })
        }
    },
    methods: {
        KKKK() {
            this.mmm()
        },
        mmm() {
            this.dataset.x;
            this.data.x;
        },

    }
})