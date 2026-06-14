import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import PostDetails from "./pages/PostDetails";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

<Route
  path="/test"
  element={<h1>TEST PAGE</h1>}
/>
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <PostDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/posts/:id/edit"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }
        />
      </Routes>
      <footer className="footer">
  Please wait... 
  Welcome to My Blog
</footer>
    </BrowserRouter>
  );
}

export default App;