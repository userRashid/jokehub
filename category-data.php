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
    <title><?php echo $main_category['n_title']; ?> - Joke Hub</title>
    <?php 
        include '../include/style.php';
    ?>
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <?php
        include '../include/nav.php';
    ?>
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h3><?php echo $main_category['n_title']; ?></h3>
                <hr>
                <img class="w-100" src="http://placehold.it/900x300" alt="">
                <hr>
                <p><?php echo $main_category['c_description']; ?></p>
                <?php
                    $content_sql = "select * from jh_content C, jh_node N where N.n_id = C.n_id and N.n_status = 1 and C.c_id =".$main_category['c_id'];
                    $content = $bdd->getAll($content_sql);
                    foreach ($content as $value) {
                        echo "<div class='card'>";
                            echo "<div class='card-block'>";
                                echo "<h5>".$value['n_title']."</h5>";
                                echo "<p>".$value['co_content']."</p>";
                            echo "</div>";
                        echo "</div>";
                    }
                ?>
            </div>
            <div class="col-md-4">
                <?php 
                    include '../include/sidebar.php';
                ?>
            </div>

        </div>
        <hr>
        <?php 
            include '../include/footer.php';
        ?>
    </div>
    <?php 
        include '../include/script.php';
    ?>
</body>
</html>
