import { Carrier, Complain, Dashboard, Driver, LoadTracker, UserRequest, Vehicle } from "./pages";




export const dashboardRoutes = [

    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/load-tracker",
      component: LoadTracker,
    },
    {
      path: "/user-request",
      component: UserRequest,
    },
    {
      path: "/carrier",
      component: Carrier,
    },
    {
      path: "/vehicle",
      component: Vehicle,
    },
    {
      path: "/driver",
      component: Driver,
    },
    {
      path: "/complain",
      component: Complain,
    },
]
    
    
     