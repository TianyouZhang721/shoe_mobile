<?php
header('Access-Control-Allow-Origin:*'); 
$conn=mysqli_connect(
	"127.0.0.1","root","","shoes_mobile",3306);
mysqli_query($conn,"SET NAMES UTF8");