import { Link } from 'react-router-dom';
import notFoundImg from '../assets/images/404.svg';
import Wrapper from "../components/layouts/Wrapper";

const NotFound = () => {
  return (
    <Wrapper title="Page not found">
        <div className="w-full flex justify-center py-28">
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={notFoundImg} alt="" />
                <h2 className="text-2xl uppercase font-semibold text-gray-700">THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE</h2>
                <Link className='submit-danger-btn w-36 text-center' to='/'>Back to Home</Link>
            </div>
        </div>
    </Wrapper>
  )
}

export default NotFound