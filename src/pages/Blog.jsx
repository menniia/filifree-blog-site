import { useParams, Link } from "react-router"
import { motion } from 'framer-motion';
import {
    BookOpen,
    FileText,
    Feather,
    PenTool,
    Calendar,
    Clock,
    ArrowRight,
    Filter
} from 'lucide-react';

const Blog = () => {
    const { category } = useParams()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
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

    const categories = [
        {
            id: 'all',
            name: 'All Posts',
            icon: BookOpen,
            count: 2,
            description: 'All my writing across every category'
        },
        {
            id: 'series',
            name: 'Series',
            icon: FileText,
            count: 0,
            description: 'Multi-part explorations of writing techniques and storytelling'
        },
        {
            id: 'articles',
            name: 'Articles',
            icon: PenTool,
            count: 0,
            description: 'In-depth pieces on writing, literature, and creative process'
        },
        {
            id: 'stories',
            name: 'Short Stories',
            icon: Feather,
            count: 1,
            description: 'Original fiction pieces and creative narratives'
        },
        {
            id: 'reviews',
            name: 'Reviews',
            icon: Feather,
            count: 1,
            description: 'Movie Reviews'
        }
    ];

    const blogPosts = [
        // {
        //     id: 1,
        //     title: 'The Art of Character Development in Modern Fiction',
        //     excerpt: 'Exploring how contemporary authors create compelling, three-dimensional characters that resonate with readers across cultures and generations.',
        //     category: 'articles',
        //     date: '2024-01-15',
        //     readTime: '8 min read',
        //     featured: true,
        //     image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
        // },
        // {
        //     id: 2,
        //     title: 'Writing Tips for Beginners - Part 1: Finding Your Voice',
        //     excerpt: 'The first installment in a comprehensive series designed to help new writers discover their unique voice and develop confidence in their craft.',
        //     category: 'series',
        //     date: '2024-01-10',
        //     readTime: '6 min read',
        //     featured: false,
        //     image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
        // },
        {
            id: 3,
            title: 'The Gender of Pain',
            excerpt: 'How do you tell a mother her child is dying?',
            category: 'stories',
            date: '2025-07-05',
            readTime: '10 min read',
            featured: false,
            image: '/images/gofImage.png'
        },
        {
            id: 4,
            title: 'Chasing Lullaby',
            excerpt: 'Chasing Lullaby – A Review',
            category: 'reviews',
            date: '2025-07-08',
            readTime: '5 min read',
            featured: false,
            image: '/images/chasingLullaby.webp'
        },
        // {
        //     id: 5,
        //     title: 'The Editor\'s Dilemma: Preserving Voice While Improving Clarity',
        //     excerpt: 'An exploration of the delicate balance editors must maintain between improving readability and preserving the author\'s unique style.',
        //     category: 'articles',
        //     date: '2024-01-03',
        //     readTime: '10 min read',
        //     featured: false,
        //     image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
        // },
        // {
        //     id: 6,
        //     title: 'Building Worlds: A Fantasy Writer\'s Guide - Part 2',
        //     excerpt: 'Continuing our deep dive into fantasy worldbuilding, we explore political systems, economies, and the social structures that make worlds feel real.',
        //     category: 'series',
        //     date: '2024-01-01',
        //     readTime: '15 min read',
        //     featured: false,
        //     image: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=800'
        // }
    ];

    const filteredPosts = category && category !== 'all'
        ? blogPosts.filter(post => post.category === category)
        : blogPosts;

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="pt-20 font-jakarta"
        >
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            {category && category !== 'all'
                                ? categories.find(cat => cat.id === category)?.name || 'Blog'
                                : 'My Blog'
                            }
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {category && category !== 'all'
                                ? categories.find(cat => cat.id === category)?.description
                                : 'Stories, insights, and creative explorations from the world of writing and literature.'
                            }
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-12 bg-white sticky top-20 z-40 shadow-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center space-x-2 mb-4"
                    >
                        <Filter className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700 font-medium">Filter by category:</span>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                to={cat.id === 'all' ? '/blog' : `/blog/${cat.id}`}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${(category === cat.id || (!category && cat.id === 'all'))
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <cat.icon className="h-4 w-4" />
                                <span className="font-medium">{cat.name}</span>
                                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                                    {cat.count}
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (!category || category === 'all' || category === featuredPost.category) && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <motion.div variants={itemVariants} className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Post</h2>
                            <p className="text-gray-600">Don't miss this highlighted piece</p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative h-64 lg:h-full">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium capitalize">
                                            {featuredPost.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                                        Read Full Post
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Blog Posts Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            {category && category !== 'all' ? 'All Posts in Category' : 'Latest Posts'}
                        </h2>
                        <p className="text-gray-600">
                            {regularPosts.length} post{regularPosts.length !== 1 ? 's' : ''} found
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium capitalize">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(post.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer group">
                                        Read More
                                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {filteredPosts.length === 0 && (
                        <motion.div
                            variants={itemVariants}
                            className="text-center py-16"
                        >
                            <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                No posts found
                            </h3>
                            <p className="text-gray-600 mb-6">
                                There are no posts in this category yet. Check back soon for new content!
                            </p>
                            <Link
                                to="/blog"
                                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                            >
                                View All Posts
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
                        <PenTool className="h-16 w-16 mx-auto mb-8" />
                        <h2 className="text-4xl font-bold mb-6">
                            Never Miss a Story
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed">
                            Subscribe to get notified about new posts, writing tips, and exclusive content
                            delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 rounded-full bg-[#FFFFFF] text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default Blog