import React from 'react';

const CurrentBlinds = ({ blinds }) => {
    const { small, big } = blinds;
    const blindsText = `Current: ${small} / ${big}`;
    
    return (
        <div className="CurrentBlinds blinds">
            <p className="blindsDisplay">{blindsText}</p>
        </div>  
    )
}

export default CurrentBlinds;