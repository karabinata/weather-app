import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData} from '../../store/actions';
import { useHistory } from "react-router-dom";

import withErrorHandler from '../HOC/withErrorHandler/withErrorHandler';
import WeatherWidget from '../weather-widget/WeatherWidget';
import axios from '../../apis/open-weather';
import './Home.less';

const Home = ({ actions, weatherInfo, city }) => {
  const history = useHistory();
  const { getWeatherData } = actions;
  const { weather, main}  = weatherInfo;
  const weatherDesc = weather && weather[0];

  useEffect(() => {
    const getData = async() => {
      await getWeatherData(city);
    }

    getData();
    window.addEventListener("scroll", handleScroll);

    return function cleanup () {
      window.removeEventListener("scroll", handleScroll); 
    }
  }, [city, getWeatherData]);

  const handleScroll = () => history.push('/detail-view');

  const isSunny = ['Clouds', 'Clear'].includes(weatherDesc);

  return (
    <div className={isSunny ? 'sunny' : 'rainy'}>
      <WeatherWidget temp={main?.temp} isSunny={isSunny} />
      <div style={{ width: "100%", height: '100%' }}>
        <img className="weather-image" src={isSunny ? '/assets/imgs/SunnyWeather.png' : '/assets/imgs/RainyWeather.png'} alt="Sunny" />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getWeatherData
        }, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        isFetching: state.weatherDataReducer.isFetching,
        weatherInfo: state.weatherDataReducer.weatherInfo,
        city: state.locationReducer.city
    };
};

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(Home), axios);
