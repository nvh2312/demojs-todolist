let select_opt = 0;
let arr_obj = [];
let filter = [];
let act_filter = 0;
function reset_text() {
  $("#action_select").val("SHOPPING");
  $(".input_description").val("");
  $(".input_title_desc").val("");
  $("#date_select").val("");
  $("#datetimepicker").val("");
}

function add_to_list() {
  let done = 0;
  act_filter = 0;
  let action = $("#action_select").val(),
    description = $(".input_description").val(),
    title = $(".input_title_desc").val(),
    date = $("#date_select").val(),
    time = $("#datetimepicker").val();
  if (action && description && title && date && time) {
    var content = {
      action,
      description,
      title,
      date,
      time,
      done,
    };
    arr_obj.push(content);

    show_list(arr_obj);
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!!!");
  }
}

function delete_action(num, num2) {
  if (act_filter) {
    num = arr_obj.indexOf(filter[num2]);
    arr_obj.splice(num, 1);
    filter.splice(num2, 1);
    show_list(filter);
  } else {
    arr_obj.splice(num2, 1);
    show_list(arr_obj);
  }
}

function finish_action(num, num2) {
  if (act_filter) {
    num = arr_obj.indexOf(filter[num2]);
    let kt_check_filter = $("#check" + num2)[0];
    if (!kt_check_filter.checked) {
      filter[num2].done = 0;
      arr_obj[num].done = 0;
      let li = $(".li_num_" + num2)[0];
      li.style.background = "#F1F1EF";
      let bgr = $(".cont_btns_options")[num2];
      bgr.style.background = "#F1F1EF";
    } else {
      setTimeout(() => {
        end_act(num, num2);
      }, 500);
    }
  } else {
    let kt_check = $("#check" + num2)[0];
    if (!kt_check.checked) {
      arr_obj[num2].done = 0;
      let li = $(".li_num_" + num2)[0];
      li.style.background = "#F1F1EF";
      let bgr = $(".cont_btns_options")[num2];
      bgr.style.background = "#F1F1EF";
    } else {
      setTimeout(() => {
        end_act(num, num2);
      }, 500);
    }
  }
}

function end_act(id, num) {
  if (act_filter) {
    arr_obj[id].done = 1;
    filter[num].done = 1;
    let li = $(".li_num_" + num)[0];
    console.log(li);
    li.style.background = "blue";
    let bgr = $(".cont_btns_options")[num];
    bgr.style.background = "blue";
    console.log(bgr);
  } else {
    arr_obj[num].done = 1;
    let li = $(".li_num_" + num)[0];
    console.log(li);
    li.style.background = "blue";
    let bgr = $(".cont_btns_options")[num];
    bgr.style.background = "blue";
    console.log(bgr);
  }
}

function edit_action(num, num2) {
  $(".cont_add_titulo_cont")[0].style.pointerEvents = "none";
  $(".rows")[num2].style.pointerEvents = "none";
  alert("Vui lòng nhập thông tin và click lại khi điền xong!");
  if (t % 2 == 0) add_new();
  truyendulieu = num2;
  truyenclass = num;
  if (act_filter) {
    $("#action_select").val(filter[num2].action);
    $(".input_description").val(filter[num2].description);
    $(".input_title_desc").val(filter[num2].title);
    $("#date_select").val(filter[num2].date);
    $("#datetimepicker").val(filter[num2].time);
  } else {
    $("#action_select").val(arr_obj[num2].action);
    $(".input_description").val(arr_obj[num2].description);
    $(".input_title_desc").val(arr_obj[num2].title);
    $("#date_select").val(arr_obj[num2].date);
    $("#datetimepicker").val(arr_obj[num2].time);
  }

  $("#btnnn")[0].style.display = "none";
  $("#btn_search")[0].style.display = "none";
  $(".btn_edit_fin")[0].className = "btn_edit_fin d-block";
}
let truyendulieu = 0;
let truyenclass = 0;
function edit_to_list() {
  var action = $("#action_select").val(),
    description = $(".input_description").val(),
    title = $(".input_title_desc").val(),
    date = $("#date_select").val(),
    time = $("#datetimepicker").val();
  if (act_filter) {
    if (action && description && title && date && time) {
      let vt = arr_obj.indexOf(filter[truyendulieu]);
      arr_obj[vt].action = action;
      arr_obj[vt].description = description;
      arr_obj[vt].title = title;
      arr_obj[vt].date = date;
      arr_obj[vt].time = time;
      filter[truyendulieu].action = action;
      filter[truyendulieu].description = description;
      filter[truyendulieu].title = title;
      filter[truyendulieu].date = date;
      filter[truyendulieu].time = time;
      $("#btnnn")[0].style.display = "inline-block";
      $("#btn_search")[0].style.display = "inline-block";
      $(".btn_edit_fin")[0].className = "btn_edit_fin";
      $(".cont_add_titulo_cont")[0].style.pointerEvents = "auto";
      $(".rows")[0].style.pointerEvents = "auto";
      show_list(filter);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!!!");
    }
  } else {
    if (action && description && title && date && time) {
      arr_obj[truyendulieu].action = action;
      arr_obj[truyendulieu].description = description;
      arr_obj[truyendulieu].title = title;
      arr_obj[truyendulieu].date = date;
      arr_obj[truyendulieu].time = time;
      $("#btnnn")[0].style.display = "inline-block";
      $("#btn_search")[0].style.display = "inline-block";
      $(".btn_edit_fin")[0].className = "btn_edit_fin";
      $(".cont_add_titulo_cont")[0].style.pointerEvents = "auto";
      $(".rows")[0].style.pointerEvents = "auto";
      show_list(arr_obj);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!!!");
    }
  }
}

