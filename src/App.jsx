import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { images } from "./constants";
import dataInfo from "./Data/Data";
import { BiDotsHorizontalRounded } from "react-icons/bi";

function App() {
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeButton, setActiveButton] = useState(null)
  

  const handleCardMouseDown = (index) => {
    setActiveCard(index);
    setActiveIcon(null);
  };

  const handleIconMouseDown = (index, e) => {
    e.stopPropagation();
    setActiveIcon(index);
    setActiveCard(null);
  };

  const handleReportType = (reportType) => {
    switch(reportType) {
      case "daily":
        setDaily(true);
        setWeekly(false);
        setMonthly(false);
        setActiveButton("daily");
        break;
      case "weekly":
        setDaily(false);
        setWeekly(true);
        setMonthly(false);
        setActiveButton("weekly");
        break;
      case "monthly":
        setDaily(false);
        setWeekly(false);
        setMonthly(true);
        setActiveButton("monthly");
        break;
      default:
        setActiveButton(null);
    }
  };

  return (
    <div>
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
            <button onClick={() => handleReportType("daily")}  className={activeButton === "daily" ? "app__user-controls-btn active" : "app__user-controls-btn"}>
              Daily
            </button>
            <button onClick={() => handleReportType("weekly")}  className={activeButton === "weekly" ? "app__user-controls-btn active" : "app__user-controls-btn"}>
              Weekly
            </button>
            <button onClick={() => handleReportType("monthly")}  className={activeButton === "monthly" ? "app__user-controls-btn active" : "app__user-controls-btn"}>
              Monthly
            </button>
          </div>
        </div>

        <div className="app__dashboard">
          {dataInfo.map((item, index) => (
            <div className="app__dashboard-card ">
              <div
                className={`app__dashboard-card-header ${item.style.toLowerCase()}`}
              >
                <img
                  className="app__dashboard-card-header-img"
                  src={item.image}
                  alt="svg"
                />
              </div>
              <div
                className={`app__dashboard-card-content ${
                  index === activeCard ? "activebg" : ""
                }`}
                onMouseDown={() => handleCardMouseDown(index)}
                onMouseUp={() => setActiveCard(null)}
              >
                <p className="app__dashboard-card-content-title">
                  {item.title}{" "}
                  <BiDotsHorizontalRounded
                    className={`icon ${index === activeIcon ? "active" : ""}`}
                    onMouseDown={(e) => handleIconMouseDown(index, e)}
                    onMouseUp={() => setActiveIcon(null)}
                  />
                </p>
                {daily && (
                  <div className="app__dashboard-card-info">
                    <p className="app__dashboard-card-content-current">
                      {item.timeframes.daily.current}hrs
                    </p>
                    <p className="app__dashboard-card-content-previous">
                      Yesterday - {item.timeframes.daily.previous}hrs
                    </p>
                  </div>
                )}

                {weekly && (
                  <div>
                    <p className="app__dashboard-card-content-current">
                      {item.timeframes.weekly.current}hrs
                    </p>
                    <p className="app__dashboard-card-content-previous">
                      Last Week - {item.timeframes.weekly.previous}hrs
                    </p>
                  </div>
                )}

                {monthly && (
                  <div>
                    <p className="app__dashboard-card-content-current">
                      {item.timeframes.monthly.current}hrs
                    </p>
                    <p className="app__dashboard-card-content-previous">
                      Last Month - {item.timeframes.monthly.previous}hrs
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">JMDevelopment</a>.
      </div>
    </div>
  );
}

export default App;
