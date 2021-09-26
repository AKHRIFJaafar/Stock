<?php
require_once(__DIR__.'/../model/Product.php');

class ProductsManager {

	//get product 
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=product-manager","root","admin123");
		$stack = array();
		$req = "SELECT * FROM products";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){

			$item = new Product();
			$item->setIdProduct($row["idproduct"]);
			$item->setProductName($row["product_name"]);
			$item->setProductPrice($row["product_price"]);
			$item->setProductType($row["product_type"]);

			array_push($stack, $item);
		}
		return $stack;
	}
//Add product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=product-manager","root","admin123");
			$req = "INSERT INTO `products`(`idproduct`, `product_name`, `product_price`,`product_type`) VALUES (:idproduct,:product_name,:product_price,:product_type)";

			$addProductQuery = $dbh ->prepare($req);
			$addProductQuery -> bindParam(":idproduct",$product->getIdProduct(),PDO::PARAM_STR);
			$addProductQuery -> bindParam(":product_name",$product->getProductName(),PDO::PARAM_STR);
            $addProductQuery -> bindParam(":product_price",$product->getProductPrice(),PDO::PARAM_STR);
            $addProductQuery -> bindParam(":product_type",$product->getProductType(),PDO::PARAM_STR);
			$addProductQuery->execute();
        }
		// delete ouvrier

		public function delete($id){
	
			$dbh = new PDO("mysql:host=localhost;dbname=product-manager","root","admin123");
			$req = "DELETE FROM products WHERE idproduct = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }
}
?>