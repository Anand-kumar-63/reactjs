import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// functional Component of Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg" />
      </div>
      <div className="navitems">
        <ul>
          <li>Services</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
// Dynamic data for cards from swiggy website::
const reslist = [
    {
      "info": {
        "id": "150586",
        "name": "Accord International",
        "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
        "locality": "Parasia Road",
        "areaName": "Vishnu Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Continental",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "26828",
        "avgRatingString": "4.3",
        "totalRatingsString": "570",
        "sla": {
          "deliveryTime": 64,
          "lastMileTravel": 14.3,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "14.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/accord-international-parasia-road-vishnu-nagar-rest150586",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "196341",
        "name": "Rangla Panjab",
        "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
        "locality": "Shankaracharya Nagar",
        "areaName": "Prasia Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "166894",
        "avgRatingString": "4.2",
        "totalRatingsString": "389",
        "sla": {
          "deliveryTime": 56,
          "lastMileTravel": 13.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "13.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:40:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹699",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/rangla-panjab-shankaracharya-nagar-prasia-road-rest196341",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "615927",
        "name": "Roof 5",
        "cloudinaryImageId": "glepanv4xjfnhsbieam1",
        "locality": "Adarsh Nagar Colony",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 4.1,
        "parentId": "171348",
        "avgRatingString": "4.1",
        "totalRatingsString": "115",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 13.9,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "13.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/roof-5-adarsh-nagar-colony-chhindwara-locality-rest615927",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "925308",
        "name": "Hotel Sai Bajrang Family Restaurant",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/14/075a4401-3091-45f9-a2f1-1b22024d51df_925308.jpg",
        "locality": "Nagpur Road",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Desserts",
          "Fast Food"
        ],
        "avgRating": 4.5,
        "parentId": "536748",
        "avgRatingString": "4.5",
        "totalRatingsString": "22",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 10.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "10.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-bajrang-family-restaurant-nagpur-road-chhindwara-city-rest925308",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "898041",
        "name": "Thikana",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg",
        "locality": "RANGLA PUNJAB PARASIA ROAD",
        "areaName": " ADARSH NAGAR CHHINDWARA",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Indian"
        ],
        "avgRating": 3.3,
        "parentId": "215738",
        "avgRatingString": "3.3",
        "totalRatingsString": "4",
        "sla": {
          "deliveryTime": 56,
          "lastMileTravel": 13.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "13.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/thikana-rangla-punjab-parasia-road-adarsh-nagar-chhindwara-rest898041",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "625927",
        "name": "Kathi Junction",
        "cloudinaryImageId": "nigqvxgzvyxtfjuqasgg",
        "locality": "Bunglow Madhuvan Colony",
        "areaName": "Prasia Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "rolls",
          "Burgers",
          "Pizzas",
          "Fast Food"
        ],
        "avgRating": 3.9,
        "parentId": "1935",
        "avgRatingString": "3.9",
        "totalRatingsString": "272",
        "sla": {
          "deliveryTime": 56,
          "lastMileTravel": 13.5,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "13.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/kathi-junction-bunglow-madhuvan-colony-prasia-road-rest625927",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "898044",
        "name": "Thikana Special",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/6adf18b9-0a2e-45ad-b587-3f714762f7bd_898044.jpg",
        "locality": "Punjab ",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Biryani",
          "Sweets",
          "Salads"
        ],
        "avgRating": 4.6,
        "parentId": "522552",
        "avgRatingString": "4.6",
        "totalRatingsString": "6",
        "sla": {
          "deliveryTime": 57,
          "lastMileTravel": 11.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-29 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/thikana-special-punjab-chhindwara-city-rest898044",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "870899",
        "name": "Paras Mishthan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
        "locality": "Nagarpalika Complex",
        "areaName": "Chhindwara City",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Beverages",
          "Sweets",
          "Snacks"
        ],
        "avgRating": 3.9,
        "veg": true,
        "parentId": "510613",
        "avgRatingString": "3.9",
        "totalRatingsString": "21",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 11.2,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8e750680-4d79-403c-989a-2231996614f4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
 ];
// functional Component for Card 
const Cards = (props) => {
  const {resdata} = props
  return (
    <div className="card">
      <img  id="Card_image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId} />
      <h3>{resdata.info.locality}</h3>
      <p>{resdata.info.name}</p>
      <h4>{resdata.info.cuisines.join("; ")}</h4>
      <h4>{resdata.info.costForTwo}</h4>
    </div>
  );
};
// functional component of Body
const Body = () => {
  return (
    <div className="Body">
      <div className="searchbar">Search</div>
      <div className="res_cards">
        <Cards  resdata= {reslist[0]}/>
        <Cards  resdata = {reslist[1]}/>
        <Cards  resdata = {reslist[2]}/> 
        <Cards  resdata = {reslist[3]}/> 
        <Cards  resdata = {reslist[4]}/> 
        <Cards  resdata = {reslist[5]}/> 
        <Cards  resdata = {reslist[6]}/> 
        <Cards  resdata = {reslist[7]}/> 
      </div>
    </div>
  );
};

// functional Component of APP 
const Applayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
// Rendering everything inside root
root.render(<Applayout />);
