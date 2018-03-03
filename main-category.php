<?php
    if($n_id == ''){
        echo '404';
        exit;
    }
    $main_query = "select * from jh_main_category M, jh_node N where  M.n_id = N.n_id and 
        N.n_status = 1 and M.mc_id = ".$n_id;
    $main_category = $bdd->getOne($main_query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title><?php echo $main_category['n_title']; ?> - The Joke Hub</title>
    <?php 
        include 'include/style.php';
    ?>
</head>
<body>
    <?php
        include 'include/nav.php';
    ?>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h3 class="my-4">
                    <small><?php echo $main_category['n_title'];?></small>
                </h3>
                <div class="card mb-4">
                    <img class="card-img-top" src="/images/main-image.jpg" alt="<?php echo $main_category['n_title']; ?> - The Joke Hub">
                    <div class="card-body">
                        <p class="card-text"><?php echo $main_category['c_description']; ?></p>
                    </div>
                </div>
                <div class="row mb-5">
                    <?php
                    $category_sql = "select * from jh_category C, jh_node N where N.n_id = C.n_id and N.n_status = 1 and C.mc_id = ".$main_category['mc_id'];
                    $category = $bdd->getAll($category_sql);
                    foreach ($category as $value) {
                        ?>
                        <div class="col-sm-6 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">
                                        <?php
                                        echo $value['n_title'];
                                        ?>
                                    </h4>
                                    <p class="card-text text-ellipsis">
                                        <?php echo $value['c_description']; ?>
                                    </p>
                                    <a href="/category/<?php echo $value['n_alias']; ?>" class="btn-link">All <?php
                                        echo $value['n_title'];
                                        ?> <i class="fa fa-chevron-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
            </div>
            <div class="col-md-4">
                <?php
                    include 'include/sidebar.php';
                ?>
            </div>
        </div>
    </div>
    <?php
        include 'include/footer.php';
        include 'include/script.php';
    ?>
</body>
</html>
