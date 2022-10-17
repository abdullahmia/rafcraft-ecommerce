const Image = ({url, ...rest}) => {
  return (
      <img src={`${process.env.REACT_APP_CLOUDINARY_IMAGE_URL}${url}`} {...rest} />
  )
}

export default Image;