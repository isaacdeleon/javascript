import React from 'react';

const GetNextNumber = ({ text, onClick, endpoint, cssClass }) => {
    return (
        <div className="box">
            <div className="inner">
                <button className={cssClass} onClick={() => onClick(endpoint)}><h2>{text}</h2></button>
            </div>
        </div>
    )
}

export default GetNextNumber;