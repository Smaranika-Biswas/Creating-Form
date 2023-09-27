import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import UserData from "./components/UserData";
import EditPage from "./components/EditPage";
import Layout from "./components/Layout";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route element={<Layout />}>
          <Route path="/" Component={UserData} />
          <Route path="/userdata/editpage/:id" Component={EditPage} />
        </Route>
      </Routes>
    </>
  );
}
