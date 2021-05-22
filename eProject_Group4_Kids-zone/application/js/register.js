//register the new account
//because of not using database at server, so we decided use Local Storage to storage the information of user
//storage only ONE account for example use Local Storage for login

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

// Check Value input is Valid?
function isValid(id)
{
  if (id == "username")
  {
    var reg_username = /^[a-z0-9_\.]{4,30}$/;
    var username = $("#username").val();

    if (username == "")
      invalidInput(id, "Please enter username.");
    else if (!reg_username.test(username))
      invalidInput(id, "Username is only alphabet lowercase, numeric, underscore and dot (from 4 to 30 characters).");
    else validInput(id);
  }
  else if (id == "password")
  {
    var reg_password = /^.{4,30}$/;
    var password = $("#password").val(),
      repassword = $("#repassword").val();

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
    var password = $("#password").val(),
      repassword = $("#repassword").val();

    if (repassword == "") invalidInput(id, "Please retype password.");
    else if (repassword != password)
      invalidInput(id, "Password does not match.");
    else validInput(id);
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

$(".form-check-input").focus(function ()
{
  resetInput("gender");
});

$("#btnFormRegister").click(function ()
{
  var username = $("#username").val(),
    password = $("#password").val(),
    repassword = $("#repassword").val(),
    name = $("#name").val(),
    gender = $(".form-check-input:checked").val(),
    birthday = $("#birthday").val(),
    email = $("#email").val(),
    phone = $("#phone").val(),
    address = $("#address").val();

  if (username == "") invalidInput("username", "Please enter username.")
  else if (password == "") invalidInput("password", "Please enter password.");
  else if (repassword == "") invalidInput("repassword", "Please retype password.");
  else if (name == "") invalidInput("name", "Please enter your name.");
  else if (gender == null)
  {
    $("#gender-invalid").remove();
    $("<div id=\"gender-invalid\" class=\"invalid-feedback\" style=\"display:block !important\">Please verify your gender.</div>").insertAfter("#gender");
  }
  else if (birthday == "") invalidInput("birthday", "Invalid date.");
  else if (email == "") invalidInput(id, "Please enter email address.");

  if ($(".invalid-feedback").length > 0)
    $("html, body").animate({ scrollTop: $(".invalid-feedback").parent().offset().top - parseInt($(".navbar").height()) - 60 }, 600);
  else
  {
    localStorage.KZ_username = username;
    localStorage.KZ_password = password;
    localStorage.KZ_name = reString(name);
    localStorage.KZ_gender = gender;
    localStorage.KZ_birthday = birthday;
    localStorage.KZ_email = email;
    localStorage.KZ_phone = phone;
    localStorage.KZ_address = address;

    sessionStorage.isLogin = 1;
    document.location.href = "./user.html";
  }
});