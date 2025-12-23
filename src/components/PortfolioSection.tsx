import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Calendar } from 'lucide-react';

const publications = [
  {
    title: 'Data-Driven Control of Continuous-Time LTI Systems',
    journal: 'IEEE Transactions on Automatic Control',
    year: '2024',
    abstract: 'A novel framework for synthesizing stabilizing controllers directly from input-output trajectories without prior system identification.',
    tags: ['Control Theory', 'Data-Driven', 'LTI Systems'],
    link: '#',
  },
  {
    title: 'Robust Identification from Noisy Data',
    journal: 'Automatica',
    year: '2023',
    abstract: 'Developing noise-resilient algorithms for continuous-time system identification with guaranteed error bounds.',
    tags: ['System Identification', 'Robust Methods', 'Continuous-Time'],
    link: '#',
  },
  {
    title: 'Simulation Without Models: A Data-Centric Approach',
    journal: 'IFAC World Congress',
    year: '2023',
    abstract: 'Enabling accurate system simulation using only measured data, bypassing traditional model-building steps.',
    tags: ['Simulation', 'Data-Driven', 'Model-Free'],
    link: '#',
  },
  {
    title: 'Behavioral Framework for LTI System Analysis',
    journal: 'Systems & Control Letters',
    year: '2022',
    abstract: 'Extending behavioral systems theory to accommodate data-driven representations of dynamical systems.',
    tags: ['Behavioral Theory', 'LTI Systems', 'Analysis'],
    link: '#',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
            Publications
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Featured <span className="text-gradient">Research Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my published papers in top-tier journals and conferences 
            in the fields of control theory and applied mathematics.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <article
              key={pub.title}
              className="group p-6 md:p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {pub.year}
                    </span>
                    <span className="text-border">•</span>
                    <span className="text-sm text-primary font-medium">{pub.journal}</span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3">
                  <Button variant="heroOutline" size="sm" className="gap-2">
                    <FileText size={16} />
                    PDF
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink size={16} />
                    DOI
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
