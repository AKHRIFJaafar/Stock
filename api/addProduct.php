<?php
require_once (__DIR__.'/../manager/ProductsManager.php');

$product = new Product();
$product->setProductName($_POST["product_name"]);
$product->setProductPrice($_POST["product_price"]);
$product->setProductType($_POST["product_type"]);

$addProductManager = null;
$addProductsManager =  new ProductsManager(); 
$addProductsQuery = $addProductsManager->add($product);

?>