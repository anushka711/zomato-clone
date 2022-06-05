import React from "react";
import "./delivery.css";
import Filters from "../common/filters/index";
import DeliveryCollections from "./deliverycollections/index";
import TopBrands from "./topbrands/index";
import ExploreSection from "../common/exploresection/index"
import {restaurants} from "../../data/restaurants";

const restaurantList = restaurants;

const deliveryFilters = [
    {
        id:1,
        icon:<i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title : "Filters" 
    },
    {
        id:2,
        title : "Rating: 4.0+" 
    },
    {
        id:3,
        title : "Safe and Hygienic" 
    },
    {
        id:4,
        title : "Pure Veg" 
    },
    {
        id:5,
        icon:<i class="fi fi-rr-apps-sort absolute-center"></i>,
        title : "Delivery Time" 
    },
    {
        id:6,
        title : "Great Offers" 
    },
];

const Delivery = () => {
    return (
        <div className="delivery">
             <div className="max-width">
                <Filters filterList={deliveryFilters} />
            </div>
            <DeliveryCollections />
            <TopBrands />
            <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Park Street Area"/>
        </div>
    );
};

export default Delivery;