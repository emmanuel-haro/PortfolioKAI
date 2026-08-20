import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-200" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
            <span className="text-sm text-primary font-medium">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in-up delay-100">
            <span className="text-foreground">Emmanuel</span>
            <br />
            <span className="gradient-text">Kai Haro</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Full Stack Web Developer <span className="text-primary">|</span>{' '}
            MERN Specialist <span className="text-primary">|</span>{' '}
            Data Analyst <span className="text-primary">|</span>{' '}
            Data Scientist
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg leading-relaxed animate-fade-in-up delay-300">
            Crafting seamless digital experiences with modern web technologies.
            Passionate about building scalable applications that make a
            difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="mailto:emmanuelkai79@gmail.com">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-500">

            <a
              href="mailto:emmanuelkai79@gmail.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+254740583892"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 group"
              aria-label="Phone"
            >
              <Phone size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://github.com/emmanuel-haro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuel-haro-4735392b8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
