import React from 'react';


const ShowNumbers = (props) => {
    return ( 
        <React.Fragment>
            <h2>Números Generados</h2>
            <div className="rmdb-grid">
                <div className="rmdb-grid-content">
                    {props.bingoNumbers.map((element, i) => {
                        return <div className="rmdb-grid-element" key={i}><h2>{element}</h2></div>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShowNumbers;