import { Input, message, Modal, Typography } from "antd";
import { default as React, useState } from 'react';
function PopupSendMessage({typeSend, isVisibleSendModal, setIsVisibleSendModal, selectedRowKeys, }) {
  const [toggle, setToggle] = useState(true);

    return (
        <Modal
        title={`Gửi ${typeSend}`}
        visible={isVisibleSendModal}
        onOk={() => {
          setIsVisibleSendModal(false);
          message.success(`Gửi ${typeSend} thành công`);
        }}
        onCancel={() => setIsVisibleSendModal(false)}
        okText="Gửi"
        cancelText="Hủy"
        width={1000}
        centered
      >
        <span>Người nhận: </span>
        {selectedRowKeys.length > 5 ? (
          <span>
            <Typography.Text strong>
              {selectedRowKeys.slice(0, 5).join("; ")}
            </Typography.Text>
            <Typography.Text
              className="cursor-pointer"
              strong
              onClick={() => setToggle((t) => !t)}
            >
              {toggle
                ? ` và ${
                    selectedRowKeys.slice(5, selectedRowKeys.length).length
                  } người khác`
                : `; ${selectedRowKeys
                    .slice(5, selectedRowKeys.length)
                    .join("; ")}`}
            </Typography.Text>
          </span>
        ) : (
          <Typography.Text strong>
            {selectedRowKeys.slice(0, 5).join("; ")}
          </Typography.Text>
        )}
        {selectedRowKeys.length === 0 && (
          <Typography.Text>
            <i>Chưa có người nhận</i>
          </Typography.Text>
        )}
        <div className="mt-4">
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 6 }}
            placeholder="Nhập..."
            allowClear
          />
        </div>
      </Modal>
    );
}

export default PopupSendMessage;