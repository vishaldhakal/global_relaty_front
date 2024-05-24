import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";
import TopScroll from "@/components/TopScroll";
import CondoCardHome from "@/components/CondoCardHome";

async function getData() {
  const res = await fetch(
    "https://api.globalhomes.ca/api/preconstructions?page_size=100",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
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

export async function generateMetadata(parent) {
  let city = "Canada";
  return {
    ...parent,
    alternates: {
      canonical: `https://globalhomes.ca/pre-construction-homes-canada/`,
    },
    title: "200+ Preconstruction Homes in " + city,
    description: "Preconstruction Homes in " + city,
    description:
      "Search our selection of pre construction homes for sale in " +
      city +
      ". Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing city of " +
      city,
  };
}

export default async function Home({ params }) {
  const data = await getData();
  const cities = await getCities();

  return (
    <>
      <TopScroll cities={cities}></TopScroll>
      <div className="pt-5">
        <div className="container">
          <div className="d-flex flex-column">
            <h1 className="main-title">
              New Construction homes in Canada ( 2024 )
            </h1>
            <p className="text-mine">
              New Preconstruction Homes for sale in Canada | Check out plans,
              pricing, availability for pre construction homes in Canada
            </p>
          </div>
          <div className="py-2"></div>
          <div className="row row-cols-1 row-cols-md-4 gy-4">
            {data.results &&
              data.results.map((item) => (
                <div className="col" key={item.id}>
                  <CondoCardHome {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
          <div className="py-5 my-5" id="mycontact">
            <div className="container">
              <div className="row justify-content-center">
                <h3 class="fw-bolder fw-boldie text-center fs-1">
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
                    city="Canada"
                  ></BottomContactForm>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
          <div className="py-5">
            {data.city && (
              <div className="container" id="make-img-responsive">
                <div className="row row-cols-1 g-0">
                  <div
                    className="col-12 mt-mine px-3 max-w-100"
                    dangerouslySetInnerHTML={{
                      __html: data.city.details,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
