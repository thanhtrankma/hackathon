import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Image, Table } from "antd";
import React, { useState } from "react";
import logoZalo from "../images/zalo.jpg";
import PopupCall from "./PopupCall";
import PopupSendMessage from "./PopupSendMessage";

function TableCustomers({ dataTable, loading }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSendModal, setIsVisibleSendModal] = useState(false);
  const [name, setName] = useState('');
  const [typeSend, setTypeSend] = useState();

  const handleClickCall = (record) => {
    setIsVisible(true);
    setName(record?.fullName);
  }

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "fullName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
    },
    {
      title: "Ngày sinh",
      dataIndex: "dob",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Loại khách hàng",
      dataIndex: "typeCustomer",
    },
    {
      title: "Nhóm khách hàng",
      dataIndex: "groupCustomer",
    },
    {
      title: "Thời gian GD cuối",
      dataIndex: "lastTransactionTime",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Thao tác",
      render: (text, record) => (
        <div className="flex justify-center">
          <Button
            type="text"
            shape="circle"
            icon={<PhoneOutlined />}
            onClick={() => handleClickCall(record)}
          />
        </div>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleClickSendZalo = () => {
    setIsVisibleSendModal(true);
    setTypeSend("tin nhắn");
  };

  const handleClickSendEmail = () => {
    setIsVisibleSendModal(true);
    setTypeSend("email");
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <p>{dataTable.length} kết quả</p>
      <span>{selectedRowKeys.length} đã chọn</span>
      <Button
        type="link"
        icon={
          <Image src={logoZalo} preview={false} height={18} className="px-2" />
        }
        onClick={handleClickSendZalo}
      >
        Gửi tin nhắn
      </Button>
      <Button
        type="link"
        icon={<MailOutlined className="text-xl" />}
        onClick={handleClickSendEmail}
      >
        Gửi email
      </Button>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataTable}
        loading={loading}
      />
      <PopupCall
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        name={name}
      />
      <PopupSendMessage typeSend={typeSend} isVisibleSendModal={isVisibleSendModal} setIsVisibleSendModal={setIsVisibleSendModal} selectedRowKeys={selectedRowKeys} />
    </div>
  );
}

export default TableCustomers;
