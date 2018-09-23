<?php

 


 


$data = file_get_contents('https://www.reddit.com/r/random');
//$data = file_get_contents('https://www.reddit.com/r/mmorpg');
 $fileName='webPage.txt';
file_put_contents($fileName, $data); 
 
$content = $data;

$start = strpos($data, "/r/"); //look for beginning of /r/whatever
 
$ends = strpos($data, "/\"");//get the ending '/"'

$result = substr($data, $start, ($ends- $start) );

$result = preg_replace( "/\s+.*/", "", $result);//Similar to the split method in JS
//Regex is : 1 or more spaces, folloed by anything will be replaced with emptry string. 
 
//echo "\n Result : ".$result."\n";

 //$back = file_get_contents("webPage.txt"); 
 
 //$start = strpos($back, "/r/"); //look for beginning of /r/whatever
 
//$ends = strpos($back, "/\"");//get the ending '/"'

//$oldResult = substr($back, $start, ($ends- $start) );

//$oldResult = preg_replace( "/\s+.*/", "", $oldResult);


 //ob_start(); //Start output buffer
//echo "";
//$output = ob_get_contents(); //Grab output
//ob_end_clean(); //Discard output buffer 

/*
while(isset($first_step[$i]))
{
	echo "\n".$first_step[$i]."\n";
	$i=$i+1; 
	
}*/
//echo $second_step[0];

 
 
 

echo "<html> <head> <title>/r/random</title><center>   <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script><script type=\"text/JavaScript\" src=\"js/functions.js\"></script>  </head> <body>  <center>   <b><h2> <font color=\"brown\"><br><a target=\"_blank\" href='https://www.reddit.com".$result."'>(Click to visit) Current subreddit : ".$result." </a></br><br><div id='back'> </div></br> Click here for another random sub-reddit. Or press the 'r' key.</font> </b></h2> </center>";



 
 

echo "<a href='https://web.njit.edu/~ic56/random/'> <img style='width:400; height:100;' src='randomButton.png'> </img></a></center> <script type=\"text/JavaScript\" > oldResult(\"".$result."\"); </script></body> </html>"; 

 




echo "<br> &nbsp </br>"; 
 
echo $data; 


 


?>