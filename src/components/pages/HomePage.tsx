import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Warehouse, Store } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-light-blue overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-[120rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight">
                Streamlining Operations,{' '}
                <span className="text-primary">Delivering Results</span>
              </h1>
              <p className="font-paragraph text-xl text-foreground/80 max-w-2xl">
                Whatever stage you're in, we help build your operation the right way. 
                Layout & design, shelving setup, logistics, software - we handle the details 
                so you can handle the growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/services">
                    Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="https://static.wixstatic.com/media/aa11aa_7f012ba9e82e4abc9a93a05a5f5164e8~mv2.png?id=hero-retail-store"
                alt="Modern retail store interior with shelving, bright lighting, and professional layout design"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
              Comprehensive Solutions for Every Operation
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              From planning to execution, we provide end-to-end services that transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Retail Operations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Retail Operations</h3>
              <p className="font-paragraph text-foreground/70 mb-6">
                Opening, relocating, or expanding your retail space? We handle layout design, 
                shelving setup, and operational workflows to maximize efficiency.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/services#retail">Learn More</Link>
              </Button>
            </motion.div>

            {/* Commercial Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-lg mb-6">
                <Building2 className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Commercial Solutions</h3>
              <p className="font-paragraph text-foreground/70 mb-6">
                Get started on stronger footing with our comprehensive planning and implementation 
                services for commercial operations and workflows.
              </p>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                <Link to="/services#commercial">Learn More</Link>
              </Button>
            </motion.div>

            {/* Warehouse Management */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-brand-color/10 rounded-lg mb-6">
                <Warehouse className="h-8 w-8 text-brand-color" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Warehouse Management</h3>
              <p className="font-paragraph text-foreground/70 mb-6">
                Bring order to every inch with our warehouse planning, inventory systems, 
                and logistics coordination that turns operations into well-oiled machines.
              </p>
              <Button asChild variant="outline" className="border-brand-color text-brand-color hover:bg-brand-color/10">
                <Link to="/services#warehouse">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-8">
                Hundreds of moving parts.
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-8">
                We handle every single one. Planning, design, fixtures, logistics, 
                staffing, software — all under one expert team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-paragraph text-foreground">Layout & Design Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-paragraph text-foreground">Fixtures & Equipment Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-paragraph text-foreground">Logistics Coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-paragraph text-foreground">Staffing & Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-paragraph text-foreground">Software Implementation</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://static.wixstatic.com/media/aa11aa_7325a647275d4cae94b591c94289d2a7~mv2.png?id=process-logistics"
                alt="Logistics and warehouse operations with conveyor belt system and organized inventory management"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Image
                src="https://static.wixstatic.com/media/aa11aa_f609c4d77df8484dacf173e705d8553c~mv2.png?id=operations-workflow"
                alt="Business operations workflow diagram with gears and process optimization visualization"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-8">
                The calm instead of the storm.
              </h2>
              <p className="font-paragraph text-lg text-foreground/80 mb-8">
                Anchor Point Group brings order to every inch. From layout planning to inventory 
                systems and training, we turn operations into well-oiled machines.
              </p>
              <p className="font-paragraph text-lg text-foreground/80 mb-8">
                So your business doesn't just open. It opens smoothly.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem] text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-primary-foreground mb-6">
              You're only as strong as your setup.
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              We structure retail, commercial, and warehouse operations for maximum efficiency. 
              Design coordination, inventory systems, staff onboarding — you name it, we manage it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/services">View All Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}