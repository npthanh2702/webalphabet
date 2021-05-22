// return the index of letter in the alphabet 0 -> 25
function index(letter)
{
  return letter.toLowerCase().charCodeAt(0) - 97;
}

// object Alphabet
function Letter()
{
  this.name;
  this.url;
  this.spelling;
}

// create the alphabet 2 dimensional array alphabet[26][5] 26 Letters, each Letter has 5 images with its name
var alphabet = new Array();
for (var i = 0; i < 26; i++)
{
  alphabet[i] = new Array();
  for (var j = 0; j < 5; j++)
    alphabet[i][j] = new Letter();
}

// input Letter(name, url, spelling) in the alphabet
function input(letter, position, name, spelling)
{
  alphabet[index(letter)][position - 1].name = name;
  alphabet[index(letter)][position - 1].url = "../image/alphabet/" + letter + position + ".png";
  alphabet[index(letter)][position - 1].spelling = spelling;
}

var spelling = ["eɪ", "biː", "siː", "diː", "iː", "ɛf", "dʒiː", "eɪtʃ", "aɪ", "dʒeɪ", "keɪ", "ɛl", "ɛm", "ɛn", "oʊ", "piː", "kjuː", "ɑr", "ɛs", "tiː", "juː", "viː", "ˈdʌbəl.juː", "ɛks", "waɪ", "ziː"];

/* Input charatter a */

input("a", 1, "Allien", "ˈaɪs ˈeɪliən");
input("a", 2, "Arm", "ɑːrm");
input("a", 3, "Apple", "ˈæpl");
input("a", 4, "Ant", "ænt");
input("a", 5, "Airplane", "ˈerpleɪn");

/* Input charatter b */

input("b", 1, "Banana", "bəˈnænə");
input("b", 2, "Badminton", "ˈbædmɪntən");
input("b", 3, "Balloon", "bəˈluːn");
input("b", 4, "Bee", "biː");
input("b", 5, "Bear", "ber");

/* Input charatter c */

input("c", 1, "Chicken", "ˈtʃɪkɪn");
input("c", 2, "Candle", "ˈkændl");
input("c", 3, "Cat", "kæt");
input("c", 4, "Cow", "kaʊ");
input("c", 5, "Carrot", "ˈkærət");

/* Input charatter d */

input("d", 1, "Dragon", "ˈdræɡən");
input("d", 2, "Dove", "dʌv");
input("d", 3, "Drum", "drʌm");
input("d", 4, "Dog", "kaʊ");
input("d", 5, "Dictionary", "ˈdɪkʃəneri");

/* Input charatter e */

input("e", 1, "Eagle", "ˈiːɡl");
input("e", 2, "Electric", "ɪˈlektrɪk");
input("e", 3, "Eye", "aɪ");
input("e", 4, "Egg", "eɡ");
input("e", 5, "Elephant", "ˈelɪfənt");

/* Input charatter f */

input("f", 1, "Face", "feɪs");
input("f", 2, "Fire", "ˈfaɪər");
input("f", 3, "Frog", "frɑːɡ");
input("f", 4, "Fish", "fɪʃ");
input("f", 5, "Fox", "fɑːks");

/* Input charatter g */

input("g", 1, "Goose", "ɡuːs");
input("g", 2, "Grass", "ɡræs");
input("g", 3, "Grasshoper", "ˈɡræsˌhɑpər");
input("g", 4, "Grape", "ɡreɪp");
input("g", 5, "Girl", "ɡɜːrl");

/* Input charatter h */

input("h", 1, "Hand", "hænd");
input("h", 2, "Hammer", "ˈhæmər");
input("h", 3, "Horse", "hɔːrs");
input("h", 4, "Hair", "her");
input("h", 5, "House", "haʊs");

/* Input charatter i */

input("i", 1, "Ice cream", "ˈaɪs kriːm");
input("i", 2, "Internet", "ˈɪntərnet");
input("i", 3, "Iron", "ɪron");
input("i", 4, "Ink", "ɪŋk");
input("i", 5, "Idea", "aɪˈdiːə");

/* Input charatter j */

