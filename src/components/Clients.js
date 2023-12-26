import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prestige from "../images/clients/prestige.png";
import cl1 from "../images/clients/cl1.png";
import cred from "../images/clients/cred.png";
import gad from "../images/clients/gad.png";

const clientData = [
  { name: "PrestigeLink", title: "Inventory Tracking System", image: prestige },
  { name: "CreditFit", title: "Company Website", image: cred },
  { name: "DigiKey", title: "EMS System", image: cl1 },
  { name: "DG Gadget Store", title: "Gadget E-Commerce Store", image: gad },
];

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time (adjust as needed)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <div className="mt-8 bg-gray-100 pb-9">
      <span className="flex items-center">
        <hr className="border-t border-blue-900 mx-1 w-20" />
        <span className="text-primary text-blue-800 text-1xl md:text-3xl font-semibold">
          Some of our clients.
        </span>
        <hr className="border-t border-blue-900 mx-1 flex-grow" />
      </span>

      <section data-aos="fade-up">
        <div className="p-10" data-aos="fade-in" data-aos-delay="600">
          <Slider {...settings}>
            {clientData.map((client, index) => (
              <div
                key={index}
                className="overflow-hidden flex justify-center w-[100px] h-[300px]"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-[270px] h-[255px] mx-auto rounded-md border bg-slate-500"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold">{client.name}</p>
                  <p className="text-sm">{client.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Clients;
