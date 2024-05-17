import React from "react";

import FooterLogo from "./FooterLogo";
import FooterSocial from "./FooterSocial";

import "../../style/style.scss";

const FooterTop: React.FC = () => {
    return (
        <div className={"footer-top"}>
            {/* FooterTop content */}
            <React.Fragment>
                <FooterLogo />
                <FooterSocial />
            </React.Fragment>
        </div>
    );
};

export default FooterTop;