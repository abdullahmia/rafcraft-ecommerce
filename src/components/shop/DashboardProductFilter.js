const DashboardProductFilter = () => {
  return (
    <div className="mb-7 shadow py-5">
        <div className="flex items-center gap-4">
            <div>
                <input type="text" placeholder="Product Code" className="input-box" />
            </div>
            
            <div>
                <select className="input-box w-44">
                    <option value="cat">Cloths</option>
                    <option value="cat">Tech</option>
                    <option value="cat">Water</option>
                </select>
            </div>
            <div>
                <button className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">Filter</button>
            </div>
        </div>
    </div>
  )
}

export default DashboardProductFilter