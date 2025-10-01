import heroImage from "@/assets/hero-sweets.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-card-foreground mb-4">
            দেশের মিষ্টি
          </h2>
          <p className="text-muted-foreground text-lg">
            Traditional Bengali sweets made with love and authentic recipes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
