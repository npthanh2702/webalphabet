// auto fill name and email if any account has logged in
if (sessionStorage.isLogin == 1)
{
  $("#name").val(localStorage.KZ_name).attr("disabled", "disabled");
  $("#email").val(localStorage.KZ_email).attr("disabled", "disabled");
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
  if (id == "name")
  {
    var reg_name = /^[a-zA-Z ]{1,30}$/;
    var name = $("#name").val();

    if (name == "")
      invalidInput(id, "Please enter your name.");
    else if (!reg_name.test(name))
      invalidInput(id, "Name is only alphabet and space (maximum 30 characters).");
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
  else if (id == "subject")
  {
    var reg_subject = /^[\w ]{1,30}$/;
    var subject = $("#subject").val();

    if (subject == "")
      invalidInput(id, "Please enter subject.");
    else if (!reg_subject.test(subject))
      invalidInput(id, "Subject is only alphanumeric, underscore and space (maximum 30 characters).");
    else validInput(id);
  }
  else if (id == "message")
  {
    var reg_message = /^.{1,200}$/;
    var message = $("#message").val();

    if (message == "")
      invalidInput(id, "Please enter your message.");
    else if (!reg_message.test(message))
      invalidInput(id, "Message is maximum 200 characters.");
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

$("#btnSend").click(function ()
{
  $(".alert").fadeOut();
  var name = $("#name").val(),
    email = $("#email").val(),
    subject = $("#subject").val(),
    message = $("#message").val();

  if (name == "") invalidInput("name", "Please enter your name.")
  else if (email == "") invalidInput("email", "Please enter your email address.");
  else if (subject == "") invalidInput("subject", "Please enter subject.");
  else if (message == "") invalidInput("name", "Please enter your message.");

  if ($(".invalid-feedback").length > 0)
    $("html, body").animate({ scrollTop: $(".invalid-feedback").parent().offset().top - parseInt($(".navbar").height()) - 60 }, 600);
  else
  {
    $("#frmFeedback").fadeOut(function ()
    {
      $(".alert").text("Thank you for your feedback!").fadeIn();
      $("html, body").animate({ scrollTop: $("#feedback").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
    });
  }
});