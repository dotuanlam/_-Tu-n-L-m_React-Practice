import React from "react";
import { Avatar, Button, Col, Image, Row, Typography } from "antd";
import "./index.scss";
import NavCustomer from "../NavCustomer";

import CardView from "../CardView";
import ListView from "../ListView";
import NewCustomer from "../NewCustomer";
import { useSelector } from "react-redux";

const Header = () => {
  const cardView = useSelector((state) => state.slice.cardView);
  const listView = useSelector((state) => state.slice.listView);
  const newCustomerView = useSelector((state) => state.slice.newCustomer);

  return (
    <div className="container_customers--header">
      <Row
        style={{ paddingTop: ".5rem", backgroundColor: "#307ff4" }}
        justify="space-around"
        align="middle"
        span={24}
      >
        <Col span={15}>
          <Row align="middle" justify="space-around">
            <Avatar
              width={40}
              height={40}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_c5kT_TM6lG4LJdYoIBXRTbqKoEBlHrCKZfh_xTEFRC3DoQoAnVjcYBmusvCX-BKrvw8&usqp=CAU"
            />
            <Typography.Title style={{ color: "#eee" }} level={3}>
              Customer Manager
            </Typography.Title>
            <Button>Customers</Button>
            <Button>Settings</Button>
          </Row>
        </Col>
        <Col>
          <Row align="middle">
            <Button>Login</Button>
          </Row>
        </Col>
      </Row>
      <NavCustomer />
      {cardView && <CardView />}
      {listView && <ListView />}
      {newCustomerView && <NewCustomer />}
    </div>
  );
};

export default Header;
