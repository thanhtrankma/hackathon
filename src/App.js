import { Avatar, Image, Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import TableCustomers from "./components/TableCustomers";
const { Header, Content } = Layout;

const menu = [
  { key: 1, label: "Xử lý đơn" },
  { key: 2, label: "Đơn online" },
  { key: 3, label: "Danh sách đơn" },
  { key: 4, label: "Khách hàng" },
  { key: 5, label: "Bảng giá" },
  { key: 6, label: "Tồn kho" },
  { key: 7, label: "Xuất kho nội bộ" },
];
function App() {
  const [dataTable, setDataTable] = useState([]);
  const [typeCustomer, setTypeCustomer] = useState("all");
  const [groupCustomer, setGroupCustomer] = useState("all");
  const [loading, setLoading] = useState(false);

  const createKey = (data) => {
    const newData = [];
    data.forEach((item) => {
      newData.push({
        key: item.fullName,
        ...item,
      });
    });
    return newData;
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dcdf003a-f897-4373-8c70-4d85523ea5f3.mock.pstmn.io/customer?type=${typeCustomer}&group=${groupCustomer}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataTable(createKey(data));
        setLoading();
      })
      .finally(() => setLoading(false));
  }, [typeCustomer, groupCustomer]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Layout className="site-layout">
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
              {/* Gian hàng thực phẩm chay */}
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
            <span className="text-white">Admin</span>
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
        </Header>
        <Content>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <SearchInput
              setTypeCustomer={setTypeCustomer}
              setGroupCustomer={setGroupCustomer}
            />
            <TableCustomers dataTable={dataTable} loading={loading} />
          </div>
        </Content>
        <div className="footer text-gray-500 text-center text-bold">
          Copyright © team X-MEN
        </div>
      </Layout>
    </Layout>
  );
}

export default App;
