(function ($) {
    var doTable = {
        init : function(){
            $("#altEditor-modal").remove();
            var $me = this;
            $me.mainTable();
        },
        mainTable: function () {
            var columnDefs = [{
                title: "姓名"
            }, {
                title: "职位"
            }, {
                title: "办公地点"
            }, {
                title: "分机号码."
            }, {
                title: "入职日期"
            }, {
                title: "薪资"
            },{
                title: "所属部门"
            }];
            var myTable;
            myTable = $('#example').DataTable({
                "sPaginationType": "full_numbers",
                "bRetrieve": true,
                // data: dataSet,
                ajax: './data.json',
                columns: columnDefs,
                dom: 'Bfrtip',        // Needs button container
                select: 'single',
                responsive: true,
                altEditor: {  // Enable altEditor
                    ajax: './data.json'
                },
                oLanguage: {
                    "sLengthMenu": "每页显示 _MENU_ 条记录",
                    "sZeroRecords": "对不起，查询不到任何相关数据",
                    "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
                    "sInfoEmtpy": "找不到相关数据",
                    "sInfoFiltered": "数据表中共为 _MAX_ 条记录",
                    "sProcessing": "正在加载中...",
                    "sSearch": "搜索",
                    "sUrl": "", //多语言配置文件，可将oLanguage的设置放在一个txt文件中，例：Javascript/datatable/dtCH.txt
                    "oPaginate": {
                        "sFirst":    "首页",
                        "sPrevious": " 上一页 ",
                        "sNext":     " 下一页 ",
                        "sLast":     " 末页 "
                    }
                }, //多语言配置
                buttons: [{
                    text: '新增',
                    name: 'add'        // do not change name
                },
                    {
                        extend: 'selected', // Bind to Selected row
                        text: '编辑',
                        name: 'edit'        // do not change name
                    },
                    {
                        extend: 'selected', // Bind to Selected row
                        text: '删除',
                        name: 'delete'      // do not change name
                    }]
            });
        }
    }
    doTable.init(); //初始化方法
}(jQuery));
