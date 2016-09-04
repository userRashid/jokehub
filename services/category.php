<?php


function createCategory($app){
	try {
	    $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app);
		if($is_login->is_login){
			$node    = new Functions();	   
			$request = $app->request();
		    $body   = json_decode($request->getBody());
		    $c_text = $body->name;
		    $c_desc = $body->description;
		    $u_id   = $is_login->u_id;
		    $n_id 	= $node->CreateNode($c_text,$u_id,'category');
		    $mc_id	= $body->mainCategory;
		    $se_id	= 0;
		    $img_id	= 0;      
		    $cat_data_query = "INSERT INTO jh_category set
		    	n_id		=  '".$n_id."',
		    	mc_id       =  '".$mc_id."',
		    	se_id		=  '".$se_id."',
		    	img_id      =  '".$img_id."',
		    	c_description = '".$c_desc."'
		    ";    		
		    $dbCon->query($cat_data_query);
		} else {
            $app->response()->status(401);
            $app->response()->body(json_encode('Please enter valid user and password'));
        }
	}

	catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    } 
 }

 function getCategory($id = null){
 	try {
	 	if($id){
	 		$sql_query = "select * from jh_node N, jh_category C where N.n_id = C.n_id and N.n_id = ".$id;
	 	} else {
	 		$sql_query = "select * from jh_node N, jh_category C where N.n_id = C.n_id";
	 	}
	 	$dbCon = getConnection();
        $stmt   = $dbCon->query($sql_query);
    	$catdata =array();
    	while ( $row= $stmt->fetch(PDO::FETCH_ASSOC)) {
	    	$obj = new stdClass();
    		$obj->id 		= $row['n_id'];
    		$obj->n_id 		= $row['n_id'];
    		$obj->title 	= $row['n_title'];
    		$obj->status 	= $row['n_status'];
    		$catdata[]=$obj;
    	}
        echo json_encode($catdata);
 	}
 	catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }      
 }

?>