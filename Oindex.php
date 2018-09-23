<?php
$data = file_get_contents('https://www.reddit.com/r/random');
 
$content = $data;
$fileName='webPage.txt';
file_put_contents($fileName, $data); 
//Find the start position of string of interest
$start = strpos($data, "full_url\": \"https://"); //+strlen("full_url"); 

$ends = strpos($data, ", \"environment");//find position of ending string
//Grab string in range of (start,end); 
 

$result = substr($data, $start, ($ends- $start) );

preg_match('~www.(.*?)\"~', $result, $display);
    
 

$url = $display[1];

preg_match('~/r/(.*?)/~', $url, $dsp);
 
$sub_name= $dsp[1];


echo "\n url : ".$url.", name : $sub_name \n";

 

/*
while(isset($first_step[$i]))
{
	echo "\n".$first_step[$i]."\n";
	$i=$i+1; 
	
}*/
//echo $second_step[0];

//echo "<html> <head> <title>/r/random</title> </head> <body><center> <b><h2> <font color=\"brown\">Click here for another random sub-reddit. </font> </b></h2> </center></body> </html>";

//echo "<center> <a href='https://web.njit.edu/~ic56/random/'> <img style='width:400; height:100;' src='randomButton.png'> </img></a></center>"; 






//echo "<br> &nbsp </br>"; 

//echo $data; 





?>