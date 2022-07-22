import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Image, Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import React from 'react';
import "../App.css";

const { Header } = Layout;

const menu = [
  { key: 1, label: "Xử lý đơn" },
  { key: 2, label: "Đơn online" },
  { key: 3, label: "Danh sách đơn" },
  { key: 4, label: "Khách hàng" },
  { key: 5, label: "Bảng giá" },
  { key: 6, label: "Tồn kho" },
  { key: 7, label: "Xuất kho nội bộ" },
];

function Navbar() {
    const headerDropdownMenu = (
      <Menu>
        <Menu.Item>
          <LogoutOutlined className="mr-2" />
          Đăng xuất
        </Menu.Item>
      </Menu>
    );
    return (
        <Header
          className="site-layout-background flex justify-between items-center"
          style={{
            padding: 0,
            backgroundColor: "#001529",
          }}
        >
          {" "}
          <div className="flex justify-between items-center">
            <div className="logo text-white text-lg px-6">
              <Image
                src={"https://homefoodshop.vn/_nuxt/img/logo.95aac45.svg"}
                preview={false}
                height={32}
              />
            </div>

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["3"]}
              items={menu}
            />
          </div>
          <div className="flex justify-between items-center pr-6 w-28 cursor-pointer">
            <Dropdown overlay={headerDropdownMenu} placement="bottomRight">
              <div className="flex items-center">
                <span className="mr-2 text-white">Admin</span>
                <Avatar
                  src={
                    <Image
                      src="https://joeschmoe.io/api/v1/random"
                      style={{ width: 32 }}
                      preview={false}
                    />
                  }
                />
              </div>
            </Dropdown>
          </div>
        </Header>
    );
}

export default Navbar;