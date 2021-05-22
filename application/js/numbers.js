var spelling = ["ˈzi(ə)rō", "wən", "to͞o", "THrē", "fôr", "fīv", "siks", "ˈsevən", "āt", "nīn", "ten", "iˈlevən", "twelve", "ˈTHərˌtēn", "ˈfôrˌtēn", "fifˈtēn", "sikˈstēn", "ˈsevənˌtēn", "āˈtēn", "nīnˈtēn", "ˈtwentē"];

for (var i = 20; i >= 0; i--)
{
  var parent = i > 10 ? "#layout-numbers2" : "#layout-numbers1";
  switch (i % 6)
  {
    case 0:
      $("<div class=\"my-2 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-center\"><button class=\"btn-numbers fontLogo btn btn-outline-primary btn-block mb-1\">" + i + "</button><span>/" + spelling[i] + "/</span></div>").prependTo(parent);
      break;
    case 1:
      $("<div class=\"my-2 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-center\"><button class=\"btn-numbers fontLogo btn btn-outline-success btn-block mb-1\">" + i + "</button><span>/" + spelling[i] + "/</span></div>").prependTo(parent);
      break;
    case 2:
      $("<div class=\"my-2 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-center\"><button class=\"btn-numbers fontLogo btn btn-outline-danger btn-block mb-1\">" + i + "</button><span>/" + spelling[i] + "/</span></div>").prependTo(parent);
      break;
    case 3:
      $("<div class=\"my-2 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-center\"><button class=\"btn-numbers fontLogo btn btn-outline-warning btn-block mb-1\">" + i + "</button><span>/" + spelling[i] + "/</span></div>").prependTo(parent);
      break;
    case 4:
      $("<div class=\"my-2 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-center\"><button class=\"btn-numbers fontLogo btn btn-outline-info btn-block mb-1\">" + i + "</button><span>/" + spelling[i] + "/</span></div>").prependTo(parent);
      break;
    case 5:
      $("<div class=\"my-2 col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 text-center\"><button class=\"btn-numbers fontLogo btn btn-outline-dark btn-block mb-1\">" + i + "</button><span>/" + spelling[i] + "/</span></div>").prependTo(parent);
      break;
  }
}