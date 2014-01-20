$(document).ready(function(){

  var page = document.location.pathname;
  page = page.replace(/(\/)$/, '');

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

  switch(page) {
    case '/client/new':
      handle_shareholder_modal();
      break;
  }
});

function handle_shareholder_modal() {
  var shareholder_count = 0;
  $("button#shareholder-modal-save").on("click", function(e) {
    var name = $("#new-shareholder-modal .modal-body input#name").val();
    var amount = $("#new-shareholder-modal .modal-body input#amount").val();
    var share = $("#new-shareholder-modal .modal-body input#share").val();
    var form_id = $("#new-shareholder-modal .modal-body select#form option:selected").val(); 
    var form_name = $("#new-shareholder-modal .modal-body select#form option:selected").text(); 
    if (name == "" || amount == "" || share == "") {
      alert("不能留空!");
      return;
    }
    //var new_sh_row = "<tr><td>" + name + "</td><td>" + amount + "</td><td>" + form_name + "</td><td>" + share + "</td></tr>";
    var new_sh_row = JST['assets/linker/templates/add_row.ejs']({ vals: [ name, amount, form_name, share ]});
    var new_sh_row_obj = $(new_sh_row).appendTo("table#shareholders tbody");
    shareholder_count++;
    $('<input>').attr({ type: 'hidden', name: 'shareholder_name_' + shareholder_count, value: name }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'shareholder_amount_' + shareholder_count, value: amount }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'shareholder_share_' + shareholder_count, value: share }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'shareholder_form_' + shareholder_count, value: form_id }).appendTo("form");
    $("#new-shareholder-modal .modal-body input").val('');
    $("#new-shareholder-modal").modal("hide");
  });
}
