import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
              About Me
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Pushing the Boundaries of{' '}
              <span className="text-gradient">Data-Driven Control</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a PhD candidate in Engineering, focusing on the development of 
                data-driven techniques for the analysis, control, and simulation of 
                dynamical systems. My research sits at the intersection of applied 
                mathematics, systems theory, and machine learning.
              </p>
              <p>
                My work addresses fundamental questions: How can we design controllers 
                without building explicit models? How can we guarantee stability using 
                only measured data? These questions drive my research into novel 
                theoretical frameworks with practical engineering applications.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <div className="text-3xl font-display font-bold text-gradient mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <div className="text-3xl font-display font-bold text-gradient mb-1">4</div>
                <div className="text-sm text-muted-foreground">Years Research</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <div className="text-3xl font-display font-bold text-gradient mb-1">3</div>
                <div className="text-sm text-muted-foreground">Conferences</div>
              </div>
            </div>
          </div>

          {/* Timeline / Education */}
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-xl bg-background border border-border card-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-sm text-primary font-medium mb-1">2021 – Present</div>
                <h3 className="font-display font-semibold text-lg mb-1">PhD in Engineering</h3>
                <p className="text-muted-foreground text-sm">
                  Research focus on data-driven methods for continuous-time LTI systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-background border border-border card-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-sm text-primary font-medium mb-1">2019 – 2021</div>
                <h3 className="font-display font-semibold text-lg mb-1">MSc Applied Mathematics</h3>
                <p className="text-muted-foreground text-sm">
                  Thesis on system identification techniques for nonlinear systems.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-background border border-border card-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-primary" size={24} />
              </div>
              <div>
                <div className="text-sm text-primary font-medium mb-1">2015 – 2019</div>
                <h3 className="font-display font-semibold text-lg mb-1">BSc Mechanical Engineering</h3>
                <p className="text-muted-foreground text-sm">
                  Foundation in dynamics, control systems, and numerical methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
