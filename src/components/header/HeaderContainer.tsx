import React from "react";

// components
import HeaderLeft from "./HeaderLeft";
import HeaderLogo from "./HeaderLogo";
import HeaderRight from "./HeaderRight";

// styles
import '../../style/style.scss';

const HeaderContainer: React.FC = () => {
    return (
        <div className={"header-container"}>
            {/* HeaderContainer content */}
            <React.Fragment>
                <HeaderLeft />
                <HeaderLogo />
                <HeaderRight />
            </React.Fragment>
        </div>
    );
}

export default HeaderContainer