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
    <title>Privacy Policy - Joke Hub</title>
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
                <img class="w-100" src="/images/privacy-policy.jpg" alt="">
                <hr>
                <p class="lead">
                    <h2>Privacy Policy</h2>
                    <p>
                        Joke hub owns no right to any content. We are not responsible for the content that are offensive to people. content are posted by the people for the people.<br />
                        This website uses Google AdSense. That means Google might look at your browsing history, click behavior, etc., to determine what ads to display. We also use Google Analytics to monitor who's visiting.
                    </p>
                    <h5>What information do we collect?</h5>
                    <p>
                        Google, as a third party vendor, uses cookies to serve ads on your site. Google's use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
                    </p>
                    <h5>What do we use your information for?</h5>
                    <p>
                        Any of the information we collect from you may be used in one of the following ways:
                        <br />
                        To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)
                    </p>
                    <h5>Do we use cookies?</h5>
                    <p>
                        Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information<br>
                        We use cookies to understand and save your preferences for future visits.
                    </p>
                    <h5>Terms and Conditions</h5>
                    <p>
                        Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at <a href="http://www.jokehub.in">http://www.jokehub.in</a>
                    </p>    
                    <h5>Your Consent</h5>
                    <p>
                        By using our site, you consent to our privacy policy. Changes to our Privacy Policy. If we decide to change our privacy policy, we will post those changes on this page.
                    </p>
                    <h5>Contacting Us</h5>
                    <p>
                        If there are any questions regarding this privacy policy you may contact us by email. Email us.
                    </p>      
                </p>
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
        include '/include/script.php';
    ?>
</body>
</html>
