import moment from 'moment';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";
import TableLoader from '../components/loaders/TableLoader';
import { useGetUserOrdersQuery } from "../features/order/orderApi";

const OrderHistory = () => {
  const {user} = useSelector((state) => state.auth);
  const { data: orders, isLoading } = useGetUserOrdersQuery(user.id);
  
  return (
    <Wrapper title="Order History">
      <Bredcrum name="Account" name2="Order History" />
      <AccountWrapper>
        <div className="col-span-9 overflow-x-auto relative shadow sm:rounded-lg">
          <h3 className="text-lg p-5 text-gray-700 font-medium font-roboto uppercase mb-4">
            My Orders
          </h3>
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase font-roboto bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  status
                </th>
                <th scope="col" className="py-3 px-6">
                  total
                </th>
                <th scope="col" className="py-3 px-6">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                isLoading ? <TableLoader /> : (<>
                  {
                    orders?.orders.map((order, key) => (
                      <tr key={key} className="bg-white border-b 700 hover:bg-gray-50">
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <Link to={`/account/order-history/${order.orderId}`} className="text-primary">#{order.orderId}</Link>
                        </th>
                        <td className="py-4 px-6">{moment(order.createdAt).format("MMM Do YY")}</td>
                        <td className="py-4 px-6 font-semibold">{order.orderStatus}</td>
                        <td className="py-4 px-6">${order.amount}</td>
                        <td className="py-4 px-6">
                          <Link to={`/account/order-history/${order.orderId}`} className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">View</Link>
                        </td>
                      </tr>
                    ))
                  }
                
                </>)
              }
            </tbody>
          </table>
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default OrderHistory;
