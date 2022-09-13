import {Route, Routes} from "react-router-dom";
import Index from "./components/Index.js";
import Room from "./components/Room";



const Router = () => (

    <Routes>
        <Route path="/message"  element={<Room />} />
        <Route path="/*"  element={<Index />} />
    </Routes>
)

export default Router