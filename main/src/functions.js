
window.onload=function start()
{
  console.log("Hello world")

  //Adds on/off button to top of webpage
  prependOnOffButton();

   var write = document.getElementById("back");

   if(localStorage.getItem("back") == null || localStorage.getItem("back") == "null")
   {
	   localStorage.setItem("back","empty");
   }

	write.innerHTML=""
	write.innerHTML += "<a target=\"_blank\" href='https://www.reddit.com"+localStorage.getItem("back")+"'>Click here, or press the 'b' key, to go back to the last subreddit shown. ("+ localStorage.getItem("back") +") </a>";
}
;
function oldResult(variable)
{

	//console.log("In old");
	localStorage.setItem("back",localStorage.getItem("current"));
	localStorage.setItem("current",variable);
	console.log("Old result back : "+localStorage.getItem("back"));
	console.log("Current : "+localStorage.getItem("current"));


	/* $.ajax({
    type: "POST",
    url: "https://web.njit.edu/~ic56/random",

    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
	complete: function(r){
       console.log("Complete : "+r.responseText);
	}

	});*/





}

$(document).keydown(function(e){
 console.log(e.keyCode);

 if(e.keyCode==82)
 {
	 window.location.replace("https://web.njit.edu/~ic56/random/");
 }
 else if(e.keyCode==66)
 {
	 //window.location.replace("https://web.njit.edu/~ic56/random/");
     window.open("https://www.reddit.com"+localStorage.getItem("back"), '_blank');
 }

});

function getOld()
{
	console.log(localStorage.getItem("back"));
	return localStorage.getItem("back");
}

/*Prepends an on/off button to top of webpage (before body)
* Point of this button is to turn on keyboard listening, or turn it off.
* i.e. if its on, pressing the 'R' key will reload the page, if its off you can
* type with 'R' as normal
*/
function prependOnOffButton()
{
  var $input = $('<input type="button" value="on/off" id="onOff" />');
     $input.prependTo($("body"));
}

//Keeps track of value of on or off switch
function assignOnOffButton()
{
   $("#onOff").click(function(){
   if(localStorage.getItem("on")=="null" || localStorage.getItem("on") == null || localStorage.getItem("on") == 0 )
  {
    localStorage.setItem("on",1);
  }
  else if(localStorage.getItem("on") == 1)
  {
    localStorage.setItem("on",0)
  }

  return;
}

}
