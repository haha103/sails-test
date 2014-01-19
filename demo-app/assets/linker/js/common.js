$(document).ready(function(){
  $('select').selectpicker({
    style: 'btn-sm btn-default',
    title: ''
  });
  
  $('select#client-type').on("change", function(e) {
    var selected_type = $('option:selected', this);
    var selected_type_name = selected_type.text();
    if (selected_type_name == "个人") {
      $("div[company]").addClass("hide");
      $("div[individual]").removeClass("hide");
    } else { // 企业
      $("div[individual]").addClass("hide");
      $("div[company]").removeClass("hide");
    }
  });

  $('input[datepicker]').datetimepicker({
    format    : 'yyyy-mm-dd' ,
    minView   : 'month'      ,
    autoclose : true
  });
});
