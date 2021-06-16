
export as namespace idp;

declare namespace idp {
    /**
        * jquery的ajax
        */
    interface jQueryXHR<T> { }

    interface jQueryPromise<T> { }
    interface ResizableControl {
        children: object;
        element: null;
        events: any;
        id: string;
        options: {
            animate: boolean
            handles: string;
            maxHeight: number
            maxWidth: number
            minHeight: number
            minWidth: number
            onEndResize: null
            onResize: Function;
            onStartResize: Function;
            onStopResize: Function;
            scope: number
        }
    }

    interface CommonControl {
        children: object;
        defer: null;
        id: string;
        options: any;
        textFieldID: string;
        type: string;
        setValue(value: string): void;
        /**
        * 获取value
        */
        getValue(): string;

        /**
         * 禁用
         */
        setDisabled(): void;

        /**
         * 启用
         */
        setEnabled(): void;

        /**
         * 获取显示名称
         */
        getText(): string;

        /**
         * 设置显示名称
         */
        setText(): void;
    }
    interface GridControl {
        allSelected: any[];
        cacheData: { records: number };
        colResizable: { [key: string]: ResizableControl };
        collapsedRows: null;
        columns: GridColumn[];
        currentData: { Rows: any[], Total: number };
        data: { Rows: any[], Total: number };
        deletedRows: any[];
        editor: { editing: boolean };
        id: string;
        isDataChanged: boolean;
        loading: boolean;
        options: {
            alignHeader: boolean;
            allowAdjustColWidth: boolean;
            allowHideColumn: boolean;
            allowUnSelectRow: boolean;
            alternatingRow: boolean;
            applyMessage: string;
            async: boolean;
            autoCheckChildren: boolean;
            autoColWidth: boolean;
            autoFilter: boolean;
            cancelMessage: string;
            cardDisplay: boolean;
            checkbox: boolean;
            checkboxColWidth: number;
            checkremember: boolean;
            clickToEdit: boolean;
            colDraggable: boolean;
            colset: boolean;
            columnWidth: null
            columns: GridColumn[];
            contentType: string;
            cssClass: string;
            data: { Rows: any[] };
            dataAction: string;
            dataType: string;
            dateFormat: string;
            delayLoad: boolean;
            detail: boolean;
            detailColWidth: number;
            detailHeight: number;
            detailToEdit: boolean;
            disabled: boolean;
            draggingMessage: string;
            editorHeightDiff: number;
            editorLeftDiff: number;
            editorTopDiff: number;
            editors: Object;
            empty: boolean;
            enabledEdit: boolean;
            enabledSort: boolean;
            errorMessage: string;
            filterRowHeight: number;
            findTextMessage: string;
            fixedCellHeight: boolean;
            fixedHeaderHeight: boolean;
            formatters: { date: Function, ref: Function };
            frozen: boolean;
            frozenCheckbox: boolean;
            frozenDetail: boolean;
            frozenRownumbers: boolean;
            gridTitle: null
            groupColumnDisplay: string;
            groupColumnName: null
            groupRender: null
            headerImg: null
            headerRowHeight: number;
            height: string;
            heightDiff: number;
            hideGridHeader: boolean;
            hideLoadButton: boolean;
            inWindow: true
            isChecked: null
            isContinueByDataChanged: string;
            isScroll: boolean;
            isSelected: null
            isShowDetailToggle: null
            isSingleCheck: true
            loadingMessage: string;
            method: string;
            minColToggle: number;
            minColumnWidth: number;
            minGridHeight: null
            minHeight: number;
            mode: null
            mouseoverRowCssClass: string;
            mulView: null
            newPage: 1
            noDataRender: Function;
            noRecordMessage: string;
            noborder: null
            onAfterAddRow: null
            onAfterApplyEditor: Function;
            onAfterEdit: Function;
            onAfterShowData: Function;
            onAfterSubmitEdit: null
            onBeforeApplyEditor: Function;
            onBeforeCancelEdit: null
            onBeforeCheckAllRow: null
            onBeforeCheckEditor: Function;
            onBeforeCheckRow: Function;
            onBeforeEdit: null
            onBeforeEndEdit: Function;
            onBeforeSelectRow: Function;
            onBeforeSend: Function;
            onBeforeShowData: null
            onBeforeSubmitEdit: null
            onChangeSort: null
            onCheckAllRow: Function;
            onCheckIsExit: null
            onCheckRow: Function;
            onContextmenu: null
            onDblClickRow: Function;
            onDragCol: null
            onEndEdit: null
            onError: null
            onGroupCollapse: null
            onGroupExtend: null
            onHeaderCellBulid: null
            onLoadData: null
            onLoadError: Function;
            onLoaded: null
            onLoading: null
            onMulViewChange: null
            onReload: null
            onRowDragDrop: null
            onSelectRow: Function;
            onServerFilter: Function;
            onSubmit: null
            onSuccess: Function;
            onToFirst: null
            onToLast: null
            onToNext: null
            onToPrev: null
            onToggleCol: null
            onTreeCollapse: null
            onTreeCollapsed: null
            onTreeExpand: null
            onTreeExpanded: null
            onUnSelectRow: null
            page: number;
            pageCount: number;
            pageParmName: string;
            pageSize: string;
            pageSizeOptions: number[];
            pageStatMessage: string;
            pageTextMessage: string;
            pagerBuilder: Function;
            pagerReadonly: Function;
            pagerRender: Function;
            pagesizeParmName: string;
            parms: Function;
            pk: string;
            record: string;
            resizable: true
            rfrozen: false
            root: string;
            rowAttrRender: null
            rowClsRender: null
            rowDraggable: boolean;
            rowDraggingRender: null
            rowHeight: number;
            rowNumber: string;
            rowSelectable: boolean;
            rownumbers: boolean;
            rownumbersColWidth: number;
            saveMessage: string;
            scrollHeight: number;
            scrollToAppend: boolean;
            scrollToPage: boolean;
            selectRowButtonOnly: boolean;
            selectable: boolean;
            serverFilter: boolean;
            showHeaderFilter: boolean;
            showTableToggleBtn: boolean;
            showTitleCount: boolean;
            sortOrder: "asc"
            sorters: { date: Function; int: Function; float: Function; string: Function; }
            sortnameParmName: string;
            sortorderParmName: string;
            statusName: string;
            sumMessage: { sum: string; count: string; max: string; min: string; avg: string; }
            switchPageSizeApplyComboBox: boolean;
            title: null
            toolbar: null
            toolbarShowInLeft: boolean;
            total: number;
            totalRender: null
            tree: null
            unSetValidateAttr: boolean;
            url: string;
            urlParms: null
            usePager: boolean;
            virtualScroll: boolean;
            whenRClickToSelect: boolean;
            where: null
            width: string;
        };
        recordNumber: number;
        records: { [recordId: string]: GridRow };
        rows: GridRow[];
        scroll: { endIndex: number; startIndex: number };
        selected: GridRow[];
        /**
         * 在表格支持多选的时候，
         * 该方法只能获取到一条，
         * 所以多选时建议直接使用
         * idp.control.get('grid_main').selected;
         */
        getSelected(): GridRow[];
        /**
         * 获取当前页的数据
         */
        getData(): GridRow[];

