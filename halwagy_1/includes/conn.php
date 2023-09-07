<?php

$db_host = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "cheese";

$GLOBALS['conn'] = mysqli_connect($db_host,$db_user,$db_password,$db_name);

if (!$GLOBALS['conn']) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_set_charset($conn, "utf8");

date_default_timezone_set('Africa/Cairo');


?>