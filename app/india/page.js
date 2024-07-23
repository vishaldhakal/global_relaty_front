import CondoCard from "@/components/CondoCard";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";
import TopScroll from "@/components/TopScroll";
import AddBanner from "@/components/AddBanner";

async function getData() {
  const res = await fetch(
    "https://api.globalhomes.ca/api/preconstructions-city/india",
    {
      next: { revalidate: 10 },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }, parent) {
  const data = await getData();
  return {
    ...parent,
    alternates: {
      canonical: `https://globalhomes.ca/india`,
    },
    title:
      data.preconstructions.length + " Preconstruction Homes in " + "India",
    description: "Preconstruction Homes in " + "India",
    description:
      "Search our selection of pre construction homes for sale in India" +
      ". Our ever-changing portfolio of pre constructions brings you closer to your ideal homes in the growing city of India",
  };
}

export default async function Home({ params }) {
  const data = await getData();

  return (
    <>
      <div className="pt-5">
        <div className="container">
          <div className="d-flex flex-column">
            <h1 className="main-title">New Build homes in India</h1>
            <p className="text-mine">
              {data.preconstructions.length} New Build Homes for sale in India |
              Check out plans, pricing, availability
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-4 gy-4">
            {data.preconstructions &&
              data.preconstructions.map((item) => (
                <div className="col" key={item.id}>
                  <CondoCard {...item} />
                </div>
              ))}
          </div>
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
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
                    city={"India"}
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
