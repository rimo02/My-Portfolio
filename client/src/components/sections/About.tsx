import Animation from "../ui/Animation";

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-8">
            <div className="flex flex-col md:flex-row items-start md:items-start gap-10 justify-between w-full max-w-6xl">

                {/* About Section */}
                <div className="flex flex-col flex-1">
                    <Animation animation="slide-in-left" delay="delay-100">
                        <section id="about" className="dark:text-gray-200 text-base sm:text-xl">
                            <h1 className="text-4xl mb-4 font-bold">About Me</h1>
                            <p>
                                My core interest lies in software development — from designing intuitive user
                                interfaces to building robust backend systems. I love the challenge of turning
                                ideas into real-world products that solve problems and create impact.
                            </p>
                            <p className="mt-4">
                                Alongside development, I have a growing curiosity about machine learning.
                                I&apos;m particularly interested in how models learn, adapt, and support intelligent
                                applications.
                            </p>
                            <p className="mt-4">
                                If you&apos;re working on something cool — especially in development or ML —
                                I&apos;d be happy to connect and possibly work together!
                            </p>
                        </section>
                    </Animation>
                </div>

                {/* Skills Section */}
                <div className="flex flex-col flex-1 dark:text-white">
                    <Animation animation="slide-in-right" delay="delay-100">
                        <h1 className="text-4xl mb-4 font-bold">Skills</h1>
                        <section id="skills" className="flex flex-wrap gap-2">
                            {[
                                'C/C++', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Golang', 'ReactJs', 'PyTorch', 'Tensorflow', 'Langchain', 'Nodejs', 'Express', 'MongoDB', 'Numpy', 'Pandas', 'Matplotlib', 'Huggingface', 'Transformers', 'Data Structures', 'Algorithms',
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="border-2 border-violet-900 dark:bg-violet-900 px-3 py-1 rounded-2xl text-sm">{skill}</span>
                            ))}
                        </section>
                    </Animation>
                </div>

            </div>
        </div>
    );
};

export default About;
