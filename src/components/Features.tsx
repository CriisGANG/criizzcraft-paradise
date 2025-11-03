import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Download } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Download,
      title: "100% Gratuito",
      description: "Acceso completamente gratis, sin barreras ni pagos ocultos",
    },
    {
      icon: Zap,
      title: "Optimizado",
      description: "Servidor altamente optimizado para una experiencia fluida",
    },
    {
      icon: Users,
      title: "Fácil Acceso",
      description: "Simple de unirse, toda la información en nuestro Discord",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Por qué unirte?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
