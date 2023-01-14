import Navbar from "components/Navbar";
import AdminDashboard from "pages/AdminDashboard";
import AlumniDirectory from "pages/AlumniDirectory";
import AlumniFeed from "pages/AlumniFeed";
import CreatePost from "pages/CreatePost";
import Donations from "pages/Donations";
import Events from "pages/Events";
import Groups from "pages/Groups";
import Homepage from "pages/Homepage";
import JobPortal from "pages/JobPortal";
import Membership from "pages/Membership";
import NotFound from "pages/NotFound";
import PhotoGallery from "pages/PhotoGallery";
import PhotoGallerySub from "pages/PhotoGallerySub";
import Profile from "pages/Profile";
import Scholarship from "pages/Scholarship";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/membership" element={<Membership />} />

        <Route element={<Navbar />}>
          <Route path="/directory" element={<AlumniDirectory />} />
          <Route path="/jobs" element={<JobPortal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feed" element={<AlumniFeed />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/gallery/:id" element={<PhotoGallerySub />} />
          <Route path="/scholarships" element={<Scholarship />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<CreatePost />} />
          <Route path="/groups" element={<Groups />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
