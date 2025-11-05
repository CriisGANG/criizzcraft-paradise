import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import step1 from "@/assets/tutorial-step1.png";
import step2 from "@/assets/tutorial-step2.png";
import step3 from "@/assets/tutorial-step3.png";
import step4 from "@/assets/tutorial-step4.png";

export const Tutorial = () => {
  const steps = [
    {
      number: 1,
      title: "Instalar CurseForge",
      description: "Descarga e instala CurseForge desde su página oficial",
      link: "https://www.curseforge.com/",
      linkText: "Descargar CurseForge",
    },
    {
      number: 2,
      title: "Buscar Better MC Forge",
      description: "En CurseForge, busca el modpack 'Better MC Forge'",
      image: step1,
      imageAlt: "Búsqueda de Better MC Forge en CurseForge",
    },
    {
      number: 3,
      title: "Instalar Versión V53",
      description: "Ve a la pestaña 'Versions' y asegúrate de instalar la versión 1.20.1 v53",
      image: step2,
      imageAlt: "Selección de la versión v53 del modpack",
    },
    {
      number: 4,
      title: "Descargar Mods Extras",
      description: "Ve al Discord del servidor y descarga los mods extras requeridos",
      image: step3,
      imageAlt: "Menú de opciones del modpack",
    },
    {
      number: 5,
      title: "Instalar Mods Extras",
      description: "Abre la carpeta del modpack y arrastra los mods extras descargados a la carpeta 'mods'",
      image: step4,
      imageAlt: "Carpeta de mods del modpack",
    },
    {
      number: 6,
      title: "Iniciar Minecraft",
      description: "Inicia Minecraft desde CurseForge con el modpack Better MC instalado",
    },
    {
      number: 7,
      title: "Conectar al Servidor",
      description: "Añade la IP del servidor (disponible en Discord) y ¡comienza a jugar!",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo Unirse al Servidor?
          </h2>
          <p className="text-muted-foreground text-lg">
            Sigue estos pasos para comenzar tu aventura
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">
                      Paso {step.number}: {step.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-primary hover:text-primary/80 font-semibold transition-colors"
                      >
                        → {step.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>
              {step.image && (
                <CardContent>
                  <div className="rounded-lg overflow-hidden border border-border/50">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas ayuda adicional?
          </p>
          <a
            href="https://discord.gg/6e4eXBBScp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Únete a nuestro Discord
          </a>
        </div>
      </div>
    </section>
  );
};
