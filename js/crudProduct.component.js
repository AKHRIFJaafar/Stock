// Application
class CrudProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productsArray: [],
            product:{},
        };
    }
    componentDidMount() {
        this.chargementDonnees();
    }
    chargementDonnees() {

        var productsArray = null;

        // affichage de données par Ajax

        $.getJSON("/api/getProducts.php",
            function (data) {
                this.setState({ productsArray: data });
            }.bind(this))
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            });
    }
    //add Product
    addProduct(e) {
        $.ajax({
            url: "/api/addProduct.php",
            method: "POST",
            data: {
                product_name: addProductName.value,
                product_price: addProductPrice.value,
                product_type: addProductType.value,

            },
            success: function (data) {
                this.chargementDonnees()
                $("#exampleModalCenter").modal('hide');
                console.log(data)
            }.bind(this)
        })
        e.preventDefault();
    }
    // Remove Product
    removeProduct(i) {
        $.ajax({
            url: "/api/deleteProduct.php",
            method: "POST",
            data: {
                idproduct: i
            },
            success: function (data) {
                //   $(this).parent().remove();
                this.chargementDonnees()
            }.bind(this)
        })

    }
    
    onChangeInput(e) {
        // this.setState({value: e.target.value})
    }

    render() {
        let productsArray = this.state.productsArray.map((product) => {
            return (
                <Product
                    key={product.idproduct}
                    product={product}
                    onClickClose={this.removeProduct.bind(this, product.idproduct)}
                />
            )
        })

        return (
            <div className="container">
                {/* ADD Model */}
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    id="form-add"
                                    className="form-horizontal"
                                    onSubmit={this.addProduct.bind(this)}>


                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputName4">Product Name</label>
                                            <input type="text" className="form-control product_name" id="addProductName" placeholder="Name of product" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-12">
                                            <label htmlFor="inputLast4">Product Price</label>
                                            <input type="number" className="form-control product_price" id="addProductPrice" placeholder="Price of product" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="inputMatricule4">Product Type</label>
                                            <input type="text" className="form-control product_type" id="addProducType" placeholder="Type of product" />
                                        </div>
                                    </div>

                                    <div className="input-group d-flex justify-content-end">
                                        <div className="input-group-btn">
                                        <button type="submit" className="btn btn-primary submit ">ADD</button>
 
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>


<div className="table-responsive">
               <table className="table table-striped ">
                    <thead className="thead">
                        <tr>
                            <th scope="col">Product name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>

                        </tr>
                    </thead>
                    <tbody>
                        {productsArray}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}