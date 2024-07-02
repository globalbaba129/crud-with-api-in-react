import React from "react";
import {Routes, Route } from "react-router-dom";
import Button from "./buttons";
import Add_data from "./crud_pages/add";
import Update_data from "./crud_pages/put";
import Delete_data from "./crud_pages/delete";


const App = () => {
    return (
     <>
     
     <Button />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add_data />} />
                <Route path="/put" element={<Update_data />} />
                <Route path="/delete" element={<Delete_data />} />
            </Routes>
     
     </>
    );
}

export default App;