        /**
         * 选中一行
         */
        select(row: GridRow | string | number): void;

        /**
         * 更新一行
         */
        updateRow(rowIndex: number, change: { [columnName: string]: string }): void;

        /**
         * 更新单元格
         */
        updateCell(columnName: string, value: string, rowIndex: number): void;

        /**
         * 重新加载数据
         */
        loadData(rows: { Rows: GridRow[] }): void;
    }

    namespace func {
        function addCard(params?: string): void;
        function addDown(params?: string): void;
        function addExcel(id: string, name: string, url: string, isrtf: boolean, reload: boolean): void;
        function addSame(params: string): void;
        function buildURL(url: string): void;
        function cancelSubmit(gridId: string): void;
        function checkFlowChart(procId: string, showType: string): void;
        function clearQryRegion(colid: string): void;
        function close(): void;
        function confirmExport(id: string, sheetName: string, fileName: string, onSuccess: Function): void;
        function delete_(gridid: string): void;
        function deleteTreeData(params: string, gridid: string): void;
        function downLoadFile(data: string, name: string, sheetName: string): void;
        function editCard(params: string, gridid: string): void;
        function editCardWithLock(params: string, gridid: string): void;
        function editExcel(): void;
        function export_(id: string, sheetName: string, fileName: string, onSuccess: Function): void;
        function getGridController(): void;
        function getGridData(id: string): void;
        function getGridSelected(id: string): void;
        function openurl(id: string, name: string, url: string, isrtf: string, reload: string): void;
        function print(gridid: string, isMul: boolean): void;
        function refresh(gridid: string): void;
        function refreshDS(dscode: string): void;
        function refreshMainDS(): void;
        function submit(gridid: string): void;
        function viewCard(params: string, gridid: string): void;
        function viewImage(title: string): void;
        function writeAudit(lx: string): void;
    }

