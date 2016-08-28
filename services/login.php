<?php


function getLogin($app,$login_request){


    $auth = $app->request()->headers()->get('Authorization');
    $last_login_time = null;
    if($login_request){
        $data = preg_split("/:/",base64_decode($auth));
    } else {
        $auth = base64_decode($auth);
        $data = preg_split("/~/",$auth);
        $last_login_time = $data[2];
    }

    $user_name  = $data[0];
    $password   = $data[1];


    $user_query = "select * from jh_user WHERE u_email='".$user_name."' and u_pwd = '".$password."'";
    $dbCon = getConnection();
    $stmt_user  = $dbCon->query($user_query);
    $login_data = $stmt_user->fetchAll(PDO::FETCH_NUM);
    $date = new DateTime();
    $current_time = $date->getTimestamp();
    $separator = '~';
    $is_login = new stdClass();

    function getPrivilege($id){
    	$user_data = new stdClass();
        $dbCon = getConnection();
        $sql_privilege_query = "select * FROM jh_user_privilege P, jh_user_detail U where P.u_id = U.u_id and U.u_id = ".$id;
        $privilege_query_r = $dbCon->query($sql_privilege_query);
        $privilege_node = null;
        while($row = $privilege_query_r->fetch(PDO::FETCH_ASSOC)) {
            $user_data->privilege = $row['privilege'];
            $user_data->u_name = $row['u_name'];
        }
        return $user_data;
    }

    if($login_data){
        $u_id = $login_data[0][0];
        $user_data = getPrivilege($u_id);
        $is_login->is_login = true;
        $is_login->u_id = $u_id;
        $is_login->status = $login_data[0][3];
        $is_login->privilege = $user_data->privilege;
        $is_login->name = $user_data->u_name;
        $is_login->token = base64_encode($user_name.$separator.$password.$separator.$current_time);
    } else {
        $is_login->is_login = false;
    }
    return $is_login;
}



function authenticate($app){
	try {
        $dbCon = getConnection();
        $is_login = getLogin($app,true);
        if($is_login->is_login){
            $u_id = $is_login->u_id;
            $_user_query  = "select * from jh_user D WHERE u_id = '".$u_id."'";
            $_stmt_user   = $dbCon->query($_user_query);
            $_user_data   = $_stmt_user->fetchAll(PDO::FETCH_OBJ);
            $is_active    = $is_login->status;
            $_user_data[0]->token       = $is_login->token;
            $_user_data[0]->privilege   = $is_login->privilege;
            $_user_data[0]->name		= $is_login->name;
            if($is_active) {
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