import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location'
import WeatherData from './WeatherData/index';
import transformWeather from '../../services/transformWeather';
import './styles.css';
import { CircularProgress } from 'material-ui';


const apiKey = 'f43e7cb651e8dce52fbe150af4e5e1f5';
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component{
    
    constructor({ city }) {
        super();
        //this.state = data1;
        this.state = {
            city,
            data: null
        };
    }    
    componentWillMount() {
        const {city} = this.state;
        const apiWeather = `${url}?q=${city}&appid=${apiKey}`;
        fetch(apiWeather).then(data => {
            return data.json();
        }).then( weatherData => {
            const data = transformWeather(weatherData);
            this.setState({data});
        });
    }

    componentDidMount() {
    }

    componentWillUpdate() {
        //console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        //console.log("componentDidUpdate");
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const {city, data} = this.state;
        return(
        <div className = "weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7}/>}
        </div>);
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;