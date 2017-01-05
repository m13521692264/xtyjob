
$(document).ready(function () {
    //职业列表的选择分站复选js
    $(".label-a1").click(function(){
        $(".checkbox-label").removeClass("active");
    });
    $(".checkbox-label").click(function(){
        $(".label-a1").removeClass("active");
    });
    $(".checkbox-a1").click(function(){
        if($(this).prop("checked")==true){
            $("#checkbox-bx").prop("checked","");
        }
    });
    $("#checkbox-bx").click(function(){
        if($(this).prop("checked")==true){
            $(".checkbox-a1").prop("checked","");
        }
    });
    // 注册设置
    $(function(){
       showCont();
        $("input[name=weixin]").click(function(){
           showCont();
        });
    });
    function showCont(){
        switch($("input[name=weixin]:checked").attr("id")){
            case "radio1":
                $(".beiyincang").hide();
                break;
            case "radio2":
                $(".beiyincang").show();
                break;
            case "radio3":
                $(".beiyincang").hide();
                break;
        }
    }

    //邮件设置
    $(function(){
        emailCont();
        $("input[name=email]").click(function(){
            emailCont();
        });
    })
    function emailCont(){
        switch($("input[name=email]:checked").attr("id")){
            case "hide":
                $("#b2").hide();
                $("#add_form,#html_tpl,#html").show();
                break;
            case "hide1":
                $("#html_tpl,#add_form,#b2,#html").hide();
                break;
            case "hide2":
                $("#html_tpl,#add_form,#b2,#html").hide();
                break;

        }
    }
        // 继续添加
        $("#add_form").click(function () {
        $("#html").append($("#html_tpl").html());
    });


// 短信设置
    $("#i1").click(function(){
        $(".sms-input").attr('disabled',true);
        $(".s1").removeClass("kaiqi").addClass("guanbi");
    });
    $("#i").click(function(){
        $(".sms-input").attr('disabled',false);
        $(".s1").removeClass("guanbi").addClass("kaiqi");
    });
    $("#w1").click(function(){
        $(".w-input").attr('disabled',true);
        $(".w1").removeClass("kaiqi").addClass("guanbi");
    });
    $("#w").click(function(){
        $(".w-input").attr('disabled',false);
        $(".w1").removeClass("guanbi").addClass("kaiqi");
    });
});

//银行卡查询
$(function(){
    $("#btn1").click(function(){
        var num = $("#se").find("option:selected").text();
        for(var i=0;i<num;i++){
            $("#test tbody").append('<tr> <td > <input type="text" class="form-control bank-input" placeholder="请输入手机号"> </td><td></td><td></td> <td></td> <td> </td><td> </td></tr>')

        }
    });

    // 地区分类
    //        控制一级分类下的子分类
    $(".leftimg").click(function(){
        $(".Sclass_"+$(this).attr("id")).toggle();
        if($(".Sclass_"+$(this).attr("id")).css("display")=="none"){
            $(this).attr("src","img/left_e.gif");
            $(".leftimg1").attr("src","img/left_e.gif");
            $(".leftimg2").attr("src","img/left_e.gif");
            $(".Sclass_"+$(this).attr("id")).hide();
            $(".Scclass_"+$(this).attr("id")).hide();
            $(".Sccclass_"+$(this).attr("id")).hide();
        }else{
            $(this).attr("src","img/left_d.gif");
        }

    });
//        控制二级分类下的子分类
    $(".leftimg1").click(function(){
        $(".Scclass_"+$(this).attr("id")).toggle();
        if($(".Scclass_"+$(this).attr("id")).css("display")=="none"){
            $(this).attr("src","img/left_e.gif");
            $(".leftimg2").attr("src","img/left_e.gif");
            $(".Scclass_"+$(this).attr("id")).hide();
            $(".Sccclass_"+$(this).attr("id")).hide();
        }else{
            $(this).attr("src","img/left_d.gif");
        }
    });
//        控制三级分类下的子分类
    $(".leftimg2").click(function(){
        $(".Sccclass_"+$(this).attr("id")).toggle();
        if($(".Sccclass_"+$(this).attr("id")).css("display")=="none"){
            $(this).attr("src","img/left_e.gif");
            $(".Sccclass_"+$(this).attr("id")).hide();
        }else{
            $(this).attr("src","img/left_d.gif");
        }
    });
//        点击大类选择小类
    $(".Bcheck").click(function()
    {
        $(".Scheck_"+$(this).attr("id")).prop("checked",$(this).prop("checked"));
        $(".Sccheck_"+$(this).attr("id")).prop("checked",$(this).prop("checked"));
        $(".Scccheck_"+$(this).attr("id")).prop("checked",$(this).prop("checked"));
    });
    //点击子类 释放父级的勾选
    $(":checkbox[class^='Scheck_']").live('click', function()
    {
        if ($(this).prop("checked")==false)
        {
            var pid=$(this).prop("id");
            $(".Bcheck[id="+pid+"]").prop("checked","");
        }
    });

//        点击二级全选所有的三级
    $(".Bcheck1").click(function(){
        $(".Sccheck_"+$(this).attr("id")).prop("checked",$(this).prop("checked"));
        $(".Scccheck_"+$(this).attr("id")).prop("checked",$(this).prop("checked"));
    });
    $(":checkbox[class^='Sccheck_']").live('click',function(){
        if($(this).prop("checked")==false){
            var pid=$(this).prop("id");
            $(".Bcheck1[id="+pid+"]").prop("checked","");
            $(".Bcheck[id="+pid+"]").prop("checked","");
        }
    });
    //点击三级全选四级
    $(".Bcheck2").click(function(){
        $(".Scccheck_"+$(this).attr("id")).prop("checked",$(this).prop("checked"));
    });
    $(":checkbox[class^='Scccheck_']").live('click',function(){
        if($(this).prop("checked")==false){
            var pid=$(this).prop("id");
            $(".Bcheck2[id="+pid+"]").prop("checked","");
            $(".Bcheck1[id="+pid+"]").prop("checked","");
            $(".Bcheck[id="+pid+"]").prop("checked","");
        }
    });


    // 全选
    $("#checkbox_qx").click(function(){
        $("td :checkbox").prop("checked",$(this).prop("checked"));
    });
    $("td :checkbox").live('click',function(){
        if($(this).prop("checked")==false){
            $("#checkbox_qx").prop("checked","");
        }
    });

});

