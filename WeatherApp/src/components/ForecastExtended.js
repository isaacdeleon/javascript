import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import WeatherData from './WeatherLocation/WeatherData';
import transformForecast from './../services/transformForecast';
import './styles.css';


const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}

const apiKey = 'f43e7cb651e8dce52fbe150af4e5e1f5';
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {forecastData: null};
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        //fetch or axios
        const url_forecast = `${url}?q=${this.props.city}&appid=${apiKey}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>)); 
    }

    renderProgrees = () => {
        return <h3>"Cargando Pronostico..."</h3>;
    }

    render() {
        const { city } = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronostico Extendido para {city} </h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgrees()
                }
            </div>)
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;