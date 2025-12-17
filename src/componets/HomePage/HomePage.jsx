import React from "react";
import { Button } from "../Button/Button";
import "./HomePage.css"
import { PickUp } from "../PickUp/PickUp"
import { DropOff } from "../DropOff/DropOff"
import { Grid } from "../Grid/Grid";

export const HomePage = () => {
  return (
    <>
      <div className="pick-date">
        <PickUp />
        <Button
          className="button-pick"
          variant="primary"
          size="large"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} fill="none">
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.828.75v13.618M.75 4.847 4.828.75l4.078 4.097M14.756 17.082V3.464M18.834 12.986l-4.078 4.096-4.078-4.096"
            />
          </svg>
        </Button>

        <DropOff />

      </div>
      <div className="pick-car">
        <Grid />
      </div>
    </>
  )
}