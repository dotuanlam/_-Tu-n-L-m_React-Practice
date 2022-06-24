import { Button, Input, Row } from "antd";
import React from "react";
import "./index.scss";
const NewCustomer = () => {
  return (
    <div className="container__NewCustomer">
      <ul>
        <li>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" />
        </li>
        <li>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" />
        </li>
        <li>
          <label htmlFor="city">City</label>
          <input name="city" />
        </li>
        <li>
          <label htmlFor="state">State</label>
          <input name="state" />
        </li>
        <li>
          <Button>Cancle</Button>
          <Button
            style={{ backgroundColor: "green", marginLeft: "1rem" }}
            type="primary"
          >
            Submit
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default NewCustomer;
