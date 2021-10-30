/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "assets/img/dashboard-icon.png";
// import DashboardActive from "assets/img/dashboard-icon-active.png";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/index.js";
import OrdersPage from "views/Orders/index.js";
import MenuPage from "views/Menu/index.js";
import TablesPage from "views/Tables/index.js";
import PaymentsPage from "views/Payments/index.js";
import SettingsPage from "views/Settings/index.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
// import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: OrdersPage,
    layout: "/admin",
  },
  {
    path: "/menu",
    name: "Menu",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: MenuPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: TablesPage,
    layout: "/admin",
  },
  {
    path: "/payments",
    name: "Payments",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: PaymentsPage,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: SettingsPage,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Dashboard,
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: Dashboard,
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: Dashboard,
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: Dashboard,
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: Dashboard,
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Dashboard,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Dashboard,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
];

export default dashboardRoutes;
