import { Car, Building, Network, BarChart3, ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ResearchSection = () => {
  const projects = [
    {
      icon: Car,
      title: "Autonomous Vehicle Routing",
      description: "AI-powered routing algorithms that optimize autonomous vehicle paths for maximum efficiency and minimal environmental impact.",
      tags: ["Machine Learning", "Transportation", "Optimization"],
      status: "Active",
      color: "accent",
      metrics: { impact: "25% reduction in traffic", funding: "$150K NSF Grant" }
    },
    {
      icon: Building,
      title: "Smart City Infrastructure",
      description: "Predictive models for urban infrastructure maintenance using IoT sensors and historical data analysis.",
      tags: ["IoT", "Predictive Analytics", "Urban Planning"],
      status: "Published",
      color: "primary",
      metrics: { impact: "3 cities implemented", funding: "Collaboration with Seattle DOT" }
    },
    {
      icon: Network,
      title: "Transit Network Optimization",
      description: "Graph neural networks for optimizing public transportation routes based on real-time demand patterns.",
      tags: ["Graph Neural Networks", "Public Transit", "Real-time Analytics"],
      status: "In Review",
      color: "highlight",
      metrics: { impact: "15% efficiency gain", funding: "Microsoft Research Partnership" }
    },
    {
      icon: BarChart3,
      title: "Urban Sustainability Metrics",
      description: "Comprehensive framework for measuring and predicting urban sustainability using multi-modal data sources.",
      tags: ["Sustainability", "Data Science", "Policy Analysis"],
      status: "Ongoing",
      color: "accent",
      metrics: { impact: "Policy recommendations", funding: "EPA Collaboration" }
    }
  ];

  return (
    <section className="py-20 bg-background" id="research">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Research Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of AI, urban planning, and sustainability through 
            innovative computational approaches and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="research-card group overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-${project.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge 
                    variant={project.status === 'Active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact:</span>
                    <span className="font-medium text-accent">{project.metrics.impact}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Funding:</span>
                    <span className="font-medium text-accent">{project.metrics.funding}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                    Learn More
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            View All Publications
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;