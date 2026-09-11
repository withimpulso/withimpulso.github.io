import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
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
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Thank you!
            </motion.h1>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed"
            >
              We've received your message and appreciate you reaching out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
            >
              Our team will review your inquiry and get back to you within one business day. 
              In the meantime, we've sent a confirmation email to your inbox.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-3 h-auto text-base font-semibold"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/trainings">
                <Button
                  className="w-full sm:w-auto px-8 py-3 h-auto text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Explore Trainings
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-surface rounded-lg p-8 border border-border"
            >
              <h2 className="font-serif text-lg md:text-xl text-foreground mb-4">
                What happens next?
              </h2>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground text-left">
                <li className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">1</span>
                  <span>Check your email for a confirmation message from our team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">2</span>
                  <span>Our experts will carefully review your inquiry</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">3</span>
                  <span>We'll reach out within one business day with next steps</span>
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

export default ThankYouPage;
