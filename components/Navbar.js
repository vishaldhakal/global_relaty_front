"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProjectSearch from "./ProjectSearch";

const Navbar = ({ cities }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-white sticky-top">
      <div className="container justify-content-between justify-content-md-start">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/logo.png" alt="global homes logo" className="img-fluid" />
        </Link>
        <div className="me-2 ms-md-3 me-md-0">
          <ProjectSearch />
        </div>
        <button
          className="navbar-toggler text-dark d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {/* <li className="nav-item dropdown">
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
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li> */}
            <li className="nav-item">
              <Link
                className="nav-link"
                href={"/pre-construction-homes-canada"}
              >
                Upcoming Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/india">
                India Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
          <Link
            href="tel:(905) 872 5680"
            className="btn btn-danger my-2 my-sm-0 rounded-pill ms-md-3"
          >
            Call Now
          </Link>

          {/* <img
            src="/linktreescan.png"
            alt="linktree scan"
            className="img-fluid smallimg ms-3"
          /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
