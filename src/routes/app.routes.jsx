import {Routes, Route} from "react-router-dom";

import { Moviepreview } from "../pages/moviepreview";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { MovieCreate } from "../pages/createmovie";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/moviepreview" element={<Moviepreview/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/movieCreate/:id" element={<MovieCreate/>}/>
        </Routes>

    )

}