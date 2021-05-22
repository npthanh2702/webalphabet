var indexAlphabet = 0;
var indexNumbers = 0;
var indexColors = 0;
var alphabet = [
  "https://www.youtube.com/embed/Y88p4V_BCEU",
  "https://www.youtube.com/embed/BELlZKpi1Zs",
  "https://www.youtube.com/embed/zAlX1V3lK5s",
  "https://www.youtube.com/embed/_Wp0vZnR_FM",
  "https://www.youtube.com/embed/hq3yfQnllfQ",
  "https://www.youtube.com/embed/R-3nQX8EE8o",
  "https://www.youtube.com/embed/pCc33-UOJoM",
  "https://www.youtube.com/embed/r6Oxqyd5qUw",
  "https://www.youtube.com/embed/-l-uIs-zSH4",
  "https://www.youtube.com/embed/m01RvnRM7Yg"
];

var numbers = [
  "https://www.youtube.com/embed/D0Ajq682yrA",
  "https://www.youtube.com/embed/V_lgJgBbqWE/",
  "https://www.youtube.com/embed/Yt8GFgxlITs",
  "https://www.youtube.com/embed/DR-cfDsHCGA",
  "https://www.youtube.com/embed/G2-6HBoS9to",
  "https://www.youtube.com/embed/o0Lf3mECorY"
];

var colors = [
  "https://www.youtube.com/embed/qhOTU8_1Af4",
  "https://www.youtube.com/embed/YyFLBTTAbSE/",
  "https://www.youtube.com/embed/tkpfg-1FJLU",
  "https://www.youtube.com/embed/z0HZNaM7gTg",
  "https://www.youtube.com/embed/j70UiColJgc",
  "https://www.youtube.com/embed/xPWZu4LDmQM"
];

$("#alphabet").attr("src", alphabet[indexAlphabet]);
$("#colors").attr("src", colors[indexColors]);
$("#numbers").attr("src", numbers[indexNumbers]);

$("#btnAlphabetP").click(function ()
{
  if (indexAlphabet == 0) indexAlphabet = alphabet.length - 1;
  else indexAlphabet--;

  $("#alphabet").attr("src", alphabet[indexAlphabet]);
});
$("#btnAlphabetN").click(function ()
{
  if (indexAlphabet == alphabet.length - 1) indexAlphabet = 0;
  else indexAlphabet++;

  $("#alphabet").attr("src", alphabet[indexAlphabet]);
});


$("#btnNumbersP").click(function ()
{
  if (indexNumbers == 0) indexNumbers = numbers.length - 1;
  else indexNumbers--;

  $("#numbers").attr("src", numbers[indexNumbers]);
});
$("#btnNumbersN").click(function ()
{
  if (indexNumbers == numbers.length - 1) indexNumbers = 0;
  else indexNumbers++;

  $("#numbers").attr("src", numbers[indexNumbers]);
});


$("#btnColorsP").click(function ()
{
  if (indexColors == 0) indexColors = colors.length - 1;
  else indexColors--;

  $("#colors").attr("src", colors[indexColors]);
});
$("#btnColorsN").click(function ()
{
  if (indexColors == colors.length - 1) indexColors = 0;
  else indexColors++;

  $("#colors").attr("src", colors[indexColors]);
});