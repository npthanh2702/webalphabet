$("#user").click();
$("#study").click();

if (sessionStorage.isLogin == null) sessionStorage.isLogin = 0;
if (sessionStorage.isLogin == 1)
{
  $("#user").html("<span style=\"text-decoration:none !important\"><i class=\"mr-1 fas fa-user-circle\"></i><div class=\"d-none d-xl-inline\">" + localStorage.KZ_username + "</div></span>");
  $(".btnUser").removeAttr("style");
}
else $("#frmLogin").removeAttr("style");

// if scrollTop behind btnSidebarCollapse show btn Study on Navbar
if ($(this).innerWidth() >= 992)
  if ($(this).scrollTop() > parseInt($("button.btnSidebarCollapse").offset().top) + parseInt($("button.btnSidebarCollapse").height()))
    $(".layout-btnSidebarCollapse").removeClass("d-none");
  else
    $(".layout-btnSidebarCollapse").addClass("d-none");

// Script Btn Sidebar Collapse
$(".btnSidebarCollapse").click(function ()
{
  if ($("#sidebar").hasClass("closed"))
  {
    $("#sidebar").removeClass("closed").animate({ "margin-left": "0px" });
    $(".brand img").css("height", "0").css("margin-right", "0");
  }
  else
  {
    $("#sidebar").animate({ "margin-left": "-250px" }, function () { $("#sidebar").addClass("closed") });
    $(".brand img").css("height", "30").css("margin-right", "1.25rem");
  }
});

// Check key press Enter at inputUsername and inputPassword
function pressEnter(event)
{
  if (event.keyCode === 13)
  {
    event.preventDefault();
    $("#btnLogin").click();
  }
};
$("#inputUsername").keyup(function (event) { pressEnter(event) });
$("#inputPassword").keyup(function (event) { pressEnter(event) });

$("#btnLogin").click(function ()
{
  if ($("#inputUsername").val() == "" || $("#inputPassword").val() == "")
  {
    sessionStorage.alert = "Please enter username and password.";
    document.location.href = "./login.html";
  }
  else if ($("#inputUsername").val() == localStorage.KZ_username && $("#inputPassword").val() == localStorage.KZ_password)
  {
    sessionStorage.isLogin = 1;
    // if login successful, come back the last page (the page call script forward to the login page)
    if (sessionStorage.lastPage != "" && sessionStorage.lastPage != null)
    {
      var page = sessionStorage.lastPage;
      sessionStorage.lastPage = "";
      document.location.href = page;
    }
    else
    {
      var href = document.location.href;
      var page = href.substr(href.lastIndexOf("/") + 1);
      // if current page is login or register, forward to home page
      if (page == "login.html" || page == "register.html")
        document.location.href = "./home.html";
      else location.reload();
    }
  }
  else
  {
    // if login unsuccessful at any page, forward to login page
    sessionStorage.alert = "Username or password is incorrect.";
    document.location.href = "./login.html";
  }
});

// logout
$("#btnLogout").click(function ()
{
  document.location.href = "./login.html";
});

//Trim spaces, remove multi-spaces, upcase first char each word
function reString(str)
{
  return str = str.replace(/ +(?= )/g, '').replace(/\w\S*/g, function (txt)
  {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  }).trim();
}

// when sroll, if scrollTop behind btnSidebarCollapse show btn Study on Navbar
$(window).scroll(function ()
{
  if ($(this).innerWidth() >= "992")
    if ($(this).scrollTop() > parseInt($("button.btnSidebarCollapse").offset().top) + parseInt($("button.btnSidebarCollapse").height()))
      $(".layout-btnSidebarCollapse").removeClass("d-none");
    else
      $(".layout-btnSidebarCollapse").addClass("d-none");
});