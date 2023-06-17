import React from 'react';
import PropTypes, { array } from 'prop-types';

import './ForecastDisplay.css';

//TODO
import '../owfont-regular.css'; //import fonts
<link href="css/owfont-regular.css" rel="stylesheet" type="text/css"></link>
let date = [NaN, NaN, NaN, NaN, NaN];
//TODO

export default class ForecastDisplay extends React.Component {
    //TODO
    static propTypes = {
        list: PropTypes.array,
    };
    //TODO

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
        const d = new Date();
        let day = d.getDay();
        date = [weekday[day], weekday[(day+1)%7], weekday[(day+2)%7], weekday[(day+3)%7], weekday[(day+4)%7]];
        console.log(date);
    }

    render() {
        return (
            <div>
                <div className={`weatherF-display ${this.props.masking ? 'masking' : ''}`}>
                    <div className='container'>
                        {/* TODO */}
                        <img src={`images/w-${this.props.list[0].group}.png`}/>
                        <p className='description'>Tomorrow: 
                        {/* TODO */}
                        {this.props.list[0].description}
                        </p>&nbsp;
                        <h1 className='temp'>
                            <div className='tomorrowtmp'>
                            {/* TODO */}
                            {this.props.list[0].temp.toFixed(0)}&ordm;
                            &nbsp;{(this.props.unit === 'metric')
                                ? 'C'
                                : 'F'}
                            {/* TODO */}
                            </div>
                        </h1>
                    </div>
                </div>
                <div className='container fourdaycontainer'>
                    <div className='row fourday'>
                        {/* TODO */}

                        <div className='col'>
                            <p>{date[1]}: </p>
                            <p>{this.props.list[1].temp.toFixed(0)}&ordm;{(this.props.unit === 'metric')? 'C' : 'F'}</p>
                            <i class={"owf owf-"+this.props.list[1].code.toString()}></i>
                        </div>
                        <div className='col'>
                            <p>{date[2]}: </p>
                            <p>{this.props.list[2].temp.toFixed(0)}&ordm;{(this.props.unit === 'metric')? 'C' : 'F'}</p>
                            <i class={"owf owf-"+this.props.list[2].code.toString()}></i>
                        </div>
                        <div className='col hideMobileDevices'>
                            <p>{date[3]}: </p>
                            <p>{this.props.list[3].temp.toFixed(0)}&ordm;{(this.props.unit === 'metric')? 'C' : 'F'}</p>
                            <i class={"owf owf-"+this.props.list[3].code.toString()}></i>
                        </div>
                        <div className='col hideMobileDevices'>
                            <p>{date[4]}: </p>
                            <p>{this.props.list[4].temp.toFixed(0)}&ordm;{(this.props.unit === 'metric')? 'C' : 'F'}</p>
                            <i class={"owf owf-"+this.props.list[4].code.toString()}></i>
                        </div>

                        {/* TODO */}

                    </div>
                </div>
            </div>
        );
    }
}