import React, { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Data pendidikan, pengalaman, dan keterampilan
  const educationData = [
    {
      title: "Universitas Gadjah Mada",
      degree: "Bachelor Software Engineering Technology",
      year: "2022 - Present",
      gpa: "GPA: 3.54 / 4.00",
    },
  ];

  const experienceData = [
    {
      role: "System Analyst, Senyumin App Project",
      year: "2022 – Present",
      tasks: [
        "Conducted research and system analysis for web, design, and user experience.",
        "Created Software Requirement Specification (SRS) documents covering user flow, design, and architecture of the app.",
        "Managed and processed data to train the AI model in the Senyumin app.",
      ],
    },
    {
      role: "Vice Chairman, KOMATIK",
      year: "2023 – Present",
      tasks: [
        "Led the preparation and management of UGM’s team for the Gemastik competition.",
        "Organized workshops to enhance members’ skills in programming, graphic design, and data analysis.",
        "Oversaw the training of each division to ensure relevance and effectiveness.",
        "Actively supported the chairman in making strategic decisions.",
        "Responsible for managing administrative and operational needs of the community.",
      ],
    },
    {
      role: "Staff, Gelanggang Expo UGM",
      year: "2023 – Present",
      tasks: [
        "Designed and executed event concepts from pre-event to post-event.",
        "Responsible for creating all event content and analyzing the website design.",
        "Directly executed event content during the actual event.",
      ],
    },
    {
      role: "IT Business Development Intern, PT Pitjarus Teknologi",
      year: "2024 – Present",
      tasks: [
        "Lead a team of analysts and developers to deliver solutions to clients.",
        "Coordinated with clients to understand business needs and delivered technical solutions.",
        "Conducted product analysis and defined strategies to meet client requirements.",
        "Managed relationships with clients and maintained positive ongoing communications.",
      ],
    },
  ];

  const skillsData = [
    { skill: "Programming (Java, Python, Kotlin)", level: "w-3/4", color: "bg-blue-500" },
    { skill: "UI/UX Design", level: "w-4/5", color: "bg-green-500" },
    { skill: "Database (SQL)", level: "w-2/3", color: "bg-orange-500" },
    { skill: "Web Development (Laravel, Javascript)", level: "w-2/3", color: "bg-red-500" },
    { skill: "Business Analysis", level: "w-3/4", color: "bg-yellow-500" },
    { skill: "Client Relationship Management", level: "w-4/5", color: "bg-purple-500" },
    { skill: "Product Management", level: "w-2/3", color: "bg-pink-500" },
    { skill: "Project Leadership", level: "w-2/3", color: "bg-gray-500" },
    { skill: "Team Collaboration", level: "w-4/5", color: "bg-teal-500" },
  ];

  // Set up Intersection Observer to trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the section is visible
        }
      },
      { threshold: 0.3 } // Trigger when at least 30% of the section is visible
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section); // Observe the About section
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Clean up observer
      }
    };
  }, []);

  return (
    <section id="about" className="w-full h-auto bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Profile Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            BIMA BAYU SOFANA
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            IT Business Development | System Analyst | UI/UX Designer | Software Engineering
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            I am a student of Software Engineering with a strong interest in IT. My experience includes projects in system analysis, software quality testing, intuitive user interface design, and data processing and analysis. I am detail-oriented, have strong analytical skills, and can quickly adapt to new environments. I am passionate about learning and growing in the tech industry and am eager to contribute positively to any project I am involved in.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Education</h3>
          <div className="flex justify-center">
            {/* Education Cards */}
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
                }`}
                style={{
                    transitionDelay: "0.2s",
                    minWidth: "360px", // Minimum width for mobile
                    maxWidth: "800px", // Max width for desktop
                    width: "100%", // To ensure full width inside container
                }}
              >
                <h4 className="text-2xl font-semibold text-gray-700">{edu.title}</h4>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500">{edu.year}</p>
                <p className="text-gray-500">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Work Experience & Projects</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Experience Cards */}
            {experienceData.map((exp, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
                }`}
                style={{
                  transitionDelay: `${0.4 + idx * 0.2}s`,
                  minWidth: "300px",
                  maxWidth: "400px",
                }}
              >
                <h4 className="text-2xl font-semibold text-gray-700">{exp.role}</h4>
                <p className="text-gray-600">{exp.year}</p>
                <ul className="list-disc ml-6 mt-4 text-gray-500">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section with Animated Diagram */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Skills</h3>
          <div className="space-y-6">
            {/* Skills Cards */}
            {skillsData.map((skill, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-gray-600">{skill.skill}</span>
                <div className="w-3/4 bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full transition-width duration-500 ${skill.color} ${
                      isVisible ? skill.level : "w-0"
                    }`}
                    style={{ transitionDelay: `${1.0 + idx * 0.2}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
