<?php
// Create Insert Query
class Functions{
	function __construct(){
			//echo '__construct Called';
		}

				private	function CreateInsertQuery($object){
				$query = '';
				foreach ($object as $tag) {
			        $query.= $tag->name ."='".$tag->value."',";
			    }
			    $query = substr($query,0,strlen($query)-1);
			    return $query;
			}


			private function Alias($title){

			$url_alias = strtolower (str_replace(" ","-",$title));
			return $url_alias;

			}


			 private function Create($c_text,$u_id){

			 $node_query = "INSERT INTO jh_node set
					    	n_title			=	'".$c_text."',
					    	u_id            =   '".$u_id."',
					    	n_create_date   =   now(),
					    	n_status    	=	'1',
					    	n_alias			=	'".$this->Alias($c_text)."'
					    	";   
					    $dbCon = getConnection();
					    $dbCon->query($node_query);
					    $n_id 	= $dbCon->lastInsertId();
					    return $n_id;
			}
			public function CreateNode($c_text,$u_id){
				return $this->Create($c_text,$u_id);
			}
}
?>