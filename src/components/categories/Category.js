import { Link } from 'react-router-dom'
import catImg from '../../assets/images/category/category-1.jpg'

const Category = () => {
  return (
      <div class="relative rounded-sm overflow-hidden group">
          <img
              src={catImg}
              class="w-full"
              alt=""
          />
          <Link
              to="/"
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium capitalize group-hover:bg-opacity-70"
          >bedroom</Link
          >
      </div>
  )
}

export default Category