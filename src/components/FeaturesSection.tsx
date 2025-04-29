
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("design");

  const features = {
    design: {
      title: "Beautiful, Minimal Design",
      description:
        "Our design philosophy embraces simplicity and elegance. We focus on clean lines, thoughtful typography, and purposeful whitespace to create interfaces that are both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800",
    },
    performance: {
      title: "Optimized Performance",
      description:
        "We build with performance in mind from the ground up. Every component is optimized for speed, ensuring your users have the best possible experience across all devices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800",
    },
    accessibility: {
      title: "Accessible to Everyone",
      description:
        "Accessibility isn't an afterthought—it's foundational. We ensure all our designs and implementations are accessible to everyone, regardless of ability.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=800",
    },
  };

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what makes our approach different.
          </p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="design" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              </TabsList>
            </div>
            {Object.entries(features).map(([key, feature]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className={`order-2 md:order-1 ${activeTab === key ? "animate-fade-in" : ""}`}>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Feature point {i} about {feature.title.toLowerCase()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className={`rounded-lg overflow-hidden shadow-md ${activeTab === key ? "animate-fade-in" : ""}`}>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
