import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from "./Pages/Home/main";
// import Login from "./pages/login";
// import ClockinPage from "./pages/clockin";
// import AttendanceHistory from "./pages/attendancehistory";
// import AdminDashboard from "./pages/admindashboard";

const App = createBrowserRouter([
  {
    path: '/',
    // element: <Admindashboard />,
    // element: <ClockinPage />,
    // element: <Login />,
    element: <MainPage />,
  },
  // {
  //   path: '/clockin',
  //   element: <ClockinPage />,
  // },
  // {
  //   path: '/history',
  //   element: <AttendanceHistory />,
  // },
  // {
  //   path: '/admin',
  //   element: <AdminDashboard />
  // }
]);

export default App;