    namespace service {

        function getFuncId(): void;

        /**
         * 请求基类 post
         */
        function requestApi(): jQueryXHR<any>;

        /**
         * 自定义请求
         */
        function fetch(api: string, data: any, async: boolean, method: string, dataType: 'json' | 'string' | 'formdata' | 'jsonp'): jQueryXHR<any>;

        function fetchSync(api: string, data: any, method: string, dataType: 'json' | 'string' | 'formdata' | 'jsonp'): jQueryXHR<any>;

        /**
         * 获取影响
         * @param api 
         * @param data 
         * @param async 
         * @param method 
         */
        function getImageUrl(api: string, data: any, async: boolean, method: string): jQueryXHR<any>;


        function saveData(): jQueryXHR<any>;

        function saveListCard(): jQueryXHR<any>;

    }

    namespace store {

        function commit(key: string, value: any): void;

        function get(key: string): any;
    }


    interface LookupControl extends CommonControl {
        options: LookupOptions;
        /**
         * 设置帮助
         * id: value
         * name: 显示名称
         */
        setValue(id: string, name?: string): void;
    }

    interface TextBoxControl extends CommonControl {
        options: {
            asterProtection: boolean;
            asterType: string;
            currency: boolean;
            digits: boolean;
            disabled: boolean;
            initSelect: boolean;
            inputType: string;
            max: number;
            maxlength: string;
            min: number;
            nullText: null;
            number: boolean;
            numvalid: string;
            onBlur(): void;
            onChange(): void;
            onChangeValue(): void;
            onFocus(): void;
            onMouseOut(): void;
            onMouseOver(): void;
            precision: number;
            prefix: string;
            readonly: boolean;
            suffix: string;
            value: null;
            width: string;
            zerodel: boolean;
        }
    }

    // 多语
    interface LangBoxControl extends CommonControl {
        inputBox: { id: string; input: TextBoxControl }[];
        options: {
            cancel: string;
            cancelable: boolean;
            curLang: string;
            dgHeight: number;
            dgWidth: number;
            disabled: boolean;
            field: string;
            langData: { id: string, name: string }[]
            ok: string;
            onConfirmSelect(g: any, p: any, data: any, srcID: string): void;
            resize: boolean;
        }
    }

    interface DateBoxControl extends CommonControl {
        options: {
            cancelable: boolean;
            disabled: boolean;
            format: string;
            lang: string;
            max: string;
            min: string;
            origId: string;
            placeholder: string;
            range: boolean;
            showTime: boolean;
            showType: string;
            startDate: string;
            theme: string;
            vFormat: string;
            value: string;
        }
    }

    interface SpinnerBoxControl extends CommonControl {
        options: {
            decimalplace: number;
            disabled: boolean;
            inline: boolean;
            interval: number;
            isNegative: boolean;
            maxValue: null;
            minValue: null;
            onChangeValue: boolean;
            readonly: boolean;
            step: number;
            type: string
            value: null;
        }
    }

    interface Textarea extends CommonControl { }

    interface LookupOptions {
        async: boolean;
        autoComplete: boolean;
        cancelable: boolean;
        checkbox: boolean;
        checkremember: boolean;
        childOnly: boolean;
        codeField: string;
        condition: null
        dgHeight: null
        dgId: string;
        dgWidth: null
        disabled: boolean;
        dockType: string;
        dropmode: boolean;
        getDescription: null
        getFilter: Function;
        getStore: Function;
        getYear: Function;
        helpID: string;
        isAuto: boolean;
        isIgnoreCase: boolean;
        isMul: boolean;
        isMulGrid: boolean;
        isTotal: boolean;
        isTree: string;
        mapFields: {
            // 映射到本表的字段
            FField: string;
            // 帮助的字段，一般是ID
            HField: string;
        }[];
        modelID: string;
        nameSwitch: boolean;
        notAutoSel: boolean;
        okBtnId: string;
        onBeforeOpen(a: any): boolean;
        onClearValue(g: any, p: any, data: any, srcID: string): boolean;
        onConfirmSelect(g: any, p: any, data: any, srcID: string, ignoreFocus: boolean): void;
        pk: string;
        render: null
        returnFields: []
        service: { getQueryHelpSwitch: Function }
        split: string;
        textField: string;
        textmode: boolean;
        title: null
        type: string;
        url: string
        valueField: string;
    }

