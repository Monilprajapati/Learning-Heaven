import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import "./auth.css";
import Navbar from "../../components/Home/Navbar/Navbar";
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const success = login(formData);
      if (success) {
        toast.success('Welcome back! 👋', {
          duration: 3000,
          style: {
            background: '#4CAF50',
            color: '#fff',
          },
        });
        navigate("/explore");
      } else {
        toast.error('Invalid email or password. Please try again.', {
          duration: 4000,
          style: {
            background: 'white',
            color: 'black',
          },
        });
      }
    } else {
      setErrors(newErrors);
      toast.error('Please fix the errors in the form.', {
        duration: 3000,
        style: {
          background: 'white',
          color: 'black',
        },
      });
    }
  };

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Login</h2>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
