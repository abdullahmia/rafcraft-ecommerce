import { Link } from 'react-router-dom';
import Image from '../ui/Image';

const Category = ({category}) => {
    const {name, image} = category || {};
  return (
      <div class="relative rounded-sm overflow-hidden group">
          <Image
              url={image}
              class="w-full"
              alt=""
          />
          <Link
              to="/"
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-xl text-white font-roboto font-medium capitalize group-hover:bg-opacity-70"
          >{name}</Link
          >
      </div>
  )
}

export default Category