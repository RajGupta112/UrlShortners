import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Marketing Manager",
    text: "Linklytics has helped me streamline my link-sharing process. It’s so much easier now to track and share my URLs.",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Content Creator",
    text: "I love how Linklytics lets me personalize links for social media. My audience loves it!",
    photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
  },
  {
    id: 3,
    name: "Paul Green",
    role: "Small Business Owner",
    text: "As a small business owner, I need tools that make my life easier. Linklytics does just that!",
    photo: "https://images.pexels.com/photos/6829574/pexels-photo-6829574.jpeg",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Digital Marketer",
    text: "The analytics and ease of use are unbeatable. I’ve already recommended Linklytics to my entire team!",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: 5,
    name: "Carlos Rivera",
    role: "Blogger",
    text: "Linklytics saves me tons of time and looks super clean. Love the custom short links!",
    photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    id: 6,
    name: "Emily Watson",
    role: "Influencer",
    text: "The ability to track clicks and customize the look of my links is just perfect with Linklytics.",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
];

const TestimonialSection = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials]; // Infinite loop effect

  return (
    <section className="bg-black py-10 px-4 overflow-hidden relative">
      <h2 className="text-3xl font-bold text-center text-white mb-8">What Our Users Say</h2>

      {/* Blur Masks */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Infinite Scroll */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[300px] sm:w-[350px] md:w-[380px] lg:w-[350px] xl:w-[380px] min-w-[250px] h-[280px] sm:h-[320px] md:h-[350px] bg-zinc-900 p-6 rounded-xl border border-gray-700 
              shadow-2xl hover:shadow-indigo-500/50 transition-shadow duration-300 ease-in-out 
              flex flex-col items-center justify-center text-center"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <blockquote className="italic text-sm text-gray-200 mb-3">
                "{testimonial.text}"
              </blockquote>
              <p className="text-lg font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
