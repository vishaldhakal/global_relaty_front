"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
/* public/developers/cachet.png public/developers/amacon.png public/developers/arista-homes.png public/developers/aulume.png public/developers/ballymore.png public/developers/baycresthomes.png public/developers/branthaven.png public/developers/brixen.png public/developers/camrostfelcorp.png public/developers/queensland.png */

function Builders() {
  return (
    <>
      <div className="row row-cols-3 row-cols-md-5">
        <div className="col px-md-5">
          <img
            src="/developers/cachet.png"
            alt="cached builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/amacon.png"
            alt="amacon builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/arista-homes.png"
            alt="arista-homes builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/aulume.png"
            alt="aulume builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/ballymore.png"
            alt="ballymore builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/baycresthomes.png"
            alt="baycresthomes builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/branthaven.png"
            alt="branthaven builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/brixen.png"
            alt="brixen builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/camrostfelcorp.png"
            alt="camrostfelcorp builder logo"
            className="img-fluid"
          />
        </div>
        <div className="col px-md-5">
          <img
            src="/developers/queensland.png"
            alt="queensland builder logo"
            className="img-fluid"
          />
        </div>
      </div>
    </>
  );
}

export default Builders;
