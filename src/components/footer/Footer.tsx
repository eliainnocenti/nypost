import React from 'react';

import FooterWrapper from "./FooterWrapper";

const Footer: React.FC = () => {
    return (
        <footer id={""} className={"footer"} data-component={"footer"}> {/* TODO: do I need to add an id attribute? */}
            {/* Footer content */}
            <React.Fragment>
                <FooterWrapper />
            </React.Fragment>
        </footer>
    );
};

export default Footer;