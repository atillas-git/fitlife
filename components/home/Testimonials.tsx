'use client'
import { Card,Avatar, CardHeader, CardBody } from '@nextui-org/react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1615418674317-2b3674c2b287?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "FitLife has revolutionized how I connect with clients and share my workout plans. Highly recommended!"
    },
    {
      name: "Jane Smith",
      role: "Nutritionist",
      image: "https://images.unsplash.com/photo-1546029029-75c0ba113405?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "The meal plans I create reach a wider audience thanks to FitLife. It's an incredible platform for professionals like me."
    }
  ];

  return (
    <section className="py-20 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-zinc-800">What Experts Say About FitLife</h3>
          <p className="text-zinc-600">Hear from personal trainers and nutritionists who love using FitLife.</p>
        </div>
        <div className='grid grid-cols-12 justify-center gap-3'>
          {testimonials.map((testimonial, index) => (
            <div className='col-span-12 sm:col-span-6' key={index}>
              <Card className="bg-zinc-50 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                    <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        size="lg"
                        className="mb-4"
                    />
                  <p className="text-zinc-800 font-semibold">{testimonial.name}</p>
                  <p className="text-zinc-600">{testimonial.role}</p>
                </CardHeader>
                <CardBody className="text-center">
                  <p className="text-zinc-700">{testimonial.testimonial}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;