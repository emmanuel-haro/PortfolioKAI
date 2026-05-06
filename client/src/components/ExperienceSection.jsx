import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const timeline = [
    {
    year: '2026',
    title: 'Certifications Achieved',
    organization: 'World Quant University',
    description:
      'Data Science',
    type: 'certification',
    icon: Award,
  },
  {
    year: '2025',
    title: 'Full Stack Web Development',
    organization: 'PLP Academy',
    description:
      'Completed intensive MERN Stack specialization. Built multiple full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
    type: 'education',
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Cyber Attendant',
    organization: 'April - September 2024',
    description:
      'Managed computer systems, assisted customers with technical needs, and maintained IT infrastructure. Demonstrated strong computer skills and customer service.',
    type: 'work',
    icon: Briefcase,
    reference: 'Madam Isuba Pendo - 0718553323',
  },
  {
    year: '2024',
    title: 'Certifications Achieved',
    organization: 'Cisco & Microsoft',
    description:
      'Data Analytics Essentials, Networking Course (Cisco), and Microsoft Azure AI Fundamentals certification.',
    type: 'certification',
    icon: Award,
  },
  {
    year: '2022',
    title: 'University Enrollment',
    organization: 'JKUAT',
    description:
      'Began pursuing a degree in Project Planning and Management at Jomo Kenyatta University of Agriculture and Technology.',
    type: 'education',
    icon: GraduationCap,
  },
  {
    year: '2019-2022',
    title: 'High School',
    organization: 'Ikuu Boys High School',
    description:
      'Completed secondary education at Ikuu Boys High School, a national school achieved through excellent KCPE performance.',
    type: 'education',
    icon: GraduationCap,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block uppercase tracking-widest text-sm">
            My Journey
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A timeline of my academic achievements, professional experiences,
            and continuous learning journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                } pl-20 md:pl-0 md:w-1/2 ${isLeft ? '' : 'md:ml-auto'}`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-auto ${
                    isLeft
                      ? 'md:right-0 md:translate-x-1/2'
                      : 'md:left-0 md:-translate-x-1/2'
                  } w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center md:top-0`}
                >
                  <Icon size={14} className="text-primary" />
                </div>

                {/* Content card */}
                <div className="glass-card-hover p-6 rounded-2xl">
                  <span className="text-primary font-semibold text-sm">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-heading font-semibold mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.reference && (
                    <p className="text-primary/80 text-xs mt-3">
                      Reference: {item.reference}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
