<?php

function authenticate($app){
	try {
        $dbCon = getConnection();
        $auth = new Authenticate();
		$is_login = $auth->validateUser($app,true);
        if($is_login->is_login){
            if($is_login->status) {
				$_user_data = new stdClass();
	        	$_user_data->u_id 		= $is_login->u_id;
	        	$_user_data->alias		= $is_login->u_alias;
	        	$_user_data->token		= $is_login->token;
	        	$_user_data->privilege	= $is_login->privilege;
	        	$_user_data->name		= $is_login->name;
                echo json_encode($_user_data);
            } else {
                $app->response()->status(401);
                $app->response()->body(json_encode('You are not a valid user, please contact Admin'));
            }
        } else {
            $app->response()->status(401);
            $app->response()->body(json_encode('Please enter valid user and password'));
        }
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

?>