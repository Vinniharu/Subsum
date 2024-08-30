import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./UI/Loading";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Layout = lazy(() => import("./pages/Layout"));
const Airtime = lazy(() => import("./pages/Airtime"));
const Transaction = lazy(() => import("./pages/Transaction"))
const Support = lazy(() => import("./pages/Support"))
const Profile = lazy(() => import("./pages/Profile"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="buy-airtime/:id" element={<Loading />} />
            <Route path="buy-data/:id" element={<Loading />} />
            <Route path="tv-subscription/:id" element={<Loading />} />
            <Route path="pay-electric-bill/:id" element={<Loading />} />
            <Route path="airtime-to-cash" element={<Airtime />} />
            <Route path="transaction-history" element={<Transaction />} />
            <Route path="support" element={<Support />} />
            <Route path=":id" element={<Loading />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
