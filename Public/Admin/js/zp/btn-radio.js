 $("#hidden-table-info tr").data("curImg","plus" );
  $('td i.fa').on('click', function () {
     var curTr = $(this).parents('tr')[0];
     curTr = $(curTr);
     // 查找其他的减号图标
     var minus_ele = $(this).parents("tr").siblings().find("i.fa.fa-minus-circle");
     minus_ele.parents("tr").next().remove();
     minus_ele.removeClass("fa-minus-circle");
     minus_ele.addClass("fa-plus-circle");
     minus_ele.parents("tr").data("curImg","plus");
     // 
     if ( curTr.data("curImg") == "plus" )
     {
         /* This row is already open - close it */
         $(this).removeClass("fa-plus-circle");
         $(this).addClass("fa-minus-circle");
         curTr.data("curImg","minus");
         // var addTrText = "<tr>";
         // addTrText += "<td colspan='10'>";
         // addTrText += "asaaaaaaaa";
         // addTrText +="</td></tr>"
         var  addTrText = '<tr class="newTr">';
              addTrText += '<td colspan="12"><ul class="unstyled inline">';
			  addTrText += '<li></li><li></li>';
              addTrText += '<li><span>累计工作</span><br><span>2033</span></li>';
              addTrText += '<li><span>综合评价</span><br><span>38%</span></li>';
              addTrText += '<li><div class="v-line"><span></span></div></li>';
              addTrText += '<li><span>准时到岗</span><br><span>90%</span></li>';
              addTrText += '<li><span>工作态度</span><br><span>80%</span></li>';
              addTrText += '<li><span>工作能力</span><br><span>90%</span></li>';
              addTrText += '<li><span>放心靠谱</span><br><span>80%</span></li>';     
              addTrText += '<li><span>提升空间</span><br><span>30%</span></li>'; 
			  addTrText += '<li></li><li></li>'; 
              addTrText += '</ul></td></tr>';
         curTr.after(addTrText);
     }
     else
     {
         /* Open this row */
         $(this).removeClass("fa-minus-circle");
         $(this).addClass("fa-plus-circle");
         curTr.data("curImg","plus");
         curTr.next().remove();
     }
   });

 $("#example-search-BD td i.fa").off();
 $("#example-search-BD td i.fa").on('click',function(){
     var curTr = $(this).parents('tr')[0];
     curTr = $(curTr);
     // 查找其他的减号图标
     var minus_ele = $(this).parents("tr").siblings().find("i.fa.fa-minus-circle");
     minus_ele.parents("tr").next().remove();
     minus_ele.removeClass("fa-minus-circle");
     minus_ele.addClass("fa-plus-circle");
     minus_ele.parents("tr").data("curImg","plus");
     // 
     if ( curTr.data("curImg") == "plus" )
     {
         /* This row is already open - close it */
         $(this).removeClass("fa-plus-circle");
         $(this).addClass("fa-minus-circle");
         curTr.data("curImg","minus");
         // var addTrText = "<tr>";
         // addTrText += "<td colspan='10'>";
         // addTrText += "asaaaaaaaa";
         // addTrText +="</td></tr>"
         var  addTrText = '<tr class="newTr">';
              addTrText += '<td colspan="11"><ul class="unstyled inline">';
			  addTrText += '<li>&nbsp;&nbsp;</li>'; 
              addTrText += '<li><span>管理次数</span><br><span>2033</span></li>';
              addTrText += '<li>&nbsp;&nbsp;</li><li>&nbsp;&nbsp;</li>'; 
              addTrText += '<li><span>综合评价</span><br><span>38%</span></li>';
			  addTrText += '<li></li><li></li>'; 
              addTrText += '</ul></td></tr>';
         curTr.after(addTrText);
     }
     else
     {
         /* Open this row */
         $(this).removeClass("fa-minus-circle");
         $(this).addClass("fa-plus-circle");
         curTr.data("curImg","plus");
         curTr.next().remove();
     }
 });

  
  $(".input-group ul.dropdown-menu li").click(function(){
      var curText = $(this).children("a").html();
      console.log(this,$(this).parent().prev(),curText);
      $(this).parents(".input-group").children("input").val(curText);
  });

  // $("input[name='full-select']").change(function(){
  //   // $("td .chk").prop("checked",$(this).prop("checked"));
  //   $(this).parents(".tab-pane").find("td :checkbox").prop("checked",$(this).prop("checked"));
  // });

