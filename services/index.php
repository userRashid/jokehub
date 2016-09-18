<?php

exit;

require 'Slim/Slim.php';
require 'connection.php';
require 'authenticate.php';
require 'function.php';
require 'login.php';
require 'user.php';
require 'category.php';
require 'main-category.php';
require 'content.php';
require 'contentModify.php';
require 'contents.php';
require ('vendor/CorsSlim.php');
//require 'vendor/CorsSlim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$corsOptions = array(
    "origin" => "*",
    "exposeHeaders" => array("Content-Type", "X-Requested-With", "X-authentication", "X-client"),
    "allowMethods" => array('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS')
);
//$cors = new \CorsSlim\CorsSlim();
$cors = new \vendor\CorsSlim($corsOptions);
$app->add($cors);

//Main Category
$app->post('/main-category', function () use ($app){
    createMainCategory($app);
});
$app->get('/main-category', function () use ($app){
    getMainCategory();
});
$app->get('/main-category/:id', function ($id) use ($app){
    getMainCategory($id);
});
$app->post('/main-category/:id', function ($id) use ($app){
    updateMainCategory($id,$app);
});
//Category
$app->post('/category', function () use ($app){
    createCategory($app);
});
$app->get('/category', function () use ($app){
    getCategory();
});
$app->get('/category/:id', function ($id) use ($app){
    getCategory($id);
});



// Jokes
$app->post('/content', function () use ($app){
    createContent($app);
});
$app->get('/contents/:id', function ($id) use ($app){
    getContents($id);
});

// Login
$app->post('/authenticate', function () use ($app){
    //echo 'callled';
    authenticate($app);

});

// User
$app->post('/user',function () use ($app){
    createUser($app);
});

$app->post('/user/:id',function ($id) use ($app){
    updateUser($id,$app);
});

$app->get('/destination',function () use ($app){
    getDestination();
});

$app->get('/user/:id',function ($id) use ($app){
    getUser($id);
});
 
// Content Modify
$app->get('/publish/:id',function ($id) use ($app){
    makePublish($id,$app);
});
$app->get('/unpublish/:id',function ($id) use ($app){
    makeUnpublish($id,$app);
});
$app->run();

?>