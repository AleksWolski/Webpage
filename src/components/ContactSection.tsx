import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Building } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-display font-medium mb-4 tracking-wider uppercase text-sm">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Interested in my research or potential collaborations? 
            I'm always open to discussing new ideas and opportunities.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border card-shadow text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">researcher@university.edu</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border card-shadow text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold mb-2">Department</h3>
              <p className="text-muted-foreground text-sm">Applied Mathematics</p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border card-shadow text-center">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">University Campus</p>
            </div>
          </div>

          <Button variant="hero" size="lg" className="gap-2">
            <Mail size={18} />
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
