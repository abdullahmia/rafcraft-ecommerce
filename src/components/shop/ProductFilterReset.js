import { BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from '../../features/filters/productFilterSlice';

const ProductFilterReset = () => {
    const { category } = useSelector((state) => state.productFilter);
    const dispatch = useDispatch();
    // handle clear filter
    const clearFilterHandler = () => {
        dispatch(clearFilter());
    }
  return (
    category?.id && <div className="bg-primary p-4 rounded mx-4 mb-7 text-gray-100 flex items-center justify-between">
        <p>Category: {category.name}</p>
        <button onClick={clearFilterHandler}>
            <BiX className='text-lg' />
        </button>
    </div>
  )
}

export default ProductFilterReset;