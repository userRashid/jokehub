<?php 
    include('include/auth.php'); // call db.class.php
    $bdd = new db(); // create a new object, class db()
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

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/blog-post.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>
    <?php
        include 'include/nav.php';
    ?>

    <!-- Page Content -->
    <div class="container">

        <div class="row">

            <!-- Blog Post Content Column -->
            <div class="col-lg-8">

                <?php
                    $id=$_GET['id'];
                    $main_query = "select * from jh_main_category M, jh_node N where  M.n_id = N.n_id and 
                        N.n_status = 1 and M.mc_id = ".$id;
                    $main_category = $bdd->getOne($main_query);
                    //echo '<pre>';
                    //print_r($main_category);
                    //echo '</pre>';
                ?>    
                <!-- Blog Post -->

                <!-- Title -->
                <h1><?php echo $main_category['n_title']; ?></h1>

                <!-- Date/Time -->
                <hr>

                <!-- Preview Image -->
                <img class="img-responsive" src="http://placehold.it/900x300" alt="">

                <hr>

                <!-- Post Content -->
                <p class="lead"><?php echo $main_category['c_description']; ?></p>

            </div>

            <!-- Blog Sidebar Widgets Column -->
            <div class="col-md-4">
                <?php 
                    include 'include/sidebar.php';
                ?>
            </div>

        </div>
        <!-- /.row -->

        <hr>
        <?php 
            include 'include/footer.php';
        ?>

    </div>
    <!-- /.container -->

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>

</html>
