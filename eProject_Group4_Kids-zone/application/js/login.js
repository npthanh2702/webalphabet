//Login use account that has storage by using Local Storage
//because of not using database at server, so we decided use Local Storage to storage the information of user
//storage only ONE account for example use Local Storage for login

sessionStorage.isLogin = 0;

// show alert if login unsuccessful
if (sessionStorage.alert != "" && sessionStorage.alert != null)
{
  $(".alert").text(sessionStorage.alert).fadeIn();
  sessionStorage.alert = "";
}