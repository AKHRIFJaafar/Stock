<?php
require_once (__DIR__.'/../manager/ProductsManager.php');


$deleteProductManager = null;
$deleteProductManager =  new ProductsManager(); 
$deleteProductQuery = $deleteProductManager->delete($_POST["idproduct"]);
?>