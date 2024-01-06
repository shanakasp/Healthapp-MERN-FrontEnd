import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCategory from "./components/AddCategory";
import Category from "./components/Category";
import CommonQ from "./components/CommonQ";
import Dashboard from "./components/Dashboard";
import Forum from "./components/Forum";
import Home from "./components/Home";
import Login from "./components/Login";

import Form from "./components/Form/Form";
import FormPreview from "./components/FormPreview/FormPreview";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminlogin" element={<Login />} />
            <Route path="/preview" element={<FormPreview/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/dashboard" element={<Dashboard />}>
            <Route path="category" element={<Category />} />
            <Route path="profile" element={<Home />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="commonQ" element={<CommonQ />} />
            <Route path="forum" element={<Forum />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
