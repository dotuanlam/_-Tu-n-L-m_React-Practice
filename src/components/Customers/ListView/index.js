import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { customers } from "../CardView/customers";
const ListView = () => {
  const columns = [
    {
      title: "",
      width: 100,
      dataIndex: "avatar",
      key: "key ",
      fixed: "left",
    },
    {
      title: "FirstName",
      width: 100,
      dataIndex: "FirstName",
      key: "",
      fixed: "left",
    },
    {
      title: "LastName",
      dataIndex: "LastName",
      key: "",
      width: 100,
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
      width: 150,
    },
    {
      title: "City",
      dataIndex: "City",
      key: "",
      width: 100,
    },
    {
      title: "State",
      dataIndex: "State",
      key: "State",
      width: 100,
    },
    {
      title: "Order Total",
      dataIndex: "Order_Total",
      key: "order Total",
      width: 100,
    },
    {
      title: "",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>View Orders</a>,
    },
  ];
  const data = [];

  for (let i = 0; i < customers.length; i++) {
    data.push({
      FirstName: customers[i].firstName,
      LastName: customers[i].lastName,
      Address: customers[i].address,
      City: customers[i].city,
      State: customers[i].state.name,
      Order_Total: 0,
    });
  }
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1500,
          y: 1000,
        }}
      />
    </div>
  );
};

export default ListView;
