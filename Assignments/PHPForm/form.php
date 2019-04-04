<!DOCTYPE html>
<html>
<body>
    <form method="post">
    <input name="game">
    <button>Game Search</button>
    </form>
</body>
</html>

<?php
    $servername = "localhost";
    $username = "austinke_admin";
    $password = "password";
    $dbname = "austinke_class01";
    $theSubject = $_POST['game'];
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    $sql = "SELECT * FROM `Favorite Games` WHERE `Name` = '$theSubject'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $name = $row['Name'];
            $release = $row['Release_Date'];
            $score = $row['Review_Score'];
        }
        echo "Game Name: $name<br> Release Date: $release<br> Review Score: $score<br>";
    } else {
        echo "<br>0 results";
    }
    $conn->close();
?> 