input("j", 1, "Jam", "dʒæm");
input("j", 2, "Jacket", "ˈdʒækɪt");
input("j", 3, "Juice", "dʒuːs");
input("j", 4, "Jelly", "ˈdʒeli");
input("j", 5, "Journalist", "ˈdʒɜːrnəlɪst");


/* Input charatter k */

input("k", 1, "Kinfe", "naif");
input("k", 2, "Kangaroo", "ˌkæŋɡəˈruː");
input("k", 3, "Key", "kiː");
input("k", 4, "Kite", "kaɪt");
input("k", 5, "Keybroad", "ˈkiːbɔːrd");

/* Input charatter l */

input("l", 1, "Lips", "lɪp");
input("l", 2, "Lemon", "ˈlemən");
input("l", 3, "Leg", "leɡ");
input("l", 4, "Left", "left");
input("l", 5, "Lion", "ˈlaɪən");

/* Input charatter m */

input("m", 1, "Mouse", "maʊs");
input("m", 2, "Milk", "mɪlk");
input("m", 3, "Money", "ˈmʌni");
input("m", 4, "Moon", "muːn");
input("m", 5, "Monkey", "ˈmʌŋki");

/* Input charatter n */

input("n", 1, "Noodle", "ˈnuːdl");
input("n", 2, "Newt", "nuːt");
input("n", 3, "News", "nuːz");
input("n", 4, "Nurse", "nɜːrs");
input("n", 5, "Notebook", "ˈnoʊtbʊk");

/* Input charatter o */

input("o", 1, "Octopus", "ˈɑːktəpʊs");
input("o", 2, "Owl", "aʊl");
input("o", 3, "Orange", "ˈɔːrɪndʒ");
input("o", 4, "Oil", "ɔɪl");
input("o", 5, "Onion", "ˈʌnjən");

/* Input charatter p */

input("p", 1, "Pig", "pɪɡ");
input("p", 2, "Potato", "pəˈteɪtoʊ");
input("p", 3, "Pencil", "ˈpensl");
input("p", 4, "Panda", "ˈpændə");
input("p", 5, "Police", "pəˈliːs");


/* Input charatter q */
input("q", 1, "Queen", "kwēn");
input("q", 2, "Quarrel", "ˈkwä-,ˈkwôrəl");
input("q", 3, "Quadrant", "ˈkwädrənt");
input("q", 4, "Question", "ˈkwesCHən");
input("q", 5, "Quail", "kwāl");

/* Input charatter r  */

input("r", 1, "Radio", "ˈreɪdioʊ");
input("r", 2, "Raspberry", "ˈræzberi");
input("r", 3, "Red", "red");
input("r", 4, "Ring", "rɪŋ");
input("r", 5, "Rainbow", "ˈreɪnbəʊ");


/* Input charatter s */

input("s", 1, "School", "skuːl");
input("s", 2, "Silo", "ˈsaɪloʊ");
input("s", 3, "Sun", "sʌn");
input("s", 4, "Swim", "swɪm");
input("s", 5, "Snake", "sneɪk");

/* Input charatter t */

input("t", 1, "Tomato", "təˈmeɪtoʊ");
input("t", 2, "Taxi", "ˈtaksē");
input("t", 3, "Tent", "tent");
input("t", 4, "Table", "ˈteɪbl");
input("t", 5, "Television", "ˈtelɪvɪʒn");

/* Input charatter u */

input("u", 1, "Umbrella", "ʌmˈbrelə");
input("u", 2, "Up", "ʌp");
input("u", 3, "Uncle", "ˈʌŋkl");
input("u", 4, "Urban", "ˈɜːrbən");
input("u", 5, "Unicorn", "ˈjuːnɪkɔːrn");

/* Input charatter v */

input("v", 1, "Vegetatbles", "ˈvedʒtəbl");
input("v", 2, "Vicuna", "vɪˈkuːnjə");
input("v", 3, "Vase", "veɪz");
input("v", 4, "Volcano", "vɑːlˈkeɪnoʊ");
input("v", 5, "Violin", "ˌvaɪəˈlɪn");


/* Input charatter w */

