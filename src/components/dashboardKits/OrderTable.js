import moment from 'moment';
import { Link } from 'react-router-dom';
import { Confirmed, Delivered, NotProcessed } from '../../constant/orderStatus';

const OrderTable = ({orders = []}) => {
  console.log(orders);
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="py-3 px-6">
            Order ID
          </th>
          <th scope="col" className="py-3 px-6">
            Curstomer
          </th>
          <th scope="col" className="py-3 px-6">
            Date
          </th>
          <th scope="col" className="py-3 px-6">
            Price
          </th>
          <th scope="col" className="py-3 px-6">
            Order Status
          </th>
          <th scope="col" className="py-3 px-6">
            Action
          </th>

        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, key) => (
            <tr key={key} className="bg-white border-b hover:bg-gray-50">
              <td className="p-4 w-32">
                <span className='font-bold text-blue-500 uppercase'>#${order.orderId}</span>
              </td>
              <td className="py-4 px-6 font-semibold text-gray-900">
                {order.user.firstName}{order.user.lastName}
              </td>

              <td className="py-4 px-6 font-semibold text-gray-800">
                {moment(order.createdAt).format("MMM Do YY")}
              </td>
              <td className="py-4 px-6 font-semibold text-gray-800">
                $ {order.amount}
              </td>
              <td className="py-4 px-6 font-semibold text-gray-800">
                <h2 className={`text-center rounded py-2 text-white ${order.orderStatus === NotProcessed ? 'bg-yellow-500' : order.orderStatus === Confirmed ? 'bg-green-600' : order.orderStatus === Delivered ? 'bg-cyan-600' : 'bg-red-600'}`} >{order.orderStatus}</h2>
              </td>
              <td className='py-4 px-6'>
                <Link to={`/admin/order/${order.orderId}`} className='submit-btn w-16 capitalize'>view</Link>
              </td>
            </tr>
          ))
        }
        

      </tbody>
    </table>
  )
}

export default OrderTable;