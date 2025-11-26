import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { ClientTestimonials } from '@/entities';

export default function ClientSuccessPage() {
  const [testimonials, setTestimonials] = useState<ClientTestimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { items } = await BaseCrudService.getAll<ClientTestimonials>('clienttestimonials');
        setTestimonials(items || []);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const renderStars = (rating: number | undefined) => {
    if (!rating) return null;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.round(rating || 0)
                ? 'fill-primary text-primary'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-6xl text-foreground mb-6">
              Client Success Stories
            </h1>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto">
              See how we've helped businesses streamline their operations and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-[100rem]">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-foreground/70">Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-foreground/70">No testimonials available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white shadow-lg h-full flex flex-col hover:shadow-xl transition-shadow">
                    {/* Client Image */}
                    {testimonial.clientImage && (
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={testimonial.clientImage}
                          alt={testimonial.clientName || 'Client'}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <CardContent className="pt-6 flex flex-col flex-grow">
                      {/* Rating */}
                      <div className="mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Testimonial Text */}
                      <p className="font-paragraph text-foreground/80 mb-6 flex-grow italic">
                        "{testimonial.testimonialText}"
                      </p>

                      {/* Client Info */}
                      <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-heading text-lg text-foreground">
                          {testimonial.clientName}
                        </h3>
                        {testimonial.company && (
                          <p className="font-paragraph text-sm text-primary font-medium">
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact by the Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction Rate' },
              { number: '15+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-heading text-5xl lg:text-6xl text-primary mb-2">
                  {stat.number}
                </div>
                <p className="font-paragraph text-lg text-foreground/70">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
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
              Why Clients Choose Anchor Point
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Our commitment to excellence and proven track record speak for themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our experienced professionals bring decades of combined expertise in operations management and business development.'
              },
              {
                title: 'Proven Results',
                description: 'We deliver measurable outcomes that directly impact your bottom line and operational efficiency.'
              },
              {
                title: 'End-to-End Solutions',
                description: 'From planning to execution, we handle every aspect of your project with meticulous attention to detail.'
              },
              {
                title: 'Dedicated Support',
                description: 'We partner with you throughout the entire process, ensuring your success is our success.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-foreground/70">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
