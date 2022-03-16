import  { useState, useEffect } from "react";


const Rides = ({ currTab, totalRides, user, getData, currCity, currState }) => {
  const [ride, setRide] = useState("");
  const [data, setData] = useState([]);
  const userStation = user.station_code;

  const mlist = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDate = (d1) => {
    let today = new Date(d1.substr(0, 10));
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = mlist[today.getMonth()];
    var yyyy = today.getFullYear();
    today = dd + " " + mm + " " + yyyy;
    return today;
  };

  useEffect(() => {
    setRide(currTab);
  }, [currTab]);

  useEffect(() => {
    fetch("https://assessment.api.vweb.app/rides")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        getData(result);
      });
  }, []);


  let filterData = data;

  if (ride === "Nearest rides") {
    filterData.sort((a, b) => {
      const dist1 = Math.abs(
        userStation -
          a.station_path.reduce(function (prev, curr) {
            return Math.abs(curr - userStation) < Math.abs(prev - userStation)
              ? curr
              : prev;
          })
      );
      const dist2 = Math.abs(
        userStation -
          b.station_path.reduce(function (prev, curr) {
            return Math.abs(curr - userStation) < Math.abs(prev - userStation)
              ? curr
              : prev;
          })
      );

      return dist1 > dist2 ? 1 : -1;
    });
  } else if (ride === "Upcoming rides") {
    filterData = data.filter((item) => {
      let date1 = new Date();
      let date2 = new Date(item.date.substr(0, 10));

      return date1 < date2;
    });
  } else if (ride === "Past rides") {
    filterData = data.filter((item) => {
      let date1 = new Date();
      let date2 = new Date(item.date.substr(0, 10));

      return date1 > date2;
    });
  }

  filterData = filterData.filter((item) => {
    return (
      item.state.toLowerCase().includes(currState.toLowerCase()) &&
      item.city.toLowerCase().includes(currCity.toLowerCase())
    );
  });

  useEffect(() => {
    const UpcomingRides = data.filter((item) => {
      let date1 = new Date();
      let date2 = new Date(item.date.substr(0, 10));

      return date1 < date2;
    });
    const PastRides = data.filter((item) => {
      let date1 = new Date();
      let date2 = new Date(item.date.substr(0, 10));

      return date1 > date2;
    });

    totalRides(UpcomingRides.length, PastRides.length);
  }, [data]);
console.log(filterData);
  return (
    <div className="all-rides">
      {filterData == false && (currState != "" || currCity != "") ? (
        <div className="notice">
          <p>No Rides available related to your search</p>
        </div>
      ) : (
        filterData.map((item) => {
          return (
            <div className="ride-item"
            key={item}
            >
              <div className="ride-item-container">
                <div className="ride-item-image">
                  {/* <img src={item.map_url}/> */}
                  <img
                    style={{ borderRadius: 5, height: "148px", width: "296px" }}
                    src={item.map_url}
                  />
                </div>
                <div className="ride-item-info">
                  <div className="ride-item-info-id">Ride id : {item.id}</div>
                  <div className="ride-item-info-origin_station">
                    Origin Station : {item.origin_station_code}
                  </div>
                  <div className="ride-item-info-date">
                    station_path : [{" "}
                    {item.station_path.map((id, index = 0) =>
                      index++ != item.station_path.length - 1 ? (
                        <span>{id},</span>
                      ) : (
                        <span>{id}</span>
                      )
                    )}
                    ]
                  </div>
                  <div className="ride-item-info-station_path">
                    Date : {getDate(item.date)} {item.date.substr(11, 5)}
                  </div>

                  <div className="ride-item-info-distance">
                    Distance :{" "}
                    {Math.abs(
                      userStation -
                        item.station_path.reduce(function (prev, curr) {
                          return Math.abs(curr - userStation) <
                            Math.abs(prev - userStation)
                            ? curr
                            : prev;
                        })
                    )}
                  </div>
                </div>
                <div className="state">
                  <div>{item.city}</div>
                  <div>{item.state}</div>
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* css */}

      <style jsx>
        {`
          .all-rides {
            background-color: #292929;
          }
          .ride-item {
            margin: 0 43px 43px 43px;
            height: 198px;
            border-radius: 10px;
            background-color: #171717;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .ride-item-container {
            margin: 22px 29px 28px 29px;
            color: #fff;
            display: flex;
            flex-direction: row;
            height: 148px;
          }
          .ride-item-image {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .ride-item-info {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #cfcfcf;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: flex-start;
            margin-left: 44px;
          }

          .state {
            position: relative;
            flex: 2;
            top: 0;
            right: 0;
            display: flex;
            justify-content: flex-end;
            flex-direction: row;
            gap: 20px;
          }
          .state div {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000000;
            border-radius: 12px;
            height: 40px;
            width: 150px;
            font-weight: 500;
            font-size: 13px;
            line-height: 15px;
          }
          .notice {
            background-color: white;
            color: black;
            font-size: 20px;
            text-align: center;
            margin-top: 50px;
          }
        `}
      </style>

      {/* css */}
    </div>
  );
};

export default Rides;