let t = 0;
function add_new() {
  if (t % 2 == 0) {
    $(".cont_crear_new")[0].className = "cont_crear_new cont_crear_new_active";
    $(".cont_princ_lists")[0].style.margin = "255px 0 0 0";
    $(".cont_add_titulo_cont")[0].className =
      "cont_add_titulo_cont cont_add_titulo_cont_active";
    t++;
  } else {
    $(".cont_crear_new")[0].className = "cont_crear_new";
    $(".cont_add_titulo_cont")[0].className = "cont_add_titulo_cont";
    $(".cont_princ_lists")[0].style.margin = "15px 0 0 0";
    t++;
  }
}

$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "dd-mm-yyyy",
    autoclose: true,
    startDate: "0d",
  });

  $(".cell").click(function () {
    $(".cell").removeClass("select");
    $(this).addClass("select");
  });
});
$("#datetimepicker").datetimepicker({
  format: "hh:mm:ss a",
});

function show_list(arr_obj) {
  $(".todo_item").empty();
  arr_obj.forEach((item, index) => {
    switch (item.action) {
      case "SHOPPING":
        select_opt = 0;
        break;
      case "WORK":
        select_opt = 1;
        break;
      case "SPORT":
        select_opt = 2;
        break;
      case "REST":
        select_opt = 3;
        break;
    }

    var cont =
      '<div class="col_md_1_list">    <p>' +
      item.action +
      '</p>    </div> <div class="col_md_2_list"> <h4>' +
      "Tittle: " +
      item.title +
      "</h4> <p>" +
      "Description: " +
      item.description +
      ". Date: " +
      item.date +
      ". Time: " +
      item.time +
      '</p> </div>    <div class="col_md_3_list"> <div class="cont_btns_options">    <ul  class="rows"> <li><a href="#edit" onclick="edit_action(' +
      select_opt +
      "," +
      index +
      ');" > <i class="fa fa-pencil-square-o mb-2" ></i> </a></li> <li><a href="#delete" onclick="delete_action(' +
      select_opt +
      "," +
      index +
      ');" ><i class="fa fa-times"></i></a></li> <li><input type="checkbox" id="check' +
      index +
      '" onclick="finish_action(' +
      select_opt +
      "," +
      index +
      ');"></li>  </ul>  </div>    </div>';
    $("<li class = 'li_num_" + index + "'>" + cont).appendTo(
      ".cont_princ_lists > ul"
    );

    setTimeout(function () {
      $(".li_num_" + index)[0].style.display = "block";
    }, 100);
    setTimeout(function () {
      $(".li_num_" + index)[0].className =
        "list_dsp_true " + item.action + " list_dsp_none" + " li_num_" + index;
    }, 200);
    if (item.done) {
      let li = $(".li_num_" + index)[0];
      li.style.background = "blue";
      let bgr = $(".cont_btns_options")[index];
      bgr.style.background = "blue";
      $("#check" + index)[0].checked = true;
    } else {
      let li = $(".li_num_" + index)[0];
      li.style.background = "#F1F1EF";
      let bgr = $(".cont_btns_options")[index];
      bgr.style.background = "#F1F1EF";
      $("#check" + index)[0].checked = false;
    }
  });
}

function search(name) {
  const txt_search = $('input[name="text-search"]').val().toLowerCase();
  console.log(txt_search);
  if (name === "search_act") {
    filter = arr_obj.filter(
      (item) => item.action.toLowerCase().indexOf(txt_search) !== -1
    );
    show_list(filter);
  }
  if (name === "search_title") {
    filter = arr_obj.filter(
      (item) => item.title.toLowerCase().indexOf(txt_search) !== -1
    );
    show_list(filter);
  }
  if (name === "search_time") {
    filter = arr_obj.filter(
      (item) => item.time.toLowerCase().indexOf(txt_search) !== -1
    );
    show_list(filter);
  }
  if (name === "search_date") {
    filter = arr_obj.filter(
      (item) => item.date.toLowerCase().indexOf(txt_search) !== -1
    );
    show_list(filter);
  }
  if (name === "search_descrip") {
    filter = arr_obj.filter(
      (item) => item.description.toLowerCase().indexOf(txt_search) !== -1
    );
    show_list(filter);
  }
  act_filter = 1;
}

function reset() {
  show_list(arr_obj);
  reset_text();
  act_filter =0;
}

function search_in_list() {
  let action = $("#action_select").val().toLowerCase(),
    description = $(".input_description").val().toLowerCase(),
    title = $(".input_title_desc").val().toLowerCase(),
    date = $("#date_select").val().toLowerCase(),
    time = $("#datetimepicker").val().toLowerCase();
  filter = arr_obj.filter(
    (item) =>
      item.action.toLowerCase().indexOf(action) !== -1 &&
      item.description.toLowerCase().indexOf(description) !== -1 &&
      item.title.toLowerCase().indexOf(title) !== -1 &&
      item.time.toLowerCase().indexOf(time) !== -1 &&
      item.date.toLowerCase().indexOf(date) !== -1
  );
  show_list(filter);
  act_filter = 1;
}
