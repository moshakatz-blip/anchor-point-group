import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver exceptional results through meticulous planning, attention to detail, and commitment to quality in every project.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices in all our business relationships and operations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in partnering closely with our clients, understanding their needs, and working as an extension of their team.'
    }
  ];

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
                Building Operations,{' '}
                <span className="text-primary">Building Success</span>
              </h1>
              <p className="font-paragraph text-xl text-foreground/80 max-w-2xl">
                Anchor Point Group was founded on a simple belief: every business deserves 
                operational excellence. We transform the chaos of growth into organized, 
                efficient systems that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/contact">
                    Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/services">View Services</Link>
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
                src="https://static.wixstatic.com/media/aa11aa_f609c4d77df8484dacf173e705d8553c~mv2.png?id=about-hero"
                alt="Anchor Point Group team collaborating on business operations strategy"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://static.wixstatic.com/media/aa11aa_70b4e4f6fbf14722bf71dd2634b8bbc7~mv2.png?id=about-story"
                alt="Anchor Point Group office and operations center"
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
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground">
                Our Story
              </h2>
              <p className="font-paragraph text-lg text-foreground/80">
                Anchor Point Group was born from a frustration we witnessed repeatedly: 
                talented entrepreneurs and business owners struggling with the operational 
                side of their growth. They had great products and services, but the logistics, 
                layout, staffing, and systems were holding them back.
              </p>
              <p className="font-paragraph text-lg text-foreground/80">
                We decided to change that. By bringing together experts in retail operations, 
                warehouse management, logistics, and business systems, we created a team that 
                could handle every moving part of a business launch or expansion.
              </p>
              <p className="font-paragraph text-lg text-foreground/80">
                Today, we've helped dozens of businesses across retail, commercial, and 
                warehouse sectors streamline their operations and achieve sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Our Mission & Vision
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              We're committed to transforming how businesses approach operations and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl text-foreground">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-paragraph text-lg text-foreground/80">
                    To empower businesses with end-to-end operational solutions that transform 
                    complexity into clarity, enabling them to focus on growth while we handle 
                    the details that matter.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl text-foreground">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-paragraph text-lg text-foreground/80">
                    To be the trusted operational partner for businesses nationwide, known for 
                    turning ambitious visions into smoothly running, profitable operations that 
                    scale sustainably.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="pt-8">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-heading text-2xl text-foreground mb-4 text-center">
                        {value.title}
                      </h3>
                      <p className="font-paragraph text-foreground/70 text-center">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground">
                Why Partner With Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Comprehensive Expertise
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      From layout design to software implementation, we handle every aspect 
                      of your operational needs under one roof.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Proven Track Record
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      We've successfully guided dozens of businesses through launches, 
                      relocations, and expansions with measurable results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Dedicated Partnership
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      We don't just deliver projects—we become an extension of your team, 
                      invested in your long-term success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      Ongoing Support
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      Our relationship doesn't end at launch. We provide continuous support 
                      and optimization to ensure sustained success.
                    </p>
                  </div>
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
                src="https://static.wixstatic.com/media/aa11aa_7325a647275d4cae94b591c94289d2a7~mv2.png?id=about-partnership"
                alt="Team collaboration and partnership in action"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
              Ready to Transform Your Operations?
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Let's discuss how Anchor Point Group can help you build the operational 
              foundation for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
