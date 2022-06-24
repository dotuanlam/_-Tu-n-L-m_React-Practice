import React, { useState } from "react";
import { Input, Typography } from "antd";
import "./index.scss";
import { useDispatch } from "react-redux";
import { update } from "../../../redux/Slice";

function NavCustomer() {
  const dispath = useDispatch();

  const showCardView = () => {
    const showCard = {
      cardView: true,
      listView: false,
      newCustomer: false,
    };
    dispath(update(showCard));
  };
  const showListView = () => {
    const showCard = {
      cardView: false,
      listView: true,
      newCustomer: false,
    };
    dispath(update(showCard));
  };

  const showCustomerView = () => {
    const showCard = {
      cardView: false,
      listView: false,
      newCustomer: true,
    };
    dispath(update(showCard));
  };

  return (
    <div className="container__header--menuCustomer">
      <ul>
        <li>
          <ion-icon name="grid"></ion-icon>
          <Typography.Text
            onClick={showCardView}
            style={{ marginLeft: ".5rem" }}
          >
            Card View
          </Typography.Text>
        </li>
        <li>
          <ion-icon name="list"></ion-icon>
          <Typography.Text
            onClick={showListView}
            style={{ marginLeft: ".5rem" }}
          >
            List View
          </Typography.Text>
        </li>
        <li>
          <ion-icon name="create"></ion-icon>
          <Typography.Text
            onClick={showCustomerView}
            style={{ marginLeft: ".5rem" }}
          >
            New Customer
          </Typography.Text>
        </li>
      </ul>
      <div>
        <Typography.Text>Filter</Typography.Text>
        <Input />
      </div>
    </div>
  );
}
export default NavCustomer;
