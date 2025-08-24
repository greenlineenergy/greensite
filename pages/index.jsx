Based on your request, I’ll apply the same styling as the “Why Upgrade?” and “Heating & Cooling - Key Features” sections to the “Rebates & Incentives,” “Product Options,” and “Rebates & Eligibility” sections within the “Hot Water Upgrades” and “Rebates & Eligibility” parts of the pages/index.jsx file. The styling will include a black background, white text, lime green accents, and a structured list with checkmarks (✅), while maintaining the existing box layout for these sections. I’ll update the full code accordingly.
Updated Main Landing Page (`pages/index.jsx`)
import Head from "next/head";

export default function Home() {
  return (
    <>
      
        
        
        
        
        
        
        
        
        
        
        
      
      
        {/* Banner */}
        
          
        
        {/* Header */}
        
          
            
              
                
                
              
              
                Why Upgrade
                Heating & Cooling
                Hot Water
                Rebates
                Process
                Contact
              
              
                
                  Heat Pump Offer
                
                
                  Get a Quote
                
              
            
          
        
        {/* Hero - Introduction */}
        
          
            
              
                VEU-Accredited Upgrades
              
              
                Take Advantage of Up to $9,900 in VEU Incentives
              
              
                Replace old gas heaters, air conditioners, or hot water systems with modern, energy-efficient technology to reduce bills, improve comfort, and cut emissions.
              
              
                
                  Get a Free Quote
                
                
                  Heat Pump Offer
                
              
              
                {[
                  ["Up to $9,900", "in Rebates*"],
                  ["Free Inspections", "Available"],
                  ["$1,010/yr", "Gas Heating Savings"],
                  ["Expert Team", "Fast Service"],
                ].map(([t, s], i) => (
                  
                    {t}
                    {s}
                  
                ))}
              
              
                *Savings vary by location, eligibility, and product. Contact for details.
              
            
            
              
                
                
                  Upgrade to a modern, efficient home.
                
              
            
          
        
        {/* Featured GIFs */}
        
          
            
              Featured Animations
            
            
              
                
                
Animation 1
              
              
                
                
Animation 2
              
              
                
                
Animation 3
              
              
                
                
Animation 4
              
            
          
        
        {/* Trust and Accreditation */}
        
          
            
            
            
              Licensed, Insured, and Committed to Excellence
            
          
        
        {/* Why Upgrade */}
        
          
            
              Why Upgrade?
            
            
              Program-Level Benefits
            
            
              
                ✅ Government Rebates Available
                Access rebates under the Victorian Energy Upgrades (VEU) program,
                making energy-efficient upgrades more affordable than ever.
              
              
                ✅ Long-Term Certainty
                The program is extended until 2045, giving homeowners rebates
                for decades to come.
              
              
                ✅ Save More Every Year
                • Up to $1,010 per year by replacing ducted gas.
                • Up to $370 per year by upgrading space heaters.
              
              
                ✅ Proven Impact
                Over 2.4 million Victorian homes already upgraded, cutting
                37 million tonnes of CO₂ between 2022–2027.
              
              
                ✅ Free Inspections & Quotes
                Enjoy no-obligation onsite inspections and tailored quotes —
                know exactly how much you can save.
              
            
            
              
                💡 Switch today with GreenLine Energy —
                reduce your bills and help the environment.
              
            
          
        
        {/* Heating & Cooling - Key Features */}
        
          
            
              Heating & Cooling - Key Features
            
            
              Modern Split Systems
            
            
              
                ✅ Energy Efficiency
                Reduces bills while maintaining comfort.
              
              
                ✅ 5 Fan Speeds
                From turbo cooling to a gentle breeze.
              
              
                ✅ Super Quiet Operation
                Whisper-quiet across all modes.
              
              
                ✅ Filter Cleaning Reminder
                Keeps indoor air fresh.
              
              
                ✅ 30-Second Fast Cooling
                Drops air from 27°C to 18°C.
              
              
                ✅ Ultra Inverter Compressor
                Efficient low-frequency operation.
              
              
                ✅ R32 Refrigerant
                Lower GWP, more efficient than R410.
              
              
                ✅ Silver Ion Filter
                Eliminates bacteria and fungi.
              
            
          
        
        {/* Product Options (Heating & Cooling) */}
        
          
            
              Product Options for Heating & Cooling
            
            
              {[
                {
                  title: "Emerald Split System",
                  body: "Reverse cycle (heating + cooling) with 360° full DC inverter.",
                  chips: "Advanced ducting & louver fin",
                  image: "/revcycair.jpeg",
                },
                {
                  title: "Avanti PLUS® Series",
                  body: "Platinum-grade, award-winning design with motion sensor.",
                  chips: "Clean Air Technology",
                  image: "/revcycair.jpeg",
                },
                {
                  title: "Rinnai T Series",
                  body: "Long-distance airflow with Wi-Fi & voice control.",
                  chips: "R32 refrigerant",
                  image: "/revcycair.jpeg",
                },
              ].map((card, i) => (
                
                  
                  
{card.title}
                  
{card.body}
                  
                    {card.chips}
                  
                
              ))}
            
          
        
        {/* Hot Water Upgrades */}
        
          
            
              Hot Water Upgrades
            
            
              
                
                  Rebates & Incentives
                
                
                  
                    ✅ Rebates up to $2,681
                    For electric upgrades.
                  
                  
                    ✅ $0 Product Cost
                    In some regions (e.g., Shepparton, Bendigo).
                  
                  
                    ✅ Electric Replacement Mandatory
                    From Mar 1, 2027.
                  
                
                
                  Emergency Service
                
                
                  
                    ✅ 48-Hour Replacement
                    (Metro Melbourne).
                  
                  
                    ✅ Save $2,000–$3,000
                    Vs. standard plumbing.
                  
                
              
              
                
                  Product Options
                
                
                  
                    ✅ Neopower Black® 260L
                    Wi-Fi, 6-yr warranty, 5 people.
                  
                  
                    ✅ Emerald Energy 270L/320L
                    Wi-Fi, 6-yr warranty.
                  
                  
                    ✅ EcoGenica Split
                    215L, 260L, 290L, 7-yr warranty.
                  
                
                
                  Includes 7-yr tank warranty, 12-month workmanship warranty, free recycling, and "install now, pay later" options.
                
              
            
          
        
        {/* Rebates & Eligibility */}
        
          
            
              Rebates & Eligibility
            
            
              
                Rebate Options
              
              
                
                  ✅ VEU Rebate
                  Home over 24 months old, replacing inefficient systems.
                
                
                  ✅ CER STCs
                  System must meet efficiency standards.
                
                
                  ✅ SolarVic Rebate
                  Income < $210K, home < $3M, system > 3 years old.
                
              
              
                Check Eligibility
              
            
          
        
        {/* Why Choose Accredited Providers */}
        
          
            
              Why Choose Accredited Providers
            
            
              
                
                  
                    
                    Tailored system selection for your needs
                  
                  
                    
                    High-quality products with frost protection
                  
                  
                    
                    Licensed VIC plumbers and electricians
                  
                  
                    
                    5-yr product + 2-yr labor warranty (heating/cooling)
                  
                
              
              
                
                  
                    
                    7-yr tank warranty (hot water)
                  
                  
                    
                    Over 15 years of expertise
                  
                  
                    
                    5 days standard install, 48 hrs emergency hot water
                  
                  
                    
                    4.9/5 Google reviews, VEU accredited
                  
                
              
            
          
        
        {/* Step-by-Step Process */}
        
          
            
              Step-by-Step Process
            
            
              
                
                  
                    1)
                    Register – Complete quick form (eligibility check in ~60 seconds)
                  
                  
                    2)
                    Confirm – Provider verifies rebate eligibility
                  
                  
                    3)
                    Install – Accredited professional completes setup
                  
                  
                    4)
                    Certify & Recycle – Certifications + old unit removed at no cost
                  
                
                
                  Get Started
                
              
              
                
                  
                
              
            
          
        
        {/* Contact & Next Steps */}
        
          
            
              Contact & Next Steps
            
            
              Free inspections available across Victoria. Rebates apply now for heating, cooling, and hot water upgrades.
            
            
              
                Full Name
                
              
              
                Email
                
              
              
                Postcode
                
              
              
                Message
                              </label>
              <div className="md:col-span-2 flex gap-6">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:contact@GLEnergy.com.au"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#1C2525] text-[#FFFFFF] ring-1 ring-[#228B22]/30 hover:bg-[#2F4F4F] transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-sm text-[#A9A9A9] mt-4">
              Supported through 2045. By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>
        {/* Refer a Friend */}
        <section className="w-full py-16 md:py-20 bg-[#2F4F4F]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#1C2525] rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#1A3C1A] text-[#FFFFFF] text-center py-8">
                <h2 className="text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2">
                  Refer a Friend, $100 Cash!
                </h2>
              </div>
              <div className="p-8 space-y-6 text-center">
                <p className="text-xl font-bold text-[#FFFFFF]">
                  Invite your friends to join GreenLine Energy and earn <strong>$100 cash</strong> for each successful referral!
                </p>
                <p className="text-base font-medium text-[#F0FFF0]">
                  No limit—refer more friends to boost your rewards!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Refer Now
                </a>
                <p className="flex justify-center mt-4 text-base font-medium text-[#F0FFF0]">
                  Quick, easy, and rewarding way to share the savings.
                </p>
              </div>
              <div className="mt-6">
                <img
                  src="/refercash.png"
                  alt="Refer a Friend Cash Illustration"
                  className="w-full h-auto object-cover rounded-b-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-[#FFFFFF]">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-6 text-[#FFFFFF]">Rebate Details</h3>
</code></pre>
</body></html>
