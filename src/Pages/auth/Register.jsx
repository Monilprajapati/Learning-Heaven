import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserProvider";
import "./auth.css";
import Navbar from "../../components/Home/Navbar/Navbar";
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      const success = register(formData);
      if (success) {
        toast.success('Registration successful! Welcome aboard! 🎉', {
          duration: 3000,
          style: {
            background: '#4CAF50',
            color: '#fff',
          },
        });
        navigate("/explore");
      } else {
        toast.error('This email is already registered. Please try another one.', {
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
    <div className="aute-page">
      <Navbar />
      <div className="auth-container">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Register</h2>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
