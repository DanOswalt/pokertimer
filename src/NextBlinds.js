import React from 'react';

const NextBlinds = ({ blinds }) => {
    const { small, big } = blinds;
    const blindsText = `Next: ${small} / ${big}`;
    
    return (
        <div className="NextBlinds blinds">
            <p className="blindsDisplay">{blindsText}</p>
        </div>  
    )
}

export default NextBlinds;