<?php
///////////////////////////////////////////

function getStatus($id = null){

    if($id){
        $sql_query = "select * from
                      wa_status S,
                      wa_category C,
                      wa_node N
                      where
                      N.n_id = S.n_id AND
                      S.c_id = C.c_id and
                      N.n_id=".$id;
    } else {
        $sql_query = "select * FROM
                      wa_status S,
                      wa_category C,
                      wa_node N where
                      S.c_id = C.c_id and
                      N.n_id = S.n_id";
    }
    try {
        $dbCon = getConnection();
        $stmt   = $dbCon->query($sql_query);
        if($id) {
            $Status  = $stmt->fetchAll(PDO::FETCH_OBJ);
            $obj = new stdClass();
            $obj->status = $Status;
            echo json_encode($obj   );
        } else {
            $Status  = $stmt->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($Status);
        }
        $dbCon = null;

    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}




function createStatus($app){

    $login_detail = getLogin($app,false);

    echo '<pre>';

    print_r($login_detail);

    $request = $app->request();
    $body = json_decode($request->getBody());
    $status_data = $body[0]->status;

    $c_id = '';
    $u_id = $login_detail->u_id;
    $c_description = '';
    foreach ($status_data as $tag) {
        if($tag->name == 'c_id'){
            $c_id = $tag->value;
        }
        if($tag->name == 's_content'){
            $s_content = $tag->value;
        }
    }
    $sql_node="INSERT INTO wa_node set
			n_type			=	'status',
			n_title			=	'',
			u_id			=	'".$u_id."',
			n_create_date	=	now(),
			n_upadate		=	now(),
			n_alias			=	''
		 ";
    $dbCon = getConnection();
    $dbCon->query($sql_node);
    $n_id = $dbCon->lastInsertId();

    $sql_status="INSERT INTO wa_status set
			n_id			=	'".$n_id."',
			c_id			=	'".$c_id."',
			s_content	=	'".$s_content."'
			";
    $dbCon->query($sql_status);
    $dbCon = null;
}


function updateStatus($n_id,$app){
    $dbCon = getConnection();
    $request = $app->request();
    $body = json_decode($request->getBody());
    $status_data = $body[0]->status;
    $c_id       = $status_data[0]->value;
    $s_content  = $status_data[1]->value;
    $status_query = 'UPDATE wa_status SET c_id="'.$c_id.'",s_content = "'.$s_content.'" WHERE n_id='.$n_id;
    $dbCon->query($status_query);
}

function updateStatusStatus($id,$app){
    try {
        $request = $app->request();
        $body = json_decode($request->getBody());
        if($body->status){
            $sql_query = 'UPDATE wa_node SET n_status=1,n_upadate = now() WHERE n_id='.$id;
        } else {
            $sql_query = 'UPDATE wa_node SET n_status=0,n_upadate = now() WHERE n_id='.$id;
        };
        $dbCon = getConnection();
        $dbCon->query($sql_query);
        $output = '{n_id:'.$id.',n_status:'.$body->status.'}';
        echo json_encode($output);
    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

}

?>