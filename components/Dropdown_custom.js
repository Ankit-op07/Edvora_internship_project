import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownExampleClearableMultiple = ({
  name,
  data,
  getState,
  getCity,
}) => {
  const [currName, setCurrName] = useState(name);

  const handleArea = (areaName) => {
    if (name === "State") {
      getState(areaName);
    } else {
      getCity(areaName);
    }
    setCurrName(areaName);
  };

  return (
    <>
      <Dropdown
        style={{
          backgroundColor: "#232323",
          color: "white",
          borderRadius: "5px",
        }}
        selection
        placeholder={currName}
      >
        <Dropdown.Menu
        style={{backgroundColor: "#232323", color: "white", borderRadius: "5px"}}
        >
          {data.map((element) => {
            return (
              <Dropdown.Item
              style={{color:"white"}}
              key={element}
                onClick={() => {
                  if (name === "State") {
                    handleArea(element.state);
                  } else {
                    handleArea(element.city);
                  }
                }}
              >
                {name === "State" ? element.state : element.city}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
export default DropdownExampleClearableMultiple;
