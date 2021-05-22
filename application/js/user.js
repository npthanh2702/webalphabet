//load user information
var loadInfo = function ()
{
  $("#username").val(localStorage.KZ_username);
  $("#name").val(localStorage.KZ_name);
  $("#birthday").val(localStorage.KZ_birthday);
  $("#email").val(localStorage.KZ_email);
  $("#phone").val(localStorage.KZ_phone);
  $("#address").val(localStorage.KZ_address);
  if (localStorage.KZ_gender == "male")
  {
    document.getElementById("male").checked = true;
    $("#avatar").attr("src", "../image/user/male.png");
  }
  else
  {
    document.getElementById("female").checked = true;
    $("#avatar").attr("src", "../image/user/female.png");
  }
}
loadInfo();

//change avatar when choosing gender
$(".form-check-input").on("click", function ()
{
  if ($(".form-check-input:checked").val() == "male")
    $("#avatar").attr("src", "../image/user/male.png");
  else $("#avatar").attr("src", "../image/user/female.png");
});

// Open Update Part
$("#btnOpenUpdatePassword").click(function ()
{
  $("#layout-buttonUpdate").fadeOut(function ()
  {
    $(".alert").text("").attr("style", "display:none");
    $("#layout-updatePassword").fadeIn();
  });
});
$("#btnOpenUpdateInfo").click(function ()
{
  $("#layout-buttonUpdate").fadeOut(function ()
  {
    $("#name").removeAttr("disabled");
    $("#male").removeAttr("disabled");
    $("#female").removeAttr("disabled");
    $("#birthday").removeAttr("disabled");
    $("#email").removeAttr("disabled");
    $("#phone").removeAttr("disabled");
    $("#address").removeAttr("disabled");
    validInput("name");
    validInput("birthday");
    validInput("email");
    validInput("phone");
    validInput("address");
    $(".alert").text("").attr("style", "display:none");
    $("#layout-updateInfo").fadeIn();
  });
});

//Cancel update
$("#btnCancelUpdateInfo").click(function ()
{
  $("#layout-updateInfo").fadeOut(function ()
  {
    loadInfo();
    resetInput("name");
    resetInput("gender");
    resetInput("birthday");
    resetInput("email");
    resetInput("phone");
    resetInput("address");
    resetInput("newpassword");
    resetInput("repassword");
    $("#name").attr("disabled", "disabled");
    $("#male").attr("disabled", "disabled");
    $("#female").attr("disabled", "disabled");
    $("#birthday").attr("disabled", "disabled");
    $("#email").attr("disabled", "disabled");
    $("#phone").attr("disabled", "disabled");
    $("#address").attr("disabled", "disabled");
    $("#layout-buttonUpdate").fadeIn();
  });
});
$("#btnCancelUpdatePassword").click(function ()
{
  $("#layout-updatePassword").fadeOut(function ()
  {
    $("#oldpassword").val("");
    $("#newpassword").val("");
    $("#repassword").val("");
    resetInput("oldpassword");
    resetInput("newpassword");
    resetInput("repassword");
    $("#layout-buttonUpdate").fadeIn();
  });
});

//check valid info
function resetInput(id)
{
  $("#" + id + "-invalid").remove();
  $("#" + id).removeClass("is-invalid").removeClass("is-valid");
}
function invalidInput(id, message)
{
  $("#" + id + "-invalid").remove();
  $("<div id=\"" + id + "-invalid\" class=\"invalid-feedback\">" + message + "</div>").insertAfter("#" + id);
  $("#" + id).addClass("is-invalid").removeClass("is-valid");
}
function validInput(id)
{
  $("#" + id + "-invalid").remove();
  $("#" + id).addClass("is-valid").removeClass("is-invalid");
}

