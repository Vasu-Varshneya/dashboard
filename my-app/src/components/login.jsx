'use client';
import { FaEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Helper";
import Dashboard from "./dashboard";
import { display } from "./Log";
export default function SignupPage() {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isLogged, setIsLogged] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        const newErrors = {};
        const { email, password } = formData;

        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                const data = await response.json();
                if (data.success===true) {
                    localStorage.setItem("token",data.token)
                    localStorage.setItem("isLoggedIn",true)
                    localStorage.setItem('userId',data.userId)
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 1000);
                } else {
                    setErrors({ ...errors, general: data.message });
                }
            } catch (error) {
                setErrors({ ...errors, general: 'An error occurred. Please try again.' });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-3 w-full max-w-md py-2">
                <span className="text-2xl font-bold text-center">Login</span>
                <span className="text-center ml-1">Login to get started</span>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2 flex flex-col items-center">
                            <span>Email</span>
                            <div className="flex justify-between gap-1">
                                <MdEmail />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                            <span>Password</span>
                            <div className="flex justify-between gap-1">
                                <FaEye onClick={togglePasswordVisibility} className="cursor-pointer mt-2" />
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        </div>
                    </div>
                    {errors.general && <p className="text-sm text-red-500">{errors.general}</p>}
                    <p className="pt-2">New User? Please click on <span onClick={() => navigate('/signup')} className="text-blue-500 cursor-pointer">Signup</span></p>
                    <footer>
                        <button type="submit" className="bg-indigo-800 my-4 hover:bg-indigo-900 p-2 w-full rounded-lg text-white">Login</button>
                    </footer>
                </form>
            </div>
        </div>
    );
}
