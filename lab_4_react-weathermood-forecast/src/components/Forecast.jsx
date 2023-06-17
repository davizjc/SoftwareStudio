import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import ForecastDisplay from 'components/ForecastDisplay.jsx';
import WeatherForm from 'components/WeatherForm.jsx';
import { getForecast } from 'api/open-weather-map.js';

import './weather.css';

export default class Forecast extends React.Component {

    //TODO
    static propTypes = {
        masking: PropTypes.bool,
        group: PropTypes.string,
        description: PropTypes.string,
        temp: PropTypes.number,
        unit: PropTypes.string
    };

    static getInitWeatherState() {
        let list = [];
        for (let i=0; i<5; i++) {
            list.push({
                code: -1,
                group: 'na',
                description: 'N/A',
                temp: NaN
            });
        }
        return {
            city: 'na',
            list: list,
        };
    }
    //TODO

    constructor(props) {
        super(props);

        this.state = {
            ...Forecast.getInitWeatherState(),    //TODO
            loading: true,
            masking: true
        };

        this.handleFormQuery = this.handleFormQuery.bind(this);   //TODO
    }
    
    //TODO
    componentDidMount() {
        this.getForecast('Hsinchu', 'metric');
    }

    componentWillUnmount() {
        if (this.state.loading) {
            cancelWeather();
        }
    }
    //TODO

    render() {
        return (
            <div className={`today weather-bg ${this.state.list[0].group}`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <WeatherForm city={this.state.city} unit={this.props.unit} onQuery={this.handleFormQuery}/>
                    <ForecastDisplay {...this.state}/>
                </div>
            </div>
        );
    }
     
    //TODO SAME AS getWeather from Today
    getForecast(city, unit) {
        this.setState({
            loading: true,
            masking: true,
            city: city // set city state immediately to prevent input text (in WeatherForm) from blinking;
        }, () => { // called back after setState completes
            getForecast(city, unit).then(weather => {
                this.setState({
                    ...weather,
                    loading: false
                }, () => this.notifyUnitChange(unit));
            }).catch(err => {
                console.error('Error getting weather', err);

                this.setState({
                    ...Forecast.getInitWeatherState(unit),
                    loadingToday: false
                }, () => this.notifyUnitChange(unit));
            });
        });

        setTimeout(() => {
            this.setState({
                masking: false
            });
        }, 600);
    }

    handleFormQuery(city, unit) {
        this.getForecast(city, unit);
    }

    notifyUnitChange(unit) {
        if (this.props.units !== unit) {
            this.props.onUnitChange(unit);
        }
    }
    //TODO
}
