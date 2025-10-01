import aboutImage from "@/assets/about-baking.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-foreground mb-12">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-12">
            <h3 className="text-4xl md:text-5xl font-bold font-display text-primary-foreground mb-6">
              Sweet Delights
            </h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Where passion meets perfection in every slice. For over a decade, we've been 
              creating beautiful custom cakes and pastries that make your special moments 
              unforgettable. Each creation is a labor of love, handcrafted with premium 
              ingredients and artistic dedication.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <p className="text-muted-foreground mb-6">
                We believe that a great cake is more than just dessert—it's a centerpiece 
                of celebration, a work of art, and a memory in the making. From intimate 
                birthday parties to grand wedding receptions, we pour our hearts into every 
                creation.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold font-display text-card-foreground mb-4">
                Baked Fresh Daily
              </h4>
              <div className="flex gap-4 items-start">
                <img
                  src={aboutImage}
                  alt="Artisan Cake Decorating"
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <p className="text-muted-foreground text-sm">
                  Our commitment to quality means using only the finest ingredients—real butter, 
                  pure vanilla, Belgian chocolate, and fresh seasonal fruits. Every cake is made 
                  to order, ensuring maximum freshness and flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
