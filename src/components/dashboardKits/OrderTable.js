import { Link } from "react-router-dom";

const OrderTable = () => {
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
            Order
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
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="p-4 w-32">
            <span className='font-bold text-gray-700 uppercase'>afaf932</span>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900">
            Salman Mia
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 ">
            T-shit M Size
          </td>

          <td className="py-4 px-6 font-semibold text-gray-800">
            2 Jan 2020
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            $ 342
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            <h2 className='bg-green-500 text-center rounded py-2 text-white'>Completed</h2>
          </td>
          <td className='py-4 px-6'>
            <Link to='/admin/order/asfasfsf' className='submit-btn w-16 capitalize'>view</Link>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="p-4 w-32">
            <span className='font-bold text-gray-700 uppercase'>afaf932</span>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900">
            Salman Mia
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 ">
            T-shit M Size
          </td>

          <td className="py-4 px-6 font-semibold text-gray-800">
            2 Jan 2020
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            $ 342
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            <h2 className='bg-blue-500 text-center rounded py-2 text-white capitalize'>in progress</h2>
          </td>
          <td className='py-4 px-6'>
            <Link to='/admin/order/asfasfsf' className='submit-btn w-16 capitalize'>view</Link>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="p-4 w-32">
            <span className='font-bold text-gray-700 uppercase'>afaf932</span>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900">
            Salman Mia
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 ">
            T-shit M Size
          </td>

          <td className="py-4 px-6 font-semibold text-gray-800">
            2 Jan 2020
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            $ 342
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            <h2 className='bg-yellow-500 text-center rounded py-2 text-white capitalize'>Canceled</h2>
          </td>
          <td className='py-4 px-6'>
            <Link to='/admin/order/asfasfsf' className='submit-btn w-16 capitalize'>view</Link>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="p-4 w-32">
            <span className='font-bold text-gray-700 uppercase'>afaf932</span>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900">
            Salman Mia
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 ">
            T-shit M Size
          </td>

          <td className="py-4 px-6 font-semibold text-gray-800">
            2 Jan 2020
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            $ 342
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            <h2 className='bg-green-500 text-center rounded py-2 text-white'>Completed</h2>
          </td>
          <td className='py-4 px-6'>
            <Link to='/admin/order/asfasfsf' className='submit-btn w-16 capitalize'>view</Link>
          </td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
          <td className="p-4 w-32">
            <span className='font-bold text-gray-700 uppercase'>hgfgsdf34</span>
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900">
            Salman Mia
          </td>
          <td className="py-4 px-6 font-semibold text-gray-900 ">
            T-shit M Size
          </td>

          <td className="py-4 px-6 font-semibold text-gray-800">
            2 Jan 2020
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            $ 342
          </td>
          <td className="py-4 px-6 font-semibold text-gray-800">
            <h2 className='bg-blue-500 text-center rounded py-2 text-white capitalize'>in progress</h2>
          </td>
          <td className='py-4 px-6'>
            <Link to='/admin/order/asfasfsf' className='submit-btn w-16 capitalize'>view</Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default OrderTable;