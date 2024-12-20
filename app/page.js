import CondoCardHome from "@/components/CondoCardHome";
import Link from "next/link";
import BottomContactForm from "@/components/BottomContactForm";
import TopScroll from "@/components/TopScroll";
import Builders from "@/components/Builders";

async function getData() {
  const res = await fetch(
    "https://api.globalhomes.ca/api/preconstructions?page_size=16",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getCities() {
  const res = await fetch("https://api.globalhomes.ca/api/all-city", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getBuilders() {
  const res = await fetch("https://api.globalhomes.ca/api/developers-filter", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home(props) {
  const data = await getData();
  const cities = await getCities();
  const builders = await getBuilders();

  return (
    <>
      {/* <img src="/bannertop.png" alt="dce" className="img-fluid" /> */}
      <TopScroll cities={cities}></TopScroll>
      <Builders builders={builders}></Builders>
      <div className="pt-md-5 mt-md-5 mt-2">
        <div className="container pt-md-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="main-title text-center">
              Pre Construction Homes in Canada (2024)
            </h1>
            <h2 className="text-mine fs-small text-center ">
              1000+ New Preconstruction Homes for sale in Canada | Check out
              plans, pricing, availability for pre construction homes through
              Globalhomes
            </h2>
          </div>
          <div className="py-4"></div>
          <div className="row row-cols-1 row-cols-md-4 gy-4">
            {data.results.map((item) => (
              <div className="col" key={item.id}>
                <CondoCardHome {...item} />
              </div>
            ))}
          </div>
          <div className="py-5 my-2"></div>
          <img src="/dubaiandindia.png" alt="dce" className="img-fluid" />
          <div className="py-5 my-2"></div>
          <h2 className="fw-mine text-center mb-5 accent-line">
            Explore New Construction Homes in These Cities
          </h2>
          <div className="row">
            <div className="col-6 col-md-4 col-xl-4">
              <Link className="d-block properti_city" href={"/toronto"}>
                <div className="thumb">
                  <img
                    src="/cities/toronto.jpg"
                    alt="toronto"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Toronto</h4>
                    <p>Explore Toronto's finest New construction homes</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-lg-8 col-xl-8">
              <Link className="d-block properti_city" href={"/brampton"}>
                <div className="thumb">
                  <img
                    src="/cities/brampton.jpg"
                    alt="brampton"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Brampton</h4>
                    <p>Brampton's finest New construction homes</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-lg-8 col-xl-8">
              <Link className="d-block properti_city" href={"/etobicoke"}>
                <div className="thumb">
                  <img
                    src="/cities/etobicoke.jpg"
                    alt="etobicoke"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Etobicoke</h4>
                    <p>Etobicoke's finest New construction homes</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-4 col-xl-4">
              <Link className="d-block properti_city" href={"/mississauga"}>
                <div className="thumb">
                  <img
                    src="/cities/mississauga.jpg"
                    alt="mississauga"
                    className="img-fluid"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Mississauga</h4>
                    <p>Mississauga's finest New construction homes</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-md-5 mt-5"></div>
          <div className="py-5 my-5" id="mycontact">
            <div className="container">
              <div className="d-flex justify-content-center">
                <img
                  src="/rakesh-sharma.png"
                  alt="global homes logo"
                  className="img-fluid w-m text-center mb-3"
                />
              </div>
              <div className="row justify-content-center">
                <h3 className="fw-bolder fw-boldie text-center fs-1">
                  VIP PLATIUM ACCESS
                </h3>
              </div>
              <h2 className="fw-bolder fw-boldie text-center px-md-4 fs-3">
                Contact Globalhomes now!
              </h2>
              <div className="row row-cols-1 row-cols-md-3 mt-5">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <BottomContactForm
                    proj_name="All"
                    city="Home Page"
                  ></BottomContactForm>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
