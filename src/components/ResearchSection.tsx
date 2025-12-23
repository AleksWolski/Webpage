import React from 'react';
import { Database, GitBranch, LineChart, Cpu } from 'lucide-react';

const researchAreas = [
  {
    icon: Database,
    title: 'Data-Driven Simulation',
    description: 'Developing methods to simulate system behavior directly from measured data without explicit model identification.',
  },
  {
    icon: GitBranch,
    title: 'System Identification',
    description: 'Creating robust algorithms for identifying continuous-time LTI systems from noisy, sampled observations.',
  },
  {
    icon: LineChart,
    title: 'Control Synthesis',
    description: 'Designing controllers based on data-driven representations that guarantee stability and performance.',
  },
  {
    icon: Cpu,
    title: 'LTI Systems',
    description: 'Theoretical foundations of linear time-invariant systems and their data-driven characterizations.',
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
            Research Focus
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Exploring the Intersection of{' '}
            <span className="text-gradient">Data & Dynamics</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My research bridges the gap between classical control theory and modern 
            data-driven approaches, enabling direct analysis and design from experimental data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 card-shadow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <area.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual representation of LTI system */}
        <div className="mt-20 p-8 rounded-2xl bg-card border border-border card-shadow">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-display font-semibold text-2xl mb-4">
                Continuous-Time LTI Systems
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The fundamental behavior of linear time-invariant systems is described by 
                differential equations of the form:
              </p>
              <div className="bg-secondary/50 rounded-lg p-4 font-mono text-sm">
                <span className="text-primary">ẋ(t)</span> = <span className="text-accent">A</span>x(t) + <span className="text-accent">B</span>u(t)
                <br />
                <span className="text-primary">y(t)</span> = <span className="text-accent">C</span>x(t) + <span className="text-accent">D</span>u(t)
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                My work focuses on reconstructing and utilizing these relationships 
                directly from measured input-output data.
              </p>
            </div>
            
            {/* System diagram */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 300 150" className="w-full max-w-sm">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="hsl(186 100% 50%)" />
                  </marker>
                </defs>
                
                {/* Input arrow */}
                <line x1="20" y1="75" x2="70" y2="75" stroke="hsl(186 100% 50%)" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="45" y="65" fill="hsl(186 100% 50%)" fontSize="12" textAnchor="middle" fontFamily="monospace">u(t)</text>
                
                {/* System block */}
                <rect x="80" y="50" width="140" height="50" rx="8" fill="hsl(217 33% 17%)" stroke="hsl(186 100% 50%)" strokeWidth="2" />
                <text x="150" y="80" fill="hsl(210 40% 98%)" fontSize="14" textAnchor="middle" fontFamily="var(--font-display)">LTI System</text>
                
                {/* Output arrow */}
                <line x1="230" y1="75" x2="280" y2="75" stroke="hsl(186 100% 50%)" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <text x="255" y="65" fill="hsl(186 100% 50%)" fontSize="12" textAnchor="middle" fontFamily="monospace">y(t)</text>
                
                {/* Feedback path (dashed) */}
                <path d="M240,75 L240,120 L60,120 L60,75" fill="none" stroke="hsl(186 80% 42%)" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
