import { useState } from "react";
import "./App.css";
import Button from "./componets/Button/Button";
import Wechat from "./componets/Wechat";

const defaultChildren = "Lable";

function App() {
  return (
    <>
      <div className="container">
        <table className="batton-table">
          <thead>
            <tr>
              <th></th>
              <th>Lable</th>
              <th>Icon-Left</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enabled</td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button icon={<Wechat />} variant="primary" size="small">
                  {defaultChildren}
                </Button>{" "}
              </td>
              <td>
                <Button
                  icon={<Wechat />}
                  variant="primary"
                  size="small"
                ></Button>
              </td>
            </tr>
            <tr>
              <td>Hower</td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="primary" size="small"></Button>
              </td>
            </tr>
            <tr>
              <td>Pressed</td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="primary" size="small"></Button>
              </td>
            </tr>
            <tr>
              <td>Focuse</td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="primary" size="small"></Button>
              </td>
            </tr>
            <tr>
              <td>Disable</td>
              <td>
                <Button disabled variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button disabled variant="primary" size="small">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button disabled variant="primary" size="small"></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <table className="batton-table">
          <thead>
            <tr>
              <th></th>
              <th>Lable</th>
              <th>Icon-Left</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enabled</td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button icon={<Wechat />} variant="minimal" size="medium">
                  {defaultChildren}
                </Button>{" "}
              </td>
              <td>
                <Button icon={<Wechat />} variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
            </tr>
            <tr>
              <td>Hower</td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
            </tr>
            <tr>
              <td>Pressed</td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
            </tr>
            <tr>
              <td>Focuse</td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
            </tr>
            <tr>
              <td>Disable</td>
              <td>
                <Button disabled variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button disabled variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
              <td>
                <Button disabled variant="minimal" size="medium">
                  {defaultChildren}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
