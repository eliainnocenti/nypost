import React from "react";

// components
import HeaderContainer from "./HeaderContainer";
import MembershipDropdown from "./MembershipDropdown";
import SiteHeaderBar from "./SiteHeaderBar";

// styles
import '../../style/style.scss';

const HeaderWrapper: React.FC = () => {
    return (
        <div className={"header-wrapper"}>
            {/* HeaderWrapper content */}
            <React.Fragment>
                <HeaderContainer />
                <MembershipDropdown />
                <SiteHeaderBar />
            </React.Fragment>
        </div>
    );
}

export default HeaderWrapper;