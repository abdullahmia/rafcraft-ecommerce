const Bredcrum = ({ name, name2 }) => {
  return (
    <div className="container py-4 flex justify-between">
      <div className="flex gap-3 items-center">
        <a href="index.html" className="text-primary text-base">
          <i className="fas fa-home"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">{name}</p>
        {name2 && (
          <>
            <span className="text-sm text-gray-400">
              <i className="fas fa-chevron-right"></i>
            </span>
            <p className="text-gray-600 font-medium">{name2}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Bredcrum;
