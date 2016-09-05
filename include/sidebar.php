<!-- Blog Search Well -->
<div class="well">
    <h4>Blog Search</h4>
    <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
            <button class="btn btn-default" type="button">
                <span class="glyphicon glyphicon-search"></span>
        </button>
        </span>
    </div>
    <!-- /.input-group -->
</div>

<!-- Blog Categories Well -->
<div class="well">
    <h4>Blog Categories</h4>
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
					    echo '<li><h4><a href="category.php?id='.$value['n_id'].'">'.$value['n_title'].'</a></h4></li>';
					}
            	?>
            </ul>
        </div>
    </div>
    <!-- /.row -->
</div>

<!-- Side Widget Well -->
<div class="well">
    <h4>Side Widget Well</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
</div>