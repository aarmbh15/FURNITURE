import React from 'react';

const OfferSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -ml-20 mt-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -mr-20 mb-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Exclusive Season Sale is <span className="text-blue-400">Live Now!</span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Upgrade your toolkit with our premium features. Don't miss out on this 
              limited-time opportunity to scale your business faster.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <button className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all">
                Claim Offer
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                View Terms <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Offer Card */}
          <div className="relative flex items-center justify-center">
            <div className="group relative rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:ring-white/20 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <span className="rounded-full bg-blue-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  Limited Time
                </span>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-7xl font-bold tracking-tight text-white">20%</span>
                  <span className="text-3xl font-semibold text-gray-400 uppercase">Off</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Use code <span className="font-mono font-bold text-white bg-gray-800 px-2 py-1 rounded">SAVE20</span> at checkout.
                </p>
                
                {/* Visual Divider */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-500/50 to-transparent"></div>
                
                <p className="mt-8 text-xs text-gray-500 italic">
                  *Offer valid on all annual plans until the end of the month.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfferSection;