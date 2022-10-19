import { Navigate, Route, Routes } from "react-router-dom";
import AdminRoute from "../routes/AdminRoute";
import PrivateRoute from "../routes/PrivateRoute";
import { routes } from "../routes/routes";

const Main = () => {
  const publicRoutes = routes.filter((route) => route.role.includes("*"));
  const userRoutes = routes.filter((route) => route.role.includes("user"));
  const adminRoutes = routes.filter((route) => route.role.includes("admin"));

  return (
    <div>
      {/* <Header /> */}
      <Routes>
        {/* Public routes */}
        {publicRoutes.map((route, key) => (
          <Route key={key} path={route.path}>
            {route.children ? (
              route.children.map((subRoute, i) =>
                subRoute.path === "/" ? (
                  <Route key={i} index={true} element={<subRoute.element />} />
                ) : (
                  <Route
                    key={i}
                    index={false}
                    path={subRoute.path}
                    element={<subRoute.element />}
                  />
                )
              )
            ) : (
              <Route path={route.path} element={<route.element />} />
            )}
          </Route>
        ))}

        <Route path="*" element={<Navigate to="/404" replace />} />

        {/* auth routes */}
        
        {userRoutes.map((route, key) => (
          <Route key={key} path={route.path}>
            {route.children ? (
              route.children.map((subRoute, i) =>
                subRoute.path === "/" ? (
                  <Route key={i} index={true} element={<PrivateRoute><subRoute.element /></PrivateRoute>} />
                ) : (
                  <Route
                    key={i}
                    index={false}
                    path={subRoute.path}
                      element={<PrivateRoute><subRoute.element /></PrivateRoute>}
                  />
                )
              )
            ) : (
                <Route path={route.path} element={<PrivateRoute><route.element /></PrivateRoute>} />
            )}
          </Route>
        ))}

        {/* Admin Routes */}
        {
          adminRoutes.map((route, key) => (
            <Route key={key} path={route.path}>
              {
                route.children ? (
                  route.children.map((subRoute, i) => subRoute.role === '/' ? (
                    <Route key={i} index={true} element={<AdminRoute><subRoute.element /></AdminRoute>} />
                  ) : (
                      <Route key={i} index={false} path={subRoute.path} element={<AdminRoute><subRoute.element /></AdminRoute>} />
                  ))
                ) : (
                    <Route path={route.path} element={<AdminRoute><route.element /></AdminRoute>} />
                )
              }
            </Route>
          ))
        }

      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
