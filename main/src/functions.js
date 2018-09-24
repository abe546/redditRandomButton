//Constants
var BACK = "back";
var CURRENT = "current";
var ON = "on";
var OFF = "off";
var RANDOM_URL = "https://old.reddit.com/random/";

window.onload=function start()
{
  console.log("Hello world");
  //On by default
  if(isOn()!=0 && isOn()!=1)
  {
  localStorage.setItem(ON,1);
}
  //Do this so that current is set, and then
  //back can be set to what current is also
  setCurrentSite(window.location.href);
  updateValues(window.location.href);
  //Adds on/off button to top of webpage
  prependOnOffButton();

	var $write = $("<br><a target=\"_blank\" href='https://www.old.reddit.com"+localStorage.getItem(BACK)+"'>Click here, or press the 'b' key, to go back to the last subreddit shown. ("+ localStorage.getItem(BACK) +") </a></br>");

 $write.prependTo($("body"));

 assignOnOffButton();
};

function updateValues(variable)
{

	//console.log("In old");
	localStorage.setItem(BACK,localStorage.getItem(CURRENT));
	localStorage.setItem(CURRENT,variable);
	console.log("Old result back : "+localStorage.getItem(BACK));
	console.log("Current : "+localStorage.getItem(CURRENT));


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

 //r key
 if(e.keyCode==82)
 {
   if(isOn()==1)
   {
	 window.location.replace(RANDOM_URL);
   updateValues(window.location.href);
   }
 }
 //b key
 else if(e.keyCode==66)
 {
     if(isOn()==1)
     {
     window.open(localStorage.getItem(BACK), '_blank');
     }
 }

});

function setOldSite(site)
{
  localStorage.setItem(BACK,site);
}

function setCurrentSite(site)
{
  localStorage.setItem(CURRENT,site);
}

function getOldSite()
{
	console.log(localStorage.getItem(BACK));
	return localStorage.getItem(BACK);
}

function getCurrentSite()
{
  console.log(localStorage.getItem(CURRENT));
  return localStorage.getItem(CURRENT);
}

/*Prepends an on/off button to top of webpage (before body)
* Point of this button is to turn on keyboard listening, or turn it off.
* i.e. if its on, pressing the 'R' key will reload the page, if its off you can
* type with 'R' as normal
*/
function prependOnOffButton()
{
  var $input;

if(isOn()==1)
{
  $input = $('<input type="button" value="on" id="onOff" />');
}
else{
  $input = $('<input type="button" value="off" id="onOff" />');
}

     $input.prependTo($("body"));
}

function  isOn()
{
  return localStorage.getItem(ON);
}

//Keeps track of value of on or off switch
function assignOnOffButton()
{
  console.log("BEGINNING OF METHOD"+isOn());
   $("#onOff").click(function(){
   if(localStorage.getItem(ON) == 0 )
  {
    $("#onOff").val(ON);
    localStorage.setItem(ON,1);
  }
  else if(localStorage.getItem(ON) == 1)
  {
      $("#onOff").val(OFF);
    localStorage.setItem(ON,0);
  }
console.log("END OF METHOD"+isOn());
  return;
});

}
