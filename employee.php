<?php
echo "<h2>PHP is Fun!</h2>";

$connect = mysqli_connect("localhost", "root", "", "employees");
$data = json_decode(file_get_contents("php://input"));


    
	$query = "INSERT INTO employee(firstName, lastName) VALUES('Chad, 'Denan')"; 

	if(mysqli_query($connect, $query)) {
		echo "Data Inserted...." ;
	} else {
		echo "Sorry....";
	}



?>