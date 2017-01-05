
  $("#hidden-table-info tr").data("curImg","plus" );
  $('td i.fa').on('click', function () {
     var curTr = $(this).parents('tr')[0];
     curTr = $(curTr);
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
              addTrText += '<td></td><td colspan="9"><ul class="unstyled inline">';
              addTrText += '<li><span>累计工作</span><br><span>2033</span></li>';
              addTrText += '<li><span>综合评价</span><br><span>38%</span></li>';
              addTrText += '<li><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></li>';
              addTrText += '<li><div class="v-line"><span></span></div></li>';
              addTrText += '<li><span>准时到岗</span><br><span>90%</span></li>';
              addTrText += '<li><span>工作态度</span><br><span>80%</span></li>';
              addTrText += '<li><span>工作能力</span><br><span>90%</span></li>';
              addTrText += '<li><span>放心靠谱</span><br><span>80%</span></li>';     
              addTrText += '<li><span>提升空间</span><br><span>30%</span></li>'; 
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

  $("input[name='full-select']").change(function(){
    // $("td .chk").prop("checked",$(this).prop("checked"));
    $(this).parents(".tab-pane").find("td :checkbox").prop("checked",$(this).prop("checked"));
  });