// 企业认证与实名认证
//    全部栏
$("#checkbox_all").click(function(){
    $("#example-search-all :checkbox").prop("checked",$(this).prop("checked"));
});
$("#example-search-all :checkbox").live('click',function(){
    if($(this).prop("checked")==false){
        $("#checkbox_all").prop("checked","");
    }
});
//    等待审核
$("#checkbox_awiat").click(function(){
    $("#example-search-await :checkbox").prop("checked",$(this).prop("checked"));
});
$("#example-search-await :checkbox").live('click',function(){
    if($(this).prop("checked")==false){
        $("#checkbox_awiat").prop("checked","");
    }
});
//    未通过
$("#checkbox_notpass").click(function(){
    $("#example-search-notpass :checkbox").prop("checked",$(this).prop("checked"));
});
$("#example-search-notpass :checkbox").live('click',function(){
    if($(this).prop("checked")==false){
        $("#checkbox_notpass").prop("checked","");
    }
});
//    通过
$("#checkbox_pass").click(function(){
    $("#example-search-pass :checkbox").prop("checked",$(this).prop("checked"));
});
$("#example-search-pass :checkbox").live('click',function(){
    if($(this).prop("checked")==false){
        $("#checkbox_pass").prop("checked","");
    }
});
//    禁用
$("#checkbox_firdieen").click(function(){
    $("#example-search-forbidden :checkbox").prop("checked",$(this).prop("checked"));
});
$("#example-search-forbidden :checkbox").live('click',function(){
    if($(this).prop("checked")==false){
        $("#checkbox_firdieen").prop("checked","");
    }
});

// 内容添加
showmenu("#type_id_cn","#menu1","#type_id");
$("#FormData").validate({
    rules:
    {
        title:"required",
        type_id:"required",
        content:"required",
        subsite_id:"required",
    },
    messages:
    {
        title:
        {
            required: "请输入标题"
        },
        type_id:
        {
            required: "请选择分类"
        },
        content:
        {
            required: "请输入内容"
        },
        subsite_id:
        {
            required: "请选择分站"
        }
    },
    errorPlacement: function(error, element)
    {
        if ( element.is(":radio") )
            error.appendTo( element.parent().next().next() );
        else if ( element.is(":checkbox") )
            error.appendTo ( element.next());
        else
            error.appendTo(element.parent());
    }
});
