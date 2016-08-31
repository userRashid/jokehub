<?php

function createJokes($app){

    try {
	    $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app);
		if($is_login->is_login){
			$request    = $app->request();
		    $body       = json_decode($request->getBody());
		    $c_text    = $body->name;
		    $j_content   = $body->content;
		    $n_type    = '';
		    $u_id='';
		    $node_query = "INSERT INTO jh_node set
		    	n_title			=	'".$c_text."',
		    	u_id            =   '".$u_id."',
		    	n_create_date   =   now(),
		    	n_status    	=	'1',
		    	n_alias			=	''
		    	";   
		    $dbCon = getConnection();
		    $dbCon->query($node_query);
		    $n_id 	= $dbCon->lastInsertId();
		    $c_id	= 0;
		    $img_id	= 0;      
		    $cat_data_query = "INSERT INTO jh_jokes set
		    	n_id		=	'".$n_id."',
		    	C_id		=	'".$c_id."',
		    	j_content = '".$j_content."'
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