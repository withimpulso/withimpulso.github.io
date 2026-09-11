import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Home, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <section className="flex-1 py-24 md:py-32 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                <AlertCircle className="w-12 h-12 text-red-500" />
              </div>
            </motion.div>

            {/* Error Code */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-6xl md:text-7xl lg:text-8xl text-foreground mb-4 font-bold"
            >
              404
            </motion.h1>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl text-foreground mb-4"
            >
              Page Not Found
            </motion.h2>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed"
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
            >
              Requested path: <code className="bg-surface px-3 py-1 rounded text-sm font-mono">{location.pathname}</code>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link to="/">
                <Button
                  className="w-full sm:w-auto px-8 py-3 h-auto text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-3 h-auto text-base font-semibold"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </Link>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-surface rounded-lg p-8 border border-border"
            >
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-6">
                Looking for something?
              </h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <Link to="/" className="text-accent hover:underline flex items-center gap-2 justify-center">
                    Home
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link to="/trainings" className="text-accent hover:underline flex items-center gap-2 justify-center">
                    Explore Trainings
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-accent hover:underline flex items-center gap-2 justify-center">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
