Behavior({
    data:{
        'x':1
    },
    properties:{
        'y':Boolean
    },
    methods:{
        f(){
            // this.created();
        },
        x(){
            this.x();
            this.created()
            this.created()
            this.data.x
        }
    },
    created(){
        this.properties.y
        this.created();
        this.f();
        this.created();
        // this.properties.y
    },
    detached(){
        this.f();
    },
    moved(){
        this.created();
        this.created();
        this.created();
        // this.created()
        // this.
    },
    attached(){
        
    }
    
})