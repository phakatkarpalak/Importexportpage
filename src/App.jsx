export default function App() {
  const services = [
    {
      title: 'Import Management',
      description: 'Complete sourcing and import handling from suppliers worldwide.',
    },
    {
      title: 'Export Solutions',
      description: 'Expand into international markets with confidence.',
    },
    {
      title: 'Customs Clearance',
      description: 'Smooth regulatory compliance and documentation.',
    },
    {
      title: 'Freight Forwarding',
      description: 'Air, sea, and land transportation worldwide.',
    },
    {
      title: 'Supply Chain Management',
      description: 'Optimize global logistics and inventory flow.',
    },
    {
      title: 'Trade Documentation',
      description: 'Accurate paperwork and international compliance support.',
    },
  ];

  const stats = [
    { value: '80+', label: 'Countries Served' },
    { value: '12K+', label: 'Shipments Delivered' },
    { value: '500+', label: 'Global Partners' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <nav className="border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-950">GlobalTrade</h1>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Import / Export
            </p>
          </div>

          <div className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="rounded-xl bg-slate-950 px-5 py-2 text-white shadow-sm transition hover:bg-slate-800">
            Get Quote
          </button>
        </div>
      </nav>

      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Trusted Global Trade Partner
            </span>

            <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 lg:text-6xl">
              Connecting Businesses to
              <span className="text-blue-700"> Global Markets</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reliable import and export solutions helping businesses expand internationally through seamless logistics, compliance management, and global trade expertise.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-slate-950 px-6 py-3 font-medium text-white transition hover:bg-slate-800">
                Start Trading
              </button>

              <button className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl" />
            <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80"
              alt="Import export logistics"
              className="relative rounded-[2rem] shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
            />
          </div>
        </section>

        <section className="border-y bg-slate-50/90 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h2 className="text-4xl font-bold text-slate-950">{stat.value}</h2>
                <p className="mt-2 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">Our Services</h2>
            <p className="mt-4 text-slate-600">End-to-end international trade solutions.</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Process</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">How Global Trade Works</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                A simple operating model designed to move goods from plan to delivery with fewer surprises.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                'Request Consultation',
                'Plan Shipment',
                'Customs Processing',
                'Global Delivery',
              ].map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="bg-amber-50 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-slate-950">Ready to Expand Globally?</h2>
            <p className="mt-5 text-lg text-slate-700">
              Partner with experts in international trade and logistics.
            </p>
            <button className="mt-8 rounded-xl bg-slate-950 px-8 py-3 font-semibold text-white transition hover:bg-slate-800">
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t py-8 text-center text-sm text-slate-500">
        © 2026 GlobalTrade Solutions. All Rights Reserved.
      </footer>
    </div>
  );
}
