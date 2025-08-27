// pages/veu-rebates.jsx
import Head from "next/head";

export default function VEURebates() {
  return (
    <>
      <Head>
        <title>VEU Rebates — GreenLine Energy | Save on Efficient Heating & Cooling</title>
        <meta
          name="description"
          content="GreenLine Energy helps Victorian households access VEU rebates for efficient reverse-cycle heating and cooling. Fast eligibility checks, accredited install, up-front rebates."
        />
      </Head>

      <section id="veu-rebates" className="min-h-screen bg-black text-[#32CD32]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
            Victorian Energy Upgrades (VEU) Rebates — GreenLine Energy
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6 bg-[#008000]">
              <h2 className="text-xl font-semibold text-white">What is the VEU program?</h2>
              <p className="mt-3 text-white/90">
                The Victorian Energy Upgrades (VEU) scheme helps Victorians cut bills and emissions with rebates for
                upgrading to high-efficiency heating and cooling. GreenLine handles eligibility checks, product selection,
                installation, and compliance so you maximise savings.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/90">
                <li>Replace old gas heating with reverse-cycle</li>
                <li>Upgrade ageing splits to high-efficiency models</li>
                <li>Optimise existing systems for better performance</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-[#008000]">
              <h2 className="text-xl font-semibold text-white">Who’s eligible?</h2>
              <ul className="mt-3 space-y-2 text-white/90">
                <li>All Victorian households (no income test)</li>
                <li>Property is 2+ years old</li>
                <li>Replacing/upgrading an existing system</li>
              </ul>
              <p className="mt-3 text-xs text-white/70">
                Note: Commercial premises, schools, and places of worship are currently ineligible.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 p-6 bg-[#008000]">
            <h2 className="text-xl font-semibold text-white">Indicative Rebate Ranges</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] table-fixed border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-left text-sm text-white/80">
                    <th className="rounded-l-xl bg-white/5 px-4 py-3">Replacement Path</th>
                    <th className="rounded-r-xl bg-white/5 px-4 py-3">Rebate (AUD)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["Gas ducted → Reverse-cycle ducted", "$1,000 – $4,000"],
                    ["Gas ducted → Reverse-cycle multi-split", "$1,000 – $3,500"],
                    ["Gas space heater → Reverse-cycle multi-split", "$900 – $2,000"],
                    ["Old split → New reverse-cycle split", "$200 – $500"],
                  ].map(([path, amount]) => (
                    <tr key={path} className="text-white/90">
                      <td className="rounded-l-xl bg-white/5 px-4 py-3">{path}</td>
                      <td className="rounded-r-xl bg-white/5 px-4 py-3 font-semibold text-[#C8FFC8]">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-white/70">
              Final rebate depends on existing system, product efficiency, and site conditions. Applied up-front once
              eligibility is confirmed.
            </p>
            <div className="mt-5 flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2 font-bold bg-black text-[#32CD32] hover:bg-[#66FF66] hover:text-black focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
              >
                Book Free Eligibility Check
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2 font-bold border border-[#32CD32] text-[#32CD32] hover:bg-[#32CD32]/10"
              >
                Read FAQs
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6 bg-[#008000]">
              <h3 className="text-lg font-semibold text-white">How many claims per home?</h3>
              <p className="mt-2 text-white/90">Currently one upgrade per household.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 bg-[#008000]">
              <h3 className="text-lg font-semibold text-white">What happens next?</h3>
              <p className="mt-2 text-white/90">
                We verify eligibility, recommend the best high-rebate option, schedule installation, and complete
                compliance paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
