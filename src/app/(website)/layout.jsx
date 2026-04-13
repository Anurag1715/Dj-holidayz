import React from 'react';

import Header from '../resources/components/common/header';

const WebsiteLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="header_space">
                {children}
            </div>
        </>
    );
};

export default WebsiteLayout;
