class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link border-0  ml-3">
          <span className="brand-text font-weight-Bold "><b className="font-weight-bolder">G</b>estion de stock</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar mt-5">
          {/* Sidebar user (optional) */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  <i className="nav-icon fas fa-home" />

                  <p>Accueil</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="products.html" className="nav-link">
                <i class="nav-icon fas fa-box-open" />
                  <p>Products</p>
                </a>
              </li>
              <li className="nav-item margin-deconencte ">
                <a href="../login/login.html" className="nav-link btn text-left  ">
                  <i className=" mr-2 fas fa-sign-out-alt" />
                  <p>Déconncté</p>
                </a>
              </li>

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>


    )
  }
}