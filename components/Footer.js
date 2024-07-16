"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = ({ cities }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  return (
    <footer className="footer mt-5 shadow-lg">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <img
                src="/logo.png"
                alt="global homes logo"
                className="img-fluid"
              />
            </Link>
            <p></p>
            <p>
              Globalhomes, your premier destination for pre-construction homes
              in Canada. Discover your dream home before it's even built.
              Explore our curated listings and find the perfect pre-construction
              condo for your future.
            </p>

            <h4>Connect with us</h4>
            <div className="social-links text-dark d-flex gap-4 mt-2">
              <Link href="#" className="me-2 heim text-dark">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link href="#" className="me-2 heim text-dark">
                <i className="bi bi-facebook "></i>
              </Link>
              <Link href="#" className="me-2 heim text-dark">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="#" className="me-2 heim text-dark">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
            <div className="mt-3">
              <a className="mt-4 text-dark" href="tel:(905) 872 5680">
                <strong>Phone:</strong> <span> (905) 872 5680</span>
              </a>
              <p className="mt-2">
                <strong>Email:</strong> <span>info@globalhomes.ca</span>
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-6 footer-links">
            <h4>New Construction Homes in Canada</h4>
            <ul className="row row-cols-2">
              {cities &&
                cities.map((city) => (
                  <li key={city.id} className="col">
                    <Link href={`/${city.slug}`}>
                      <span>New construction homes in {city.name}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-start text-md-center mt-4">
        <p>
          ©2024 <span>Copyright</span>{" "}
          <strong className="px-1">Globalhomes.ca</strong>{" "}
          <span>All Rights Reserved</span>
          <p className="mt-4">
            <strong>SaveMax Global Realty </strong>
          </p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
