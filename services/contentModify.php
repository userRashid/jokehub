<?php

function makePublish($id,$app){
	try {
	    $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app);
		if($is_login->is_login){
			$node_publish = "UPDATE jh_node SET 
				n_status =	1,
				n_upadate = now() 
				WHERE n_id=".$id;  
		    $dbCon = getConnection();
		    $dbCon->query($node_publish);
		    $app->response()->body(json_encode('Content published'));
		} else {
            $app->response()->status(401);
            $app->response()->body(json_encode('Please enter valid user and password'));
        }
	}
	catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    } 
}

function makeUnpublish($id,$app){
	try {
	    $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app);
		if($is_login->is_login){
			$node_unpublish = "UPDATE jh_node SET 
				n_status =	0,
				n_upadate = now() 
				WHERE n_id=".$id;  
		    $dbCon = getConnection();  
		    $dbCon = getConnection();
		    $dbCon->query($node_unpublish);
		    $app->response()->body(json_encode('Content unpublished'));
		} else {
            $app->response()->status(401);
            $app->response()->body(json_encode('Please enter valid user and password'));
        }
	}
	catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    } 
}

?>