import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import ImgFeatured from "parts/ImgFeatured";
import PageDetailsDescription from "parts/PageDetailsDescription";
import BookingForm from "parts/BookingForm";
import Testimonial from "parts/Testimonial";
import Categories from "parts/Categories";
import Footer from "parts/Footer";
import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
   componentDidMount() {
      window.title = "Staycation | Home";
      window.scrollTo(0, 0);
   }
   render() {
      const breadcrumb = [
         { pageTitle: "Home", pageHref: "" },
         { pageTitle: "House Details", pageHref: "" },
      ];
      return (
         <>
            <Header {...this.props}></Header>
            <PageDetailTitle data={ItemDetails} breadcrumb={breadcrumb} />
            <ImgFeatured data={ItemDetails.imageUrls} />
            <section className="container">
               <div className="row">
                  <div className="col-7 pr-5">
                     <PageDetailsDescription data={ItemDetails} />
                  </div>
                  <div className="col-5">
                     <BookingForm itemDetails={ItemDetails} />
                  </div>
               </div>
            </section>
            <Categories data={ItemDetails.categories} />
            <Testimonial data={ItemDetails.testimonial} />
            <Footer />
         </>
      );
   }
}
