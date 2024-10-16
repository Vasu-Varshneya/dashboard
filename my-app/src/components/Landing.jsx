import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

// Function for scroll animation on page load
const useRevealAnimation = () => {
    useEffect(() => {
        const revealElements = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 150;
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);
};

export default function DashboardLanding() {
    const navigate = useNavigate();
    useRevealAnimation();

    const handleclick = () => {
        navigate('/signup');
    };

    const handle = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center reveal">
                <Link to="/" className="flex items-center justify-center">
                    <MountainIcon className="h-6 w-6 animate-bounce" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <div className="ml-auto flex gap-4 sm:gap-6">
                    <button onClick={handle} className="bg-indigo-800 hover:bg-indigo-900 p-2 w-16 rounded-lg text-white transition-transform duration-300 ease-in-out hover:scale-105">Login</button>
                </div>
            </header>

            <main className="flex-1">
                <section className="w-full py-10 reveal">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-slide-up">
                                    Welcome to Your Analytics Dashboard
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Gain insights, track performance, and make data-driven decisions with our powerful analytics tools.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <button onClick={handle} className="bg-indigo-800 p-2 w-20 hover:bg-indigo-900 rounded-lg text-white transition-all duration-300 hover:scale-110">Get Started</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-10 bg-gray-100 dark:bg-gray-800 reveal">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-slide-up">
                            Powerful Analytics at Your Fingertips
                        </h2>
                    </div>
                </section>

                <section className="w-full py-10 reveal">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-fade-in-slide-up">
                                    Ready to Get Started?
                                </h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Sign up now and start exploring your data like never before.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <button onClick={handleclick} className="bg-indigo-800 hover:bg-indigo-900 p-2 w-30 rounded-lg text-white transition-all duration-300 hover:scale-110">Sign Up for free</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t reveal">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link to="/" className="text-xs hover:underline underline-offset-4">Terms of Service</Link>
                    <Link to="/" className="text-xs hover:underline underline-offset-4">Privacy</Link>
                </nav>
            </footer>
        </div>
    );
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}

