

var scmbatchcard = {
    isCopy: false,
    copyRow: null,
    withQC: '0', // 连用质量
    exportColumns: [
        "MATERIALID", "MATERIALIDNAME", "BATCHCODE", "QUALITYSTATE", "QUALITYLEVEL",
        "QUALITYTIME", "BATCHSTOCKSTATE", "BATCHSTOCKSTATENAME", "RELEASESTATE", "VENDERID", "VENDERIDNAME", "FACTORYID", "FACTORYIDNAME",
        "ORIBATCHCODE", "ISSTOP", "RECDATE", "PRODUCTDATE", "EFFICIENTDATE", "DISABLEDATE", "INVUNITRATE", "BATCHUNITRATE",
        "EXCONTENTID", "EXCONTENT", "NOTE"
    ],
    excelColumns: [
        "物料编号", "物料名称", "批号", "质检状态", "质量等级", "检验完成时间",
        "库存状态编码", "库存状态名称", "放行状态", "来源供应商编号", "来源供应商名称", "来源生产厂编号", "来源生产厂名称", "来源批号",
        "停用", "入库日期", "生产日期", "生效日期", "失效日期", "库存换算系数", "批次计量换算系数", "辅助信息ID", "辅助信息描述",
        "备注"
    ],
    addRow: (id) => {
        scmbatchcard.isCopy = false;
        scmbatchcard.setBtnStatus('edit');
        return idp.uiview.addRow(id);
    },
    saveData: () => {
        return scmbatchcard.saveData1().done((flag, a, b) => {
            if (flag) {
                scmbatchcard.setBtnStatus('view');
            }
        })
    },
    copyRow: (id) => {
        let selected = idp.control.get(id).getSelected();
        if (!selected) {
            idp.warn('请选择一行要复制的数据!');
            return false;
        }
        scmbatchcard.isCopy = true;
        scmbatchcard.copyRow = selected;
        scmbatchcard.setBtnStatus('edit');
        return idp.uiview.addRow(id);
    },
    cancel: () => {
        idp.uiview.cancel().done(flag => {
            if (flag) {
                scmbatchcard.setBtnStatus('view');
            }
        });
    },
    importFile: () => {
        $('#batchuploadFile').click();
    },
    /**
     * 导出模板
     */
    export: () => {
        // 添加一个假loading，避免卡顿时用户乱点
        // idp.loading();
        // setTimeout(() => {
        //     idp.loaded();
        // }, 500);
        // // idp.downLoadExcel('85caf7e7-5835-c74f-57cb-229154536ba9', '批次档案模板');
        // idp.exportFile(//导出控件
        //     "SCMExportExcel",//实现构件
        //     { cols: scmbatchcard.excelColumns, sheetName: 'Batch', fileName: '批次导入模板.xlsx' }
        // )
        scmfndfunctions.excel.exportTemp(scmbatchcard.excelColumns, "Batch", "批次导入模板.xlsx");
    },
    /**
     * 比较日期大小
     * @param {string} date1 
     * @param {string} date2 
     * @returns 
     */
    compareDate: (date1, date2) => {
        var oDate1 = new Date(date1);
        var oDate2 = new Date(date2);
        return oDate1.getTime() >= oDate2.getTime()
    },
    /**
     * 启用筛选
     */
    setFilterEnable() {
        idp.control.get('BIZORGID').setEnabled();
        idp.control.get('MATERIALID').setEnabled();
        idp.control.get('BATCHCODE').setEnabled();
    },
    /**
     * 设置按钮状态并修改状态机
     * @param {string} status 
     */
    setBtnStatus: status => {
        if (status === 'edit') {
            if (idp.uiview.getStatus() !== 'add') {
                idp.uiview.fsmController.action("add");
            }
            idp.control.toolbar.setEnabled('toolbar1', ['baritem_cancel', 'baritem_copyrow', 'baritem_save', 'baritem_close']);
            idp.control.toolbar.setDisabled('toolbar1', ['baritem_modify', 'baritem_delete', 'baritem_import', 'baritem_export']);
        } else if (status === 'view') {
            if (idp.uiview.getStatus() !== 'cancel') {
                idp.uiview.fsmController.action("cancel");
            }
            scmbatchcard.setFilterEnable();
            idp.control.toolbar.setEnabled('toolbar1', ['baritem_cancel', 'baritem_copyrow', 'baritem_modify', 'baritem_close', 'baritem_export', 'baritem_import']);
            idp.control.toolbar.setDisabled('toolbar1', ['baritem_save', 'baritem_cancel']);
        }
    },
    createImportDom: () => {
        let input = "<input id='batchuploadFile' style='display:none;' type='file' />";
        $("body").append(input);
        fileInput = $('#batchuploadFile');//赋值
        fileInput.change(function () {//注册change事件，选择不同文件时触发
            scmbatchcard.importExcel();
        });
    },
    importExcel: () => {
        idp.loading();
        let files = fileInput[0].files;//获取选中文件
        if (files) {
            let fileName = files[0].name;//文件名
            if (!fileName.endsWith(".xlsx") && !fileName.endsWith(".xls")) {//文件后缀检查
                return false;
            }
            let fileReader = new FileReader();
            fileReader.readAsDataURL(files[0]);//读取文件内容，转为base64编码字符串，方便传输数据
            fileReader.onload = function (ev) {
                idp.service.fetch("/api/scm/scmfnd/v1.0/scmbatch/importexcel", {//导入文件数据
                    fileData: ev.target.result,
                    fileName: fileName,
                    orgID: idp.control.get('BIZORGID').getValue(),
                    columns: scmbatchcard.exportColumns
                }).done(function (data) {
                    idp.loaded();
                    if (data.success) {
                        idp.warn('导入成功');
                        idp.uiview.refreshGrid();
                    } else {
                        idp.error(data.msg);
                        return false;
                    }
                });
            }
        }
        fileInput.val("");
    },
    getMaterialInvUnit(materialID, cb) {
        idp.loading();
        idp.service.fetch("/api/scm/scmfnd/v1.0/scmbatch/getMaterialInvUnit", materialID, false).done(function (data) {
            idp.loaded();
            console.log('invunit', data);
            if (data.success) {
                cb(data.data)
            }
        })
    },
    getMaterialBatchUnit(materialID, cb) {
        idp.loading();
        idp.service.fetch("/api/scm/scmfnd/v1.0/scmbatch/getMaterialBatchUnit", materialID, false).done(function (data) {
            idp.loaded();
            console.log('batchunit', data);
            if (data.success) {
                cb(data.data);
            }
        })
    },
    saveData1: function (notips, extParam, withDel) {
        idp.uiview.endEdit();
        var defer = $.Deferred();
        var curData = [];
        var records = idp.uiview.gridController.mainGrid.records;
        var bindings = idp.uiview.gridController.grids[idp.uiview.gridController.mainGrid.id];
        var table = bindings.ctrl.table;
        var deleteData = idp.uiview.gridController.mainGrid.deletedRows;
        for (var key in records) {
            curData.push(records[key]);
        }
        idp.uiview.validateData(curData, function (flag) {
            if (flag) {
                var data = idp.uiview.modelController.getListMainSaveData(curData, idp.uiview.config.formType, idp.uiview.config.styleid, extParam, withDel, deleteData);
                if (idp.event.triggerHandler(null, "beforeCheck", [data, curData]) == false) {
                    defer.resolve(false);
                    return true;
                }
                var newData = idp.event.triggerHandler(null, "beforeSave", [data,]);
                if (newData) {
                    data = newData;
                }
                idp.loading(idp.lang.get("SAVING"));
                idp.service.saveListCard(data).done(function (res) {
                    idp.loaded();
                    if (res.Code == "ok") {
                        if (res.Data.failed && res.Data.failed.length) {
                            var arr = [];
                            for (var item in res.Data.failed) {
                                var row = res.Data.failed[item];
                                arr.push(idp.uiview.getCheckMessage(row.error || row.Error || row.message, row));
                            }
                            idp.alert(arr.join("</br>"));
                            defer.resolve(false);
                        } else {
                            if (!notips) idp.tips(idp.lang.get("SAVE_SUCESS"));
                            idp.uiview._dataChange = false;
                            idp.uiview.gridController.refresh();//刷新grid？ 只在成功后刷新0317
                            defer.resolve(true);
                        }
                    } else if (res.Code == "check") {
                        idp.uiview.validateServerMsg(data.Message)
                        defer.resolve(false);
                    } else {
                        defer.resolve(false);
                    }
                });
            } else {
                defer.resolve(flag);
            }
        });

        return defer.promise();
    }
};
(function (idp) {
    idp.service.fetch("/api/scm/scmfnd/v1.0/scmbatch/getwithqc", null, false).done(function (data) {
        if (data.success) {
            scmbatchcard.withQC = data.data;
        }
    })
    idp.event.bind('domReady', () => {
        let selectedMaterial = null;
        /** 
         * 列表监听表格的过滤
         * 过滤之前自动赋值库存组织
        */
        idp.event.register("grid_main", "beforeGridFilter", function (e, filters) {
            //自动赋值组织
            var zzjg = idp.control.get('BIZORGID').getValue();
            if (zzjg === '' || zzjg === ' ') {
                scmfndfunctions.setDefaultValueForIMOrg('BIZORGID');
            }
        });
        /**
         * 我的表头库存组织筛选不知道为啥帮助后选择的赋值竟是个名称，
         * 这个做个监听，赋一下值
         */
        idp.event.register("BIZORGID", "selected", function (e, value, name, obj) {
            var id = obj[0]['ID'];
            var name = obj[0]['NAME$LANGUAGE$'];
            var masterorgid = obj[0]['MASTERORGID'];
            idp.control.get('BIZORGID').setValue(id, name);
            let cookieKey = "defaultOrgInventoryOrg" + idp.context.get("UserId");
            scmfndfunctions.cookie.setCookie(cookieKey, `${id}&${name}&${masterorgid}`);
        });

        /** 
         * 
         * 库存计量单位的名称带不过来，
         * 写了个监听，把他给搞上去
        */
        idp.event.register('grid_main', 'afterShowData', (event, table, row, id) => {
            // console.log('loadData', event,table,row,id);
            if (table.Total) {
                table.Rows.forEach((row, index) => {
                    const lang = idp.lang.getLang().id.split('-').pop();
                    const str = "INVUNITID_NAME_" + lang.toUpperCase();
                    row['INVUNITID_NAME$LANGUAGE$'] = row[str];
                    idp.control.get("grid_main").updateCell('INVUNITID_NAME$LANGUAGE$', row[str], index)
                });
            }
        })

        /**
         * 增加新行之前
         * 1. 默认添加库存组织
         * 2. 默认添加库存状态：自由；
         */
        idp.event.register('grid_main', 'beforeAddGridRow', (event, table, row, id) => {
            selectedMaterial = null;
            /**
             * 为行上的库存组织赋值
             */
            let kczzid = idp.control.get('BIZORGID').getValue();
            row['BIZORGID'] = kczzid;

            /**
             * 为行上的库存状态默认附上UR
             */
            row['BATCHSTOCKSTATE'] = 'c2870648-8b6d-4030-b213-ff4c2b473aa8';
            row['BATCHSTOCKSTATE_STATECODE'] = 'UR';
            row['BATCHSTOCKSTATE_STATENAME$LANGUAGE$'] = '自由';

            /**
             * 放行状态默认为1
             */
            row['RELEASESTATE'] = '1';

            /**
             * 停用状态默认为0
             */
            row['ISSTOP'] = '0';

            /**
             * 库存、批次计量换算系数
             */
            row['INVUNITRATE'] = 1;
            row['BATCHUNITRATE'] = 1;

            /**
             * 质检状态可以给一个默认值：0
             */
            row['QUALITYSTATE'] = '0';
            /** 
             * 行复制
             * 复制物料、供应商、生产长
             * 跟随物料帮助带出来的质检状态和批次计量单位也带过来
             * 
            */
            if (scmbatchcard.isCopy) {
                row["MATERIALID"] = scmbatchcard.copyRow['MATERIALID'];
                row['MATERIALID_CODE'] = scmbatchcard.copyRow['MATERIALID_CODE'];
                row['MATERIALID_NAME$LANGUAGE$'] = scmbatchcard.copyRow['MATERIALID_NAME$LANGUAGE$'];
                row['VENDERID'] = scmbatchcard.copyRow['VENDERID'];
                row['VENDERID_CODE'] = scmbatchcard.copyRow['VENDERID_CODE'];
                row['VENDERID_NAME$LANGUAGE$'] = scmbatchcard.copyRow['VENDERID_NAME$LANGUAGE$'];
                row['VENDERID'] = scmbatchcard.copyRow['VENDERID'];
                row['FACTORYID'] = scmbatchcard.copyRow['FACTORYID'];
                row['FACTORYID_CODE'] = scmbatchcard.copyRow['FACTORYID_CODE'];
                row['FACTORYID_NAME$LANGUAGE$'] = scmbatchcard.copyRow['FACTORYID_NAME$LANGUAGE$'];
                /**
                 * 跟随物料帮助带出来的质检状态和批次计量单位也带过来
                 */
                row['QUALITYSTATE'] = scmbatchcard.copyRow['QUALITYSTATE'];
                row['BATCHUNIT'] = scmbatchcard.copyRow['BATCHUNIT'];
            }
        })

        /**
         * 物料帮助选择时的校验
         */
        idp.event.register("grid_main", "afterGridHelpSelected", function (e, helpData, grid, helpValue, colname) {
            if (!helpValue[0]) {
                return false;
            }
            let row = grid.host_grid_row;
            const data = helpValue[0];
            switch (colname) {
                case 'MATERIALID_CODE':
                    /**
                     * 当SCMwithQC = 1且物料定义质检=1的时候，
                     * 质检状态为1，其他均为0
                     * 且此列不可编辑
                     */
                    row['QUALITYSTATE'] = (data['ISQC'] === '1' && scmbatchcard.withQC === '1') ? '1' : '0';
                    /** 
                     * 选择物料，赋值批次计量单位
                    */
                    row['BATCHUNIT'] = data['BATCHUNIT'];
                    /** 
                     * 获取选中的物料，后续有用
                    */
                    selectedMaterial = helpValue[0];
                    scmbatchcard.getMaterialInvUnit(selectedMaterial.ID, (res) => {
                        const lang = idp.lang.getLang().id.split('-').pop().toLowerCase();
                        const name = res[`name_${lang}`];
                        row['INVUNITID_NAME$LANGUAGE$'] = name;
                        row['INVUNITID'] = res.unitid;
                    });
                    scmbatchcard.getMaterialBatchUnit(selectedMaterial.BATCHUNIT, res => {
                        const lang = idp.lang.getLang().id.split('-').pop().toLowerCase();
                        const name = res[`name_${lang}`];
                        row['BATCHUNITID_NAME$LANGUAGE$'] = name;
                        row['BATCHUNITID'] = res.unitid;
                    })
                    break;
                case 'BATCHSTOCKSTATE_STATENAME$LANGUAGE$':
                    row['RELEASESTATE'] = data['ISIMVALID'] === '1' ? '1' : '0';
                    break;
            }
        });

        /**
         * 表格编辑前事件
         */
        idp.event.register('grid_main', 'beforeEdit', (event, rowIndex, row, column) => {
            /** 
             * 
             * 已有的批次记录，不允许修改物料和批次
            */
            if (row.__status !== 'add') {
                const code = column['colid'];
                if (code === "MATERIALID_CODE" || code === "BATCHCODE") {
                    return false;
                }
            }

            console.log('beforeEdit', column);
            switch (column['colid']) {
                case "QUALITYLEVEL":
                case "QUALITYTIME":
                    /**
                    * 当SCMwithQC = 1且物料定义质检=1的时候，
                    * 且此列不可编辑
                    * 其他状态时可编辑
                    */
                    if (selectedMaterial && selectedMaterial.ISQC === '1' && scmbatchcard.withQC === '1') {
                        return false;
                    } else {
                        return true;
                    }
                case "ISSTOP":
                    /** 
                    * 
                    * 停用勾选时，联动赋值停用人等字段
                    */
                    if (row['ISSTOP'] === '0') {
                        // 将要勾选
                        row['STOPTIME'] = new Date().toISOString();
                        row['STOPUSER'] = idp.context.get('UserName');
                        row['STOPUSERID'] = idp.context.get('UserId');

                    } else if (row['ISSTOP'] === '1') {
                        // 将要取消勾选
                        row['STOPTIME'] = '';
                        row['STOPUSER'] = '';
                        row['STOPUSERID'] = '';
                    }
                default:
                    break;
            }
        })

        /**
         * 编辑表格后事件
         */
        idp.event.register('grid_main', 'afterEndEdit', (event, row) => {
            switch (row.column['colid']) {
                case "PRODUCTDATE":
                case "RECDATE":
                    /**
                     * 入库日期要大于等于生产日期
                     */
                    const productDate = row.record['PRODUCTDATE'];
                    const recDate = row.record['RECDATE'];
                    if (recDate && productDate) {
                        if (!scmbatchcard.compareDate(recDate, productDate)) {
                            idp.warn('入库日期应大于等于生产日期');
                            idp.control.get('grid_main').updateRow(row.rowindex, { [row.column['colid']]: '' })
                        }
                    }
                    break;
                case "EFFICIENTDATE":
                case "DISABLEDATE":
                    /**
                    * 失效日期要大于等于生效日期
                    */
                    const efficientDate = row.record['EFFICIENTDATE'];
                    const disableDate = row.record['DISABLEDATE'];
                    if (efficientDate && disableDate) {
                        if (!scmbatchcard.compareDate(disableDate, efficientDate)) {
                            idp.warn('失效日期应大于等于生效日期');
                            idp.control.get('grid_main').updateRow(row.rowindex, { [row.column['colid']]: '' })
                        }
                    }
                    break;
            }
        });
    });
    /**
     * 目前菜单进来的时候后status = view
     * 这导致删选框无法编辑，
     * 默认设置为可编辑的状态
     * 另外当状态机切换到view的时候也需要设置一遍
     */
    idp.event.bind('viewReady', () => {
        scmbatchcard.setFilterEnable();
        scmfndfunctions.excel.init("batchuploadFile", function (fileName, fileData) {
            idp.service.fetch("/api/scm/scmfnd/v1.0/scmbatch/importexcel", {//导入文件数据
                fileData: fileData,
                fileName: fileName,
                orgID: idp.control.get('BIZORGID').getValue(),
                columns: scmbatchcard.exportColumns
            }).done(function (data) {
                idp.loaded();
                if (data.success) {
                    idp.warn('导入成功');
                    idp.uiview.refreshGrid();
                } else {
                    idp.error(data.msg);
                    return false;
                }
            });
        });
        scmfndfunctions.fill.init({
            gridId: 'grid_main',
            beforeOpen: function (cellValue, columnName, index, rowData) {
                switch (columnName) {
                    case 'BATCHCODE':
                        return true;
                    default:
                        return false;
                }
            },
            beforeClick: function (cellValue, columnName, index, rowData) {
                switch (cellValue) {
                    case 'PC0002':
                        idp.warn('PC0002不允许复制!');
                        return false;
                    default:
                        return true;
                }
            }
        })
    })
})(window.idp);

