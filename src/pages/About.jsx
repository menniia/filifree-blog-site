import { motion } from "framer-motion";
import { Award, BookOpen, Coffee, Lightbulb } from "lucide-react";

const About = () => {
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

    const skills = [
        'Creative Writing',
        'Content Editing',
        'Proofreading',
        'Ghostwriting',
        'Reviews',
        'Developmental Editing',
        'Fiction Writing',
        'Non-fiction Writing'
    ];

    const journey = [
        {
            year: '2018',
            title: 'Started Freelance Writing',
            description: 'Began my journey as a freelance writer, focusing on blog content and articles.'
        },
        {
            year: '2020',
            title: 'Expanded to Editing Services',
            description: 'Added professional editing and proofreading services to help other writers.'
        },
        {
            year: '2022',
            title: 'Published First Collection',
            description: 'Released my first collection of short stories, receiving critical acclaim.'
        },
        {
            year: '2024',
            title: 'Full-Time Writer & Editor',
            description: 'Transitioned to full-time writing and editing, serving clients worldwide.'
        }
    ];

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }} className="pt-20 font-jakarta">
            {/* hero section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants} className="space-y-8">
                            <h1 className="text-5xl md:text-6xl text-[#212121] leading-tight">About me</h1>
                            <p className="text-xl text-[#212121] leading-relaxed"> I go by the name of Samuel Kwesi Mintah, popularly known as Dr. Filifree, I am a passionate writer and editor with over 8 years of experience
                                crafting compelling narratives and helping others tell their stories.
                                My mission is to bring clarity, creativity, and authenticity to every
                                piece of writing I touch.
                            </p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <Coffee size={24} className="text-[#4500FF]" />
                                    <span className="text-gray-700">Fueled by coffee</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <BookOpen size={24} className="text-[#4500FF]" />
                                    <span className="text-gray-700">Always reading</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-center space-y-4"
                                >
                                    <Lightbulb className="h-20 w-20 text-blue-600 mx-auto" />
                                    <p className="text-lg font-medium text-blue-800">
                                        Every Story Deserves to Shine
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            My Expertise
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            With years of experience across multiple writing disciplines,
                            I bring versatility and depth to every project.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                            >
                                <span className="text-gray-700 font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#212121] mb-4">
                            My Journey
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From passionate hobbyist to professional writer and editor,
                            here's how my story unfolded.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                        {journey.map((item, index) => (
                            <motion.div
                                key={item.year}
                                variants={itemVariants}
                                className="flex flex-row items-start mb-12 last:mb-0 space-x-3"
                            >
                                <div className="flex-shrink-0 w-24 h-24 sm:w-20 sm:h-20 bg-[#4500FF] text-white rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-8">
                                    <span className="text-lg font-bold">{item.year}</span>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Personal Philosophy */}
            <section className="py-20 bg-[#4500FF] text-white">
                <div className="container mx-auto px-4">
                    <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
                        <Award className="h-16 w-16 mx-auto mb-8" />
                        <h2 className="text-4xl font-bold mb-8">
                            My Philosophy
                        </h2>
                        <p className="text-xl leading-relaxed mb-8">
                            "Every story has the power to connect, inspire, and transform.
                            My role as a writer and editor is to help that power shine through,
                            ensuring each narrative reaches its full potential while maintaining
                            the authentic voice of its creator."
                        </p>
                        <blockquote className="text-2xl italic">
                            "Words are the most powerful tool we have. Let's use them wisely."
                        </blockquote>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default About