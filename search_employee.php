<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employees";

$name = file_get_contents("php://input");
$data = json_decode($name, true);
//$arr = gettype($data);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection$json = file_get_contents("php://input");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$firstName =  mysqli_real_escape_string($conn, $data['firstName']);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$employeeInfo = array();

$query = "SELECT * FROM  employee where 'firstName' = $firstName"; 
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $output[] = $row;
    }
    $employeeInfoJson = json_encode($employeeInfo);
    echo($employeeInfoJson);
}

?>