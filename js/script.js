$(function(){
  var $container;
  var $col3;
  var $firstCol;
  var $secCol;
  var $thirdCol;
  var now;
  var dateArray = [];
  var colNames = ["Input", "Tabs", "Other"];
  $container = $("#container");

  //add 3 columns to site
  for(var i = 0; i < 3; i++){
    $col3 = $("<div class='col3'></div>").append($("<p class='colNames'></p>").text(colNames[i]));
    $container.append($col3);
  }
  //make first col have an input area
  $firstCol = $(".col3").eq(0);
  $firstCol.append("<form><input type='text'/></form>");
  $("form").append("<input type='submit' />");

  //make second col show saved columns
  $secCol = $(".col3").eq(1);
  var $nothing = $("<p>Add a Tab!</p>");
  $secCol.on("mouseenter", function(){
    if($secCol.has("ul").length === 0){
      $secCol.append($nothing)
      $nothing.hide().fadeIn("slow");
    }
  });

  //catch submit and add input to DOM
  $(".col3").on("submit", function(e){
    e.preventDefault();
    var d = new Date();
    now = d.toString();
    var input = $("input[type='text']").first().val();
    $secCol.append("<p>" + input + "</p>");
    var $tableRow = $("<tr></tr>");
    $tableRow.append($("<td></td>").append(now));
    $tableRow.append($("<td></td>").append(input));
    $tableRow.appendTo($("table"));
    $("input[type='text']").val("");
  });

  //third col will have a table or sorted things
  $thirdCol = $(".col3").eq(2);
  var $table = $("<table></table>");
  var tableHeads = ["Date", "Url"];
  var $tableRow = $("<tr></tr>");
  $tableRow.append($("<th></th>").append(tableHeads[0]));
  $tableRow.append($("<th></th>").append(tableHeads[1]));
  $tableRow.appendTo($table);
  $table.appendTo($thirdCol);
});