    interface GridRow {
        [columnName: string]: string | number;
        __id: string;
        __index: number;
        __nextid: string;
        __previd: number;
        __status: GridRowStatus;
    }

    enum GridRowStatus {
        nochanged = 'nochanged',
        update = 'update',
        add = 'add'
    }


    /**
     * 表格列属性
     */
    interface GridColumn {
        align: string;
        cardwidth: string;
        colid: string;
        columnindex: number;
        columnname: string;
        ctrlid: string;
        display: string;
        editor: GridEditor;
        frozen: boolean;
        hide: boolean;
        id: string;
        isFilter: boolean;
        isSort: boolean;
        islast: boolean;
        name: string;
        note: boolean;
        pid: string;
        readonly: boolean;
        render?: Function;
        required: boolean;
        showTips: boolean;
        type: string;
        width: string;
        __domid: string;
        __id: string;
        __leaf: boolean;
        __leafindex: number;
        __level: number;
        __pid: number;
        __previd: string;
        _hide: boolean;
        _width: string;
    }

    /**
     * 表格列编辑器
     */
    interface GridEditor {

    }

    namespace control {
        function get(id: string): GridControl | LookupControl;
        namespace toolbar {
            /**
             * 显示、隐藏按钮
             * @param id toolbarId
             * @param cols btnId
             * @param flag 显示 or 隐藏
             */
            function toggleBtns(id: string, cols: string[], flag: boolean): void;

            /**
             * 禁用按钮
             * @param id toolbarId
             * @param cols btnId
             */
            function setDisabled(id: string, cols: string[]): void;

            /**
             * 启用按钮
             * @param id toolbarId
             * @param cols btnId
             */
            function setEnabled(id: string, cols: string[]): void;

        }
    }

    namespace context {
        function get(key: ContextKey): string;
    }

    enum ContextKey {
        userId = 'UserId',
        userCode = 'UserCode',
        userName = 'UserName',
        loginDate = 'LoginDate',
        language = 'Language'
    }

    namespace uiview {
        namespace config {
            const cutom: null;
            const dataid: string;
            const formType: string;
            const lastid: string;
            const pageType: string;
            const server: false
            const status: string;
            const styleid: string;
            const su: null;
            const version: string;
        }
        namespace fsmController {
            namespace fsm {
                const state: string;
                function manyState(): void;
            }
            const view: Object;
        }

        /**
         * 新增行
         */
        function add(): boolean;

        /**
         * 新增相同的行
         * @param gridId 
         */
        function addSameRow(gridId: string): void;

        /**
         * 新增下级
         * @param gridId 
         */
        function addDownRow(gridId: string): void;

        /**
         * 编辑
         */
        function edit(): jQueryPromise<boolean>;

        /**
         * 保存数据
         */
        function saveData(noTips: boolean): jQueryPromise<boolean>;

        /**
         * 结束编辑
         */
        function endEdit(): void;

        /**
         * 刷新表单
         * @param gridId gridId
         */
        function refreshGrid(gridId: string): void;

        /**
         * 新增行
         */
        function addListRow(): void;

        /**
         * 删除行
         */
        function deleteListTmp(): void;

        /**
         * 取消
         */
        function cancel(): boolean;

        /**
         * 删除数据
         */
        function deleteData(): jQueryPromise<boolean>;

        /**
         * 隐藏默认工具栏（id为toolbar1）
         */
        function hideBar(): void;

        /**
         * 获取状态机
         */
        function getStatus(): 'add' | 'edit' | 'view';

        /**
         * 设置控件只读
         * @param id 控件id
         * @param flag 是否只读
         */
        function setCtrlReadOnly(id: string, flag: boolean): void;

        /**
         * 
         * @param $ele 
         * @param flag 
         * @param ctrl 
         */
        function setSingleCtrl($ele: any, flag: boolean, ctrl: any): void;


