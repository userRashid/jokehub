<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="padding: 0px;">
    <div class="container">
        <a style="padding:0px 15px" class="navbar-brand" href="/"><img src="/images/logo.png" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mr-auto">
                <?php
                $cat = $bdd->getAll("select * from jh_main_category C, jh_node N where N.n_id = C.n_id and N.n_status = 1");
                foreach ($cat as $value) {
                    echo '<li class="nav-item"><a class="nav-link" href="/'.$value['n_alias'].'">'.$value['n_title'].'</a></li>';
                }
                ?>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="/admin/#!/login">Login</a></li>
                <li class="nav-item"><a class="nav-link" href="/admin/#!/signup">Sign up</a></li>
            </ul>
        </div>
    </div>
</nav>