/**
 * 事件对象类型
 */
declare namespace event {
    interface Target {
        /**
         * 事件组件的id
         */
        id: string;
        /**
         * 当前组件的类型
         */
        tagName: string;
        /**
         * 事件组件上由data-开头的自定义属性组成的集合
         */
        dataset: Record<string, any>;
    }

    /**
     * base事件参数
     */
    interface Base {
        /**
         * 事件类型
         */
        type: string;
        /**
         * 页面打开到触发事件所经过的毫秒数
         */
        timeStamp: number;
        /**
         * 触发事件的源组件
         */
        target: Target;
        /**
         * 事件绑定的当前组件
         */
        currentTarget: Target;
    }

    /**
     * 自定义事件
     */
    interface Custom<P extends Record<string, any> = Record<string, any>> extends Base {
        /**
         * 额外的信息
         */
        detail: P;
    }

    /**
     * Touch 对象
     */
    interface TouchDetail {
        /**
         * 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴
         */
        clientX: number;
        /**
         * 距离页面可显示区域（屏幕除去导航条）左上角距离，纵向为Y轴
         */
        clientY: number;
        /**
         * 触摸点的标识符
         */
        identifier: number;
        /**
         * 距离文档左上角的距离，文档的左上角为原点，横向为X轴
         */
        pageX: number;
        /**
         * 距离文档左上角的距离，文档的左上角为原点，纵向为Y轴
         */
        pageY: number;
    }

    /**
     * 触摸事件响应
     */
    interface Touch<
        P extends Record<string, any> = Record<string, any>,
        T extends TouchDetail | TouchCanvasDetail = TouchDetail
    > extends Custom<P> {
        /**
         * 触摸事件，当前停留在屏幕中的触摸点信息的数组
         */
        touches: T[];
        /**
         * 触摸事件，当前变化的触摸点信息的数组
         */
        changedTouches: T[];
    }

    /**
     * canvas Touch 对象
     */
    interface TouchCanvasDetail {
        /**
         * 触摸点的标识符
         */
        identifier: number;
        /**
         * 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为X轴
         */
        x: number;
        /**
         * 距离 Canvas 左上角的距离，Canvas 的左上角为原点 纵向为Y轴
         */
        y: number;
    }

    /**
     * canvas触摸事件响应
     */
    interface TouchCanvas extends Touch<never, TouchCanvasDetail> {
        /**
         * <canvas> 中的触摸事件不可冒泡，所以没有 currentTarget。
         */
        currentTarget: never;
    }

    /**
     * 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效
     *
     * 最低基础库: 1.3.0
     */
    type ButtonGetUserInfo = Custom<wx.GeneralCallbackResult & wx.GetUserInfoSuccessCallbackResult>;

    /**
     * 客服消息回调，open-type="contact"时有效
     *
     * 最低基础库: 1.5.0
     */
    type ButtonContact = Custom<wx.GeneralCallbackResult>;

    /**
     * 获取用户手机号回调，open-type=getPhoneNumber时有效
     *
     * 最低基础库: 1.2.0
     */
    type ButtonGetPhoneNumber = Custom<wx.GeneralCallbackResult & Partial<wx.GetWeRunDataSuccessCallbackResult>>;

    /**
     * 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
     *
     * 最低基础库: 1.9.5
     */
    type ButtonError = Custom<wx.GeneralCallbackResult>;

    /**
     * 在打开授权设置页后回调，open-type=openSetting时有效
     *
     * 最低基础库: 2.0.7
     */
    type ButtonOpenSetting = Custom<wx.GeneralCallbackResult & wx.OpenSettingSuccessCallbackResult>;

    /**
     * 打开 APP 成功的回调，open-type=launchApp时有效
     *
     * 最低基础库: 2.4.4
     */
    type ButtonLaunchApp = Custom<wx.GeneralCallbackResult>;

    /**
     * checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:['选中的checkbox的value的数组']}
     */
    type CheckboxGroupChange = Custom<{
        /** 选中的checkbox的value的数组 */
        value: string[];
    }>;

    /**
     * 键盘输入时触发，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。
     */
    type Input = Custom<{
        /** 输入框内容 */
        value: string;
        /** 光标位置 */
        cursor: number;
        /** keyCode 为键值，`2.1.0` 起支持 */
        keyCode?: number;
    }>;

    /**
     * 输入框聚焦时触发，event.detail = { value, height }
     */
    type InputFocus = Custom<{
        /** 输入框内容 */
        value: string;
        /** 键盘高度, 在基础库 `1.9.90` 起支持 */
        height?: number;
    }>;

    /**
     * 输入框失去焦点时触发，event.detail = {value: value}
     */
    type InputBlur = Custom<{
        /** 输入框内容 */
        value: string;
    }>;

    /**
     * 点击完成按钮时触发，event.detail = {value: value}
     */
    type InputConfirm = Custom<{
        /** 输入框内容 */
        value: string;
    }>;

    /**
     * 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}
     *
     * __tip__: 键盘高度发生变化，keyboardheightchange事件可能会多次触发，开发者对于相同的height值应该忽略掉
     *
     * 最低基础库: `2.7.0`
     */
    type InputKeyboardHeightChange = Custom<{
        /** 键盘高度 */
        height: number;
        duration: number;
    }>;
}