        /**
         * setUIReadOnly
         * @param flag 
         */
        function setUIReadOnly(flag: boolean): void;

        /**
         * 启用、停用评论
         * @param flag 
         */
        function setCommentEnable(flag: boolean): void;

        /**
         * 下载文件
         * @param url 
         * @param data 
         */
        function downLoadFile(url: string, data: string): void;

        /**
         * export
         * @param id 
         * @param sheetName 
         * @param fileName 
         * @param onSuccess 
         * @description 此处方法名称应该为export，export为保留字，故写成了export_
         */
        function export_(id: string, sheetName: string, fileName: string, onSuccess: Function): void;

        /**
         * 
         * @param table 
         * @param path 
         * @param styleid 
         * @description 此处方法名称应该为import，import为保留字，故写成了import_
         */
        function import_(table: string, path: string, styleid: string): void;

        /**
         * 子表导出
         * @param id 
         * @param sheetName 
         * @param fileName 
         */
        function exportMx(id: string, sheetName: string, fileName: string): void;

        /**
         * 刷新
         * @param isDelete 
         * @param deleteRow 
         */
        function refreshMainDS(isDelete: boolean, deleteRow: GridRow): void;

        /**
         * 查看电子影像
         * @param title string
         * @param sourceSys string
         */
        function viewImage(title: string, sourceSys?: string): void;

        /**
         * 清除验证信息
         */
        function cleanValidate(): void;

        /**
         * 行上移
         * @param id 行id
         */
        function upRow(id: string): void;

        /**
         * 行下移
         * @param id 行id
         */
        function downRow(id: string): void;

        /**
         * 行移动
         * @param id 行id
         * @param flag 移动方向
         */
        function moveRow(id: string, flag: 'up' | 'down'): void;

        /**
         * 上传
         * @param table 
         */
        function upload(table: string): void;

        /**
         * 子表导出
         * @param id 
         */
        function uploadMx(id: string): void;

        /**
         * 添加行，带着数据
         * @param gridId 
         * @param rowData 
         */
        function addRowData(gridId: string, rowData: GridRow): void;

        /**
         * 添加行
         * @param gridId 
         * @param isInsert 
         */
        function addRow(gridId: string, isInsert: boolean): void;

        function insertRow(gridId: string): boolean;
        /**
         * 复制行
         * @param gridId 
         * @param isTrigger 是否广播, beforeAddGridRow, afterAddGridRow
         */
        function copyRow(gridId: string, isTrigger: boolean): void;

        /**
         * 删除行（选中行）
         * @param gridId 
         */
        function deleteRow(gridId: string): void;

        /**
         * 编辑选中行
         */
        function editRow(): void;

        /**
         * 添加一行
         */
        function addData(): true;

        /**
         * 提交
         */
        function submit(): void;

        /**
         * 撤销提交
         */
        function cancelSubmit(): void;

        /**
         * 是否有效
         */
        function isValid(): boolean;

    }

    namespace event {
        function bind(eventName: string, callBack: Function): void;
        function register(viewId: string, eventName: string, callBack: Function): void;
        function trigger(viewid: string, eventname: string, args: any): void;
        function triggerHandler(viewid: string, eventname: string, args: any, isbubble: boolean): void;
        function triggerInvoke(viewid: string, eventname: string, type: string, args: any): void;
    }

    namespace express {
        const calcSorList: any[];
        const config: {};
        const sorted: boolean;
    }

    namespace filter {
        /** */
        function getFilterExpress(oper: any, value: any, ftype: any, express: any, isIgnoreCase: any): any[];
        function getOperation(): void;
    }

    namespace lang {
        function changeLang(value: string, text: string, id: string): void;
        /**
         * 获取当前语言
         */
        function getLang(): string;

        /**
         * 获取语言列表
         */
        function getLangList(): any[];

        /**
         * 设置语言
         * @param id 
         * @param name 
         */
        function setLang(id: string, name: string): void;
    }

    namespace print {
        function getBEFormat(beArr: any, callback: any): void;
        function getFomrat(styleid: any, billid: any, type: any, isMul: any): void;
        function initOptions(data: any, callback: any): void;
        function start(styleid: any, billid: any, type: any, isMul: any): void;
        function startCloud(beId: any, dataId: any, billCategoryId: any): void;
        function startCloudMul(beArr: any, dataId: any, billCategoryId: any): void;
        function startOCX(styleid: any, billid: any): void;
        function startWeb(styleid: any, formatID: any, dataid: any, type: any, isMul: any): void;
        function writeAudit(lx: any): void;
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
            onclick(event: any, dialog: Dialog): void;
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
    function lookup(options: LookupOption, okCallBack: (result: any[]) => {}, cancelCallBack: Function): void;

