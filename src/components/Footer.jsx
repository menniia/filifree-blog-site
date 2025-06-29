import { Heart, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
        { icon: Twitter, href: 'https://x.com/FilifreE1', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    ]

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* about section */}
                    <div className="space-y-4 font-jakarta">
                        <h3 className="text-xl font-bold">About Me</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Passionate writer and editor helping bring stories to life through
                            professional proofreading, editing, and ghostwriting services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 font-jakarta">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <div className="space-y-2">
                            <a href="/services" className="block text-gray-300 hover:text-white transition-colors">
                                Services
                            </a>
                            <a href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                                Blog
                            </a>
                            <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4 font-jakarta">
                        <h3 className="text-xl font-bold">Connect</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center font-jakarta">
                    <p className="text-gray-400 flex items-center justify-center space-x-2">
                        <span>&copy; {currentYear} Dr. Filifree | Powered by Menniia</span>
                        <span>for storytellers everywhere.</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer