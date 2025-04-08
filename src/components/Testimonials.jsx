import { Building2, HeartPulse, Shield, Briefcase, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { text: "There's always something more to learn from these youngsters. I have seen them handle projects very efficiently and realized the potential they hold. Age is really just a number for them! Their team spirit, expertise, project delivery, adherence to timelines, professional etiquettes and leadership has left me speechless. All the best leaders of tomorrow!", industry: "Manufacturing", icon: Building2, color: "violet" },
    { text: "Within two months of delivering our first project audited by Vulenris, we received 4 more projects through the same client. Their apt security consultancy, prompt and accurate IT security service, gave us the confidence to partner with Vulenris. Soon, we connected with Mandar's team on strategic fronts and this helped us immensely in penetrating the Cyber Security market in Middle East.", industry: "Consultancy", icon: Briefcase, color: "blue" },
    { text: "We are now associated with Vulenris for the last two years for security services. I found them extremely professional and very accommodating. Their understanding and positioning of services in Cyber Security is outstanding. In particular, my wavelength instantly synced with Aishwarya, who stands out in this male-dominated industry with her proficiency in cyber security.", industry: "CyberSecurity", icon: Shield, color: "red" },
    { text: "Our journey truly began when we got our first HIPAA Audit conducted by Vulenris when our product was in an early stage. We received tremendous support and handholding to define and maintain the security posture of not just our product, but also our entire organization. Vulenris team has been very cooperative and continue to be on our speed dial for all security.", industry: "Healthcare", icon: HeartPulse, color: "cyan" },
  ];

  return (
    <div className="flex flex-col gap-3 py-10 max-w-2/3 mx-auto border-t">
      <h2 className="text-4xl text-center font-bold">
        Don't take our word for it! <br />
        See what our clients say
      </h2>
      <p className="text-md text-muted-foreground text-center max-w-xl mx-auto">
        Discover what professionals from Healthcare, Manufacturing,
        Cybersecurity, and more have to say about collaborating with us.
      </p>
      <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`col-span-${index === 1 || index === 2 ? '3' : '2'} border rounded-lg p-6 bg-gradient-to-br from-${testimonial.color}-500 to-${testimonial.color}-800 dark:to-${testimonial.color}-950 text-white relative ${index === 1 ? 'place-self-end' : index === 2 ? 'place-self-start' : ''}`}>
            <div className="text-justify">
              <Quote className="absolute -bottom-2 right-2 w-24 h-24 opacity-15 rotate-12" />
              {`"${testimonial.text}"`}
              <div className="flex items-center gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg transition-all duration-300 hover:bg-white/20">
                  <testimonial.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{testimonial.industry}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
