<?php

function createContant($app){

    try {
	    $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app);
		if($is_login->is_login){
			$request    = $app->request();
		    $body       = json_decode($request->getBody());
		    $c_text    	= $body->name;
		    $co_content  = $body->description;
		    $u_id		=$is_login->u_id;
		  	$alias = strtolower (str_replace(" ","-",$c_text));
		    $node_query = "INSERT INTO jh_node set
		    	n_title			=	'".$c_text."',
		    	u_id            =   '".$u_id."',
		    	n_create_date   =   now(),
		    	n_status    	=	'1',
		    	n_alias			=	'".$alias."',
		    	n_type    		= 	'contant'
		    	";   
		    $dbCon = getConnection();
		    $dbCon->query($node_query);
		    $n_id 	= $dbCon->lastInsertId();
		    $c_id	= $body->category;
		    $img_id	= 0;      
		    $cat_data_query = "INSERT INTO jh_contant set
		    	n_id		=	'".$n_id."',
		    	c_id		=	'".$c_id."',
		    	co_content = '".$co_content."'
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


?>