<!-- Blog Search Well -->
<div class="card p-a-1">
    <h5>Search</h5>
    <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
            <button class="btn btn-primary" type="button">
                <span class="fa fa-search"></span>
            </button>
        </span>
    </div>
    <!-- /.input-group -->
</div>

<!-- Blog Categories Well -->
<div class="card m-y-1 p-a-1">
    <h5>Categories</h5>
    <div class="row">
        <div class="col-lg-12">
            <ul class="list-unstyled">
            	<?php 
                    if(isset($_GET['id']) && !empty($_GET['id'])){
                        $id=$_GET['id'];
                        $query = "select * from jh_category C, jh_node N where  N.n_id = C.n_id and 
                            N.n_status = 1 and C.mc_id = ".$id;          
                    } else {
            		    $query = "select * from jh_category C, jh_node N where  N.n_id = C.n_id and 
                            N.n_status = 1";
					}
                    $cat = $bdd->getAll($query);
                    foreach ($cat as $value) {
					    echo '<li class="font-weight-bold"><a class="text-capitalize" href="/category/'.$value['n_alias'].'">'.$value['n_title'].'</a></li>';
					}
            	?>
            </ul>
        </div>
    </div>
    <!-- /.row -->
</div>

<!-- Side Widget Well -->
<div class="card p-a-1">
    <h5 class="text-capitalize">find us on social</h5>
    <button type="button" class="btn btn-primary"><i class="fa fa-facebook"></i></button>
    <button type="button" class="btn btn-danger"><i class="fa fa-google-plus"></i></button>
    <button type="button" class="btn btn-info"><i class="fa fa-twitter"></i></button>
    <button type="button" class="btn btn-danger"><i class="fa fa-instagram"></i></button>
</div>