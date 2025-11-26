import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              Let's Build Something Great Together
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 max-w-4xl mx-auto">
              Ready to streamline your operations? Get in touch with our team to discuss 
              how we can help transform your retail, commercial, or warehouse operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-3xl text-foreground">
                    Start Your Project
                  </CardTitle>
                  <CardDescription className="font-paragraph text-foreground/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="font-heading text-2xl text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="font-paragraph text-foreground/70">
                        We've received your message and will get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-paragraph text-foreground">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="border-gray-300 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-paragraph text-foreground">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="border-gray-300 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-paragraph text-foreground">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="border-gray-300 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="font-paragraph text-foreground">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="border-gray-300 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serviceType" className="font-paragraph text-foreground">
                          Service Type *
                        </Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                          <SelectTrigger className="border-gray-300 focus:border-primary">
                            <SelectValue placeholder="Select a service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retail">Retail Operations</SelectItem>
                            <SelectItem value="commercial">Commercial Solutions</SelectItem>
                            <SelectItem value="warehouse">Warehouse Management</SelectItem>
                            <SelectItem value="planning">Planning & Design</SelectItem>
                            <SelectItem value="logistics">Logistics Coordination</SelectItem>
                            <SelectItem value="staffing">Staffing Solutions</SelectItem>
                            <SelectItem value="software">Software Implementation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-paragraph text-foreground">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your project, timeline, and specific requirements..."
                          rows={5}
                          required
                          className="border-gray-300 focus:border-primary"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div>
                <h2 className="font-heading text-3xl text-foreground mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Phone</h3>
                      <p className="font-paragraph text-foreground/70">(347) 475-2238</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Email</h3>
                      <p className="font-paragraph text-foreground/70">mail@anchorpointgroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Business Hours</h3>
                      <p className="font-paragraph text-foreground/70">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Service Areas</h3>
                      <p className="font-paragraph text-foreground/70">
                        Nationwide service with local expertise in major metropolitan areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <Image
                  src="https://static.wixstatic.com/media/aa11aa_70b4e4f6fbf14722bf71dd2634b8bbc7~mv2.png?id=contact-blocks"
                  alt="Colorful building blocks and structural elements representing business operations"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Why Choose Us */}
              <Card className="bg-light-blue border-none">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-foreground">
                    Why Choose Anchor Point Group?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-paragraph text-foreground">Expert team with proven track record</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-paragraph text-foreground">End-to-end project management</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-paragraph text-foreground">Customized solutions for your needs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-paragraph text-foreground">Ongoing support and optimization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Ready to Get Started?
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Don't let operational challenges hold you back. Contact us today and let's discuss 
              how we can streamline your business for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:(347) 475-2238">Call Now: (347) 475-2238</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="mailto:mail@anchorpointgroup.com">Send Email</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}