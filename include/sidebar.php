<div class="card my-4">
    <h5 class="card-header">Search</h5>
    <div class="card-body">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button">Go!</button>
                </span>
        </div>
    </div>
</div>
<div class="card my-4">
    <h5 class="card-header">Categories</h5>
    <div class="card-body">
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
                        echo '<li class="font-weight-bold"><a href="/category/'.$value['n_alias'].'">'.$value['n_title'].'</a></li>';
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="card my-4">
    <h5 class="card-header">Find us on social</h5>
    <div class="card-body">
        <button type="button" class="btn btn-primary"><i class="fa fa-facebook"></i></button>
        <button type="button" class="btn btn-danger"><i class="fa fa-google-plus"></i></button>
        <button type="button" class="btn btn-info"><i class="fa fa-twitter"></i></button>
        <button type="button" class="btn btn-danger"><i class="fa fa-instagram"></i></button>
    </div>
</div>