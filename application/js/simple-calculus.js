$("#add").click(function ()
{
  $("#video").attr("src", "https://www.youtube.com/embed/Fe8u2I3vmHU").fadeIn();
  $("html, body").animate({ scrollTop: $("#video").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
});

$("#sub").click(function ()
{
  $("#video").attr("src", "https://www.youtube.com/embed/depLStKzbIE").fadeIn();
  $("html, body").animate({ scrollTop: $("#video").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
});

$("#mul").click(function ()
{
  $("#video").attr("src", "https://www.youtube.com/embed/BZ41Fh2MEVw").fadeIn();
  $("html, body").animate({ scrollTop: $("#video").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
});

$("#div").click(function ()
{
  $("#video").attr("src", "https://www.youtube.com/embed/gT0HFbA1Mow").fadeIn();
  $("html, body").animate({ scrollTop: $("#video").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
});

var num = "";
var op = "";

$(".btn-number").click(function ()
{
  if (num == "")
  {
    $("#cal").val($(this).text()).attr("rows","1");
    $(".btn-number").attr("disabled", "disabled");
    $(".btn-operator").removeAttr("disabled");
    num = $(this).text();
  }
  else
  {
    if (op == "+")
      $("#cal").val($("#cal").val() + " " + $(this).text() + " = " + (parseInt(num) + parseInt($(this).text())));
    else if (op == "-")
      $("#cal").val($("#cal").val() + " " + $(this).text() + " = " + (parseInt(num) - parseInt($(this).text())));
    else if (op == "×")
      $("#cal").val($("#cal").val() + " " + $(this).text() + " = " + (parseInt(num) * parseInt($(this).text())));
    else
      $("#cal").attr("rows","2").val($("#cal").val() + " " + $(this).text() + " = " + Math.floor(parseInt(num) / parseInt($(this).text())) + "\nremain " + (parseInt(num) % parseInt($(this).text())));
    num = "";
    op = "";
  }
});

$(".btn-del").click(function ()
{
  $("#cal").val("");
  $(".btn-number").removeAttr("disabled");
  $(".btn-operator").attr("disabled", "disabled");
  num = "";
  op = "";
});

$(".btn-operator").click(function ()
{
  op = $(this).text();
  $("#cal").val($("#cal").val() + " " + $(this).text());
  $(".btn-number").removeAttr("disabled");
  $(".btn-operator").attr("disabled", "disabled");
  if (op == "÷") $("#0").attr("disabled", "disabled");
});