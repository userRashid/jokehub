<?php

function getItinerary($id = null){
    $dbCon = getConnection();
    try {
        if($id){
            $sql_query_node = "select * FROM  wa_category C, wa_node N where C.n_id = N.n_id and N.n_id = $id";
            $stmt_node   = $dbCon->query($sql_query_node);
            $category_node  = $stmt_node->fetchAll(PDO::FETCH_OBJ);
            $sql_query_seo = "select * FROM  wa_seo where se_id = ".$category_node[0]->se_id;
            $stmt_seo   = $dbCon->query($sql_query_seo);
            $category_seo  = $stmt_seo->fetchAll(PDO::FETCH_OBJ);
            $obj = new stdClass();
            $obj->details=$category_node;
            $obj->seo_data = $category_seo;
            echo json_encode($obj);
        } else {
            $sql_query = "select * FROM mij_itinerary";
			$stmt   = $dbCon->query($sql_query);
            $category  = $stmt->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($category);
        }
        $dbCon = null;
    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function createItinerary($app){
    $request = $app->request();
    $dbCon = getConnection();
    $itinerary = json_decode($request->getBody());
    $sql_itinerary="INSERT INTO mij_itinerary set ".CreateInsertQuery($itinerary)."";
    $dbCon->query($sql_itinerary);
    $itinerary_id = '{id:'.$dbCon->lastInsertId().',msg:Record save successfully save}';
	$dbCon = null;
	echo json_encode($itinerary_id);
}

function updateCategoryStatus($id,$app){
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


function deleteCategory($id){
    try {
        $sql_query = 'DELETE FROM wa_node WHERE n_id='.$id;
        $dbCon = getConnection();
        $dbCon->query($sql_query);
        $output = '{n_id:'.$id.',n_status:delete}';
        echo json_encode($output);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }

}

function updateCategory($n_id,$app){
    $request = $app->request();
    $body = json_decode($request->getBody());
    $seo_data = $body[0]->seo_data;
    $details = $body[1]->details;
    $cat_data = "select * from wa_category where n_id =".$n_id;
    $dbCon = getConnection();
    $stmt   = $dbCon->query($cat_data);
    $cat_result  = $stmt->fetchAll(PDO::FETCH_OBJ);
    $se_id = $cat_result[0]->se_id;


    $node_title = $details[0]->value;
    $node_c_description = $details[1]->value;
    $node_query = 'UPDATE wa_node SET n_title="'.$node_title.'",n_upadate = now() WHERE n_id='.$n_id;
    $dbCon->query($node_query);

    $category_query = 'UPDATE wa_category SET c_description="'.$node_c_description.'" WHERE n_id='.$n_id;
    $dbCon->query($category_query);

    $se_title           =  $seo_data[0]->value ;
    $se_description     =  $seo_data[1]->value ;
    $se_keywords        =  $seo_data[2]->value ;
    $se_og_title        =  $seo_data[3]->value ;
    $se_og_description  =  $seo_data[4]->value ;
    $se_og_image        =  $seo_data[5]->value ;


    $seo_query = 'UPDATE wa_seo SET se_title="'.$se_title.'",
                                    se_description="'.$se_description.'",
                                    se_keywords="'.$se_keywords.'",
                                    se_og_title="'.$se_og_title.'",
                                    se_og_description="'.$se_og_description.'",
                                    se_og_image="'.$se_og_image.'"
                                    WHERE se_id='.$se_id;
    $dbCon->query($seo_query);

}

?>