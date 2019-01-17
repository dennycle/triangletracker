$(document).ready(function() {
	$("form#triangle").submit(function(event) {
		event.preventDefault();
    var a = parseInt($("#side1").val());
    var b = parseInt($("#side2").val());
    var c = parseInt($("#side3").val());
    $(".results").children().hide();
    if(a === b && b === c){
      $(".equilateral").show();
    }
    else if(a === b || b === c || c === a){
      $(".isosceles").show();
    }
    else if(((a + b) <= c) || ((b + c) <= a) || ((c + a) <= b)){
      $(".notTriangle").show();
    }
    else{
      $(".scalene").show();
    }
	});
});
