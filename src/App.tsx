import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, ChevronDown, Star } from 'lucide-react';

const ProgrammingPortfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { name: 'Frontend', icon: Globe, color: 'from-blue-500 to-cyan-500', tech: ['React', 'Vue.js', 'TypeScript'] },
    { name: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500', tech: ['Node.js', 'Python', 'PostgreSQL'] },
    { name: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500', tech: ['React Native', 'Flutter'] },
    { name: 'DevOps', icon: Code, color: 'from-orange-500 to-red-500', tech: ['Docker', 'AWS', 'CI/CD'] }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with real-time payments and inventory management',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time messaging app with AI-powered smart replies and sentiment analysis',
      tech: ['Vue.js', 'Python', 'WebSocket'],
      gradient: 'from-green-600 to-blue-600'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization platform for business intelligence',
      tech: ['React', 'D3.js', 'Firebase'],
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="#top" 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {'<PGT>'}
          </a>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Nice to meet you,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                I'm Pat
              </span>
              <br />
              
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting digital experiences with cutting-edge technologies
              <br />
              <span className="text-blue-400">Turning ideas into reality, one line of code at a time</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/Patgdetorres_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-block text-center"
            >
              <span className="flex items-center gap-2">
                Check Out My Resume
                <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </a>
            {/* <button className="group border-2 border-gray-600 hover:border-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10">
              <span className="flex items-center gap-2">
                Get In Touch
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button> */}
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/Patgdetorres' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/patgdetorres/' },
              { icon: Mail, href: 'mailto:patgdetorres@gmail.com' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="group p-3 rounded-full border border-gray-600 hover:border-blue-400 transition-all duration-300 hover:bg-blue-400/10 hover:scale-110"
              >
                <Icon className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  <div className="space-y-2">
                    {skill.tech.map((tech) => (
                      <div key={tech} className="text-sm text-gray-400 text-center px-3 py-1 rounded-full bg-gray-800/50">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to bring your vision to life?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's collaborate on your next project and create something amazing together.
              </p>
              
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center gap-2">
                  Start a Project
                  <Star className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Patricio Gonzalez De Torres
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#' }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProgrammingPortfolio;