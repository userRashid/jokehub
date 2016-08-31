<?php
// Create Insert Query

function CreateInsertQuery($object){
	$query = '';
	foreach ($object as $tag) {
        $query.= $tag->name ."='".$tag->value."',";
    }
    $query = substr($query,0,strlen($query)-1);
    return $query;
}
function Alias($title){

$url_alias = strtolower (str_replace(" ","-",$title));
return $url_alias;

}
?>