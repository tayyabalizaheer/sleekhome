import logo from '../assets/images/logo.png';

export default function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <a className="navbar-brand" href="/">
                      <img src={logo} alt="" />
                  </a>
                  <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#news">News</a>
                      </li>

                      <li className="nav-item">
                          <a className="nav-link" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contact">Contact</a>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
  )
}
