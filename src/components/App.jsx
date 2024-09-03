import { SignUpPage } from "pages/SingUpPage/SignUpPage";
import { AppBar } from "./auth/AppBar/AppBar";
import { Layout } from "./Layout";
import { LogInPage } from "pages/LogInPage/LogInPage";
import { PrivateRoute } from "./auth/PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";


export const App = () => {
  return (
    <>
      <Layout>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/registration" element={<SignUpPage />}/>
          <Route path="/login" element={<LogInPage />}/>
          <Route path="/tasks" element={<PrivateRoute redirectTo="/" component={<ContactsPage/>}/>}/>
        </Routes>
      </Layout> 
    </>
  );
};
