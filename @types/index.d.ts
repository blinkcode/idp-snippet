
export as namespace idp;

declare namespace idp {
    /**
     *  idp的版本
     */
    const version: string;
    /**
     * 视图测试
     */
    namespace uiview {
        namespace control {
            function get(id: string): any;
        }
    }

    /**
     * 提示框
     * @param msg 提示信息
     * @param title 标题
     * @param callback 点击确定后的回调函数
     */
    function alert(msg: string, title?: string, callback?: Function): void;

    /**
     * 提示框-确认
     * @param msg 提示信息
     * @param success: 点击确定调用
     * @param cancel 点击取消调用
     * @param isOverGlobal 没试出来干嘛用的
     */
    function confirm(msg: string, success: Function, cancel?: Function, isOverGlobal?: boolean): void;

    /**
     * 提示框-警告
     * @param msg 提示信息
     * @param title 标题
     * @param callback 点击确定后的回调函数
     */
    function danger(msg: string, title: string, callback?: Function): void;

    /**
     * 轻提示-提示（提示框为蓝色）
     * @param msg 提示信息
     */
    function info(msg: string): void;

    /**
     * 轻提示-成功（提示框为绿色）
     * @param msg 提示信息
     */
    function tips(msg: string): void;

    /**
     * 轻提示-警告（提示框为黄色）
     * @param msg 提示信息
     */
    function warn(msg: string): void;

    /**
     * 轻提示-错误（提示框为红色）
     * @param msg 提示信息
     */
    function error(msg: string): void;

    /**
     * loading
     * @param msg 提示信息
     */
    function loading(msg: string): void;

    /**
     * 设置配置文件
     * @param obj 配置选项
     */
    function config(obj: object): void;

    /**
     * 
     * @param options 调用参数的选项
     * @param loadCallback 
     * @param okCallBack 
     * @param closeCallBack 
     */
    function dialogUrl(options: DialogOptions, loadCallback: Function, okCallBack: Function, closeCallBack: Function): void;

    interface Dialog {
        close: Function;
    }
    interface DialogOptions {
        url: string,
        width: number,
        height: number,
        title: string,
        buttons: {
            id: string;
            text: string;
            cls: string;
            onclick: (event: any, dialog: Dialog) => {};
        }[];
    }
    /**
     * 下载excel
     * @param styleId 表单id
     * @param fileName 文件名称 
     */
    function downLoadExcel(styleId: string, fileName: string): void;
    /**
     * 下载文件
     * @param url 下载路径
     * @param data 下载内容
     */
    function downLoadFile(url: string, data: string): void;

    /**
     * 导出excel
     * @param id gridid
     * @param sheetName sheet名称
     * @param fileName 文件名称
     */
    function exportExcel(id: string, sheetName: string, fileName: string): void;

    /**
    * 导出文件
    * @param id gridid
    * @param sheetName sheet名称
    * @param fileName 文件名称
    */
    function exportFile(comid: string, params: object): void;

    /**
     * 导入excel
     * @param params 
     * @param path 
     * @param onScuess 
     * @param onError 
     * @param onCancel 
     * @param url 
     */
    function importExcel(params: object, path: string, onScuess: Function, onError: Function, onCancel: Function, url: string): void;

    /**
     * importFile
     * @param compid 
     * @param params 
     * @param onScuess 
     * @param onError 
     * @param onCancel 
     */
    function importFile(compid: string, params: object, onScuess: Function, onError: Function, onCancel: Function): void;

    /**
     * jsonCallback
     * @param styleId 
     * @param type 
     * @param data 
     */
    function jsonCallback(styleId: string, type: string, data: any): void;

    /**
     * 结束loading
     */
    function loaded(): void;

    /**
     * 打开帮助
     * @param options 
     * @param okCallBack 
     * @param cancelCallBack 
     * @example 
        ``` javascript
            let params = {
                helpID: "66fa50ca-3ca9-856c-13e0-82d8025b38ff",
                height: 450,
                width: 550,
                isMul: false,
                title: "采购计划类型",
                completed: false,
                getFilter: function() {
                    var arr = [];
                    arr.push({ "Left": "", "Field": "SCMPRTYPE.STATUS", "Operate": "=", "IsExpress": false, "Value": "1", "Right": "", "Logic": "" });
                    return arr;
                }
            };
            idp.lookup(params,function(res){
                if(res!==undefined||res!==null&&res.length>0){
                   console.log(res.pop());
                }
            });
        ````
     */
    function lookup(options: LookupOptions, okCallBack: (result: any[]) => {}, cancelCallBack: Function): void;

    interface LookupOptions {
        /**
         * 标题
         */
        title: string;
        /**
         * 帮助ID
         */
        helpID: string;
        width: number;
        height: number;
        /**
         * 是否多选
         */
        isMul: boolean;
        /**
         * true 的话会跳转到自定义列表界面
         */
        completed: boolean;
        /**
         * 过滤参数
         */
        getFilter: () => [];
    }

    /**
     * 右侧提示框
     * @param msg 信息
     * @param title 标题
     * @param icon 图标
     */
    function notice(msg:string, title: string, icon: string): void;

    /**
     * 打开igix开发的页面
     * @param id styleId
     * @param title 标题
     * @param url url
     * @param isrtf 
     * @param reload 
     */
    function openurl(id: string, title: string, url: string, isrtf: boolean, reload: boolean): void;


    namespace utils {
        
        /**
         * 数字转化精度
         * @param number 需要转化精度的数字
         * @param iscur 转化的是否含有千分位（原数字）
         * @param precision 精度
         */
        function addCurrency(number: number| string, iscur: boolean, precision: number | string): string;

        /**
         * 
         * @param data 原数据
         * @param id 表示id的字段
         * @param pid 表示parentid的字段
         * @param childs 表示childs的字段， 默认问childs
         */
        function arrayToTree(data: any[], id: string, pid: string, childs: string): any[];

        /**
         * 加星号处理
         * @param val 原值
         * @param type 转换类型
         */
        function asterFormat(val: string, type: AsterType): string;

        enum AsterType {
            IDCard = 'IDCard',
            CreditCard = 'CreditCard',
            Tel = 'Tel',
            EMAIL = 'EMAIL'
        }

        /**
         * 加工url，返回带着j和prefix参数的url
         * @param url 原url
         */
        function buildURL(url: string): string;

        /**
         * 关掉tab页
         */
        function close(): void;

        /**
         * 
         * @param value date
         * @param format 格式
         */
        function dateFormat(value: string, format: string): string;

        /**
         * 删除数字中无效的0
         * @param value 原数字
         */
        function formatNumToDelZero(value: string): string;

        /**
         * 获取url参数
         * @param key 参数名
         */
        function getQuery(key: string): string;


    }
}





