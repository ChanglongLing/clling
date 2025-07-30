import { GraduationCap, Briefcase, Award, Lightbulb } from "lucide-react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2024",
      title: "PhD Candidate - University of Washington",
      description: "Began PhD in Interdisciplinary Urban Design and Planning, focusing on AI applications in smart cities.",
      icon: GraduationCap,
      type: "education",
      status: "current"
    },
    {
      year: "2024",
      title: "Hubert M. Blalock Fellowship",
      description: "Awarded prestigious fellowship by the Center for Statistics and Social Sciences at UW.",
      icon: Award,
      type: "achievement",
      status: "completed"
    },
    {
      year: "2024",
      title: "Research Assistant - Microsoft",
      description: "Collaborating on urban transportation optimization using machine learning algorithms.",
      icon: Briefcase,
      type: "work",
      status: "current"
    },
    {
      year: "2024",
      title: "M.S. Urban Planning - Peking University",
      description: "Graduated with distinction, thesis on 'AI-Driven Urban Mobility Solutions'.",
      icon: GraduationCap,
      type: "education",
      status: "completed"
    },
    {
      year: "2022",
      title: "First Publication",
      description: "Published groundbreaking research on autonomous vehicle integration in urban environments.",
      icon: Lightbulb,
      type: "achievement",
      status: "completed"
    },
    {
      year: "2020",
      title: "B.S. Economics & Urban Planning",
      description: "Dual degree from Wuhan University, graduated summa cum laude.",
      icon: GraduationCap,
      type: "education",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle" id="timeline">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Academic Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A timeline of my educational milestones, research achievements, and professional growth 
            in the field of computational urban planning.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-highlight"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start gap-8 group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    event.status === 'current' 
                      ? 'bg-gradient-accent shadow-glow' 
                      : 'bg-gradient-primary shadow-elegant'
                  }`}>
                    <event.icon className="w-8 h-8 text-white" />
                    {event.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="research-card">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-accent">{event.year}</span>
                        {event.status === 'current' && (
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card rounded-full shadow-elegant">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-muted-foreground font-medium">Journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;