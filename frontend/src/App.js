import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

// Admin Pages
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminProjects from "./admin/pages/Projects";
import AdminServices from "./admin/pages/Services";
import Contacts from "./admin/pages/Contacts";
import Login from "./admin/pages/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import AddProject from "./admin/pages/AddProject";


function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">

      {!isAdmin && <Navbar />}

      <ScrollToTop />

      <Routes>
        {/* Frontend */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin (Protected) */}
        <Route path="/admin" element={<ProtectedRoute> <AdminLayout><Dashboard /></AdminLayout>
        </ProtectedRoute>
        }
        />

        <Route path="/admin/projects" element={<ProtectedRoute><AdminLayout><AdminProjects /></AdminLayout>
        </ProtectedRoute>
        }
        />

        <Route
          path="/admin/services"
          element={
            <ProtectedRoute>
              <AdminLayout><AdminServices /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-project"
          element={
            <ProtectedRoute>
              <AdminLayout><AddProject /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <AdminLayout><Contacts /></AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Login */}
        <Route path="/admin-login" element={<Login />} />
      </Routes>

      {!isAdmin && <Footer />}
    </div>
  );
}

export default App;