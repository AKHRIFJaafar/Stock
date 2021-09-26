class MenuProduct extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
      return (     
      <nav className="main-header navbar navbar-expand navbar-light navbar-light d-flex justify-content-between align-items-center" >
        {/* Left navbar links */}
        <div className="d-flex">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <a className="nav-link text-black" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="ouvriers.html" className="nav-link text-black">Product</a>
          </li>
        </ul>
        </div>
        {/* Right navbar links */}
        <div className="user-panel d-flex ml-5">
        <div className="info">
                <a href="#" className="d-block text-black">&#124; &nbsp; &nbsp; &nbsp;Ouafae Ghailan</a>
              </div>
              <div className="image">
                <img src="dist/img/user1.png" className="img-circle elevation-2" alt="User Image" />
              </div>

            </div>
            
      </nav>



      )
  }
}