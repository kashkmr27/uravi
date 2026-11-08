import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Card with subtle gradient border/glow */}
          <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-r from-accent via-primary to-accent shadow-2xl overflow-hidden group">
            {/* Ambient background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

            <div className="relative rounded-[23px] bg-[#14141F] p-8 md:p-12 flex flex-col items-center text-center">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl md:text-2xl lg:text-[1.75rem] font-medium text-foreground leading-relaxed md:leading-normal max-w-2xl mb-8">
                &ldquo;Working with Uravi on our recent website update was a game changer! 5 Stars, tech team is solid, and our union&apos;s UX/UI is much easier to navigate and use.&rdquo;
              </blockquote>

              {/* Reviewer Details + Action */}
              <div className="w-full flex items-center justify-between pt-6 border-t border-white/10">
                <div className="text-left">
                  <div className="text-accent font-semibold text-sm tracking-wide uppercase">
                    Client Review
                  </div>
                  <div className="text-muted-foreground text-xs md:text-sm">
                    GMB Union Website Redesign
                  </div>
                </div>

                <Link
                  to="/casestudies/gmb-website-redesign"
                  className="w-11 h-11 rounded-full bg-accent/90 hover:bg-accent text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md group/btn"
                  aria-label="View GMB Case Study"
                >
                  <ArrowUpRight size={20} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
