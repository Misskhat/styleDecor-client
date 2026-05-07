import React from "react";
import Banner from "../Banner/Banner";
import WePvtBestInt from "../WePvtBestInt/WePvtBestInt";
import OurCompleteProject from "../OurCompleteProject/OurCompleteProject";
import ReputationClients from "../ReputationClients/ReputationClients";
import ChiefInterior from "../ChiefInterior/ChiefInterior";
import ResearchDevelopment from "../ResearchDevelopment/ResearchDevelopment";
import Products from "../Products/Products";
import WhyAppoint from "../WhyAppoint/WhyAppoint";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WePvtBestInt></WePvtBestInt>
      <OurCompleteProject></OurCompleteProject>
      {/* dynamic section: Home & Office Interior Design Services We Offer - it will be come from data base */}
      <ReputationClients></ReputationClients>
      <ChiefInterior></ChiefInterior>
      <ResearchDevelopment></ResearchDevelopment>
      {/* dynamic section: Our Products - it will be come from data base */}
      <Products></Products>
      <WhyAppoint></WhyAppoint>
      {/* dynamic section: Customer review - it will be come from data base */}
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Home;
