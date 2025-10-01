import { Card, CardContent } from "./ui/card";
import chocolateCake from "@/assets/chocolate-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import redVelvet from "@/assets/red-velvet.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import fruitTart from "@/assets/fruit-tart.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import cookiesBrownies from "@/assets/cookies-brownies.jpg";
import macarons from "@/assets/macarons.jpg";

const products = [
  { name: "Chocolate Birthday Cake", image: chocolateCake },
  { name: "Wedding Cake", image: weddingCake },
  { name: "Red Velvet Cake", image: redVelvet },
  { name: "Cupcakes", image: cupcakes },
  { name: "Fruit Tart", image: fruitTart },
  { name: "Cheesecake", image: cheesecake },
  { name: "Cookies & Brownies", image: cookiesBrownies },
  { name: "Macarons", image: macarons },
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Our Delicious Creations
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Every cake is crafted with premium ingredients and decorated with care. 
            From birthdays to weddings, we create beautiful moments that taste as amazing as they look.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="text-center font-semibold text-card-foreground">
                    {product.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
