import React from 'react';
import WeatherLocation from "./WeatherLocation";
import PropTypes from 'prop-types';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    
    const handleWeatherLocationClick = city => {
        //console.log("handle");
        onSelectedLocation(city);
    };

    const strToComponent = cities => (
        cities.map( (city, index) => (
            <WeatherLocation key={index}
                             city={city}
                             onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>)
        )
    );
    
    return (<div className="locationList">
        {strToComponent(cities)}
    </div>)
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;