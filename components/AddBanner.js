"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

function AddBanner() {
  const routee = usePathname();
  /* Sr. No.	Project Name	City
  1	Queens Lane	Brampton
  2	Duo Condos: Phase 2	Brampton
  3	Natique (Lakefront Residences)	Burlington
  4	Nomi Urban Townhomes	Kitchener
  5	Westwood Village Preserve	Cambridge
  6	Mile & Creek	Milton
  7	Thompson Towns	Milton
  8	Joy Towns	Niagara
  9	Bromley Gardens	St Catherines
  10	West Post Towns	Oakville
  11	Empire Legacy	Thorold
  12	Bravo Condos	Vaughan */
  function addbanner() {
    if (routee == "/brampton") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/brampton/duo-condos-phase-2">
            <span>
              <img
                src="banner/2.jpg"
                alt="brampton duo-condos-phase-2"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/milton") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/milton/thompson-towers">
            <span>
              <img
                src="banner/4.jpg"
                alt="milton thompson-towers"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/burlington") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/burlington/nautique-penthouse-collection">
            <span>
              <img
                src="banner/5.jpg"
                alt="burlington nautique-penthouse-collection"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/kitchener") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/kitchener/nomi-urban-towns">
            <span>
              <img
                src="banner/6.jpg"
                alt="kitchener nomi-urban-towns"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/cambridge") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/cambridge/westwood-village-preserve">
            <span>
              <img
                src="banner/7.jpg"
                alt="cambridge westwood-village-preserve"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/niagara") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/niagara/joy-niagara-towns">
            <span>
              <img
                src="banner/8.jpg"
                alt="niagara joy-niagara-towns"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/stcatharines") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/stcatharines/bromley-gardens">
            <span>
              <img
                src="banner/9.jpg"
                alt="stcatharines bromley-gardens"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/oakville") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/oakville/west-and-post-towns">
            <span>
              <img
                src="banner/10.jpg"
                alt="oakville west-and-post-towns"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/thorold") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/thorold/empire-legacy">
            <span>
              <img
                src="banner/11.jpg"
                alt="thorold empire-legacy"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else if (routee == "/vaughan") {
      return (
        <div className="mb-md-4 mt-md-3">
          <Link href="/vaughan/bravo-condos">
            <span>
              <img
                src="banner/12.jpg"
                alt="vaughan bravo-condos"
                className="img-fluid"
              />
            </span>
          </Link>
        </div>
      );
    } else {
      return <></>;
    }
  }

  return <div>{addbanner()}</div>;
}

export default AddBanner;
