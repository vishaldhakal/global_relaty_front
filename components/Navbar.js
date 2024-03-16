"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ cities }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-white shadow-lg py-3 sticky-top">
      <div className="container">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/logo.png" alt="global homes logo" className="img-fluid" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                New Construction Homes
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                {cities &&
                  cities.map((city) => (
                    <Link
                      className="dropdown-item"
                      href={`/${city.slug}`}
                      key={city.id}
                    >
                      {city.name}
                    </Link>
                  ))}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dubai and India Projects
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="tel:(905) 872 5680"
            className="btn btn-danger my-2 my-sm-0 rounded-pill ms-md-3"
          >
            Call Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
