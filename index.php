<?php 
	include('include/auth.php');
	$bdd = new db();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Joke Hub</title>
    <?php 
        include 'include/style.php';
    ?>
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <?php
        include 'include/nav.php';
    ?>
   <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <img class="w-100" src="/images/main-image.jpg" alt="">
                <hr>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?</p>
                <div class="row">
                    <?php
                        $cat = $bdd->getAll("select * from jh_main_category C, jh_node N where N.n_id = C.n_id and N.n_status = 1");
                        foreach ($cat as $value) {
                            ?>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <div class="card-block">
                                            <h5 class="card-title">
                                                Recent in     
                                                <?php
                                                    echo $value['n_title'];
                                                ?>        
                                            </h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="/mainCategory.php?id=<?php echo $value['mc_id']; ?>" class="card-link">All <?php
                                                    echo $value['n_title'];
                                                ?> <i class="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                        
                                    </div>
                                </div>
                            <?php 
                        }
                    ?>
                </div>
            </div>
            <div class="col-md-4">
                <?php 
                    include 'include/sidebar.php';
                ?>
            </div>
        </div>
        <hr>
        <?php 
            include 'include/footer.php';
        ?>
    </div>
    <?php 
        include 'include/script.php';
    ?>
</body>
</html>