    interface LookupOption {
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
        getFilter(): [];
    }

    /**
     * 右侧提示框
     * @param msg 信息
     * @param title 标题
     * @param icon 图标
     */
    function notice(msg: string, title: string, icon: string): void;

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
         * 添加千分位
         * @param number 需要转化精度的数字
         * @param iscur 转化的是否含有千分位（原数字）
         * @param precision 精度
         */
        function addCurrency(number: number | string, iscur: boolean, precision: number | string): string;

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

        /**
         * 将大整数进行拆分, 防止误差
         * @param number 大整数
         */
        function getSplitValue(number: string | number): string[];

        /**
         * 是否含有该js或者css
         * @param name 名称
         */
        function isInclude(name: string): boolean;

        /**
         * 非对称解密
         * @param data 解密文本
         * @param newKey 解密key
         */
        function jsd(data: string, newKey: string): string;

        /**
         * 非对称加密
         * @param data 加密文本
         * @param newKey 加密key
         */
        function jse(data: string, newKey: string): string;

        /**
         * 加载css
         * @param url css的url
         */
        function loadCss(url: string): void;


        /**
         * 加载script
         * @param url js的url
         * @param callback 回调函数
         */
        function loadScript(url: string, callback: Function): void;

        /**
         * 加载script数组
         * @param urls js的url
         * @param callback 回调函数
         */
        function loadScriptArr(urls: string[], callback: Function): void;

        /**
         * 异步加载js
         * @param url url
         * @description 这里的promise是jquery的defered，并不是真正的promise
         */
        function loadScriptDeffered(url: string): jQueryPromise<null>;

        /**
         * 加载主题
         */
        function loadTheme(): void;

        /**
         * 加载主题
         * @param theme 主题名称
         */
        function loadThemeCss(theme: Theme): void;

        enum Theme {
            /**
             * 默认
             */
            default = 'default',
            loose = 'loose',
            tight = 'tight'
        }

        /**
         * MD5加密
         * @param key 字符串
         */
        function md5(key: string): string;

        /**
         * 打开card页面，常用于查看详情
         * @param formid styleId
         * @param title 标题
         * @param dataId dataId
         * @param status 状态
         * @param params 参数
         */
        function openCard(formid: string, title: string, dataId: string, status: FormStatus, params: string): void;

        enum FormStatus {
            // 还有好多，这里未列举完成，主要用到的就是 view 和 add
            view = 'view',
            add = 'add',
            modify = 'modify'
        }

        /**
         * 打开cloud菜单
         * @param id 
         * @param name 
         * @param url 
         * @param isrtf 
         * @param reload 
         * @param noJava 
         */
        function openCloudUrl(id: string, name: string, url: string, isrtf: boolean, reload: boolean, noJava: boolean): void;


        /**
         * 打开query页面
         * @param formid 
         * @param title 
         * @param params 
         */
        function openList(formid: string, title: string, params: string): void;


        /**
         * 打开菜单的一个集合方法
         * idp open menu的方法比较混乱，建议整理后再来重新使用
         * @param id 
         * @param name 
         * @param url 
         * @param isrtf 
         * @param reload 
         * @param noJava 
         */
        function openurl(id: string, name: string, url: string, isrtf: boolean, reload: boolean, noJava: boolean): void;

        /**
         * html文本的安全转化（XSS）
         * @param html html文本
         */
        function safeHtml(html: string): string;

        /**
         * str的xss阻止
         * @param str 
         */
        function safeXSS(str: string): string;

        /**
         * setStyle
         * @param cssText 
         * @param id 
         */
        function setStyle(cssText: string, id: string): void;

        /**
         * 转换成date
         * @param str date string
         */
        function stringToDate(str: string): Date;

        /**
         * 时间格式化
         * @param value 时间字符串
         * @param format 
         */
        function timeFormat(value: string, format: string): string;

        /**
         * 转换成无指数
         * @param num num
         */
        function toNonExponential(num: string): string;


    }
}





