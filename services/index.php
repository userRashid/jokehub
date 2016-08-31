<?php
require 'Slim/Slim.php';
require 'connection.php';
require 'authenticate.php';
require 'login.php';
require 'user.php';
require 'category.php';
require 'jokes.php';
require 'contentModify.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

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
$app->post('/jokes', function () use ($app){
    createJokes($app);
});
// Login
$app->get('/authenticate', function () use ($app){
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
    makePublish($id);
});
$app->get('/unpublish/:id',function ($id) use ($app){
    makeUnpublish($id);
});
$app->run();

?>