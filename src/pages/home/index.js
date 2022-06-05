import React, {useState} from "react";
import Header from "../../components/common/header/index";
import TabOptions from "../../components/common/taboptions/index";
import Footer from "../../components/common/footer/index";
import Delivery from "../../components/delivery/index";
import DiningOut from "../../components/diningout/index";
import NightLife from "../../components/nightlife/index";

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");
    return (
        <div>
            <Header/>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {
                getCorrectScreen(activeTab)
            }
            <Footer />
        </div>
    );
};

const getCorrectScreen = (tab) => {
    switch(tab){
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut/>
        case "Night Life":
            return <NightLife />
        default :
        return <Delivery />
    }
};

export default HomePage;