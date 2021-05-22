// object Exam, Ques
function Exam()
{
  this.name;
  this.date;
  this.quesAlphabet;
  this.quesNumber;
  this.quesColor;
  this.quesMaths;
}

function Ques(ques, ans, url, result)
{
  this.ques = ques;
  this.ans = ans;
  this.url = url;
  this.result = result;
}

var exam1 = new Exam();
exam1.name = "Exam 1";
exam1.date = "19-2-2019";
exam1.quesAlphabet = new Ques("I have an ...pple", "a", "../image/exam/ques1_1.png", "I have an <b>a</b>pple");
exam1.quesNumber = new Ques("How many frogs are there? - There are ... frogs", "3", "../image/exam/ques1_2.png", "There are <b>3</b> frogs");
exam1.quesColor = new Ques("The sun is ...", "yellow", "../image/exam/ques1_3.png", "The sun is <b>yellow</b>");
exam1.quesMaths = new Ques("1 + 2 = ...", "3", "", "1 + 2 = <b>3</b>");

var exam2 = new Exam();
exam2.name = "Exam 2";
exam2.date = "19-3-2019";
exam2.quesAlphabet = new Ques("I love ...og", "d", "../image/exam/ques2_1.png", "I love <b>d</b>og");
exam2.quesNumber = new Ques("How many fishes are there? - There are ... fishes", "5", "../image/exam/ques2_2.png", "There are <b>5</b> fishes");
exam2.quesColor = new Ques("The sea is ...", "blue", "../image/exam/ques2_3.png", "The sea is <b>blue</b>");
exam2.quesMaths = new Ques("2 × 2 = ...", "4", "", "2 × 2 = <b>4</b>");

var exam = [exam1, exam2];

//------------------------------------------------------

for (var i = exam.length - 1; i >= 0; i--)
{
  if (localStorage.getItem("KZ_exam" + (i + 1)) != null)
    $("<li><a id=\"" + i + "\" class=\"link-exam text-dark\" href=\"#\">" + exam[i].name + " - " + exam[i].date + "</a></li>").prependTo("#list-exam");
  else
    $("<li><a id=\"" + i + "\" class=\"link-exam text-dark\" href=\"#\">" + exam[i].name + " - " + exam[i].date + "</a></li>").prependTo("#list-exam");

  $("<tr><th scope=\"row\">" + (i + 1) + "</th><td>" + exam[i].name + "</td><td>" + localStorage.getItem("KZ_examdate" + (i + 1)) + "</td><td>" + localStorage.getItem("KZ_exam" + (i + 1)) + "</td></tr>").prependTo("#bodyResult");
}

var index = 0;
$(".link-exam").click(function ()
{
  index = parseInt($(this).attr("id"));
  $("#name-exam").html(exam[index].name + "<br><small>" + exam[index].date + "</small>");

  $("#ques1").text(exam[index].quesAlphabet.ques);
  $("#ques2").text(exam[index].quesNumber.ques);
  $("#ques3").text(exam[index].quesColor.ques);
  $("#ques4").text(exam[index].quesMaths.ques);

  $("#img1").attr("src", exam[index].quesAlphabet.url);
  $("#img2").attr("src", exam[index].quesNumber.url);
  $("#img3").attr("src", exam[index].quesColor.url);

  $("#table").fadeOut();
  $("#layout-list-exam").fadeOut(function ()
  {
    $("#test").fadeIn();
  });
});

$("#submit").click(function ()
{
  var result = 0;
  if ($("#ans1").val().toLowerCase() == exam[index].quesAlphabet.ans)
  {
    $("#ans1").addClass("is-valid");
    result++;
  }
  else
  {
    $("#ans1").addClass("is-invalid");
    $("<div class=\"invalid-feedback\">Result: " + exam[index].quesAlphabet.result + "</div>").insertAfter("#ans1");
  }

  if ($("#ans2").val().toLowerCase() == exam[index].quesNumber.ans)
  {
    $("#ans2").addClass("is-valid");
    result++;
  }
  else
  {
    $("#ans2").addClass("is-invalid");
    $("<div class=\"invalid-feedback\">Result: " + exam[index].quesNumber.result + "</div>").insertAfter("#ans2");
  }

  if ($("#ans3").val().toLowerCase() == exam[index].quesColor.ans)
  {
    $("#ans3").addClass("is-valid");
    result++;
  }
  else
  {
    $("#ans3").addClass("is-invalid");
    $("<div class=\"invalid-feedback\">Result: " + exam[index].quesColor.result + "</div>").insertAfter("#ans3");
  }

  if ($("#ans4").val().toLowerCase() == exam[index].quesMaths.ans)
  {
    $("#ans4").addClass("is-valid");
    result++;
  }
  else
  {
    $("#ans4").addClass("is-invalid");
    $("<div class=\"invalid-feedback\">Result: " + exam[index].quesMaths.result + "</div>").insertAfter("#ans4");
  }

  localStorage.setItem("KZ_exam" + (index + 1), result * 25);

  var d = new Date();
  localStorage.setItem("KZ_examdate" + (index + 1), d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear());
  $("input").attr("readonly", "readonly");
  $("html, body").animate({ scrollTop: $("#test").offset().top - parseInt($(".navbar").height()) - 60 }, 600);

  $("#submit").fadeOut();
  $("#ok").fadeIn();
});

$("#ok").click(function ()
{
  location.reload();
});