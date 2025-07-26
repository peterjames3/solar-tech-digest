import TestimonialScroller from "./testimonial-scroller";
import FloatingElements from "@/app/NativeComponents/animation/floating-element";
const topRowTestimonials = [
  {
    name: "Paul H",
    location: "Kisumu, Kenya",
    date: "15 Jan, 2025",
    rating: 5,
    content:
      "I installed the Jinko solar panels last year and I love how they handle cloudy weather. My power bills have dropped significantly!",
  },
  {
    name: "Angela P",
    location: "Thika, Kenya",
    date: "03 Jan, 2025",
    rating: 5,
    content:
      "My Must inverter switches seamlessly to backup without delay. It powers my fridge and TV reliably during blackouts.",
  },
  {
    name: "Kevin M",
    location: "Nakuru, Kenya",
    date: "01 Jan, 2025",
    rating: 5,
    content:
      "I’ve used the Solinc 150Ah tubular batteries and they hold charge overnight. Ideal for off-grid setups in rural areas.",
  },
  {
    name: "Regina H",
    location: "Machakos, Kenya",
    date: "30 Apr, 2024",
    rating: 5,
    content:
      "I’m impressed with the Canadian Solar panels—great efficiency even with partial shade. My water pump runs all day now.",
  },
];
const bottomRowTestimonials = [
  {
    name: "Sandra K",
    location: "Kitengela, Kenya",
    date: "15 Dec, 2024",
    rating: 5,
    content:
      "Installed a Luminous lithium battery system—charges fast and takes me through the whole night on a single cycle!",
  },
  {
    name: "Derrick J",
    location: "Naivasha, Kenya",
    date: "28 Nov, 2024",
    rating: 4,
    content:
      "I paired a Growatt inverter with my solar system. It’s quiet, reliable, and the LCD display makes monitoring so easy.",
  },
  {
    name: "Beatrice M",
    location: "Nyeri, Kenya",
    date: "12 Oct, 2024",
    rating: 5,
    content:
      "The Exide tubular batteries are robust—have lasted 2 years with no issues. They run my home lighting and freezer daily.",
  },
  {
    name: "Tunde L",
    location: "Eldoret, Kenya",
    date: "05 Sep, 2024",
    rating: 5,
    content:
      "I use the Fronius inverter for my hybrid solar setup. Great battery integration and I can monitor usage via the app!",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-16 relative ">
      <section className="wrapper ">
        <h2 className="text-center text-2xl font-bold mb-10">
          Consumer reviews on various products they have interacted with
        </h2>

        <div className="space-y-10">
          <TestimonialScroller
            testimonials={topRowTestimonials}
            direction="right"
          />
          <TestimonialScroller
            testimonials={bottomRowTestimonials}
            direction="left"
          />
        </div>
      </section>
      <FloatingElements />
    </div>
  );
}
