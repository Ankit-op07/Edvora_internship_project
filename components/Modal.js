import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import BarsIcon from "./BarsIcon";
import Dropdown_custom from "./Dropdown_custom";

const DropdownExampleDescription = ({
  data,
  getState_from_modal,
  getCity_from_modal,
}) => {
 

  const handleState = (state) => {
    getState_from_modal(state); 
  };
  
  const handleCity = (city) => {
    getCity_from_modal(city);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          bsPrefix="p-0"
          className="filter-toggle"
          id="dropdown-basic"
          style={{
            backgroundColor: "#292929",
            color: "white",
            border: "none",
            outline: "none",
          }}
        >
          <BarsIcon /> Filters
        </Dropdown.Toggle>

        <div className="dropdown_menu">
          <Dropdown.Menu
            style={{
              backgroundColor: "#000000",
              color: "white!important",
              borderRadius: "15px",
            }}
          >
            <Dropdown.Item
              active="False"
              style={{
                color: "white",
                backgroundColor: "#000000",
                cursor: "auto",
              }}
            >
              <div className="flt">Filter</div>
            </Dropdown.Item>
            <Dropdown.Divider style={{ color: "white" }} />
            <Dropdown.Item
              active="False"
              style={{ color: "white", backgroundColor: "#000000" }}
            >
              <Dropdown_custom
                name="State"
                data={data}
                getState={(state) => {
                  handleState(state);
                }}
              />
            </Dropdown.Item>
            <Dropdown.Item
              active="False"
              style={{ color: "white", backgroundColor: "#000000" }}
            >
              <Dropdown_custom
                name="City"
                data={data}
                getCity={(city) => {
                  handleCity(city);
                }}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </div>
      </Dropdown>

      <style jsx>
        {`
          .dropdown-toggle::after {
            display: none !important;
          }
          .flt {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default DropdownExampleDescription;
