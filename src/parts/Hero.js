import React from "react";
import Fade from "react-reveal/Fade";
import ImgHero from "assets/images/img-hero.jpg";
import ImgHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_city.svg";
import IconTravelers from "assets/images/icons/ic_traveler.svg";
import IconTreasures from "assets/images/icons/ic_treasure.svg";
import Button from "elements/Button";
import numberFormat from "utils/formatNumber";

export default function Hero(props) {
   function showMostPicked() {
      window.scrollTo({
         top: props.refMostPicked.current.offsetTop - 30,
         behavior: "smooth",
      });
   }
   return (
      <Fade bottom>
         <section className="container pt-4">
            <div className="row align-items-center">
               <div
                  className="col-md-9 col-lg-6 pr-5 mx-auto"
                  style={{ width: 530 }}
               >
                  <h1 className="font-weight-bold line-height-1 mb-3">
                     Forget Busy Work, <br />
                     Start Next Vacation
                  </h1>
                  <p
                     className="mb-4 font-weight-light text-gray-500 w-75"
                     style={{ lineHeight: "170%" }}
                  >
                     We provide what you need to enjoy your holiday with family.
                     Time to make more memorable moments.
                  </p>
                  <Button
                     className="btn px-5"
                     hasShadow
                     isPrimary
                     onClick={showMostPicked}
                  >
                     Show Me Now
                  </Button>
                  <div className="row" style={{ marginTop: 80 }}>
                     <div className="col-4">
                        <img
                           width="36"
                           height="36"
                           src={IconTravelers}
                           alt={`${props.data.travelers} travelers`}
                        />
                        <h6 className="mt-3">
                           {numberFormat(props.data.travelers)}{" "}
                           <span className="text-gray-500 font-weight-light">
                              travelers
                           </span>
                        </h6>
                     </div>
                     <div className="col-4">
                        <img
                           width="36"
                           height="36"
                           src={IconTreasures}
                           alt={`${props.data.treasures} treasures`}
                        />
                        <h6 className="mt-3">
                           {numberFormat(props.data.treasures)}{" "}
                           <span className="text-gray-500 font-weight-light">
                              treasures
                           </span>
                        </h6>
                     </div>
                     <div className="col-4">
                        <img
                           width="36"
                           height="36"
                           src={IconCities}
                           alt={`${props.data.cities} cities`}
                        />
                        <h6 className="mt-3">
                           {numberFormat(props.data.cities)}{" "}
                           <span className="text-gray-500 font-weight-light">
                              cities
                           </span>
                        </h6>
                     </div>
                  </div>
               </div>
               <div className="col-md-9 col-lg-6 pl-3 mx-auto">
                  <div style={{ width: 520, height: 410 }}>
                     <img
                        height="450"
                        src={ImgHero}
                        alt="Tabby Town"
                        className="img-fluid position-absolute"
                        style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                     />
                     <img
                        height="450"
                        src={ImgHeroFrame}
                        alt="Tabby Town Frame"
                        className="img-fluid position-absolute"
                        style={{ margin: "0 -15px -15px 0" }}
                     />
                  </div>
               </div>
            </div>
         </section>
      </Fade>
   );
}
