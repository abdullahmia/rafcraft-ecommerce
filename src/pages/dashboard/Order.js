import {
  Tab,
  TabPanel, Tabs, TabsBody, TabsHeader
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import OrderTable from "../../components/dashboardKits/OrderTable";
import DashboardWrapper from "../../components/layouts/DashboardWrapper";
import { Cancelled, Confirmed, Delivered, NotProcessed } from "../../constant/orderStatus";
import { useGetAllOrdersQuery } from "../../features/order/orderApi";

const Order = () => {
  const [notProcessedOrders, setNotProcessedOrders] = useState([]);
  const [confrimedOrders, setConfrimedOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);

  const { data: orders } = useGetAllOrdersQuery()

  useEffect(() => {
    if (orders) {
      // not process order
      const notProcessedOrders = orders.filter(order => order.orderStatus === NotProcessed);
      setNotProcessedOrders(notProcessedOrders);

      // confirmed order
      const confirmedOrders = orders.filter(order => order.orderStatus === Confirmed);
      setConfrimedOrders(confirmedOrders);

      // deliverd order
      const deliveredOrders = orders.filter(order => order.orderStatus === Delivered);
      setDeliveredOrders(deliveredOrders);

      // cancled order
      const cancelledOrders = orders.filter(order => order.orderStatus === Cancelled);
      setCancelledOrders(cancelledOrders);
    }
  }, [orders])


  const data = [
    {
      label: "All Orders",
      value: "all-orders",
      desc: <OrderTable orders={orders} />,
    },
    {
      label: "In-Progress",
      value: "in-progress",
      desc: <OrderTable orders={notProcessedOrders} />,
    },
    {
      label: "Confirmed",
      value: "confirmed",
      desc: <OrderTable orders={confrimedOrders} />,
    },
    {
      label: "Delivered",
      value: "delivered",
      desc: <OrderTable orders={deliveredOrders} />,
    },
    {
      label: "Canceled",
      value: "cancled",
      desc: <OrderTable orders={cancelledOrders} />,
    },
  ];
  return (
    <DashboardWrapper title="Order | Dashboard">
        <div className="p-5">
          <h3 className='text-xl uppercase font-semibold text-gray-700'>order</h3>
          <Tabs value="all-orders" className="mt-8">
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