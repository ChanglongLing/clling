import { Brain, Globe, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { icon: Brain, label: "Research Projects", value: "15+" },
    { icon: Globe, label: "Cities Analyzed", value: "50+" },
    { icon: Users, label: "Collaborations", value: "25+" },
    { icon: Award, label: "Publications", value: "30+" },
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About My Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between artificial intelligence and urban sustainability 
            through innovative computational approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Creating Smarter Cities Through Data
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My research focuses on developing AI algorithms that can understand and optimize 
              urban systems. By combining machine learning with urban planning principles, 
              I work to create more sustainable, efficient, and equitable cities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my PhD at the University of Washington, I'm exploring how 
              automated vehicles and smart transportation systems can reduce carbon footprints 
              while improving accessibility for all urban residents.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-accent mb-3">Core Research Areas:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Autonomous Vehicle Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Smart Transportation Networks</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Urban Sustainability Modeling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Explainable AI for Policy</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="research-card pulse-glow">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Research Philosophy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  "Technology should serve humanity by creating more equitable and sustainable 
                  urban environments. My work aims to ensure AI benefits all community members, 
                  not just the privileged few."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="research-card text-center group cursor-pointer">
              <div className="p-6">
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;