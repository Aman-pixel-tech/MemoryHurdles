import React, { useState, useEffect } from 'react';
import './phone.css';

// Fun Fact Component
const FunFact = () => {
  const facts = [
    'Did you know? Honey never spoils.',
    'Did you know? There are more stars in the universe than grains of sand on Earth.',
    'Did you know? Bananas are berries, but strawberries are not.',
  ];

  const [fact, setFact] = useState('');

  const showFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(randomFact);
  };

  return (
    <div className="funFact9">
      <button onClick={showFact} className="button9">Show Fun Fact</button>
      {fact && <p className="fact9">{fact}</p>}
    </div>
  );
};

// Simple Calculator Component
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator9">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="input9"
        placeholder="Enter calculation"
      />
      <button onClick={handleCalculate} className="button9">Calculate</button>
      <p className="result9">{result}</p>
    </div>
  );
};

// Image Recognition Game Component
const ImageRecognition = () => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: 'https://via.placeholder.com/200?text=Cat', name: 'Cat' },
    { src: 'https://via.placeholder.com/200?text=Dog', name: 'Dog' },
    { src: 'https://via.placeholder.com/200?text=Apple', name: 'Apple' },
    { src: 'https://via.placeholder.com/200?text=Ball', name: 'Ball' },
    { src: 'https://via.placeholder.com/200?text=Fish', name: 'Fish' },
  ];

  const currentImage = images[currentIndex];

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === currentImage.name.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  const nextImage = () => {
    setGuess('');
    setFeedback('');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="imageRecognition9">
      <img src={currentImage.src} alt="Guess the image" className="imag9" />
      <input
        type="text"
        value={guess}
        onChange={handleChange}
        className="input9"
        placeholder="Enter your guess"
      />
      <button onClick={checkGuess} className="button9">Submit Guess</button>
      <button onClick={nextImage} className="button9">Next Image</button>
      <p className="feedback9">{feedback}</p>
    </div>
  );
};

// Counting Game Component
const CountingGame = () => {
  const [count, setCount] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { src: 'https://via.placeholder.com/200?text=3+Apples', count: 3 },
    { src: 'https://via.placeholder.com/200?text=5+Bananas', count: 5 },
    { src: 'https://via.placeholder.com/200?text=4+Balls', count: 4 },
  ];

  const currentItem = items[currentIndex];

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const checkCount = () => {
    if (parseInt(count) === currentItem.count) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  const nextItem = () => {
    setCount('');
    setFeedback('');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="countingGame9">
      <img src={currentItem.src} alt="Count the items" className="imag9" />
      <input
        type="number"
        value={count}
        onChange={handleChange}
        className="input9"
        placeholder="Enter your count"
      />
      <button onClick={checkCount} className="button9">Submit Count</button>
      <button onClick={nextItem} className="button9">Next Item</button>
      <p className="feedback9">{feedback}</p>
    </div>
  );
};

// Network Status Component
const NetworkStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="networkStatus9">
      <p className="status9">{online ? 'Online' : 'Offline'}</p>
    </div>
  );
};

// Current Time Component
const CurrentTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="currentTime9">
      <p className="time9">{time}</p>
    </div>
  );
};

// Weather Component


const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('New York');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=bea6901ae9ed4f0f8d370603240108&q=${city}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Fetched data:", data); // Debugging log
      setWeather(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather();
  };

  const handleClear = () => {
    setWeather(null);
    setCity('');
  };

  return (
    <div className="weather9">
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        className="input9"
        placeholder="Enter city"
      />
      <button onClick={handleSearch} className="button9">Get Weather</button>
      <button onClick={handleClear} className="button9">Clear</button>
      {error && <p className="error9">Error: {error}</p>}
      {weather && (
        <div className="weatherInfo9 fadeIn">
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Weather icon" />
        </div>
      )}
    </div>
  );
};




// Main App Component
const App = () => {
  const [activeFeature, setActiveFeature] = useState('');

  const handleFeatureChange = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <div className="container9">
      <div className="phone9">
        <div className="topBar9">
          <CurrentTime />
          <NetworkStatus />
        </div>
        <div className="screen9">
          <h1 className="title9">Kids' Phone</h1>
          <div className="buttonContainer">
            <button className="button9" onClick={() => handleFeatureChange('calculator')}>Calculator</button>
            <button className="button9" onClick={() => handleFeatureChange('funFact')}>Fun Fact</button>
            <button className="button9" onClick={() => handleFeatureChange('imageRecognition')}>Guess the Image</button>
            <button className="button9" onClick={() => handleFeatureChange('countingGame')}>Count the Items</button>
            <button className="button9" onClick={() => handleFeatureChange('weather')}>Weather</button>

          </div>
          {activeFeature === 'calculator' && <Calculator />}
          {activeFeature === 'funFact' && <FunFact />}
          {activeFeature === 'imageRecognition' && <ImageRecognition />}
          {activeFeature === 'countingGame' && <CountingGame />}
          {activeFeature === 'weather' && <Weather />}
        </div>
      </div>
    </div>
  );
};

export default App;
