import React from "react";
import "./deliverycollections.css";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextarrow";
import PrevArrow from "../../common/carousel/prevarrow";
import {DeliveryItem, OrderAgainItem}  from "../../common/carousel/deliveryitem/index";

const deliveryItems = [
    {
      id: 1,
      title: "Pizza",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      id: 2,
      title: "Burger",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
    },
    {
      id: 3,
      title: "Rolls",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
    },
    {
      id: 4,
      title: "Cake",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    },
    {
      id: 5,
      title: "Biryani",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
    },
    {
      id: 6,
      title: "Chaat",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
    },
    {
      id: 7,
      title: "Momos",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
    {
      id: 8,
      title: "Paneer",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
    },
    {
      id: 9,
      title: "Samosa",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
    },
    {
      id: 10,
      title: "Paratha",
      cover:
        "https://b.zmtcdn.com/data/dish_images/49a62bf16f88e7d22994e387626292161632717505.png",
    },
    {
      id: 11,
      title: "Pastry",
      cover:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/f06d9a57b0847677e36f163a7b7fe54a.png",
    },
];

const orderAgainItems = [
  {
    id: 1,
    title: "Starbucks Coffee",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/8/18630948/a44109b2d7e0bf7154fa9b5cf5596b1f_o2_featured_v2.jpg",
  },
  {
    id: 2,
    title: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/4/19193204/9f2f843523d0e8b9ecd9ee9ee32c1c46_o2_featured_v2.jpg",
  },
  {
    id: 3,
    title: "Monginis",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/4/19068604/4de4976b95304b9835eb76258a683e77_o2_featured_v2.jpg",
  },
  {
    id: 4,
    title: "Keventers - MilkShakes & Ice-creams",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/3/18343753/61beb7a99d10aec59213be67488a7740_o2_featured_v2.jpg",
  },
];

const deliveryItemSettings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow:<NextArrow/>,
  prevArrow: <PrevArrow/>
};

const orderAgainSettings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow: <PrevArrow/>
};

const DeliveryCollections = () => {
    return (
        <div className="delivery-collections">
            <div className="max-width">
              <div className="collection-title">
                    Order Again
                </div>
                <Slider {...orderAgainSettings}>
                    {orderAgainItems.map(
                        (item) => {
                            return (
                                <OrderAgainItem item={item} />
                            );
                        }
                    )}
                </Slider>
                <div className="collection-title">
                    Eat what makes you happy
                </div>
                <Slider {...deliveryItemSettings}>
                    {deliveryItems.map(
                        (item) => {
                            return (
                                <DeliveryItem item={item} />
                            );
                        }
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default DeliveryCollections;