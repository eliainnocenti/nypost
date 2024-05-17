import React from "react";

import "../../style/style.scss";

const FooterSocial: React.FC = () => {
    return (
        <div className={"footer-social"}>
            {/* FooterSocial content */}
            <ul className={"footer-social-list"}>
                <li>
                    <a href={"#"} className={"footer-social-icon footer-social-icon-facebook"}>
                        ::before
                        <span className={"screen-reader-text"}>Facebook</span>
                    </a>
                </li>
                <li>
                    <a href={"#"} className={"footer-social-icon footer-social-icon-twitter"}>
                        ::before
                        <span className={"screen-reader-text"}>Twitter</span>
                    </a>
                </li>
                <li>
                    <a href={"#"} className={"footer-social-icon footer-social-icon-instagram"}>
                        ::before
                        <span className={"screen-reader-text"}>Instagram</span>
                    </a>
                </li>
                <li>
                    <a href={"#"} className={"footer-social-icon footer-social-icon-linkedin"}>
                        ::before
                        <span className={"screen-reader-text"}>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href={"#"} className={"footer-social-icon footer-social-icon-email"}>
                        ::before
                        <span className={"screen-reader-text"}>Email</span>
                    </a>
                </li>
                <li>
                    <a href={"#"} className={"footer-social-icon footer-social-icon-youtube"}>
                        ::before
                        <span className={"screen-reader-text"}>YouTube</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterSocial;