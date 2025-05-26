"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const technicalSkills = [
  { name: "C/C++" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "Golang" },
  { name: "React" },
  { name: "Express" },
  { name: "Node.js" },
  { name: "Next.js" },
  { name: "HTML/CSS" },
  { name: "SQL" },
  { name: "PyTorch" },
  { name: "Tensorflow" },
  { name: "Numpy" },
  { name: "Pandas" },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Time Management",
  "Adaptability",
  "Critical Thinking",
  "Attention to Detail",
];

const tools = [
  "Firebase",
  "MongoDB",
  "MySQL",
  "Git & GitHub",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-accent/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <Tabs defaultValue="technical" className="w-full max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap gap-10 mb-3">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Technologies</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="text-center font-medium">
                      {skill.name}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="soft">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="text-center font-medium">
                      {skill}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="tools">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="text-center font-medium">
                      {tool}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
