'use client';
import { FaEye, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../Helper';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleClick = () => {
        const passwordInput = document.getElementById("password");
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return; // Validate the form before proceeding

        // Prepare data for submission
        const userData = { name, email, password };

        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('name', data.name); // Store name in local storage
                setSubmitStatus('Signup successful! Welcome aboard.');
                navigate('/login'); // Redirect after successful signup
            } else {
                setErrors({ api: data.message || 'Signup failed. Please try again.' });
            }
        } catch (error) {
            setErrors({ api: 'An error occurred. Please try again later.' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-3 w-full max-w-md py-2">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <p className="text-center ml-1">Create your account to get started</p>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="flex flex-col items-center space-y-2">
                            <label htmlFor="name">Name</label>
                            <div className="flex justify-between gap-1">
                                <i className="cursor-pointer mt-2"><FaUser /></i>
                                <input 
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <label htmlFor="email">Email</label>
                            <div className="flex justify-between gap-1">
                                <i><MdEmail /></i>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <label htmlFor="password">Password</label>
                            <div className="flex justify-between gap-1">
                                <i onClick={handleClick} className="cursor-pointer mt-2"><FaEye /></i>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        </div>
                    </div>
                    <footer>
                        <button type="submit" className="bg-indigo-800 my-4 hover:bg-indigo-900 p-2 w-full rounded-lg text-white">
                            Sign Up
                        </button>
                    </footer>
                </form>
                {submitStatus && (
                    <div className="mt-4">
                        <span>{submitStatus}</span>
                    </div>
                )}
                {errors.api && <p className="text-sm text-red-500">{errors.api}</p>}
            </div>
        </div>
    );
}

