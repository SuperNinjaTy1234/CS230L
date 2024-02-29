function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary"  data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Jeffrey Adkins</a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link" href="#">About</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
            </div>
            <form className="d-flex" role="search">
                <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-dark" type="submit">Search</button>
            </form>
        </div>
      </nav>
    );
  }

  export default Navbar;