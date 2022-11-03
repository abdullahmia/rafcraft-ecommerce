import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className='container w-full h-80 flex items-center justify-center'>
        
        <div className='text-center'>
            <BiShoppingBag className='text-4xl text-primary m-auto' />
            <p className='text-md text-gray-700 mt-2'>
                Your shopping cart is empty!
                <Link className='text-primary ml-2' to='/shop'>Continue shopping</Link>
            </p>
        </div>

    </div>
  )
}

export default CartEmpty