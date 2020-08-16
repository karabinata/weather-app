import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Input, Button } from "../UI";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeCity } from '../../store/actions';

import "./WeatherWidget.less";

const WeatherWidget = ({ city, isSunny, temp, actions }) => {
  const history = useHistory();

  const [cityValue, setCityValue] = useState(city);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [magnifierVisible, setMagnifierVisible] = useState(true);

  const { changeCity } = actions;

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setCityValue(value);
    setTypingTimeout(setTimeout(() => {
      changeCity(value);
    }, 2000));
  }

  const onMagnifierVisibilityChange = () => setMagnifierVisible((prevState) => !prevState)

  return (
    <div className="weather-widget">
      <form method="get" className="search">
        <Input 
          onClick={onMagnifierVisibilityChange} 
          type="text" 
          id="city" 
          name="city" 
          value={cityValue} 
          onChange={(e) => onChange(e)} 
          onBlur={onMagnifierVisibilityChange}
          className='city'
        />
        <label htmlFor="city" className={magnifierVisible ? 'magnifier' : 'hidden'}>
          <img src="/assets/imgs/Magnifier.png" alt="Magnifier" />
        </label>
      </form>
      <div className="temp">
        <div className="degree-number">{temp?.toFixed(0)}</div>
        <div className="degree-sep">&deg;</div>
        <div className="degree-sign">C</div>
        <img className="weather-icon-container" src="/assets/imgs/RainyIcon.png" alt="rainy icon" />
      </div>
      <div className="weather-desc">{isSunny ? 'Sunny' : 'Raining'}</div>
      <Button onClick={() => history.push('/detail-view')} className="weather-btn" text="More details" htmlSym=" &#8250;" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        changeCity
      }, dispatch)
  };
};

const mapStateToProps = (state) => {
  return {
      city: state.locationReducer.city
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);