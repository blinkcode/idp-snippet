# IDP 代码提示

 ![image](https://raw.githubusercontent.com/popingblink/idp-snippet/master/assets/idp.logo.jpg)


IDP采用原生js, 对于已经用惯了TypeScript开发的来说，没有代码提示需要查阅大量文档和源码，对开发不是很友好。
所以，所以这套代码提示应运而生。
## 特性

- 该提示目前能涵盖开发过程中使用的大部分变量和方法， 实现代码的快速编写

![image](https://raw.githubusercontent.com/popingblink/idp-snippet/master/assets/snippets.gif)

> 如果你想更快，我还提供了IDP的声明文件，更敏捷的开发，从此不再查询文档! [idp声明文件](https://www.npmjs.com/package/@types/idp);

## 不足
- 本提示中只会包含常用变量和方法，可能会存在遗漏，如果您发现有需要添加的，请帮我提交PR
- IDP在源码书写中无法判断是内部使用方法，还是对外暴露的方法，有些内部方法可能也会被暴露出来，
    本提示不对方法是否有效负责。如有疑问请联系IDP的开发人员。如确定为内部方法，也可为我提交PR，联系我删除即可

## 说明

> idp所有代码提示都是以idp开头进行解析的

> 监听类

| 代码片段                      | 使用效果                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `idpdomready`                | domready                                                             |
| `idpviewready`               | viewready                                                            |
| `idpLoadData`                | idp loadData快捷键                                                    |
| `idpRegistor`                | idp 注册事件通用方法                                                    |
| `idpHelpBeforeOpen`          | idp 监听帮助打开前                                                     |
| `idpHelpSelected`            | idp 监听帮助打开前                                                     |
| `idpGridfilter`              | idp 监听表格筛选前, 可修改表头筛选条件                                    |
| `idpGridinit`                | idp 监听表格初始化                                                     |
| `idpGridSelectRow`           | idp 监听表格选中行                                                     |
| `idpGridBeforeSelectRow`     | idp监听表格选中行之前, 如果 return false,可阻止选中                       |
| `idpGridCheckRow`            | idp 监听表格选中行                                                     |
| `idpGridBeforeCheckRow`      | idp 监听表格勾选行之前, 如果return false，可阻止勾选                      |
| `idpGridBeforeApplyEditor`   | 监听表格创建编辑器之前，可动态修改列编辑器的类型，修改帮助                    |
| `idpGriddblClick`            | grid 双击选中事件                                                      |
| `idpGridAfterShowData`       | 监听表格展示数据后事件                                                   |
| `idpGridBeforeAddGridRow`    | 监听表格新增前事件，不能阻止新增行，但是可以给新增的行数据添加一些默认值         |
| `idpGridAfterAddGridRow`     | 监听表格新增后事件                                                      |
| `idpGridBeforeDeleteGridRow` | 监听表格删除前事件（亲测无效）                                            |
| `idpGridAfterDeleteGridRow`  | 监听表格删除后事件（亲测无效）                                            |
| `idpGridBeginEdit`           | 监听表格编辑前                                                         |
| `idpGridBeforeEdit`          | 监听表格编辑前                                                         |
| `idpGridBeforeBeginEdit`     | 监听表格结束编辑前                                                      |
| `idpGridAfterEndEdit`        | 监听表格结束编辑后                                                      |
| `idpGridafterEdit`           | 监听表格结束编辑后                                                      |
| `idpGridCheckAllRow`         | 监听表格全选                                                           |
| `idpGridBeforeAddData`       | add/addData/addSame/addDown的时候会触发                                |
| `idpSelected`                | idp监听单选复选选中                                                     |
| `idpDateModify`              | idp日期改变,没啥用，回调里面，没有返回选中日期                              |
| `idpGridafterGridHelpSelected` | idp帮助选中后, 也可以给当前行赋值                                       |
| `idpHelpBeforeHelpFilter`    | idp帮助筛选前，可以给帮助添加筛选条件                                      |

> 操作类

| 代码片段                      | 使用效果                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `idpUpdateCell`               | idp更新单元格                                                         |
| `idpUpdateRow`                | idp更新行数据                                                         |
| `idpSelectRow`                | idp选中行                                                             |
| `idpUnSelect`                 | idp取消选中行                                                         |
| `idpFetch`                    | idp请求API                                                            |
| `idpSetValue`                 | idp设置值                                                             |
