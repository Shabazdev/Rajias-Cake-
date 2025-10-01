import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold font-display text-primary-foreground mb-4">
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Cakes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Custom Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-display text-primary-foreground mb-4">
              Contact
            </h3>
            <p className="text-primary-foreground/80 mb-2">
              123 Baker Street, Sweet City
            </p>
            <p className="text-primary-foreground/80 mb-2">
              Phone: (555) 123-4567
            </p>
            <p className="text-primary-foreground/80">
              Email: hello@sweetdelights.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-display text-primary-foreground mb-4">
              Follow Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 font-display">
            © 2024 Sweet Delights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
