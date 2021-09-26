class Product extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
                <tr>
              <td className="d-flex align-items-center">
              <Profile profile={this.props.product.product_name} />
              <span className="ml-3">       
                   {this.props.product.product_name}
              </span>
              </td>
              <td className="text-center">{this.props.product.product_price}</td>
              <td className="text-center" >{this.props.product.product_type}</td>
              <td></td>
              <td>
            <button className="btn btn-danger rounded" onClick={this.props.onClickClose}>Delete</button>
            
          </td>
                </tr>

        )
    }
}