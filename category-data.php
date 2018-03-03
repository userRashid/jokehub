<?php 
    $main_query = "select * from jh_category C, jh_node N where  C.n_id = N.n_id and 
        N.n_status = 1 and C.n_id = ".$n_id;
    $main_category = $bdd->getOne($main_query);
?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title><?php echo $main_category['n_title']; ?> - The Joke Hub</title>
    <?php 
        include '../include/style.php';
    ?>
</head>
<body>
    <?php
        include '../include/nav.php';
    ?>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h1 class="mt-4"><?php echo $main_category['n_title']; ?></h1>
                <img class="img-fluid rounded" src="/images/main-image.jpg" alt="Jokes - The Joke Hub">
                <hr>
                <p class="lead"><?php echo $main_category['c_description']; ?></p>
                <?php
                $content_sql = "select * from jh_content C, jh_node N where N.n_id = C.n_id and N.n_status = 1 and C.c_id =".$main_category['c_id'];
                $content = $bdd->getAll($content_sql);
                foreach ($content as $value) { ?>
                    <div class='card my-4'>
                        <div class='card-body'>
                            <p><?php echo $value['co_content']; ?></p>
                            <i style="cursor: pointer" class="fa fa-2x fa-thumbs-o-up text-primary"></i>
                            <i style="cursor: pointer" class="px-2 fa fa-2x fa-smile-o text-success"></i>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <div class="col-md-4">
                <?php
                    include '../include/sidebar.php';
                ?>
            </div>
        </div>
    </div>
    <?php
        include '../include/footer.php';
        include '../include/script.php';
    ?>
</body>
</html>
