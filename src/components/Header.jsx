import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, PenTool, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState();
    const [isScrolled, setIsScrolled] = useState();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/blog", label: "Blog" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/85 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center font-jakarta">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                            <PenTool />
                        </motion.div>
                        <span className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">Dr.Filifree</span>
                    </Link>

                    {/* desktop navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative text-gray-700 hover:text-blue-600 transition-colors font-medium ${location.pathname === item.path ? 'text-blue-600' : ''
                                    }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="activeNavItem"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                                        initial={false}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* mobile menu button */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-[#1d4ed8] transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-4 py-4 border-t border-gray-200"
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`block py-2 px-4 text-gray-700 font-jakarta hover:text-[#1d4ed8] hover:bg-gray-50 rounded-md transition-colors ${location.pathname === item.path ? 'text-[#1d4ed8] bg-[#eff6ff]' : ''
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;