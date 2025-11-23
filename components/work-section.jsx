'use client';

const WorkSection = () => {
  const workExperience = [
    {
      role: 'Full Stack Developer',
      company: 'Ecomlytix',
      time: '2023 - Present',
      desc: 'Led backend architecture redesign reducing server costs by 20%.'
    },
    {
      role: 'Software Intern',
      company: 'Zanduty',
      time: '2022 - 2023',
      desc: 'Built internal tools for data visualization.'
    }
  ];

  return (
    <section id="work" className="mb-10 scroll-mt-24">
      <h2 className="text-sm font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Experience
      </h2>
      
      <div className="space-y-8 border-l border-white/10 ml-2 pl-8 relative">
        {workExperience.map((job, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-neutral-700"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
              <h3 className="text-white font-medium text-sm">{job.company}</h3>
              <span className="text-xs text-neutral-500 font-mono">{job.time}</span>
            </div>
            <p className="text-sm text-blue-400 mb-2">{job.role}</p>
            <p className="text-xs text-neutral-400 max-w-md leading-relaxed">{job.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;