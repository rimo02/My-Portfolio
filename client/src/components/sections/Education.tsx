import React from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from '../ui/Card';
import Animation from '../ui/Animation';

const coursework: string[] = ['Data Structures', 'Algorithms', 'Operating System', 'Compiler Design', 'Automata', 'Database Management', 'Software Engineering', 'Computer Networks']

const Education: React.FC = () => {
    return (
        <div className='flex justify-center min-h-screen py-10'>
            <div className='flex justify-center w-[90%] mt-10'>
                <div className="flex flex-col gap-6 p-4">

                    <Animation delay='delay-100'>
                        <Card className='p-4 dark:bg-violet-900'>
                            <CardHeader>
                                <CardTitle className='text-3xl'>KIIT University</CardTitle>
                                <CardDescription className='md:text-xl text-lg flex justify-between'>Bachelor of Technology in Computer Science and Engineering<br />
                                    <span className="block text-sm">2021 - 2025</span></CardDescription>
                            </CardHeader>

                            <CardContent className='flex flex-col gap-4'>
                                <h1 className='font-bold text-2xl text-neutral-900'>Relevant Coursework</h1>
                                <div className="flex flex-wrap gap-2">
                                    {coursework.map((course) => (
                                        <span
                                            key={course}
                                            className="dark:bg-gray-100 text-sm px-2 py-1 rounded-md text-gray-700"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </CardContent >
                        </Card>
                    </Animation>
                </div>
            </div>
        </div>
    )
}
export default Education