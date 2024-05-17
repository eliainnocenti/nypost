import React from "react";

import FooterTop from "./FooterTop";
import FooterMain from "./FooterMain";
import FooterLegal from "./FooterLegal";

import '../../style/style.scss';

const FooterWrapper: React.FC = () => {
    return (
        <div className={"footer-wrapper"}>
            {/* FooterWrapper content */}
            <React.Fragment>
                <FooterTop />
                <FooterMain />
                <FooterLegal />
            </React.Fragment>
        </div>
    );
};

export default FooterWrapper;