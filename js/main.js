/**
 * Created by liuli on 2017/07/04 0004.
 */

// 左侧收缩树形菜单
$('.jsExpand').click(function () {
    $('.right').hide();
    $('.content-wrapper').css({'left':'70px'});
})

// 点击左侧图标 展示树形菜单
$(document).on('click','.left ul li',function () {
    $('.right').show();
    $('.content-wrapper').css({'left':'270px'})
})


// datatable 示例
$('#example').DataTable( {
    "ajax": './data.json',
    "oLanguage": {
        "sLengthMenu": "每页显示 _MENU_ 条记录",
        "sZeroRecords": "对不起，查询不到任何相关数据",
        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
        "sInfoEmtpy": "找不到相关数据",
        "sInfoFiltered": "数据表中共为 _MAX_ 条记录)",
        "sProcessing": "正在加载中...",
        "sSearch": "搜索",
        "sUrl": "", //多语言配置文件，可将oLanguage的设置放在一个txt文件中，例：Javascript/datatable/dtCH.txt
        "oPaginate": {
            "sFirst":    "第一页",
            "sPrevious": " 上一页 ",
            "sNext":     " 下一页 ",
            "sLast":     " 最后一页 "
        }
    }, //多语言配置
} );

function itemOnclick($this) {
    console.log($this);
}