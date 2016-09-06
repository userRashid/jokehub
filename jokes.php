<?php 
include('include/auth.php'); // call db.class.php
	$bdd = new db(); // create a new object, class db()
	function getConnection() {
	    try {
	        $db_username = "root";
	        $db_password = "";
	        $conn = new PDO('mysql:host=localhost;dbname=jokehub', $db_username, $db_password);
			$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    } catch(PDOException $e) {
	        echo 'ERROR: ' . $e->getMessage();
	    }
    	return $conn;
	}



                    $id=$_GET['id'];
                    $sql_query = "select * from jh_node N, jh_category C where N.n_id = C.n_id and C.mc_id = ".$id;
                
                    $con = $bdd->connect();
                    $statement = $con->query($sql_query);
                    $result = $statement->fetchAll(PDO::FETCH_ASSOC);
    			    echo "<div class='row'>";
    			    foreach ($result as $key => $value) {
	  					echo "<div class='col-sm-6'><h3><a href='jokes.php?id=".$value['n_id']."'>".$value['n_title']."</a></h3></div>";
	  					# code...
	  				}
	  				echo '</div>';
	  			?>	