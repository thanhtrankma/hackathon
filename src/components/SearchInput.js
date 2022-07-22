import { Col, Row, Form, DatePicker, Input, Select, Button } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

function SearchInput({setTypeCustomer, setGroupCustomer}) {
  const listTypeCustomer = [
    { label: "Tất cả", value: "all" },
    { label: "Khách hàng lẻ", value: "single" },
    { label: "Đại lý", value: "agent" },
    { label: "Nhân viên IPA-VNDS", value: "staff" },
    { label: "VIP", value: "vip" },
  ];

  const listGroupCustomer = [
    { label: "Tất cả", value: "all" },
    { label: "Ưu tiên", value: "priority" },
    { label: "Không ưu tiên", value: "nonPriority" },
    { label: "LOSS", value: "loss" },
  ];

  const onChangeSelectTypeCustomer = (value) => {
    setTypeCustomer(value);
  }
  const onChangeSelectGroupCustomer = (value) => {
    setGroupCustomer(value);
  }
  return (
    <Form>
      <Row gutter={[16, 16]}>
        <Col span={4}>
          <Form.Item name="timeReport">
            <span className="text-gray-500">Thời gian báo cáo</span>
            <DatePicker.RangePicker
              placeholder={["Từ ngày", "Đến ngày"]}
              format="DD/MM/YYYY"
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="customer">
            <span className="text-gray-500">Tìm khách hàng</span>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Nhập tên/sđt khách hàng"
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="typeCustomer ">
            <span className="text-gray-500">Loại khách hàng</span>
            <Select defaultValue="all" onChange={onChangeSelectTypeCustomer}>
              {listTypeCustomer.map(({ label, value }) => (
                <Select.Option value={value} key={value}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="groupCustomer">
            <span className="text-gray-500">Nhóm khách hàng</span>
            <Select defaultValue="all" onChange={onChangeSelectGroupCustomer}>
              {listGroupCustomer.map(({ label, value }) => (
                <Select.Option value={value} key={value}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        {/* <Col span={4} className="self-center">
          <Button type="primary">Xem</Button>
        </Col> */}
      </Row>
    </Form>
  );
}

export default SearchInput;
