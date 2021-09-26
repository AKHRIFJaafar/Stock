<?php
require_once (__DIR__.'/../manager/ProductsManager.php');

        $ProductsManager = null;
        $getProductsManager = new ProductsManager();    
        $getProducts = $getProductsManager->getList();
        print_r(json_encode($getProducts));
?>