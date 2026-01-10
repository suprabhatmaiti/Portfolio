import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

export default function MyJourney() {
  const educationTimeline = [
    {
      year: "2025",
      institution: "Your University Name",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      description: "Specialized in web development and software engineering.",
      icon: <FaUniversity />,
    },
    {
      year: "2022",
      institution: "Your College Name",
      degree: "Higher Secondary",
      field: "Science Stream",
      description: "Focused on Mathematics, Physics, and Computer Science.",
      icon: <FaSchool />,
    },
    {
      year: "2019",
      institution: "Your School Name",
      degree: "Secondary School",
      field: "General Studies",
      description:
        "Completed with distinction and strong foundation in academics.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2017",
      institution: "Your School Name",
      degree: "Secondary School",
      field: "General Studies",
      description:
        "Completed with distinction and strong foundation in academics.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2015",
      institution: "Your School Name",
      degree: "Secondary School",
      field: "General Studies",
      description:
        "Completed with distinction and strong foundation in academics.",
      icon: <FaGraduationCap />,
    },
  ];

  // Generate intermediate years between milestones
  const generateIntermediateYears = () => {
    const years = [];
    const milestoneYears = educationTimeline.map((item) => parseInt(item.year));
    const minYear = Math.min(...milestoneYears);
    const maxYear = Math.max(...milestoneYears);

    for (let year = minYear; year <= maxYear; year++) {
      if (!milestoneYears.includes(year)) {
        years.push(year);
      }
    }
    return years;
  };

  const intermediateYears = generateIntermediateYears();

  return (
    <section
      data-cursor="-inverse"
      className="w-full py-16 sm:py-20 
      bg-gradient-to-b to-blue-700 via-indigo-400 from-blue-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            My Educational Journey
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
            The path that shaped my knowledge and passion for technology
          </p>
        </div>

        <div className="relative">
          {/* Desktop center line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 h-full w-1 
            bg-gradient-to-b from-yellow-400 via-rose-400 to-violet-400 hidden md:block"
          />

          {/* Mobile left line */}
          <div
            className="absolute left-10 h-full w-1 
            bg-gradient-to-b from-yellow-400 via-rose-400 to-violet-400 md:hidden"
          />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => (
              <React.Fragment key={index}>
                <div className="relative flex items-start">
                  {/* Mobile year */}
                  <div className="md:hidden absolute left-0 z-10">
                    <div
                      className="w-20 h-20 rounded-full 
                      bg-gradient-to-br from-yellow-400 to-rose-500
                      flex items-center justify-center border-4 border-white/20 shadow-lg"
                    >
                      <span className="text-white font-black text-lg">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full pl-24 md:pl-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right md:ml-auto"
                        : "md:pl-12 md:text-left md:order-3"
                    }`}
                  >
                    <div
                      className="bg-white/10 backdrop-blur-md border border-white/10
                      rounded-2xl p-6 hover:border-yellow-400
                      transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/30"
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="text-3xl text-yellow-400">
                          {item.icon}
                        </div>
                        <h3 className="text-white text-xl font-bold">
                          {item.institution}
                        </h3>
                      </div>

                      <h4 className="text-white font-semibold text-lg mb-2">
                        {item.degree}
                      </h4>
                      <p className="text-yellow-400 font-medium mb-3">
                        {item.field}
                      </p>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop year badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex">
                    <div
                      className="w-20 h-20 rounded-full 
                      bg-gradient-to-br from-yellow-400 to-rose-500
                      flex items-center justify-center border-4 border-white/20 shadow-lg"
                    >
                      <span className="text-white font-black text-lg">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Intermediate years between cards */}
                {index < educationTimeline.length - 1 && (
                  <div className="relative h-24 flex items-center justify-center">
                    {/* Mobile intermediate years */}
                    <div className="md:hidden absolute left-0 top-0 flex flex-col gap-4">
                      {Array.from({
                        length:
                          parseInt(educationTimeline[index].year) -
                          parseInt(educationTimeline[index + 1].year) -
                          1,
                      }).map((_, i) => {
                        const year =
                          parseInt(educationTimeline[index].year) - i - 1;
                        return (
                          <div
                            key={year}
                            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/10 ml-4"
                          >
                            <span className="text-white/40 font-semibold text-xs">
                              {year}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Desktop intermediate years */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col gap-4">
                      {Array.from({
                        length:
                          parseInt(educationTimeline[index].year) -
                          parseInt(educationTimeline[index + 1].year) -
                          1,
                      }).map((_, i) => {
                        const year =
                          parseInt(educationTimeline[index].year) - i - 1;
                        return (
                          <div
                            key={year}
                            className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/10"
                          >
                            <span className="text-white/40 font-semibold text-xs">
                              {year}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm">
            Continuously learning and growing in the field of technology
          </p>
        </div>
      </div>
    </section>
  );
}
