import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarIVE from "./layouts/navbar";
import Home from "./components/Home";
import CompShowUsersUsers from "./components/Users/ShowUsers";
import CompEditUsers from "./components/Users/EditUsers";
import CompCreateUser from "./components/Users/CreateUser";
import CompShowProducts from "./components/Products/ShowProducts";
import CompEditProduct from "./components/Products/EditProducts";
import CompCreateProduct from './components/Products/CreateProduct';
import CompShowCatalogos from './components/Catalogos/ShowCatalogos';
import CompShowDepartaments from './components/Departaments/ShowDepartaments';
import CompCreateDepartament from './components/Departaments/CreateDepartament';
import CompEditDepartament from './components/Departaments/EditDepartament';
import "./main.css"

import { createRoot } from 'react-dom/client'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="Main">
      <BrowserRouter>
        <NavBarIVE />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<CompShowUsersUsers />} />
          <Route path="/editUsuario/:idUsuario" element={<CompEditUsers />} />
          <Route path="/createUser" element={<CompCreateUser />} />
          <Route path="products" element={<CompShowProducts />} />
          <Route path="/createProduct" element={<CompCreateProduct />} />
          <Route path="/editProducto/:idProducto" element={<CompEditProduct />} />
          <Route path="/CatalogoProducts" element={<CompShowCatalogos />} />
          <Route path="/departaments" element={<CompShowDepartaments />} />
          <Route path="/createDepartament" element={<CompCreateDepartament />} />
          <Route path="/editDepartamento/:IDDepartamento" element={<CompEditDepartament />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
