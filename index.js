var clicked_array = new Array;
var to_click_array = new Array;
/* --------------------------------------------------------------------- */
$(".zero").on("click", function(){Click("zero");Check(clicked_array, to_click_array)});
$(".um").on("click", function(){Click("um");Check(clicked_array, to_click_array)});
$(".dois").on("click", function(){Click("dois");Check(clicked_array, to_click_array)});
$(".tres").on("click", function(){Click("tres");Check(clicked_array, to_click_array)});
/* --------------------------------------------------------------------- */
function Click(object){
    $("." + object).animate({opacity: "0.5"}, 75);
    $("." + object).animate({opacity: "1"}, 75);
    clicked_array.push(object);
};
function Check(array_click, array_sequence){
    for(var i=0; i<array_click.length;i++){
        if(array_click[i]!==array_sequence[i]){$(".line").hide();$(".center").text("GAMOVER")};
        if((array_click[i]===array_sequence[i])&&((array_sequence.length-1)===i)){clicked_array=[];$(".title").text("level " + (i+2));Sequence();};
    };
};
function Sequence(){
    var num_rnd = Math.floor(Math.random()*4);
    var rnd = 'a';
    switch (num_rnd) {
        case 0:
            rnd = "zero";
            break;
        case 1:
            rnd = "um";
            break;
        case 2:
            rnd = "dois";
            break;
        case 3:
            rnd = "tres"
            break;
        
        default:
            break;
    }
    to_click_array.push(rnd);
    $("." + rnd).animate({opacity: "0.1"}, 250);
    $("." + rnd).animate({opacity: "1"}, 250);
    console.log(clicked_array);
    console.log(to_click_array);
};
/* --------------------------------------------------------------------- */
Sequence();