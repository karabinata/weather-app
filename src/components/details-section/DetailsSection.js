import React from "react";
import { connect } from 'react-redux';

import "./DetailsSection.less";

const WeatherWidget = ({ weatherInfo }) => {
  const { wind, main, clouds } = weatherInfo;

  return (
    <div className="details-section">
      <div className="details-item details-item-wind">{wind?.speed}km/h</div>
      <img className="details-img details-img-wind" src="/assets/imgs/WindIcon.png" alt="wind icon" />
      <div className="details-item details-item-pres">{main?.pressure}km/h</div> 
      <img className="details-img details-img-pres" src="/assets/imgs/PressureIcon.png" alt="pressure icon" />
      <div className="details-item details-item-clouds">{clouds?.all} %</div>
      <img className="details-img details-img-clouds" src="/assets/imgs/SunnyIcon.png" alt="sunny icon" />
      <div className="details-item details-item-hum">{main?.humidity}km/h</div>
      <img className="details-img details-img-hum" src="/assets/imgs/HumidityIcon.png" alt="humidity icon" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      city: state.locationReducer.city,
      weatherInfo: state.weatherDataReducer.weatherInfo
  };
};

export default connect(mapStateToProps)(WeatherWidget);