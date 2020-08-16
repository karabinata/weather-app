import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData} from '../../store/actions';
import { useHistory } from "react-router-dom";

import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import WeatherWidget from '../weather-widget/WeatherWidget';
import DetailsSection from '../details-section/DetailsSection';
import axios from '../../apis/open-weather';
import './DetailView.less';
import * as constants from '../../utils/constants';

const DetailView = ({ actions, weatherInfo, city }) => {
  const history = useHistory();
  const { getWeatherData } = actions;
  const { weather, main}  = weatherInfo;
  const weatherDesc = weather && weather[0];

  useEffect(() => {
    const getData = async() => {
      await getWeatherData(city);
    }

    if (weatherInfo === constants.NO_WEATHER_DATA_FETCHED) {
      getData();
    }
  }, [city, getWeatherData]);

  const isSunny = ['Clouds', 'Clear'].includes(weatherDesc);

  const onInputClick = () => history.push('/');

  return (
    <div className="detail-view">
      <WeatherWidget onInputClick={onInputClick} temp={main?.temp} isSunny={isSunny} hideDetails={true} />
      <DetailsSection />
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

export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(DetailView), axios);
