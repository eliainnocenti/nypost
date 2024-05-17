import React from "react";

// styles
import '../../style/style.scss';

const HeaderLeft: React.FC = () => {
    return (
        <div className={"header-left"}>
            {/* HeaderLeft content */}

            <button className={"header-menu-toggle"} aria-controls={"menu-main-menu"} aria-expanded={false}>
                <span className={"screen-reader-text"}>Primary Menu</span> {/* FIXME */}
                <span className={"header-menu-toggle-icon"}> {/* FIXME */}
                    {/*::before*/}
                    {/*::after*/}
                </span>
                <span className={"header-menu-toggle-title"}>Sections</span> {/* FIXME */}
            </button>
            {/* TODO: implement nav section */}
            <button className={"header-search-toggle"} aria-controls={"search-input-header"} aria-expanded={false}>

            </button>
            <a href={"https://email.nypost.com/"} className={"header-email"}> {/* FIXME: fix link */}
                <span className={"screen-reader-text"}>Email</span>
            </a>


            {/* TODO: uncomment when implemented
            <button className="menu-toggle" aria-controls="menu-main-menu" aria-expanded="false">
                <span className="screen-reader-text">Primary Menu</span>
                <span className="menu-toggle__icon">
                    ::before
                    ::after
                </span>
                <span className="menu-toggle__title">Sections</span>
            </button>
            */}
            {/* TODO: uncomment when implemented
            <nav className="site-header__nav" role="navigation">
                ::before
                <div className="site-header__nav-inner">
                    <ul id="menu-main-menu" className="header-nav">
                        <li id="menu-item-1612774" className="menu-item menu-item-type-taxonomy menu-item-object-section menu-item-has-children menu-item-1612774 nypost-menu-object-id--103">
                            <a href="https://nypost.com/us-news/" data-ga-event="{&quot;category&quot;:&quot;Top Nav&quot;,&quot;action&quot;:&quot;US News&quot;}" data-ga4-event="{&quot;event_name&quot;:&quot;ux_engagement&quot;,&quot;source_unit&quot;:&quot;Top Nav&quot;,&quot;source_position&quot;:1}" id="menu-link-1">US News</a>
                            <button aria-expanded="false" aria-controls="sub-menu-0" className="sub-menu-toggle">
                                <span className="screen-reader-text">Open sub menu</span>
                            </button>
                            <ul className="sub-menu" id="sub-menu-0">
                                TODO: implement
                            </ul>
                        </li>
                        TODO: implement
                    </ul>
                    <div id="membership-login-container">
                        <div>
                            <button className="button button--login" type="button">
                                ::before
                                <span className="button__text">Log In</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            */}
            {/* TODO: uncomment when implemented
            <button className="site-header__search-toggle" aria-controls="search-input-header" aria-expanded="false"
                    data-search-header="toggle" data-ga-event="
						{&quot;category&quot;:&quot;Top Nav&quot;,&quot;action&quot;:&quot;Search&quot;}						"
                    data-ga4-event="
						{&quot;event_name&quot;:&quot;ux_engagement&quot;,&quot;source_unit&quot;:&quot;Top Nav&quot;,&quot;source_position&quot;:&quot;Search&quot;}						">
                <span className="screen-reader-text">Search</span>
            </button>
            */}
            {/* TODO: uncomment when implemented
            <a href="https://email.nypost.com/" className="site-header__email" data-ga-event="
						{&quot;category&quot;:&quot;Top Nav&quot;,&quot;action&quot;:&quot;Email Sign Up&quot;}						"
               data-ga4-event="
					{&quot;event_name&quot;:&quot;ux_engagement&quot;,&quot;source_unit&quot;:&quot;Top Nav&quot;,&quot;source_position&quot;:&quot;Email Sign Up&quot;}	">
                <span className="site-header__email-icon"></span>
                <span className="screen-reader-text">Email</span>
            </a>
            */}
        </div>
    );
}

export default HeaderLeft