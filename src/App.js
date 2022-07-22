import { Layout } from "antd";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";
import TableCustomers from "./components/TableCustomers";

const { Content } = Layout;

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
        <Navbar />
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
          Copyright © 2022 team X-MEN
        </div>
      </Layout>
    </Layout>
  );
}

export default App;
