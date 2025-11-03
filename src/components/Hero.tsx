import { Button } from "@/components/ui/button";
import heroImage from "@/assets/minecraft-hero.jpg";

export const Hero = () => {
  const handleDiscordJoin = () => {
    window.open("https://discord.gg/6e4eXBBScp", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-glow">
          Servidor de Minecraft
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/90 max-w-2xl mx-auto">
          Únete a nuestra comunidad y vive una experiencia única con modpack optimizado
        </p>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl mx-auto">
          Creado por <span className="text-primary font-semibold">Criizz</span>
        </p>
        
        <Button 
          variant="hero"
          size="lg"
          onClick={handleDiscordJoin}
          className="text-lg px-8 py-6 h-auto animate-float"
        >
          Únete a Discord
        </Button>
        
        <p className="mt-6 text-sm text-muted-foreground">
          IP y mods disponibles en Discord
        </p>
      </div>
    </section>
  );
};
