import React from 'react';
import ContentImage from '../Content/ContentImage';
import ContentContainer from '../Content/ContentContainer';
import ContentHeader from '../Content/ContentHeader';

function Content({ children }) {
    return (
        <div className="flex flex-col h-full w-full">
            <ContentHeader />
            <ContentImage />
            <ContentContainer>{children}</ContentContainer>
        </div>
    );
}

export default Content;