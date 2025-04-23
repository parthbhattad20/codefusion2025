import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Impact() {
  const cards = [
    {
      title: "Reduced Compliance Risk for Global Healthcare Organization",
      description:
        "A healthcare client operating in the Middle East needed HIPAA compliance training. Newtons Apple built a scalable program and provided continuous support.",
      result: "Result: Improved HIPAA awareness and reduced risk across current and future employees.",
      color: "cyan",
      image: "/assets/Impact/health_1.png",
    },
    {
      title: "Strengthened Security for Leading Manufacturing Company",
      description:
        "A major Indian manufacturer partnered with us for a deep IT asset assessment, revealing critical vulnerabilities. Our long-term engagement introduced regular testing and patch management.",
      result: "Result: Significant improvement in cybersecurity maturity, enabling focus on core business.",
      color: "yellow",
      image: "/assets/Impact/manufacture.jpg",
    },
    {
      title: "PII & IP Protection for Leading EdTech Company",
      description:
        "We secured both web and mobile e-learning platforms handling sensitive PII. Custom privacy policies and content protection protocols were implemented.",
      result: "Result: Trusted learning environment with secure user data and trainer IP protection.",
      color: "pink",
      image: "/assets/Impact/edtech.png",
    },
    {
      title: "Security Overhaul for IoT Solutions Provider",
      description:
        "An IoT company faced mounting threats. We performed a full security audit and introduced a robust vulnerability management program.",
      result: "Result: Safer products and stronger client confidence through proactive cybersecurity.",
      color: "emerald",
      image: "/assets/Impact/iot.jpg",
    },
    {
      title: "Resilience Recovery for Financial Institution",
      description:
        "After a cyberattack, we executed a full forensic audit and implemented a defense-in-depth model with continuous testing.",
      result: "Result: Fast recovery, hardened security, and better breach prevention posture.",
      color: "red",
      image: "/assets/Impact/fintech.png",
    },
  ];

  return (
    <section className="mb-16 px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">
        Impact Delivered
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[300px]`}
          >
            <CardHeader className="flex flex-col items-center">
              <div className="w-50 h-50 rounded-md overflow-hidden bg-white mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-xl font-semibold text-center">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 font-secondary">{card.description}</p>
              <p className={`text-sm font-medium`}>
                {card.result}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