function isValid(id)
{
  if (id == "oldpassword")
  {
    var oldpassword = $("#oldpassword").val();
    if (oldpassword == "")
      invalidInput(id, "Please enter old password.");
    else if (oldpassword != localStorage.KZ_password)
      invalidInput(id, "Password is incorrect");
    else validInput(id);
  }
  else if (id == "newpassword")
  {
    var reg_password = /^.{4,30}$/;
    var password = $("#newpassword").val();
    if (password == "")
      invalidInput(id, "Please enter password.");
    else if (!reg_password.test(password))
      invalidInput(id, "Password is only from 4 to 30 characters.");
    else validInput(id);

    $("#repassword").val("");
    resetInput("repassword");
  }
  else if (id == "repassword")
  {
    var password = $("#newpassword").val(),
      repassword = $("#repassword").val();
    if (password != "")
    {
      if (repassword == "") invalidInput(id, "Please retype password.");
      else if (repassword != password)
        invalidInput(id, "Password does not match.");
      else validInput(id);
    }
  }
  else if (id == "name")
  {
    var reg_name = /^[a-zA-Z ]{1,30}$/;
    var name = $("#name").val();

    if (name == "")
      invalidInput(id, "Please enter your name.");
    else if (!reg_name.test(name))
      invalidInput(id, "Name is only alphabet and space (maximum 30 characters).");
    else validInput(id);
  }
  else if (id == "birthday")
  {
    var birthday = $("#birthday").val();

    if (birthday == "")
      invalidInput(id, "Invalid date.");
    else validInput(id);
  }
  else if (id == "email")
  {
    var reg_email = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;
    var email = $("#email").val();

    if (email == "")
      invalidInput(id, "Please enter your email address.");
    else if (!reg_email.test(email))
      invalidInput(id, "Invalid email address.");
    else validInput(id);
  }
  else if (id == "phone")
  {
    var reg_phone = /^\+?\d{10,}$/;
    var phone = $("#phone").val();

    if (phone == "") resetInput(id);
    else if (!reg_phone.test(phone) && phone != "")
      invalidInput(id, "Invalid numberphone.");
    else validInput(id);
  }
  else if (id == "address")
  {
    var address = $("#address").val();

    if (address == "") resetInput(id);
    else validInput(id);
  }
}

$(".form-control").focus(function ()
{
  isValid($(this).attr("id"));
});

$(".form-control").keyup(function ()
{
  isValid($(this).attr("id"));
});

// Update Password
$("#btnUpdatePassword").click(function ()
{
  var oldpassword = $("#oldpassword").val(),
    password = $("#newpassword").val(),
    repassword = $("#repassword").val();

  if (oldpassword == "") invalidInput("oldpassword", "Please enter old password.");
  else if (password == "") invalidInput("newpassword", "Please enter old password.");
  else if (repassword == "") invalidInput("repassword", "Please enter old password.");
  if ($(".invalid-feedback").length > 0)
    $("html, body").animate({ scrollTop: $(".invalid-feedback").parent().offset().top - parseInt($(".navbar").height()) - 60 }, 600);
  else
  {
    localStorage.KZ_password = password;
    $(".alert").text("Change password successfully.").fadeIn();
    $("#btnCancelUpdatePassword").click();
  }
});

// Update Info
$("#btnUpdateInfo").click(function ()
{
  var name = $("#name").val(),
    gender = $(".form-check-input:checked").val(),
    birthday = $("#birthday").val(),
    email = $("#email").val(),
    phone = $("#phone").val(),
    address = $("#address").val();

  if ($(".invalid-feedback").length > 0)
    $("html, body").animate({ scrollTop: $(".invalid-feedback").parent().offset().top - parseInt($(".navbar").height()) - 60 }, 600);
  else
  {
    localStorage.KZ_name = reString(name);
    localStorage.KZ_gender = gender;
    localStorage.KZ_birthday = birthday;
    localStorage.KZ_email = email;
    localStorage.KZ_phone = phone;
    localStorage.KZ_address = address;

    $(".alert").text("Update information successfully.").fadeIn();
    $("#btnCancelUpdateInfo").click();
  }
});