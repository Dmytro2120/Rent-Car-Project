import { fn } from "storybook/test";
import { useState } from "react";
import React from "react";
import Select from "react-select";
import { CitySelect } from "../../assets/City/City";
import "./PickUp.css";
import { DaySelect } from "../DaySelect/DaySelect";
import { TimeSelect } from "../../assets/City/Time";



export const PickUp = ({ onCityChange, onTimeChange, onDateChange }) => {

  return (
    <div className="select-car">
      <div className="select-head">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="none"
        >
          <rect
            width={16}
            height={16}
            fill="#3563E9"
            fillOpacity={0.3}
            rx={8}
          />
          <circle cx={8} cy={8} r={4} fill="#3563E9" />
        </svg>
        <span className="name-select">Pick-Up</span>
      </div>
      <div className="selected">
        <span className="select-locations">
          <span className="pick-up-title">Locations</span>
          <Select
            components={{
              DropdownIndicator: () => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  width="1em"
                  height="1em"
                  fill="none"
                >
                  <path
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth={0.5}
                    d="M7 9.8a1.59 1.59 0 0 1-1.126-.467L2.071 5.53a.44.44 0 0 1 0-.619.44.44 0 0 1 .618 0l3.804 3.804c.28.28.735.28 1.015 0L11.31 4.91a.44.44 0 0 1 .618 0c.17.17.17.45 0 .619L8.126 9.333A1.59 1.59 0 0 1 7 9.8Z"
                  />
                </svg>
              ),
            }}
            placeholder="Select your city"
            className="react-select"
            defaultValue={[]}
            name="city"
            options={CitySelect}
            classNamePrefix={"react-select"}
            onChange={(value) => { onCityChange(value) }}
          />
        </span>
        <span className="border-select"></span>
        <span className="select-date">
          <span className="pick-up-title">Date</span>
          <DaySelect onChange={(value) => { onDateChange(value) }} />
        </span>
        <span className="border-select"></span>
        <span className="select-time">
          <span className="pick-up-title">Time</span>
          <Select
            components={{
              DropdownIndicator: () => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  width="1em"
                  height="1em"
                  fill="none"
                >
                  <path
                    fill="#1A202C"
                    stroke="#1A202C"
                    strokeWidth={0.5}
                    d="M7 9.8a1.59 1.59 0 0 1-1.126-.467L2.071 5.53a.44.44 0 0 1 0-.619.44.44 0 0 1 .618 0l3.804 3.804c.28.28.735.28 1.015 0L11.31 4.91a.44.44 0 0 1 .618 0c.17.17.17.45 0 .619L8.126 9.333A1.59 1.59 0 0 1 7 9.8Z"
                  />
                </svg>
              ),
            }}
            placeholder="Select your time"
            className="react-select"
            defaultValue={[]}
            name="time"
            options={TimeSelect}
            classNamePrefix={"react-select"}
            onChange={(value) => { onTimeChange(value) }}
          />
        </span>
      </div>
    </div>
  );
};
