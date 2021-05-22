for (var i = 2; i <= 9; i++)
{
  var color = "";
  switch (i)
  {
    case 1:
      color = "#007bff";
      break;
    case 2:
      color = "#17a2b8";
      break;
    case 3:
      color = "#ffc107";
      break;
    case 4:
      color = "#fd7e14";
      break;
    case 5:
      color = "#20c997";
      break;
    case 6:
      color = "#e83e8c";
      break;
    case 7:
      color = "#dc3545";
      break;
    case 8:
      color = "#6f42c1";
      break;
    case 9:
      color = "#0056b3";
      break;
    case 10:
      color = "#28a745";
      break;
  }
  for (var j = 10; j >= 1; j--)
    $("<li class=\"text-center\" style=\"color:" + color + "\">" + i + " x " + j + " = " + (i * j) + "</li>").prependTo("#table" + i);

  $("<li class=\"text-center border border-top-0 border-left-0 border-right-0 border-secondary\">Table " + i + "</li>").prependTo("#table" + i);
}