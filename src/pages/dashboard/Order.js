import {
  Tab,
  TabPanel, Tabs, TabsBody, TabsHeader
} from "@material-tailwind/react";
import OrderTable from "../../components/dashboardKits/OrderTable";
import DashboardWrapper from "../../components/layouts/DashboardWrapper";

const Order = () => {
  const data = [
    {
      label: "All Orders",
      value: "all-orders",
      desc: <OrderTable />,
    },
    {
      label: "In-Progress",
      value: "in-progress",
      desc: <OrderTable />,
    },
    {
      label: "Completed",
      value: "completed",
      desc: <OrderTable />,
    },
    {
      label: "Canceled",
      value: "cancled",
      desc: <OrderTable />,
    },
  ];
  return (
    <DashboardWrapper title="Order | Dashboard">
        <div className="p-5">
          <h3 className='text-xl uppercase font-semibold text-gray-700'>order</h3>
          <Tabs value="all-orders">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
    </DashboardWrapper>
  )
}

export default Order;