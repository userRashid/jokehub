<?php

function getContents($id = null){
	try {
	 	if($id){
	 		$sql_query = "select * from jh_content X, jh_category C,jh_node, jh_main_category Y where X.n_id = C.n_id and Y.mc_id = ".$id;
	 	 	 		
		} else {
	 		$sql_query = "select * from jh_content X, jh_category C where X.n_id = C.n_id";
	 	}
	 	
	 	$dbCon = getConnection();
        $stmt   = $dbCon->query($sql_query);
    	$catdata =array();
    	while ( $row= $stmt->fetch(PDO::FETCH_ASSOC)) {
	    	$obj = new stdClass();
    		$obj->id 		= $row['n_id'];
    		$obj->n_id 		= $row['n_id'];
    		$obj->mc_id 	= $row['mc_id'];
    		$obj->co_content 	= $row['co_content'];
    		$obj->c_description 	= $row['c_description'];
    		$obj->n_title= $row['n_title'];
    		$catdata[]=$obj;
    	}
        echo json_encode($catdata);
 	}
 	catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}


?>