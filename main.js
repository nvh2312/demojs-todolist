var contador = 0,
  select_opt = 0,
  lan = 0;

function add_to_list() {
  var action = document.querySelector("#action_select").value,
    description = document.querySelector(".input_description").value,
    title = document.querySelector(".input_title_desc").value,
    date = document.getElementById("date_select").value,
    time = document.getElementById("datetimepicker").value;
  if (action && description && title && date && time) {
    switch (action) {
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

    var class_li = [
      "list_shopping list_dsp_none",
      "list_work list_dsp_none",
      "list_sport list_dsp_none",
      "list_rest list_dsp_none",
    ];

    var cont =
      '<div class="col_md_1_list">    <p>' +
      action +
      '</p>    </div> <div class="col_md_2_list"> <h4>' +
      "Tittle: " +
      title +
      "</h4> <p>" +
      "Description: " +
      description +
      ". Date: " +
      date +
      ". Time: " +
      time +
      '</p> </div>    <div class="col_md_3_list"> <div class="cont_btns_options">    <ul> <li><a href="#edit" onclick="edit_action(' +
      select_opt +
      "," +
      contador +
      ');" > <i class="fa fa-pencil-square-o mb-2" ></i> </a></li> <li><a href="#delete" onclick="delete_action(' +
      select_opt +
      "," +
      contador +
      ');" ><i class="fa fa-times"></i></a></li> <li><input type="checkbox" id="check' +
      contador +
      '" onclick="finish_action(' +
      select_opt +
      "," +
      contador +
      ');"></li>  </ul>  </div>    </div>';

    var li = document.createElement("li");
    li.className = class_li[select_opt] + " li_num_" + contador;

    li.innerHTML = cont;
    document.querySelectorAll(".cont_princ_lists > ul")[0].appendChild(li);

    setTimeout(function () {
      document.querySelector(".li_num_" + contador).style.display = "block";
    }, 100);

    setTimeout(function () {
      document.querySelector(".li_num_" + contador).className =
        "list_dsp_true " + class_li[select_opt] + " li_num_" + contador;
      contador++;
    }, 200);

    document.querySelector("#action_select").value = "SHOPPING";
    document.querySelector(".input_description").value = "";
    document.querySelector(".input_title_desc").value = "";
    document.getElementById("date_select").value = "";
    document.getElementById("datetimepicker").value = "";

  } else {
    alert("Vui lòng nhập đầy đủ thông tin!!!");
  }
}

function delete_action(num, num2) {
  var class_li = [
    "list_shopping list_dsp_true",
    "list_work  list_dsp_true",
    "list_sport list_dsp_true",
    "list_rest list_dsp_true",
  ];

  document.querySelector(".li_num_" + num2).className =
    class_li[num] + " list_finish_state";
  setTimeout(function () {
    del_finish();
  }, 500);
}

function del_finish() {
  var li = document.querySelectorAll(".list_finish_state");
  for (var e = 0; e < li.length; e++) {
    li[e].style.opacity = "0";
    li[e].style.height = "0px";
    li[e].style.margin = "0px";
  }

  setTimeout(function () {
    var li = document.querySelectorAll(".list_finish_state");
    for (var e = 0; e < li.length; e++) {
      li[e].parentNode.removeChild(li[e]);
    }
  }, 500);
}

function finish_action(num, num2) {
  var kt_check = document.getElementById(`check${num2}`);
  if (!kt_check.checked) {
    var li = document.querySelectorAll(".list_end_state");
    for (var e = 0; e < li.length; e++) {
      li[e].style.background = "#F1F1EF";
    }
    var bgr = document.querySelectorAll(".cont_btns_options");
    for (var u = 0; u < bgr.length; u++) {
      bgr[u].style.background = "#F1F1EF";
    }
  } else {
    var class_li = [
      "list_shopping list_dsp_true",
      "list_work  list_dsp_true",
      "list_sport list_dsp_true",
      "list_rest list_dsp_none",
    ];

    document.querySelector(".li_num_" + num2).className =
      class_li[num] + " list_end_state" + " li_num_" + num2;
    setTimeout(function () {
      end_act();
    }, 500);
  }
}

function end_act() {
  var li = document.querySelectorAll(".list_end_state");
  for (var e = 0; e < li.length; e++) {
    li[e].style.background = "blue";
  }
  var bgr = document.querySelectorAll(".cont_btns_options");
  for (var u = 0; u < bgr.length; u++) {
    bgr[u].style.background = "blue";
  }
}

function edit_action(num, num2) {
  if (!lan) {
    alert("Vui lòng nhập thông tin và click lại khi điền xong!");
    if (t % 2 == 0) add_new();
    lan++;
    document.getElementById('btnnn').style.visibility ='hidden';
  } else {
    var action = document.querySelector("#action_select").value,
      description = document.querySelector(".input_description").value,
      title = document.querySelector(".input_title_desc").value,
      date = document.getElementById("date_select").value,
      time = document.getElementById("datetimepicker").value;
    if (action && description && title && date && time) {
      setTimeout(add_to_list(),3000);
      delete_action(num, num2);
      document.getElementById('btnnn').style.visibility ='initial';
      lan = 0;
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!!!");
    }
  }
}

var t = 0;
function add_new() {
  if (t % 2 == 0) {
    document.querySelector(".cont_crear_new").className =
      "cont_crear_new cont_crear_new_active";
    document.querySelector(".cont_princ_lists").style.margin = "255px 0 0 0";
    document.querySelector(".cont_add_titulo_cont").className =
      "cont_add_titulo_cont cont_add_titulo_cont_active";
    t++;
  } else {
    document.querySelector(".cont_crear_new").className = "cont_crear_new";
    document.querySelector(".cont_add_titulo_cont").className =
      "cont_add_titulo_cont";
    document.querySelector(".cont_princ_lists").style.margin = "15px 0 0 0";
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

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
