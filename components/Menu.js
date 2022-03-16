import  { useState } from "react";
import Rides from "./Rides";
import Modal from "./Modal";

const Menu = ({ user }) => {
  const tab = ["Nearest rides", "Upcoming rides", "Past rides"];
  const [data, setData] = useState([]);

  const [currState, setCurrState] = useState("");
  const [currCity, setCurrCity] = useState("");

  const handleState = (state) => {
    setCurrState(state);
    console.log(state);
  };
  const handleCity = (city) => {
    setCurrCity(city);
  };

  const getData = (d) => {
    setData(d);
  };

  const [selectedTab, setSelectedTab] = useState(tab[0]);

  const [upcomingRideLength, setUpcomingRideLength] = useState(0);
  const [PastRideLength, setPastRideLength] = useState(0);

  const totalRides = (len1, len2) => {
    setUpcomingRideLength(len1);
    setPastRideLength(len2);
  };

  return (
    <>
      <div className="menu">
        <div className="menu-container">
          <div className="tabs">
            {tab.map((item) => {
              return (
                <div
                  className={
                    selectedTab === item
                      ? "tab-item tab-item-active"
                      : "tab-item"
                  }
                  key={item}
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                  {item === "Upcoming rides" ? (
                    <span> ({upcomingRideLength})</span>
                  ) : null}
                  {item === "Past rides" ? (
                    <span> ({PastRideLength})</span>
                  ) : null}

                  {selectedTab === item ? (
                    <div className="tab-item-underline"></div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="filters">
            <Modal
              data={data}
              getState_from_modal={(x) => {
                handleState(x);
              }}
              getCity_from_modal={(x) => {
                handleCity(x);
              }}
            />
          </div>
        </div>
      </div>

      {/* css */}

      <style jsx>
        {`
          .menu {
            color: white;
            background-color: #292929;
            width: 100%;
            height: 81px;
          }
          .menu-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            margin-left: 43px;
            margin-right: 43px;
          }
          .tabs {
            display: flex;
            gap: 30px;
            align-items: center;
            height: 100%;
          }
          .tab-item {
            cursor: pointer;
            color: #d0cbcb;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
          }
          .tab-item-active {
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            color: #ffffff;
           
           
          }
          .tab-item-underline {
            width: 100%;
            height: 2px;
            background-color: white;
          }
        
          .filters {
            display: flex;
            align-items: center;
            gap: 10px;

            /* Gray 6 */
            color: #f2f2f2;
          }
          .filters p {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
          }
        `}
      </style>

      
      {/* Rides components */}

      <Rides
        currTab={selectedTab}
        totalRides={(l1, l2) => {
          totalRides(l1, l2);
        }}
        getData={(d1) => {
          getData(d1);
        }}
        user={user}
        currState={currState}
        currCity={currCity}
      />
    </>
  );
};

export default Menu;
