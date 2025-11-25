import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Store, 
  Building2, 
  Warehouse, 
  Layout, 
  Users, 
  Truck, 
  Settings, 
  PenTool,
  ArrowRight 
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-6xl text-foreground mb-6">
              Complete Solutions for Every Operation
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto">
              From initial planning to final implementation, we provide comprehensive services 
              that streamline your retail, commercial, and warehouse operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          {/* Retail Operations */}
          <motion.div
            id="retail"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mr-4">
                    <Store className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading text-4xl text-foreground">Retail Operations</h2>
                </div>
                <p className="font-paragraph text-lg text-foreground/80 mb-8">
                  Opening, relocating, or expanding your retail space? We handle every detail 
                  from layout design to shelving setup, ensuring your store operates at peak efficiency 
                  from day one.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Layout className="h-5 w-5 text-primary" />
                    <span className="font-paragraph text-foreground">Store Layout Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PenTool className="h-5 w-5 text-primary" />
                    <span className="font-paragraph text-foreground">Fixture Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="font-paragraph text-foreground">Equipment Setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-paragraph text-foreground">Staff Training</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/contact">
                    Start Your Retail Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://static.wixstatic.com/media/aa11aa_1a0f72df4eba4032818e2452369ae8d7~mv2.jpg"
                  alt="3D illustration of a modern retail store with colorful design elements"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Commercial Solutions */}
          <motion.div
            id="commercial"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="https://static.wixstatic.com/media/aa11aa_aa3e6019d62046c0a623498728bdcd38~mv2.jpg"
                  alt="3D illustration of computer monitor with gears representing operational workflows"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-lg mr-4">
                    <Building2 className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="font-heading text-4xl text-foreground">Commercial Solutions</h2>
                </div>
                <p className="font-paragraph text-lg text-foreground/80 mb-8">
                  Get started on stronger footing with our comprehensive planning and implementation 
                  services. We help you build operational workflows that scale with your business growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Layout className="h-5 w-5 text-secondary" />
                    <span className="font-paragraph text-foreground">Workflow Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-secondary" />
                    <span className="font-paragraph text-foreground">Software Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-secondary" />
                    <span className="font-paragraph text-foreground">Team Coordination</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PenTool className="h-5 w-5 text-secondary" />
                    <span className="font-paragraph text-foreground">Process Optimization</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link to="/contact">
                    Explore Commercial Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Warehouse Management */}
          <motion.div
            id="warehouse"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-color/10 rounded-lg mr-4">
                    <Warehouse className="h-8 w-8 text-brand-color" />
                  </div>
                  <h2 className="font-heading text-4xl text-foreground">Warehouse Management</h2>
                </div>
                <p className="font-paragraph text-lg text-foreground/80 mb-8">
                  Bring order to every inch with our warehouse planning and inventory systems. 
                  We coordinate logistics that turn your operations into well-oiled machines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Layout className="h-5 w-5 text-brand-color" />
                    <span className="font-paragraph text-foreground">Space Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-brand-color" />
                    <span className="font-paragraph text-foreground">Logistics Coordination</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-brand-color" />
                    <span className="font-paragraph text-foreground">Inventory Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-brand-color" />
                    <span className="font-paragraph text-foreground">Staff Training</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-brand-color hover:bg-brand-color/90 text-primary-foreground">
                  <Link to="/contact">
                    Optimize Your Warehouse <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://static.wixstatic.com/media/aa11aa_ada7eb9ff939431f9a481b4303620693~mv2.jpg"
                  alt="3D illustration of a forklift with boxes representing warehouse operations"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Every aspect of your operation covered by our expert team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Planning & Design",
                description: "Strategic layout planning and design coordination for optimal space utilization and workflow efficiency.",
                icon: Layout,
                delay: 0.1
              },
              {
                title: "Logistics Coordination",
                description: "End-to-end logistics management ensuring smooth operations from setup to daily workflows.",
                icon: Truck,
                delay: 0.2
              },
              {
                title: "Staffing Solutions",
                description: "Comprehensive staffing services including recruitment, training, and ongoing support.",
                icon: Users,
                delay: 0.3
              },
              {
                title: "Software Implementation",
                description: "Integration of operational software systems and training for maximum efficiency.",
                icon: Settings,
                delay: 0.4
              },
              {
                title: "Setup Coordination",
                description: "Complete setup coordination from fixtures to equipment installation and testing.",
                icon: PenTool,
                delay: 0.5
              },
              {
                title: "Ongoing Support",
                description: "Continuous support and optimization to ensure your operations run smoothly long-term.",
                icon: ArrowRight,
                delay: 0.6
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-paragraph text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Transform Your Operations?
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can streamline your retail, commercial, or warehouse operations 
              for maximum efficiency and growth.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}