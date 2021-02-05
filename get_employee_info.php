<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employees";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$output = array();

$query = "SELECT * FROM  employee"; 
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $output[] = $row;
    }
    $output_json = json_encode($output);
    echo($output_json);
}

?>