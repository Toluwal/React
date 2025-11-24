import React from "react";
import {Briefcase, Code, User} from 'lucide-react';
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols2 gap-12 items-center">
          <div className="space-y-6">
            <h3 text-2xl font-semibold>
              Passionate AI Developer & Data Analyst
            </h3>

            <p className="text-muted-forground">
              Am emerging AI Developer and Data analyst. I specialize in
              creating responsive, accessible and performant web applications
              using modern technologies. I also turn raw data into great
              insights for better business performance
            </p>

            <p className="text-muted-forground">
              I am passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounde-full bg-primary/10">
                <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 font-semibold text-lg>Web Development</h4>
                  <p className="text-muted-foreground">Creating responsive website and web applications with 
                    modern framworks</p>

                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounde-full bg-primary/10">
                <User className="h-6 w-6 text-primary"/>
                </div>
                
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounde-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
