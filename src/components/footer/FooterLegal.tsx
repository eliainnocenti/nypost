import React from "react";

import "../../style/style.scss";

const FooterLegal: React.FC = () => {
    return (
        <div className={"footer-legal"}>
            {/* FooterLegal content */}
            <span className={"footer-legal-copyright"}>© 2024 NYP Holdings, Inc. All Rights Reserved</span>
            <a href={"#"} className={"footer-legal-link"}>Terms of Use</a>
            <a href={"#"} className={"footer-legal-link"}>Membership Terms</a>
            <a href={"#"} className={"footer-legal-link"}>Privacy Notice</a>
            <a href={"#"} className={"footer-legal-link"}>Sitemap</a>
            <hr aria-hidden={"true"} />
            <a className={"ca-privacy"} href={"#"}> Your California Privacy Rights </a>
        </div>
    );
};

export default FooterLegal;