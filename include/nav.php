<!-- Navigation -->
<nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div class="container">
        <div class="navbar-header">
            <a style="padding:5px 15px" class="navbar-brand" href="/"><img src="/images/logo.png" /></a>
        </div>
        <ul class="nav navbar-nav">
            <?php 
            $cat = $bdd->getAll("select * from jh_main_category C, jh_node N where N.n_id = C.n_id and N.n_status = 1");
            foreach ($cat as $value) {
                echo '<li class="nav-item"><a class="nav-link" href="/mainCategory.php?id='.$value['mc_id'].'">'.$value['n_title'].'</a></li>';
            }
            ?>
        </ul>
    </div>
</nav>