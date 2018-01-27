<?php
function getConnection() {
    try {
        $db_username = "root";
        $db_password = "";
        $db_name = "jokehub";
        //$db_username = "jokehiom_main";
        //$db_password = ";R1{KCoK1.%c";
        //$db_name = "jokehiom_main_web";
        $conn = new PDO('mysql:host=localhost;dbname='.$db_name, $db_username, $db_password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }
    return $conn;
}

?>