import { Card, CardContent } from "./ui/card";
import pataShondesh from "@/assets/pata-shondesh.jpg";
import roshogolla from "@/assets/roshogolla.jpg";
import malaiKari from "@/assets/malai-kari.jpg";
import rollShondesh from "@/assets/roll-shondesh.jpg";
import raghobShai from "@/assets/raghob-shai.jpg";
import kaloJaam from "@/assets/kalo-jaam.jpg";
import golapJaam from "@/assets/golap-jaam.jpg";
import dudhMalai from "@/assets/dudh-malai.jpg";

const products = [
  { name: "Pata Shondesh", image: pataShondesh },
  { name: "Special Roshogolla", image: roshogolla },
  { name: "Malai Kari", image: malaiKari },
  { name: "Roll Shondesh", image: rollShondesh },
  { name: "Raghob Shai", image: raghobShai },
  { name: "Kalo Jaam", image: kaloJaam },
  { name: "Golap Jaam", image: golapJaam },
  { name: "Dudh Malai", image: dudhMalai },
];

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Products
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Every care is taken to ensure the freshness of Mithai Sweets and keep the
            traditional taste. Buy best quality sweets and confectionary with deshi taste.
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
