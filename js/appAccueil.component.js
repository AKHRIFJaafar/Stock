class AppAccueil extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        {/* Site wrapper */}
        <div className="wrapper">
          <MenuAccueil />
          <SideBar />
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                </div>
              </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
              {/* Default box */}
              <div className="card">
                <div className="card-header row">
                  <h3 className="card-title col-6"> Stastiques</h3>
                  <div className="col-6 text-right">
                  </div>
                </div>
                <div className="card-body">
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  Footer
                </div>
                {/* /.card-footer*/}
              </div>
              {/* /.card */}
            </section>
            {/* /.content */}
          </div>
          {/* /.content-wrapper */}
          <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
              <b>Version</b> 1.1.0
            </div>
            <strong>Copyright © 2020-2021 <a href="https://solicode.co">Solicode</a>.</strong> All rights reserved.
          </footer>
          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
        </div>
      </div>
    )
  }
}