/**
 * 事件对象类型
 */
declare namespace event {
    interface Target {
        /** 事件组件的id */
        id: string;
        /** 当前组件的类型 */
        tagName?: string;
        /** 事件组件上由data-开头的自定义属性组成的集合 */
        dataset: Record<string, any>;
        /** 距离页面顶部的偏移量 */
        offsetTop: number;
        /** 距离页面左边的偏移量 */
        offsetLeft: number;
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
     * 编辑器初始化完成时触发
     *
     * 最低基础库: 2.7.0
     */
    type EditorReady = Custom<{}>;

    /**
     * 编辑器聚焦时触发，event.detail = {html, text, delta}
     *
     * 最低基础库: 2.7.0
     */
    type EditorFocus = Custom<{
        html: string;
        text: string;
        delta: any[];
    }>;

    /**
     * 编辑器失去焦点时触发，detail = {html, text, delta}
     *
     * 最低基础库: 2.7.0
     */
    type EditorBlur = EditorFocus;

    /**
     * 编辑器内容改变时触发，detail = {html, text, delta}
     *
     * 最低基础库: 2.7.0
     */
    type EditorInput = EditorFocus;

    /**
     * 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
     *
     * 最低基础库: 2.7.0
     */
    type EditorStatusChange = Custom<
        Partial<{
            align: 'left' | 'center' | 'right' | 'justify';
            bold: 'strong';
            italic: 'em';
            underline: true;
            strike: 'del';
            lineHeight: string;
            letterSpacing: string;
            marginTop: string;
            marginBottom: string;
            fontFamily: string;
            fontSize: string;
            color: string;
            backgroundColor: string;
            list: 'checked' | 'unchecked' | 'ordered' | 'bullet';
            indent: number;
            header: number;
            script: 'sub' | 'super';
            direction: 'rtl';
        }>
    >;

    /**
     * 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}
     */
    type FormSubmit = Custom<{
        formId?: unknown;
        target: Target;
        /** 表单中的数据，需要在表单组件中加上 name 来作为 key。 */
        value: Record<string, any>;
    }>;

    /**
     * 表单重置时会触发 reset 事件
     */
    type FormReset = Custom<{
        target: Target;
    }>;

    /**
     * 键盘输入时触发，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。
     */
    type Input = Custom<{
        /** 输入框内容 */
        value: string;
        /** 光标位置 */
        cursor: number;
        /** keyCode 为键值 (目前工具还不支持返回keyCode参数) `2.1.0` 起支持 */
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

    /**
     * 取消选择时触发
     *
     * 最低基础库: 1.9.90
     */
    type PickerCancel = Custom<{}>;

    /**
     * value 改变时触发 change 事件，event.detail = {value}
     *
     * 当 mode = region 时 (最低基础库: 1.4.0)
     *
     * value 改变时触发 change 事件，event.detail = {value, code, postcode}，其中字段 code 是统计用区划代码，postcode 是邮政编码
     */
    type PickerChange = Custom<{
        /**
         * 当 mode = selector 时, 返回当前选择的 value
         *
         * 当 mode = multiSelector 时, 返回一个索引数组
         *
         * 当 mode = time | date 时, 返回 `"12:01"` | `"2016-09-01"`
         *
         * 当 mode = region 时, 返回 `["广东省", "广州市", "海珠区"]`
         */
        value: string | number[] | [string, string, string];
        /** 统计用区划代码 当 mode = region 时有效 (最低基础库: 1.4.0) */
        code: [string, string, string];
        /** 邮政编码 当 mode = region 时有效 (最低基础库: 1.4.0) */
        postcode: string;
    }>;

    /**
     * 列改变时触发 当 mode = multiSelector 时有效
     */
    type PickerColumnChange = Custom<{
        /** 修改的列 */
        column: number;
        value: number;
    }>;

    /**
     * 滚动选择时触发change事件，event.detail = {value}
     */
    type PickerViewChange = Custom<{
        /** value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始） */
        value: number[];
    }>;

    /**
     * 当滚动选择开始时候触发事件
     *
     * 最低基础库: 2.3.1
     */
    type PickerViewPickStart = Custom<{}>;

    /**
     * 当滚动选择结束时候触发事件
     *
     * 最低基础库: 2.3.1
     */
    type PickerViewPickEnd = Custom<{}>;

    /**
     * radio-group 中选中项的 value
     */
    type RadioGroupChange = Custom<{
        value: string;
    }>;

    /**
     * 完成一次拖动后触发的事件，event.detail = {value}
     */
    type SliderChange = Custom<{
        /** slider 的数值 0-100 */
        value: number;
    }>;

    /**
     * 拖动过程中触发的事件，event.detail = {value}
     *
     * 最低基础库: 1.7.0
     */
    type SliderChanging = SliderChange;

    /**
     * checked 改变时触发 change 事件，event.detail={ value}
     */
    type SwitchChange = Custom<{
        value: boolean;
    }>;

    /**
     * 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持
     */
    type TextareaFocus = InputFocus;

    /**
     * 输入框失去焦点时触发，event.detail = {value, cursor}
     *
     * `tip`: textarea 的 blur 事件会晚于页面上的 tap 事件，如果需要在 button 的点击事件获取 textarea，可以使用 form 的 bindsubmit。
     */
    type TextareaBlur = InputBlur;

    /**
     * 输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}
     */
    type TextareaLineChange = Custom<{
        /** 输入框高度(px) */
        height: number;
        /** 输入框高度(rpx) */
        heightRpx: number;
        /** 行数 */
        lineCount: number;
        /** 行高 */
        lineHeight: number;
    }>;

    /**
     * 当键盘输入时，触发 input 事件，event.detail = {value, cursor, keyCode}，keyCode 为键值，目前工具还不支持返回keyCode参数。
     *
     * `tip`: 不建议在多行文本上对用户的输入进行修改，所以 **bindinput 处理函数的返回值并不会反映到 textarea 上**
     */
    type TextareaInput = Input;

    /**
     * 点击完成时， 触发 confirm 事件，event.detail = {value: value}
     */
    type TextareaConfirm = InputConfirm;

    /**
     * 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration}
     *
     * `tip`: 键盘高度发生变化，keyboardheightchange事件可能会多次触发，开发者对于相同的height值应该忽略掉
     *
     * 最低基础库: 2.7.0
     */
    type TextareaKeyboardHeightChange = InputKeyboardHeightChange;
}
