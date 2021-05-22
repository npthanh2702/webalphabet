// return the index of color
function index(colorName)
{
  if (colorName.toLowerCase() == "black")
    return 0;
  else if (colorName.toLowerCase() == "blue")
    return 1;
  else if (colorName.toLowerCase() == "green")
    return 2;
  else if (colorName.toLowerCase() == "orange")
    return 3;
  else if (colorName.toLowerCase() == "pink")
    return 4;
  else if (colorName.toLowerCase() == "purple")
    return 5;
  else if (colorName.toLowerCase() == "red")
    return 6;
  else if (colorName.toLowerCase() == "white")
    return 7;
  else if (colorName.toLowerCase() == "yellow")
    return 8;
}

// return the hex of color
function hex(colorName)
{
  if (colorName.toLowerCase() == "black" || colorName.toLowerCase() == "white")
    return "#343a40";
  else if (colorName.toLowerCase() == "blue")
    return "#007bff";
  else if (colorName.toLowerCase() == "green")
    return "#28a745";
  else if (colorName.toLowerCase() == "orange")
    return "#fd7e14";
  else if (colorName.toLowerCase() == "pink")
    return "#e83e8c";
  else if (colorName.toLowerCase() == "purple")
    return "#6f42c1";
  else if (colorName.toLowerCase() == "red")
    return "#dc3545";
  else if (colorName.toLowerCase() == "yellow")
    return "#ffc107";
}

// object Color
function Color()
{
  this.name;
  this.url;
  this.spelling;
}

// create the Color 2 dimensional array Color[9][3] 9 Colors, each Color has 3 images with its name
var color = new Array();
for (var i = 0; i < 9; i++)
{
  color[i] = new Array();
  for (var j = 0; j < 3; j++)
    color[i][j] = new Color();
}

// input Color(name, url, spelling)
function input(colorName, position, name, spelling)
{
  color[index(colorName)][position - 1].name = name;
  color[index(colorName)][position - 1].url = "../image/color/" + colorName + position + ".png";
  color[index(colorName)][position - 1].spelling = spelling;
}

var spelling = ["blak", "blo͞o", "grēn", "ˈôrənj", "piNGk", "ˈpərpəl", "red", "(h)wīt", "ˈyelō"];

/* Input black */
input("black", 1, "Car", "kär");
input("black", 2, "Cat", "kæt");
input("black", 3, "Smartphone", "ˈsmɑːrtfoʊn");

/* Input orange */
input("orange", 1, "Orange", "ˈɔːrɪndʒ");
input("orange", 2, "Car", "kär");
input("orange", 3, "T-Shirt", "ˈtiː ʃɜːrt");

/* Input red */
input("red", 1, "Hat", "hæt");
input("red", 2, "Apple", "ˈæpl");
input("red", 3, "Watermelon", "ˈwɔːtərmelən");

/* Input white */
input("white", 1, "Cloud", "klaʊd");
input("white", 2, "Pig", "pɪɡ");
input("white", 3, "Skirt", "skɜːrt");

/* Input purple */
input("purple", 1, "Eggplant", "ˈeɡplænt");
input("purple", 2, "Camera", "ˈkæmərə");
input("purple", 3, "Octopus", "ˈɑːktəpʊs");

/* Input yellow */
input("yellow", 1, "Watermelon", "ˈwɔːtərmelən");
input("yellow", 2, "Sun", "sʌn");
input("yellow", 3, "Sand", "sænd");

/* Input blue */
input("blue", 1, "Clock", "klɑːk");
input("blue", 2, "Sea", "siː");
input("blue", 3, "Sky", "skaɪ");

/* Input green */
input("green", 1, "Tree", "triː");
input("green", 2, "Candy", "ˈkændi");
input("green", 3, "Lemon", "ˈlemən");

/* Input pink */
input("pink", 1, "Cake", "keɪk");
input("pink", 2, "Rose", "roʊz");
input("pink", 3, "Pig", "pɪɡ");



//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

$(".btn-color").click(function ()
{
  var colorName = $(this).text();

  $("#layout-study-color").fadeOut(function ()
  {
    $("#nameColor").text("Color " + colorName);
    $("#fillColor").css("background-color", colorName == "White" ? "#f8f9fa" : hex(colorName));
    $("#color").text(colorName).css("color", hex(colorName));
    $("#spelling").text("/" + spelling[index(colorName)] + "/");

    for (var i = 0; i < 3; i++)
    {
      $("#img" + (i + 1)).attr("src", color[index(colorName)][i].url);
      $("#name" + (i + 1)).text(color[index(colorName)][i].name);
      $("#spelling" + (i + 1)).text("/" + color[index(colorName)][i].spelling + "/");
    }

    $("#layout-study-color").fadeIn(function ()
    {
      $("html, body").animate({ scrollTop: $("#layout-study-color").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
    });
  });
});