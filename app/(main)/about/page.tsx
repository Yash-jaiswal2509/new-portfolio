import { GraduationCap, Code, Trophy } from "lucide-react";
import SkillCard from "@/components/skill-card";
import AnimatedContainer from "@/components/about/animated-container";

export default function About() {
  return (
    <div className="min-h-screen w-full p-6 md:p-10 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <AnimatedContainer>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="ml-11">
            <h3 className="text-xl font-semibold text-blue-300">Sardar Vallabhbhai National Institute of Technology (SVNIT)</h3>
            <p className="text-gray-300 mt-2">B.Tech, 2026</p>
            <p className="text-green-400 mt-1">Current CGPA (5th Semester): 8.13/10.0</p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer>
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-8 h-8 text-purple-400" />
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Programming Languages"
              skills={["Java", "JavaScript"]}
              className="border-blue-500/20"
            />
            <SkillCard
              title="Frontend Technologies"
              skills={["HTML", "CSS", "TypeScript", "Tailwind CSS", "React.js", "Next.js"]}
              className="border-purple-500/20"
            />
            <SkillCard
              title="Backend Technologies"
              skills={["Node.js", "Express.js", "MongoDB", "PostgreSQL"]}
              className="border-green-500/20"
            />
            <SkillCard
              title="Other Skills"
              skills={["Data Structures & Algorithms", "OOPS", "DBMS", "Git/GitHub"]}
              className="border-orange-500/20"
            />
          </div>
        </AnimatedContainer>

        <AnimatedContainer>
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-2xl font-bold">Competitive Programming Achievements</h2>
          </div>
          <div className="space-y-4">
            <div className="achievement-card">
              <p className="text-lg">🎯 Solved <span className="text-green-400 font-bold">800+</span> coding problems across various platforms.</p>
            </div>
            <div className="achievement-card">
              <p className="text-lg">🏆 LeetCode-Knight: Maximum rating <span className="text-yellow-400 font-bold">2040</span></p>
              <p className="text-gray-300">Global Rank 519 in Biweekly Contest 141 (out of 29,000+ participants)</p>
            </div>
            <div className="achievement-card">
              <p className="text-lg">⭐ CodeChef-3 Star: Maximum rating <span className="text-yellow-400 font-bold">1761</span></p>
            </div>
            <div className="achievement-card">
              <p className="text-lg">🚀 Codeforces-Pupil: Maximum rating <span className="text-yellow-400 font-bold">1398</span></p>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}