
window.onload=function start()
{ 
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