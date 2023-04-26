import styles from './WeatherInfo.module.css';
const WeatherInfo = function ({ weatherData }) {
  const { temp, description1, description2, humid, wind, name, cloudy, time } = weatherData;

  const day = time > 6 && time < 20;
  let imagePath;

  //Clear sky
  if (description2 === 'clear sky') {
    if (day) {
      imagePath = 'clear-day.svg';
    } else {
      imagePath = 'clear-night.svg';
    }
  }

  //Cloudy days
  if (description2 === 'few clouds') {
    if (day) {
      imagePath = 'partly-cloudy-day.svg';
    } else {
      imagePath = 'partly-cloudy-night.svg';
    }
  }
  if (description2 === 'overcast clouds') {
    imagePath = 'overcast.svg';
  }
  if (description2 === 'scattered clouds') {
    imagePath = 'cloudy.svg';
  }
  if (description2 === 'broken clouds') {
    if (day) {
      imagePath = 'overcast-day.svg';
    } else {
      imagePath = 'overcast-night.svg';
    }
  }

  //Drizzle
  if (description1 === 'Drizzle') {
    if (cloudy > 70) {
      imagePath = 'drizzle.svg';
    }
    if (day) {
      imagePath = 'partly-cloudy-day-drizzle.svg';
    }
    if (!day) {
      imagePath = 'partly-cloudy-night-drizzle.svg';
    }
  }

  //Rain
  if (description1 === 'Rain') {
    if (cloudy > 70) {
      imagePath = 'rain.svg';
    }
    if (day) {
      imagePath = 'partly-cloudy-day-rain.svg';
    }
    if (!day) {
      imagePath = 'partly-cloudy-night-rain.svg';
    }
  }

  //Thunder storm
  if (description1 === 'Thunderstorm') {
    if (cloudy > 70) {
      imagePath = 'thunderstorms-rain.svg';
    }
    if (day) {
      imagePath = 'thunderstorms-day-rain.svg';
    }
    if (!day) {
      imagePath = 'thunderstorms-night-rain.svg';
    }
  }

  //Snow
  if (description1 === 'Snow') {
    if (cloudy > 70) {
      imagePath = 'snow.svg';
    }
    if (day) {
      imagePath = 'partly-cloudy-day-snow.svg';
    }
    if (!day) {
      imagePath = 'partly-cloudy-night-snow.svg';
    }

    if (description2 === 'sleet') {
      imagePath = 'sleet.svg';
    }
  }

  //Atmosphere types
  const atmosphere1 = ['Mist', 'Fog', 'Smoke', 'Dust'];
  const atmosphere2 = ['Haze', 'Sand', 'Ash', 'Squall'];

  atmosphere1.forEach((el) => {
    if (el === description1) {
      if (cloudy > 70) {
        imagePath = 'fog.svg';
      }
      if (day) {
        imagePath = 'fog-day.svg';
      }
      if (!day) {
        imagePath = 'fog-night.svg';
      }
    }
  });

  atmosphere2.forEach((el) => {
    if (el === description1) {
      if (cloudy > 70) {
        imagePath = 'haze.svg';
      }
      if (day) {
        imagePath = 'haze-day.svg';
      }
      if (!day) {
        imagePath = 'haze-night.svg';
      }
    }
  });

  //Tornado
  if (description1 === 'Tornado') {
    imagePath = 'tornado.svg';
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{name}</h1>
      <div className={styles['image-container']}>
        <img
          className={styles.image}
          src={`../images/${imagePath}`}
          alt="Weather image"
          width="300px"
          height="270px"
        />
      </div>
      <div className={styles['main-info']}>
        <h2 className={styles.temperature}>{temp}°C</h2>
        <p className={styles.description}>
          {description1} ({description2})
        </p>
      </div>
      <div className={styles['additional-info']}>
        <div className={styles['info-item']}>
          <img className={styles['info-image']} src="../images/icons/humidity.png" alt="" />
          <p className={styles['info-stats']}>{humid}%</p>
          <p className={styles['info-text']}>Humidity</p>
        </div>
        <div className={styles['info-item']}>
          <img className={styles['info-image']} src="../images/icons/wind.png" alt="" />
          <p className={styles['info-stats']}>{wind} m/s</p>
          <p className={styles['info-text']}>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
