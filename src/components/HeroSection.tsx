import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-light rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-light rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-highlight rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-full border-4 border-white/30 flex items-center justify-center shadow-glow float-animation">
              <div className="w-40 h-40 bg-gradient-primary rounded-full flex items-center justify-center text-6xl font-bold text-white">
                AL
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dr. Alex
            <span className="block text-highlight animate-pulse">Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Computational Urban Planning • AI Researcher • Data Scientist
          </p>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
            Transforming cities through intelligent algorithms and sustainable innovation
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="btn-hero group">
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;