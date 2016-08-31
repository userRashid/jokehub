<?php
	class Authenticate {
		
		function __construct(){
			//echo '__construct Called';
		}
		
		
		private function login($user_name, $password) {
	    	$user_query = "select * from jh_user WHERE u_email='".$user_name."' and u_pwd = '".$password."'";
	    	$dbCon = getConnection();
    		$stmt_user  = $dbCon->query($user_query);
    		$login_data = $stmt_user->fetchAll(PDO::FETCH_ASSOC);
    		return $login_data;
	   	}
	   	
		private function privilege($id){
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
		
		function validateUser($object,$from_login = false){
        	$login = new stdClass();
        	
        	$user_name  = null;
    		$password   = null;
    		$last_login_time = null;
    		$separator = '~';
    		$date = new DateTime();
    		$current_time = $date->getTimestamp();
    			
        	$header = $object->request()->headers()->get('Authorization');
        	
        	if($from_login) {
        		$login_info = preg_split("/:/",base64_decode($header));
        		$user_name  = $login_info[0];
    			$password   = $login_info[1];
        	} else {
        		$login_info = preg_split("/~/",base64_decode($header));
        		$user_name  = $login_info[0];
    			$password   = $login_info[1];
    			$last_login_time = $login_info[2];
        	}
			if($user_name  && $password ){ // DOTO need to check timeout here $last_login_time
				$login_data = $this->login($password, $password);
				$u_id 		= $login_data[0]['u_id'];
		        $user_data 	= $this->privilege($u_id);
			        
		        $login->is_login 	= true;
		        $login->u_id 		= $u_id;
		        $login->status 		= $login_data[0]['u_status'];
		        $login->privilege 	= $user_data->privilege;
		        $login->name 		= $user_data->u_name;
		        $login->u_alias 	= $login_data[0]['u_alias'];
		        $login->token 		= base64_encode($user_name.$separator.$password.$separator.$current_time);
		    } else {
		        $login->is_login = false;
		    }
        	return $login;
      	}		
	}
?>