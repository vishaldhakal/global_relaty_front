import DeveloperCard from "@/components/DeveloperCard";
import BottomContactForm from "@/components/BottomContactForm";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("https://api.globalhomes.ca/api/developers-filter/", {
    next: { revalidate: 10 },
  });

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
      canonical: `https://globalhomes.ca/builders/`,
    },
    openGraph: {
      images: "/social/dolphy-builders.jpg",
    },
    title: `Discover Dolphy's Premier Selection of Over ${data.count}+ Preconstruction Home Builders`,
    description: `From industry veteran builders to up-and-coming talent, Dolphy's ${data.count}+ partnered builders offeryears of experience along with creative vision and attentive service.`,
  };
}

export default async function Builders() {
  const data = await getData();
  return (
    <>
      <div className="pt-4 position-relative">
        <div className="container-fluid">
          <div className="py-4 pt-5 text-center">
            <h1 className="main-title mb-4 fs-big">
              Leading Home Builders in Canada
            </h1>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <p className="text-secondary">
                  Discover the visionary builders behind GlobalHomes.ca's
                  marketplace of exceptional condominium and freehold home
                  projects. Our carefully curated selection of developers is
                  united by their unwavering commitment to transforming
                  innovative concepts into remarkable living spaces. Delve into
                  the inspiring stories, cutting-edge designs, and meticulous
                  attention to detail that make these builders the driving force
                  behind Canada's most sought-after residences. From boutique
                  firms to industry giants, GlobalHomes.ca showcases a diverse
                  range of builders, each contributing to the evolving landscape
                  of Canadian real estate. Explore our comprehensive list of
                  developers, representing projects that span from multi-million
                  dollar developments to billion-dollar masterpieces, all
                  available through GlobalHomes.ca.
                </p>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="py-2"></div>
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 gy-4 gx-3 gx-lg-3">
                {data &&
                  data.map((item) => (
                    <div className="col" key={item.id}>
                      <DeveloperCard {...item} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-md-2"></div>
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
          <div className="pt-5 mt-5"></div>
          <div className="pt-5 mt-5"></div>
        </div>
      </div>
    </>
  );
}
