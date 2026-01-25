import React from 'react';
import Banner from '../Banner/Banner';
import WePvtBestInt from '../WePvtBestInt/WePvtBestInt';
import OurCompleteProject from '../OurCompleteProject/OurCompleteProject';
import ReputationClients from '../ReputationClients/ReputationClients';
import ChiefInterior from '../ChiefInterior/ChiefInterior';
import ResearchDevelopment from '../ResearchDevelopment/ResearchDevelopment';

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
        </div>
    );
};

export default Home;