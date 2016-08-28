<?php

function createUser($app){
    $request    = $app->request();
    $body       = json_decode($request->getBody());
    $login_data     = $body[0]->login;
    $detail_data    = $body[1]->detail;
    $privilege_data = $body[2]->privilege;
    $u_email    = $login_data[0]->value;
    $u_pwd      = $login_data[1]->value;
    $login_query = "INSERT INTO wa_user set
			u_email			=	'".$u_email."',
			u_pwd			=	'".$u_pwd."',
			u_create_date   =   now(),
			u_status    	=	'0',
			u_alias			=	''
		 ";
    $dbCon = getConnection();
    $dbCon->query($login_query);
    $u_id = $dbCon->lastInsertId();
    $privilege  =   serialize($privilege_data[0]->value);
    $privilege_query = "INSERT INTO wa_user_privilege set
			u_id			=	'".$u_id."',
			privilege		=	'".$privilege."'
		 ";
    $dbCon->query($privilege_query);
    $u_name      = $detail_data[0]->value;
    $ud_country  = $detail_data[1]->value;
    $ud_sex      = $detail_data[2]->value;
    $ud_about    = $detail_data[3]->value;
    $ud_dob      = $detail_data[4]->value;
    $ud_title    = $detail_data[5]->value;
    $ud_image    = '';
    $ud_address  = $detail_data[7]->value;
    $ud_phone    = $detail_data[8]->value;
    $detail_query = "INSERT INTO wa_user_detail set
			u_id            =   '".$u_id."',
			u_name			=	'".$u_name."',
			ud_country		=	'".$ud_country."',
			ud_sex          =   '".$ud_sex."',
			ud_about    	=	'".$ud_about."',
			ud_dob			=	'".$ud_dob."',
			ud_title		=	'".$ud_title."',
			ud_image		=	'".$ud_image."',
			ud_address		=	'".$ud_address."',
			ud_phone		=	'".$ud_phone."'
		 ";
    $dbCon->query($detail_query);
    $u_alias    = $url_alias = strtolower (str_replace(" ","-",$u_name));
    $u_alias    .= $u_alias."-".$u_id;
    $login_query_update = 'UPDATE wa_user SET u_alias="'.$u_alias.'" WHERE u_id='.$u_id;
    $dbCon->query($login_query_update);
}


function getUser($id = null){
    $dbCon = getConnection();
    try {
        if($id){
            $sql_login_query = "select * FROM  wa_user where u_id = $id";
            $login_node_r   = $dbCon->query($sql_login_query);
            $login_node  = $login_node_r->fetchAll(PDO::FETCH_OBJ);
            $sql_detail_query = "select * FROM  wa_user_detail where u_id = ".$id;
            $detail_query_r   = $dbCon->query($sql_detail_query);
            $detail_node  = $detail_query_r->fetchAll(PDO::FETCH_OBJ);
            $sql_privilege_query = "select * FROM  wa_user_privilege where u_id = ".$id;
            $privilege_query_r = $dbCon->query($sql_privilege_query);
            $privilege_node = array();
            while($row = $privilege_query_r->fetch(PDO::FETCH_ASSOC)) {
                $_obj = new stdClass();
                $_obj->privilege = unserialize($row['privilege']);
                $privilege_node[] = $_obj;
            }
            $obj = new stdClass();
            $obj->login     = $login_node;
            $obj->detail    = $detail_node;
            $obj->privilege = $privilege_node;

            echo json_encode($obj);
        } else {
            $sql_query = "select * FROM wa_user U, wa_user_detail D, wa_user_privilege P where U.u_id = D.u_id and P.u_id = U.u_id";
            $stmt   = $dbCon->query($sql_query);
            $user = array();
            while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $obj = new stdClass();
                $obj->u_id      = $row['u_id'];
                $obj->u_email   = $row['u_email'];
                $obj->u_status  = $row['u_status'];
                $obj->u_name    = $row['u_name'];
                $obj->ud_sex    = $row['ud_sex'];
                $obj->ud_about  = $row['ud_about'];
                $obj->ud_dob    = $row['ud_dob'];
                $obj->ud_title  = $row['ud_title'];
                $obj->ud_image  = $row['ud_image'];
                $obj->ud_address= $row['ud_address'];
                $obj->ud_phone  = $row['ud_phone'];
                $obj->privilege = unserialize($row['privilege']);
                $user[] = $obj;
            }
            echo json_encode($user);
        }
        $dbCon = null;
    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function updateUserStatus($id,$app){
    try {
        $request = $app->request();
        $body = json_decode($request->getBody());
        if($body->status){
            $sql_query = 'UPDATE wa_user SET u_status=1 WHERE u_id='.$id;
        } else {
            $sql_query = 'UPDATE wa_user SET u_status=0 WHERE u_id='.$id;
        };
        $dbCon = getConnection();
        $dbCon->query($sql_query);
        $output = '{u_id:'.$id.',n_status:'.$body->status.'}';
        echo json_encode($output);
    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

};


function updateUser($id,$app){
    $request = $app->request();
    $body = json_decode($request->getBody());
    $login_data     =   $body[0]->login;
    $detail_data    =   $body[1]->detail;
    $privilege_data =   $body[2]->privilege;

    $dbCon = getConnection();
    //Login

    $u_name     = $detail_data[0]->value;
    $ud_country = $detail_data[1]->value;
    $ud_sex     = $detail_data[2]->value;
    $ud_about   = $detail_data[3]->value;
    $ud_dob     = $detail_data[4]->value;
    $ud_title   = $detail_data[5]->value;
    $ud_image   = $detail_data[6]->value;
    $ud_address = $detail_data[7]->value;
    $ud_phone   = $detail_data[8]->value;

    $detail_query = "UPDATE wa_user_detail SET
                        u_name			=	'".$u_name."',
			            ud_country		=	'".$ud_country."',
			            ud_sex          =   '".$ud_sex."',
			            ud_about    	=	'".$ud_about."',
			            ud_dob			=	'".$ud_dob."',
			            ud_title		=	'".$ud_title."',
			            ud_image		=	'".$ud_image."',
			            ud_address		=	'".$ud_address."',
			            ud_phone		=	'".$ud_phone."'
                        WHERE u_id=".$id;
    $dbCon->query($detail_query);

    $privilege  =   serialize($privilege_data[0]->value);
    $privilege_query = "UPDATE wa_user_privilege SET
			            privilege		=	'".$privilege."'
                        WHERE u_id=".$id;
    $dbCon->query($privilege_query);
}

?>