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
      $("[company]").addClass("hide");
      $("[individual]").removeClass("hide");
    } else { // 企业
      $("[individual]").addClass("hide");
      $("[company]").removeClass("hide");
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
      handle_loan_modal();
      handle_bonding_modal();
      break;
    case '/application/new':
      handle_mortgage_model();
      handle_guarantor_model();
      break
  }
});

function handle_guarantor_model() {
  var count = 0;
  $("button#guarantor-modal-save").on("click", function(e) {
    var name = $("#new-guarantor-modal .modal-body input#name").val();
    var legal_person = $("#new-guarantor-modal .modal-body input#legal_person").val();
    var registered_capital = $("#new-guarantor-modal .modal-body input#registered_capital").val();
    var total_asset = $("#new-guarantor-modal .modal-body input#total_asset").val();
    var net_asset = $("#new-guarantor-modal .modal-body input#net_asset").val();
    var bonding_amount = $("#new-guarantor-modal .modal-body input#bonding_amount").val();
    if (name == "" || legal_person == "") {
      alert("不能留空!");
      return;
    }
    var new_row = JST['assets/linker/templates/add_row.ejs']({ 
      vals: [ name, legal_person, registered_capital, total_asset, net_asset, bonding_amount ]
    });
    var new_row_obj = $(new_row).appendTo("table#guarantors tbody");
    count++;
    $('<input>').attr({ type: 'hidden', name: 'guarantor_name_' + count, value: name }).appendTo("form");
    $('<input>').attr({ type: 'hidden', legal_person: 'guarantor_legal_person_' + count, value: legal_person }).appendTo("form");
    $('<input>').attr({ type: 'hidden', registered_capital: 'guarantor_registered_capital_' + count, value: registered_capital }).appendTo("form");
    $('<input>').attr({ type: 'hidden', total_asset: 'guarantor_total_asset_' + count, value: total_asset }).appendTo("form");
    $('<input>').attr({ type: 'hidden', net_asset: 'guarantor_net_asset_' + count, value: net_asset }).appendTo("form");
    $('<input>').attr({ type: 'hidden', bonding_amount: 'guarantor_bonding_amount_' + count, value: bonding_amount }).appendTo("form");
    $("#new-guarantor-modal .modal-body input").val('');
    $("#new-guarantor-modal").modal("hide");
  });
 
}


function handle_mortgage_model() {
  var count = 0;
  $("button#mortgage-modal-save").on("click", function(e) {
    var name = $("#new-mortgage-modal .modal-body input#name").val();
    var value = $("#new-mortgage-modal .modal-body input#value").val();
    var type_id = $("#new-mortgage-modal .modal-body select#type option:selected").val(); 
    var type_name = $("#new-mortgage-modal .modal-body select#type option:selected").text(); 
    if (name == "" || value == "") {
      alert("不能留空!");
      return;
    }
    //var new_sh_row = "<tr><td>" + name + "</td><td>" + amount + "</td><td>" + form_name + "</td><td>" + share + "</td></tr>";
    var new_row = JST['assets/linker/templates/add_row.ejs']({ vals: [ type_name, name, value ]});
    var new_row_obj = $(new_row).appendTo("table#mortgages tbody");
    count++;
    $('<input>').attr({ type: 'hidden', name: 'mortgage_name_' + count, value: name }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'mortgage_value_' + count, value: value }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'mortgage_type_' + count, value: type_id }).appendTo("form");
    $("#new-mortgage-modal .modal-body input").val('');
    $("#new-mortgage-modal").modal("hide");
  });
 
}

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

function handle_loan_modal() {
  var loan_count = 0;
  $("button#loan-modal-save").on("click", function(e) {
    var amount = $("#new-loan-modal .modal-body input#amount").val();
    var start = $("#new-loan-modal .modal-body input#start").val();
    var end = $("#new-loan-modal .modal-body input#end").val();
    var loaner_id = $("#new-loan-modal .modal-body select#loaner option:selected").val(); 
    var loaner_name = $("#new-loan-modal .modal-body select#loaner option:selected").text(); 
    var form_id = $("#new-loan-modal .modal-body select#form option:selected").val(); 
    var form_name = $("#new-loan-modal .modal-body select#form option:selected").text(); 
    if (amount == "" || start == "" || end == "") {
      alert("不能留空!");
      return;
    }
    var new_sh_row = JST['assets/linker/templates/add_row.ejs']({ vals: [ loaner_name, amount, start, end, form_name ]});
    var new_sh_row_obj = $(new_sh_row).appendTo("table#loans tbody");
    loan_count++;
    $('<input>').attr({ type: 'hidden', name: 'loan_amount_' + loan_count, value: amount }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'loan_start_' + loan_count, value: start }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'loan_end_' + loan_count, value: end }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'loan_form_' + loan_count, value: form_id }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'loan_loaner_' + loan_count, value: loaner_id }).appendTo("form");
    $("#new-loan-modal .modal-body input").val('');
    $("#new-loan-modal").modal("hide");
  });
}

function handle_bonding_modal() {
  var bonding_count = 0;
  $("button#bonding-modal-save").on("click", function(e) {
    var warrantee_type_id = $("#new-bonding-modal .modal-body select#warrantee_type option:selected").val(); 
    var warrantee_type_name = $("#new-bonding-modal .modal-body select#warrantee_type option:selected").text(); 
    var warrantee = $("#new-bonding-modal .modal-body input#warrantee").val();
    var loaner_id = $("#new-bonding-modal .modal-body select#loaner option:selected").val(); 
    var loaner_name = $("#new-bonding-modal .modal-body select#loaner option:selected").text(); 
    var amount = $("#new-bonding-modal .modal-body input#amount").val();
    var start = $("#new-bonding-modal .modal-body input#start").val();
    var end = $("#new-bonding-modal .modal-body input#end").val();
    if (warrantee == "" || amount == "" || start == "" || end == "") {
      alert("不能留空!");
      return;
    }
    var new_row = JST['assets/linker/templates/add_row.ejs']({ vals: [ warrantee_type_name, warrantee, loaner_name, amount, start, end ]});
    var new_row_obj = $(new_row).appendTo("table#bondings tbody");
    bonding_count++;
    $('<input>').attr({ type: 'hidden', name: 'bonding_warrantee_type_' + bonding_count, value: warrantee_type_id }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'bonding_warrantee_' + bonding_count, value: warrantee }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'bonding_loaner_' + bonding_count, value: loaner_id }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'bonding_amount_' + bonding_count, value: amount }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'bonding_start_' + bonding_count, value: start }).appendTo("form");
    $('<input>').attr({ type: 'hidden', name: 'bonding_end_' + bonding_count, value: end }).appendTo("form");
    $("#new-bonding-modal .modal-body input").val('');
    $("#new-bonding-modal").modal("hide");
  });
}
