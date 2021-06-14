import { DialogOptions } from './dialog';

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
    

}

export = idp;

