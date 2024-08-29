import React, {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgotPassword";
import Dashboard from "../pages/screens/dashboard";
import Users from "../pages/screens/users";
import Transactions from "../pages/screens/transactions";
import Feedbacks from "../pages/screens/feedbacks";
import Analytics from "../pages/screens/analytics";
import Settings from "../pages/screens/settings";
import NotifyUser from "../pages/screens/notifyUser";
import Chat from "../pages/screens/chat";


import NotFound from "../components/pageNotFound/index";


const Navigation = () => {
return(
    <Routes>
        <Route path="/" element={
            <Suspense>
                <Login />
            </Suspense>
        } />

        {/* User routes*/}
        <Route path="/forgot" element={
            <Suspense>
                <ForgotPassword />
            </Suspense>
        } />
        <Route path="/dashboard" element={
            <Suspense>
                <Dashboard />
            </Suspense>
        } />
        <Route path="/users" element={
            <Suspense>
                <Users />
            </Suspense>
        } />
        <Route path="/transactions" element={
            <Suspense>
                <Transactions />
            </Suspense>
        } />
        <Route path="/feedbacks" element={
            <Suspense>
                <Feedbacks />
            </Suspense>
        } />
        <Route path="/analytics" element={
            <Suspense>
                <Analytics />
            </Suspense>
        } />
        <Route path="/settings" element={
            <Suspense>
                <Settings />
            </Suspense>
        } />
        <Route path="/notify" element={
            <Suspense>
                <NotifyUser />
            </Suspense>
        } />
        <Route path="/chat" element={
            <Suspense>
                <Chat />
            </Suspense>
        } />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
}

export default Navigation;