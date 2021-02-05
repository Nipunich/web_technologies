<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "employees";

$name = file_get_contents("php://input");
print(file_get_contents("php://input"));

//convert the string of data to an array
$data = json_decode($name, true);
$arr = gettype($data);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection$json = file_get_contents("php://input");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$firstName =  mysqli_real_escape_string($conn, $data['firstName']);
$lastName = mysqli_real_escape_string($conn, $data['lastName']);

$sql = "INSERT INTO employee(firstName, lastname) VALUES ('$firstName', '$lastName')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>