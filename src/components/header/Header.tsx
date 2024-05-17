import React from 'react';

// components
import HeaderWrapper from './HeaderWrapper';

// styles
import '../../style/style.scss';

const Header: React.FC = () => {
    return (
        <header id={""} className={"header"}>
            {/* Header content */}
            <React.Fragment>
                <HeaderWrapper />
                {/* search search--header */} {/* TODO: check if it's necessary */}
            </React.Fragment>
        </header>
    );
};

export default Header;