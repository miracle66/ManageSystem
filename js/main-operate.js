
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

//左侧列表单击选择
function itemOnclick(that) {
    var url = $(that).find('.jsLink').html();
    // console.log($(that).find('.jsLink').html());
    var leftNode = $(that).attr('data-nodeid');
    var rightContent = [];
    var has = false;

    // console.log(leftNode);
    //a.replace('{{link}}', )

    $("#mainContent h2").hide();

    // 循环#content下面的 name 为 menu0的div
    $("#mainContent div[name='tree']").each(function(){
        rightContent.push($(this).attr('data-nodeid'));
    });
    
    if(rightContent.length == 0){
        $.ajax({
            type:"get",
            async:false,
            url:url,
            success:function(html){
                $('#mainContent').html('');
                $("#mainContent").append(html);
                // $.getScript('js/main-dataTable.js')
            }
        })
    }else{
        $(rightContent).each(function(i,el){
            if(rightContent[i] === leftNode){
                has = true;
            }
        })
        if(!has){
            $.ajax({
                type:"get",
                url:url,
                async:false,
                success:function(html){
                    $('#mainContent').html('');
                    $("#mainContent").append(html);
                    // $.getScript('js/main-dataTable.js')
                }
            })
        }
        $("#mainContent div[data-nodeid="+ leftNode +"]").show().siblings('div[name="tree"]').remove();
        $("#mainContent div[data-nodeid="+ leftNode +"]").addClass('marks').siblings().removeClass('marks');
    }

}

function turnPage(url,that){
    // var maxWidth = getTabs();
    var leftId = $(that).attr('data-id');
    $("#welcome").hide();
    var rightContent = [];
    var has = false;



    // 循环#content下面的 name 为 menu0的div
    $("#content div[name='menu0']").each(function(){
        rightContent.push($(this).attr('data-id'));
    });

    if(rightContent.length == 0){
        $.ajax({
            type:"get",
            url:url,
            success:function(html){
                $("#content").append(html);
            }
        })
    }else{
        $(rightContent).each(function(i,el){
            if(rightContent[i] === leftId){
                has = true;
            }
        })
        if(!has){
            $.ajax({
                type:"get",
                url:url,
                async:false,
                success:function(html){
                    $("#content").append(html);
                }
            })
        }
        $("#content div[data-id="+leftId+"]").show().siblings('div[name="menu0"]').remove();
        $("#content div[data-id="+leftId+"]").addClass('mark').siblings().removeClass('mark');
    }
}
