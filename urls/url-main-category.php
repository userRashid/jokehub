<?php
$request = explode('/',$_REQUEST['q'] );

if($request[0] == 'category'){
    include('auth.php');
    $bdd = new db();
    if(isset($request[1])) {
    	//echo '<pre>';
    	$sql = "select n_id from jh_node where n_alias = '" . $request[1] . "'";
        $row_n = $bdd->getOne($sql);
        $n_id = $row_n['n_id'];
    }
    include_once '../category-data.php';
}

?>