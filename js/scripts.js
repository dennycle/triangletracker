$(document).ready(function() {
	$("form#triangle").submit(function(event) {
		event.preventDefault();
    $(".form-group").removeClass("has-error");
    $(".results").children().hide();
    $(".help-block").hide();
    var a = parseInt($("#side1").val());
    var b = parseInt($("#side2").val());
    var c = parseInt($("#side3").val());
    if (!a || !b || !c){
      if (!a){
        $(".side1").addClass("has-error");
        $("#help-block1").show();
      }
      if(!b){
        $(".side2").addClass("has-error");
        $("#help-block2").show();
      }
      if(!c){
        $(".side3").addClass("has-error");
        $("#help-block3").show();
      }
    }
    else{
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
    }
	});
});
