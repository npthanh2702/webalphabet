// script for pages need login account, If there are not any accounts logged in, then it will forward to the login page
if (sessionStorage.isLogin != 1)
{
  sessionStorage.lastPage = window.location.href;
  window.location.href = "./login.html";
}