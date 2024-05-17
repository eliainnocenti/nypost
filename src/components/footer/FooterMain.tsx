import React from "react";

import '../../style/style.scss';

const FooterMain: React.FC = () => {
    return (
        <div className={"footer-main"}>
            {/* FooterMain content */}
            <nav className={"footer-nav"}>
                <ul className={"footer-nav-menu"}>
                    <li id={""} className={"footer-nav-item"}> {/* TODO: do I need to add an id attribute? */}
                        <a href={"#"} className={"footer-nav-link"}>Sections & Features</a>
                        <ul id={""} className={"footer-nav-submenu"}> {/* TODO: do I need to add an id attribute? */}
                            {/* TODO: implement */}
                        </ul>
                    </li>
                    <li id={""} className={"footer-nav-item"}> {/* TODO: do I need to add an id attribute? */}
                        <a href={"#"} className={"footer-nav-link"}>Post Sports+</a>
                        <ul id={""} className={"footer-nav-submenu"}> {/* TODO: do I need to add an id attribute? */}
                            {/* TODO: implement */}
                        </ul>
                    </li>
                    <li id={""} className={"footer-nav-item"}> {/* TODO: do I need to add an id attribute? */}
                        <a href={"#"} className={"footer-nav-link"}>Newsletters & Feeds</a>
                        <ul id={""} className={"footer-nav-submenu"}> {/* TODO: do I need to add an id attribute? */}
                            {/* TODO: implement */}
                        </ul>
                    </li>
                    <li id={""} className={"footer-nav-item"}> {/* TODO: do I need to add an id attribute? */}
                        <a href={"#"} className={"footer-nav-link"}>Help/Support</a>
                        <ul id={""} className={"footer-nav-submenu"}> {/* TODO: do I need to add an id attribute? */}
                            {/* TODO: implement */}
                        </ul>
                    </li>
                    <li id={""} className={"footer-nav-item"}> {/* TODO: do I need to add an id attribute? */}
                        <a href={"#"} className={"footer-nav-link"}>Apps</a>
                        <ul id={""} className={"footer-nav-submenu"}> {/* TODO: do I need to add an id attribute? */}
                            {/* TODO: implement */}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default FooterMain;