import BottomContactForm from "@/components/BottomContactForm";

export default async function Home(props) {
  return (
    <>
      <div className="pt-5 mt-5">
        <div id="mycontact">
          <div className="container">
            <div className="row justify-content-center">
              <img
                src="/contact-bottom-2.png"
                alt="dce"
                className="img-fluid w-25 w-smm-50 mb-3"
              />
            </div>
            <h2 className="fw-bolder fw-boldie text-center px-md-4 fs-3">
              Contact Globalhomes now!
            </h2>
            <div className="row row-cols-1 row-cols-md-3 mt-5">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <BottomContactForm></BottomContactForm>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
        <div className="pt-5 mt-5"></div>
      </div>
    </>
  );
}
