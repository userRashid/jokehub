<?php
require 'Slim/Slim.php';
require 'connection.php';
require 'authenticate.php';
require 'login.php';
require 'user.php';
require 'category.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

/*$app->get('/itinerary/:id', function ($id) {
    getItinerary($id);
});
$app->get('/itinerary', function () {
    getItinerary();
});
$app->post('/itinerary', function () use ($app) {
    createItinerary($app);
});
$app->post('/itinerary/:id', function ($id) use ($app) {
    updateItinerary($id,$app);
});
 //,m,mn,dmf,dmng,mndf,mg
$app->delete('/itinerary/:id', function ($id) {
    deleteItinerary($id); 
});
*/
/*
// Status
$app->get('/status/:id', function ($id) {
    getStatus($id);
});
$app->get('/status', function () {
    getStatus();
});
$app->post('/status', function () use ($app) {
    createStatus($app);
});
$app->post('/status/:id', function ($id) use ($app) {
    updateStatus($id,$app);
});
$app->delete('/status/:id', function ($id) {
    deleteStatus($id);
});
$app->post('/update-status/:id', function ($id) use ($app) {
    updateStatusStatus($id,$app);
});

*/
//Category
$app->post('/category', function () use ($app){
    createCategory($app);
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

$app->run();

?>