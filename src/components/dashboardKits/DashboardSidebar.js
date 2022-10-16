import React from 'react';
import { BiCart, BiGridAlt, BiUser } from 'react-icons/bi';
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
                                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path d="M8,13.1c-4.4,0-8,3.4-8-3C0,5.6,3.6,2,8,2s8,3.6,8,8.1C16,16.5,12.4,13.1,8,13.1zM8,4c-3.3,0-6,2.7-6,6c0,4,2.4,0.9,5,0.2C7,9.9,7.1,9.5,7.4,9.2l3-2.3c0.4-0.3,1-0.2,1.3,0.3c0.3,0.5,0.2,1.1-0.2,1.4l-2.2,1.7c2.5,0.9,4.8,3.6,4.8-0.2C14,6.7,11.3,4,8,4z"></path></svg>
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
                                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"><path d="M8,6C4.7,6,2,4.7,2,3s2.7-3,6-3s6,1.3,6,3S11.3,6,8,6z M2,5L2,5L2,5C2,5,2,5,2,5z M8,8c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3S2,9.7,2,8V5C2,6.7,4.7,8,8,8z M14,5L14,5C14,5,14,5,14,5L14,5z M2,10L2,10L2,10C2,10,2,10,2,10z M8,13c3.3,0,6-1.3,6-3v3c0,1.7-2.7,3-6,3s-6-1.3-6-3v-3C2,11.7,4.7,13,8,13z M14,10L14,10C14,10,14,10,14,10L14,10z"></path></svg>
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

                              <NavLink
                                  to="/dashboard/customers"
                                  className={(navInfo) =>
                                      navInfo.isActive
                                          ? "text-base text-gray-900 bg-gray-100 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                          : "text-base text-gray-700 font-normal rounded-lg hover:bg-gray-100 group transition duration-75 flex items-center p-2"
                                  }
                                  end={true}
                              >
                                  <BiUser className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" />
                                  <span className="ml-4">Customers</span>
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