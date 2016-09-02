<?php
function createMainCategory($app){
	try {
	    $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app);

		if(true){
			$node = new Functions();	   
			$request    = $app->request();
		    $body       = json_decode($request->getBody());
		    print_r($body);
		    $c_text    = $body->name;
		    $c_desc    = $body->description;
		    $n_type    = '';
		    $u_id='5';
		    $n_id 	= $node->CreateNode($c_text,$u_id,'main-category');
		    echo $n_id;
		    $img_id	= 0;      
		    $cat_data_query = "INSERT INTO jh_main_category set
		      	n_id		=	'".$n_id."',
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

?>