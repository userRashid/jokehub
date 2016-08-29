<?php


function createCategory($app){
    $request    = $app->request();
    $body       = json_decode($request->getBody());
   //print_r($body);
        $c_text    = $body->name;
        $c_desc    = $body->description;
        $n_type    = '';
        $u_id='';
        $node_query = "INSERT INTO jh_node set
    			n_title			=	'".$c_text."',
    			u_id            =   '".$u_id."',
    			n_create_date   =   now(),
    			n_status    	=	'1',
    			n_alias			=	''
    		 ";   
    		// echo $cat_query; 		
        $dbCon = getConnection();
        $dbCon->query($node_query);
        $n_id = $dbCon->lastInsertId();
        $se_id='';
        $img_id='';      
        $cat_data_query = "INSERT INTO jh_category set
    			n_id		=	'".$n_id."',
    			se_id		=	'".$se_id."',
    			img_id      = '".$img_id."',
    			c_description = '".$c_desc."'
    		 ";    		
        // echo $cat_data_query;
        $dbCon->query($cat_data_query);
       
            
}


?>