input("w", 1, "Walking", "ˈwɔːkɪŋ");
input("w", 2, "Wheat", "wiːt");
input("w", 3, "Watermelon", "ˈwɔːtərmelən");
input("w", 4, "Winner", "ˈwɪnər");
input("w", 5, "Wolf", "wʊlf");

/* Input charatter x */

input("x", 1, "Xebec", "'zi:bek");
input("x", 2, "Xmax sleigh", "ˈɛksməs sleɪ");
input("x", 3, "Xylocarp", "'zailəkɑ:p");
input("x", 4, "Xylophone", "ˈzaɪləfoʊn");
input("x", 5, "X-ray", "ˈeks reɪ");


/* Input charatter y */

input("y", 1, "Yo-Yo", "ˈjoʊ joʊ");
input("y", 2, "Yoga", "ˈjoʊɡə");
input("y", 3, "Yarn", "jɑːrn");
input("y", 4, "Yellow plum", "ˈjeloʊ plʌm");
input("y", 5, "Yogurt", "ˈjoʊɡərt");

/* Input charatter w */

input("z", 1, "Zero", "ˈziːroʊ");
input("z", 2, "Zebra", "zebra");
input("z", 3, "Zucchini", "zuˈkiːni");
input("z", 4, "Zebu", "ˈziːbuː");
input("z", 5, "Zombie", "ˈzɑːmbi");

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------


for (var i = 90; i >= 65; i--)
{
  switch (i % 6)
  {
    case 0:
      $("<div class=\"my-2 col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2\"><button class=\"btn-letter fontLogo btn btn-outline-primary btn-block\">" + String.fromCharCode(i) + String.fromCharCode(i + 32) + "</button></div>").prependTo("#layout-alphabet");
      break;
    case 1:
      $("<div class=\"my-2 col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2\"><button class=\"btn-letter fontLogo btn btn-outline-success btn-block\">" + String.fromCharCode(i) + String.fromCharCode(i + 32) + "</button></div>").prependTo("#layout-alphabet");
      break;
    case 2:
      $("<div class=\"my-2 col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2\"><button class=\"btn-letter fontLogo btn btn-outline-danger btn-block\">" + String.fromCharCode(i) + String.fromCharCode(i + 32) + "</button></div>").prependTo("#layout-alphabet");
      break;
    case 3:
      $("<div class=\"my-2 col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2\"><button class=\"btn-letter fontLogo btn btn-outline-warning btn-block\">" + String.fromCharCode(i) + String.fromCharCode(i + 32) + "</button></div>").prependTo("#layout-alphabet");
      break;
    case 4:
      $("<div class=\"my-2 col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2\"><button class=\"btn-letter fontLogo btn btn-outline-info btn-block\">" + String.fromCharCode(i) + String.fromCharCode(i + 32) + "</button></div>").prependTo("#layout-alphabet");
      break;
    case 5:
      $("<div class=\"my-2 col-4 col-sm-3 col-md-3 col-lg-3 col-xl-2\"><button class=\"btn-letter fontLogo btn btn-outline-dark btn-block\">" + String.fromCharCode(i) + String.fromCharCode(i + 32) + "</button></div>").prependTo("#layout-alphabet");
      break;
  }
}

$(".btn-letter").click(function ()
{
  var letter = $(this).text().charAt(0);

  $("#layout-study-alphabet").fadeOut(function ()
  {
    $("#nameLetter").text("Letter " + letter);
    $("#upperLetter").text(letter);
    $("#lowerLetter").text(letter.toLowerCase());
    $("#spelling").text("/" + spelling[index(letter)] + "/");

    for (var i = 0; i < 5; i++)
    {
      $("#img" + (i + 1)).attr("src", alphabet[index(letter)][i].url);
      $("#name" + (i + 1)).text(alphabet[index(letter)][i].name);
      $("#spelling" + (i + 1)).text("/" + alphabet[index(letter)][i].spelling + "/");
    }

    $("#layout-study-alphabet").fadeIn(function ()
    {
      $("html, body").animate({ scrollTop: $("#layout-study-alphabet").offset().top - parseInt($(".navbar").height()) - 60 }, 600);
    });
  });
});