import React from 'react';
import { BiCart, BiCategoryAlt, BiGridAlt, BiNews } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
  return (
    <>
          <aside
              id="sidebar"
              className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
              aria-label="Sidebar"
          >
              <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                  <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                      <div className="flex-1 px-3 bg-white divide-y space-y-1">
                          <div className="space-y-2 pt-2">
                              <NavLink
                                  to="/dashboard"
                                  className={(navInfo) =>
                                      navInfo.isActive
                                          ? "text-base text-gray-900 bg-gray-100 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                          : "text-base text-gray-700 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                  }
                                  end={true}
                              >
                                  <BiNews className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" />
                                  <span className="ml-4">Dashboard</span>
                              </NavLink>

                              <NavLink
                                  to="/dashboard/categories"
                                  className={(navInfo) =>
                                      navInfo.isActive
                                          ? "text-base text-gray-900 bg-gray-100 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                          : "text-base text-gray-700 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                  }
                                  end={true}
                              >
                                  <BiCategoryAlt className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" />
                                  <span className="ml-4">Categories</span>
                              </NavLink>

                              <NavLink
                                  to="/dashboard/product"
                                  className={(navInfo) =>
                                      navInfo.isActive
                                          ? "text-base text-gray-900 bg-gray-100 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                          : "text-base text-gray-700 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                  }
                                  end={true}
                              >
                                  <BiGridAlt className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" />
                                  <span className="ml-4">Products</span>
                              </NavLink>

                              <NavLink
                                  to="/dashboard/order"
                                  className={(navInfo) =>
                                      navInfo.isActive
                                          ? "text-base text-gray-900 bg-gray-100 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                          : "text-base text-gray-700 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                  }
                                  end={true}
                              >
                                  <BiCart className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" />
                                  <span className="ml-4">Orders</span>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
          </aside>
          <div
              className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
              id="sidebarBackdrop"
          ></div>
    </>
  )
}

export default DashboardSidebar