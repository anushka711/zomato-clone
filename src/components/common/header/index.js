import React from "react";
import "./header.css"

const Header = () => {
    return (
        <div className="header max-width">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="zomato-logo" className="header-logo" />
            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fi fi-sr-marker absolute-center location-icon"></i>
                            <div>Park Street area</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center caret-icon"></i>
                        <div className="location-search-separator"></div>
                        <div className="header-searchBar">
                            <i className="fi fi-rr-search absolute-center search-icon"></i>
                            <input
                            className="search-input"
                            placeholder="Search for restaurant, cuisine or a dish"
                            />
                        </div>
                    </div>
                </div>
                <div className="profile-picture">
                        <img src="https://b.zmtcdn.com/data/user_profile_pictures/3fb/752a3342f0465a990e027063187bd3fb.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                        alt="profile" className="header-profile-image absolute-center" />
                        <span className="header-username">Anushka</span>
                        <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;