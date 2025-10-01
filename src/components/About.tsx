import aboutImage from "@/assets/about-sweets.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-12">
            <h3 className="text-4xl md:text-5xl font-bold font-bengali text-primary-foreground mb-6">
              দেশের মিষ্টি
            </h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Bringing you the authentic taste of traditional Bengali sweets, crafted with
              love and care. Our recipes have been passed down through generations,
              ensuring every bite takes you back to the rich culinary heritage of Bengal.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <p className="text-muted-foreground mb-6">
                We are dedicated to preserving the authentic flavors of Bengali
                confectionery. Each sweet is made using traditional methods and the finest
                ingredients, ensuring that every customer experiences the true essence of
                deshi mishti.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-card-foreground mb-4">
                Made With Love
              </h4>
              <div className="flex gap-4 items-start">
                <img
                  src={aboutImage}
                  alt="Traditional Bengali Sweets"
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <p className="text-muted-foreground text-sm">
                  Our commitment to quality and tradition means that every sweet is made
                  with care and attention to detail. We believe in preserving the cultural
                  heritage while ensuring the highest standards of taste and freshness.
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
