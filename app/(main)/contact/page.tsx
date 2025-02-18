import { Mail, Phone, Github, Linkedin, Code2, Trophy, BookOpenIcon, Code } from "lucide-react";
import AnimatedContainer from "@/components/about/animated-container";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Mail className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "Email",
    value: "yashjaiswal2509@gmail.com",
    href: "mailto:yashjaiswal2509@gmail.com"
  },
  {
    icon: <Phone className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "Phone",
    value: "+91-7851073155",
    href: "tel:+917851073155"
  },
  {
    icon: <Linkedin className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "LinkedIn",
    value: "Yash Jaiswal",
    href: "https://linkedin.com/in/yash-jaiswal-aaa8112ab"
  },
  {
    icon: <Github className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "GitHub",
    value: "Yash-jaiswal2509",
    href: "https://github.com/Yash-jaiswal2509"
  },
  {
    icon: <Trophy className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "LeetCode",
    value: "yashjaiswal2509",
    href: "https://leetcode.com/u/yashjaiswal2509/"
  },
  {
    icon: <Code2 className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "Codeforces",
    value: "yashjaiswal2509",
    href: "https://codeforces.com/profile/yashjaiswal2509"
  },
  {
    icon: <BookOpenIcon className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "CodeChef",
    value: "yashjaiswal25 (★★★)",
    href: "https://www.codechef.com/users/yashjaiswal25"
  },
  {
    icon: <Code className="sm:h-6 sm:w-6 h-4 w-4" />,
    label: "GeeksforGeeks",
    value: "yashjaisrkd7",
    href: "https://www.geeksforgeeks.org/user/yashjaisrkd7/"
  }
];

const Contact = () => { 
  return (
    <div className="min-h-screen w-full p-6 md:p-10 text-white">
      <div className="max-w-4xl mx-auto">
        <AnimatedContainer>
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Get in Touch</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {contactInfo.map((info, index) => (
              <Link
                href={info.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card group">
                  <div className="flex items-center gap-4 p-6">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm text-gray-400">{info.label}</h3>
                      <p className="text-base sm:text-lg font-medium">{info.value}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
}

export default Contact;