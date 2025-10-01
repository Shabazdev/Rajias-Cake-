import { ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-bold font-display text-primary-foreground">
            Sweet Delights
          </h1>
          <nav className="hidden md:flex gap-6">
            <a
              href="#home"
              className="text-primary-foreground hover:text-secondary-foreground transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-primary-foreground hover:text-secondary-foreground transition-colors font-medium"
            >
              Our Cakes
            </a>
            <a
              href="#about"
              className="text-primary-foreground hover:text-secondary-foreground transition-colors font-medium"
            >
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
