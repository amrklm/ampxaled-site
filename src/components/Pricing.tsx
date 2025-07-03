export default function Pricing7() {
  return (







    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20  text-center">
        <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element animate-fade-in">Simple pricing for everyone</h2>
        <p className="section-subtitle mx-auto opacity-0 fade-in-element animate-fade-in text-base">
          Choose a plan that works for you and your team.

        </p>

        <div className=" text-orange-500 border-orange-500 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto rounded-2xl shadow-lg p-6">
                    {/* Plan Card */}
          {[
            {
              name: "Starter",
              price: "$12",
              desc: "Perfect for solo users",
              features: ["1 project", "Basic analytics", "Email support"],
              featured: true,
            
            },
            {
              name: "Pro",
              price: "$24",
              desc: "For growing teams",
              features: ["Up to 10 projects", "Advanced analytics", "Priority support"],
              featured: true,
            },
            {
              name: "Enterprise",
              price: "$49",
              desc: "Best for large companies",
              features: ["Unlimited projects", "Custom integrations", "Dedicated manager"],
              featured: false,
            },
          ].map((plan) => (
            // here to animate plan card seprate yastaaaaa
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-md transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50 ${
                plan.featured
                  ? "bg-[--card] border-[--primary] text-[--primary-foreground]"
                  : "bg-[--muted] border-[--border]"
              }`}
            >
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <ul className="space-y-2 text-left text-sm text-muted-foreground mb-6">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center">
                    <span className="mr-2">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 rounded-xl bg-[--primary] text-[--primary-foreground] hover:opacity-90 transition bg-black text-orange-500 border border-orange-500 font-medium hover:text-orange-500 hover:bg-white">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
