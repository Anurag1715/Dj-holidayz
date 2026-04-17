import React from 'react';

import Header from '../resources/components/common/header';
import Footer from '../resources/components/common/footer';

const WebsiteLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="header_space">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default WebsiteLayout;
