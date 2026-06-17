export default function ImportExportLanding() {
  const services = [
    "Import Management",
    "Export Solutions",
    "Customs Clearance",
    "Freight Forwarding",
    "Supply Chain Management",
    "Trade Documentation",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">
            GlobalTrade
          </h1>

          <div className="hidden md:flex gap-8 text-slate-600">
            <a href="/">Services</a>
            <a href="/">Industries</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>

          <button className="bg-slate-900 text-white px-5 py-2 rounded-xl">
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Trusted International Trade Partner
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Connecting Businesses To
              <span className="text-blue-700"> Global Markets</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Streamline imports, exports, logistics, customs compliance,
              and international trade operations through one reliable
              global partner.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-slate-900 text-white px-7 py-3 rounded-xl">
                Start Trading
              </button>

              <button className="border border-slate-300 px-7 py-3 rounded-xl">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">80+</h3>
                <p className="text-slate-500">Countries</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">12K+</h3>
                <p className="text-slate-500">Shipments</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                <p className="text-slate-500">Partners</p>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div>
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200"
                alt="Global Trade"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Comprehensive Trade Solutions
            </h2>

            <p className="text-slate-600 mt-4">
              Everything needed to grow internationally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service}
                </h3>

                <p className="text-slate-600 mt-4">
                  Professional solutions tailored for international
                  businesses and global supply chains.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Process */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              How Global Trade Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Request Consultation",
              "Plan Shipment",
              "Customs Processing",
              "Global Delivery",
            ].map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-700 font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-lg">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready To Expand Internationally?
          </h2>

          <p className="mt-5 text-slate-300 text-lg">
            Grow your business with trusted import-export experts.
          </p>

          <button className="mt-8 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-slate-500">
        © 2026 GlobalTrade Solutions
      </footer>
    </div>
  );
}