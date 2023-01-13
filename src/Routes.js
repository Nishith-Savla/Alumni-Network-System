import React from "react";
import PhotoGallerySub from "pages/PhotoGallerySub";
import Groups from "pages/Groups";
import CreatePost from "pages/CreatePost";
import Profile from "pages/Profile";
import AdminDashboard from "pages/AdminDashboard";
import Scholarship from "pages/Scholarship";
import Membership from "pages/Membership";
import PhotoGallery from "pages/PhotoGallery";
import Donations from "pages/Donations";
import AlumniFeed from "pages/AlumniFeed";
import Events from "pages/Events";
import Homepage from "pages/Homepage";
import JobPortal from "pages/JobPortal";
import AlumniDirectory from "pages/AlumniDirectory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/alumnidirectory" element={<AlumniDirectory />} />
        <Route path="/jobportal" element={<JobPortal />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/alumnifeed" element={<AlumniFeed />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/photogallery" element={<PhotoGallery />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/photogallerysub" element={<PhotoGallerySub />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
