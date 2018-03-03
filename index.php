<?php 
	include('include/auth.php');
	$bdd = new db();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>The Joke Hub</title>
    <?php 
        include 'include/style.php';
    ?>
    <script>
        function GoTo(){
            window.open('http://thejokehub.com/admin/#!/signup', '_blank');
        }
    </script>
</head>
<body>
    <?php
        include 'include/nav.php';
    ?>
    <!-- Header with Background Image -->
    <header class="business-header">
        <div class="container">
            <div class="row">
                <div class="col align-self-end"></div>
                <div class="col-lg-8 align-self-end text-center ">
                    <h1 class="display-4 mt-4">Get Paid to Write</h1>
                    <h2 class="h1 mt-2">Jokes on TheJokeHub</h2>
                    <h3 class="text-info mt-2 font-weight-bold">Earn Rs 1000 - Rs 10000 Per Month!</h3>
                    <button onclick="GoTo();" type="button" class="btn btn-outline-primary mt-4">
                        <span class="h3"> Click Here To Start Now</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Page Content -->
    <div class="container border-top">

        <div class="row">
            <div class="col-sm-12 text-center">
                <h2 class="mt-4">What We Do</h2>

                <p class="lead">Looking for New & Best Jokes? We at TheJokeHub have Biggest Collection of Jokes in Hindi as well as Jokes in English.</p>
                <p class="lead">We also pay for writing Jokes for us. Our Writers add latest Hindi Jokes & English Jokes daily.</p>
                <p class="lead">We have lot of joke categories to choose from. You just name it and we have it. So check out all Jokes we have, and share jokes with friends everyday.</p>
                <a class="btn btn-primary btn-lg" href="/admin/#!/signup" target="_blank">Start Writing</a>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <?php
            $cat = $bdd->getAll("select * from jh_main_category C, jh_node N where N.n_id = C.n_id and N.n_status = 1");
            foreach ($cat as $value) {
            ?>
            <div class="col-sm-4 my-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Recent in
                            <?php
                            echo $value['n_title'];
                            ?>
                        </h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                        <a href="/<?php echo $value['n_alias']; ?>"  class="btn-link">All <?php
                            echo $value['n_title'];
                            ?> <i class="fa fa-chevron-circle-right"></i></a>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
    <?php
        include 'include/footer.php';
    ?>
    <?php
        include 'include/script.php';
    ?>
</body>
</html>
