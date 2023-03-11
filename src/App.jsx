import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { images } from "./constants";
import dataInfo from "./Data/Data";


function App() {
  const [count, setCount] = useState(0);
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);

  const handleDaily = () => {
    setDaily(true);
    setMonthly(false);
    setWeekly(false);
  };

  const handleWeekly = () => {
    setDaily(false);
    setMonthly(false);
    setWeekly(true);
  };

  const handleMonthly = () => {
    setDaily(false);
    setMonthly(true);
    setWeekly(false);
  };

  return (
    <div className="app">
      <div className="app__user">
        <div className="app__user-info">
          <img
            className="app__user-info-img"
            src={images.user}
            alt="User Image"
          />
          <div className="app__user-info-content">
            <p className="app__user-info-text">Report for</p>
            <p className="app__user-info-title">Jeremy Robson</p>
          </div>
        </div>

        <div className="app__user-controls">
          <button onClick={handleDaily} className="app__user-controls-btn">
            Daily
          </button>
          <button onClick={handleWeekly} className="app__user-controls-btn">
            Weekly
          </button>
          <button onClick={handleMonthly} className="app__user-controls-btn">
            Monthly
          </button>
        </div>
      </div>

      <div className="app__dashboard">
        {dataInfo.map((item) => (
          <div className="app__dashboard-card">
            <div className={`app__dashboard-card-header ${item.style.toLowerCase()}`}>
              
              <img
                className="app__dashboard-card-header-img"
                src={item.image}
                alt="svg"
              />
            </div>
            <div className="app__dashboard-card-content">
              <p className="app__dashboard-card-content-title">{item.title} </p>
              {daily && (
                <div className="app__dashboard-card-info">
                  <p className="app__dashboard-card-content-current">{item.timeframes.daily.current}hrs</p>
                  <p className="app__dashboard-card-content-previous">Yesterday - {item.timeframes.daily.previous}hrs</p>
                </div>
              )}

              {weekly && (
                <div>
                  <p className="app__dashboard-card-content-current">{item.timeframes.weekly.current}hrs</p>
                  <p className="app__dashboard-card-content-previous">Last Week - {item.timeframes.weekly.previous}hrs</p>
                </div>
              )}

              {monthly && (
                <div>
                  <p className="app__dashboard-card-content-current">{item.timeframes.monthly.current}hrs</p>
                  <p className="app__dashboard-card-content-previous">Last Month - {item.timeframes.monthly.previous}hrs</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
