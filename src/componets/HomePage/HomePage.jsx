import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./HomePage.css";
import { PickUp } from "../PickUp/PickUp";
import { DropOff } from "../DropOff/DropOff";
import { Grid } from "../Grid/Grid";
import { carsData } from "../Grid/Grid.data";
import { format, isAfter, isBefore, isEqual, parse, set } from "date-fns";

export const HomePage = () => {
  const [form, setForm] = useState({
    pickUp: { city: "", date: "" },
    dropOff: { city: "", date: "" },
  });
  const carsByCity = carsData.filter((car) => {
    if (
      car.dropOff?.city === form.dropOff.city?.value ||
      car.pickUp?.city === form.pickUp.city?.value
    ) {
      // console.log(car);
    }
    return (
      car.dropOff?.city === form.dropOff.city?.value &&
      car.pickUp?.city === form.pickUp.city?.value
    );
  });

  // console.log(form);
  // console.log("cars test", carsByCity);
  const carsByDate = carsByCity.filter((car) => {
    const from = car.pickUp?.from;
    const to = car.dropOff?.to;
    if (from && to && form.pickUp.date && form.dropOff.date) {
      const isPickUpValid = !isBefore(form.pickUp.date, from);

      // console.log(
      //   "test b",
      //   format(form.pickUp.date, "dd-MM-yyyy HH:mm"),
      //   format(from, "dd-MM-yyyy HH:mm"),

      //   isPickUpValid,
      // );
      const isDropOffValid = !isAfter(form.dropOff.date, to);
      // console.log(
      //   "test after",
      //   format(form.dropOff.date, "dd-MM-yyyy HH:mm"),
      //   format(to, "dd-MM-yyyy HH:mm"),

      //   isDropOffValid,
      // );

      return isPickUpValid && isDropOffValid;
    }
  });

  return (
    <>
      <div className="pick-date">
        <PickUp
          onCityChange={(value) => {
            setForm({
              pickUp: { ...form.pickUp, city: value },
              dropOff: form.dropOff,
            });
          }}
          onTimeChange={(value) => {
            const timeSplit = value.value.split(":");
            setForm({
              pickUp: {
                ...form.pickUp,
                date: set(form.pickUp.date, {
                  hours: timeSplit[0],
                  minutes: timeSplit[1],
                }),
              },
              dropOff: form.dropOff,
            });
          }}
          onDateChange={(value) => {
            setForm({
              pickUp: { ...form.pickUp, date: value },
              dropOff: form.dropOff,
            });
          }}
        />
        <Button className="button-pick" variant="primary" size="large">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={18}
            fill="none"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.828.75v13.618M.75 4.847 4.828.75l4.078 4.097M14.756 17.082V3.464M18.834 12.986l-4.078 4.096-4.078-4.096"
            />
          </svg>
        </Button>

        <DropOff
          onCityChange={(value) => {
            setForm({
              dropOff: { ...form.dropOff, city: value },
              pickUp: form.pickUp,
            });
          }}
          onTimeChange={(value) => {
            const timeSplit = value.value.split(":");
            setForm({
              dropOff: {
                ...form.dropOff,
                date: set(form.dropOff.date, {
                  hours: timeSplit[0],
                  minutes: timeSplit[1],
                }),
              },
              pickUp: form.pickUp,
            });
          }}
          onDateChange={(value) => {
            setForm({
              dropOff: { ...form.dropOff, date: value },
              pickUp: form.pickUp,
            });
          }}
        />
      </div>
      <div className="pick-car">
        <Grid carsData={carsByDate} />
      </div>
    </>
  );
};
