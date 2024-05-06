"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function TopScroll({ cities }) {
  const [showLeftScroll, setshowLeftScroll] = useState(false);
  const path = usePathname();

  function rightScrollClick() {
    let scrollDiv = document.querySelector(".main-cont");
    scrollDiv.scroll({
      left: (scrollDiv.scrollLeft += 150),
      top: 0,
      behavior: "smooth",
    });
    if (scrollDiv.scrollLeft != 0) {
      setshowLeftScroll(true);
    } else {
      setshowLeftScroll(false);
    }
  }

  function leftScrollClick() {
    let scrollDiv = document.querySelector(".main-cont");
    scrollDiv.scroll({
      left: (scrollDiv.scrollLeft -= 150),
      top: 0,
      behavior: "smooth",
    });
    if (scrollDiv.scrollLeft != 0) {
      setshowLeftScroll(true);
    } else {
      setshowLeftScroll(false);
    }
  }

  //if path is 3 levels then hide
  if (path.split("/").length > 2) {
    return <></>;
  }

  return (
    <>
      <div className="d-flex justify-content-start align-items-center bg-mine flex-direction-column position-relative">
        {showLeftScroll && (
          <button
            className="btn btn-scroll px-2 position-absolute h-100"
            onClick={leftScrollClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
        )}
        <div className="main-cont p-3 d-flex overflow-scroll">
          {cities &&
            cities.map((preconcity) => (
              <Link
                href={"/" + preconcity.slug}
                key={preconcity.slug}
                className="car-item p-3 px-3 px-md-3 px-lg-4 mx-2"
              >
                {preconcity.name}
              </Link>
            ))}
        </div>
        <button
          className="btn btn-scroll rounded-0 h-100 position-absolute px-2 hh"
          onClick={rightScrollClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default TopScroll;
