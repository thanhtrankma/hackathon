import { PhoneOutlined } from "@ant-design/icons";
import { Avatar, Button, Modal, Space, Spin } from "antd";
import React from "react";

function PopupCall({ isVisible, setIsVisible, name }) {
  const nameSplit = name && name.split(" ");
  const handleEndCall = () => {
    setIsVisible(false)
  }
  return (
    <Modal
      visible={isVisible}
      width={360}
      title={<div className="text-xl font-semibold"></div>}
      closable={false}
      footer={
        <>
          <div className="flex justify-center w-full">
            <Button
              className="text-white bg-red-500"
              icon={<PhoneOutlined className="text-base" />}
              onClick={handleEndCall}
            >
              Kết thúc
            </Button>
          </div>
        </>
      }
    >
      <Space
        size="small"
        className="flex flex-col items-center justify-center w-full"
      >
        <Space
          size="small"
          className="flex flex-col items-center justify-center pt-10 pb-20"
        >
          <Avatar
            style={{ backgroundColor: "#f56a00", fontSize: 36 }}
            size={100}
          >
            {name && nameSplit[nameSplit?.length - 1][0]}
          </Avatar>
          <p>Đang gọi khách hàng:</p>
          <p>{name}</p>
          <Spin />
        </Space>
      </Space>
      <div>
        <video id="localVideo" muted autoPlay style={{ width: "150px" }} />
        <video id="remoteVideo" autoPlay style={{ width: "150px" }} />
      </div>
    </Modal>
  );
}

export default PopupCall;
