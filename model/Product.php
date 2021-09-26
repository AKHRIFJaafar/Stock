<?php

class Product implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'idproduct' => $this->_idproduct,
             'product_name' => $this->_product_name,
             'product_price' => $this->_product_price,
             'product_type' => $this->_product_type,
        );
    }
	private $_idproduct;
	private $_product_name;
	private $_product_price;
	private $_product_type;

	
	public function __construct() {
	
	}
		public function getIdProduct() { return $this->_idproduct; }
		public function getProductName() { return $this->_product_name; }
		public function getProductPrice() { return $this->_product_price; }
		public function getProductType() { return $this->_product_type; }

		public function setIdProduct($idproduct){
			$this->_idproduct = (int) $idproduct;
		}

		public function setProductName($product_name){	
					$this->_product_name = $product_name;
			
		}
		public function setProductPrice($product_price){
					$this->_product_price = $product_price;
		}

		public function setProductType($product_type){
				$this->_product_type = $product_type;
		}

}
?>