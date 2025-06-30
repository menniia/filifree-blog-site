import { motion } from "framer-motion";
import { ArrowRight, BookOpen, PenTool, Users } from 'lucide-react';
import { Link } from "react-router";

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };


    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const stats = [
        { icon: BookOpen, number: '500+', label: 'Projects Completed' },
        { icon: PenTool, number: '50+', label: 'Stories Published' },
        { icon: Users, number: '200+', label: 'Happy Clients' },
    ];
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="pt-20 font-jakarta"
        >
            {/* Hero Section */}
            <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants} className="space-y-8">
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                                variants={itemVariants}
                            >
                                Words That
                                <span className="text-blue-600"> Inspire</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                                variants={itemVariants}
                            >
                                Professional writer, editor, and storyteller crafting compelling narratives
                                that connect, inspire, and transform ideas into powerful stories.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                variants={itemVariants}
                            >
                                <Link
                                    to="/services"
                                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors group"
                                >
                                    Explore Services
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    to="/blog"
                                    className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    Read My Blog
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                                <motion.div
                                    animate={{ float: true }}
                                    className="text-center space-y-4"
                                >
                                    <PenTool className="h-20 w-20 text-blue-600 mx-auto" />
                                    <p className="text-lg font-medium text-blue-800">
                                        Crafting Stories, One Word at a Time
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-8 bg-white rounded-xl shadow-lg"
                            >
                                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4x font-bold text-gray-900 mb-4">
                            Latest from the Blog
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover stories, insights, and creative writing across various genres and topics.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { category: 'Articles', title: 'The Art of Storytelling in Modern Media', excerpt: 'Exploring how narrative techniques have evolved...' },
                            { category: 'Short Stories', title: 'Midnight Reflections', excerpt: 'A contemplative piece about finding meaning in...' },
                            { category: 'Series', title: 'Writing Tips for Beginners - Part 1', excerpt: 'Starting your writing journey can be overwhelming...' },
                        ].map((post, index) => (
                            <motion.div
                                key={post.title}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link
                                    to="/blog"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Read More
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-center mt-12">
                        <Link
                            to="/blog"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                            View All Posts
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default Home