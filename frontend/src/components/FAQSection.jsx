"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I book a tour with MAJESTIC?",
    answer: "You can book directly through our website by selecting your preferred tour and clicking the 'Book Now' button. Alternatively, you can contact our support team for assistance.",
  },
  {
    id: 2,
    question: "Can I book if I don't have a smartphone or internet access?",
    answer: "Yes, you can call our support hotline or visit one of our local physical offices in Kigali to make a booking in person.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "We offer a full refund for cancellations made at least 48 hours prior to your scheduled tour. Cancellations made within 48 hours are subject to a 50% fee.",
  },
  {
    id: 4,
    question: "Is it safe to travel with MAJESTIC?",
    answer: "Absolutely. Safety is our top priority. All our guides are certified, and we constantly monitor local conditions to ensure a secure and enjoyable experience.",
  },
  {
    id: 5,
    question: "Are meals included in the tour packages?",
    answer: "Most of our full-day tours include a complimentary lunch and refreshments. Please check the specific details of your selected tour to see what is included.",
  },
  {
    id: 6,
    question: "Do you provide airport transportation?",
    answer: "Yes, we offer airport pickup and drop-off services as an add-on to our tour packages. You can request this during the booking process.",
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="pt-12 pb-24 px-4 w-full bg-white overflow-hidden">
      {/* Decorative Separator (Full Page Width) */}
      <div className="mb-20 flex items-center justify-center w-full relative">
        <div className="w-[90vw] h-px bg-majestic-gold/30"></div>
        <div className="absolute w-3 h-3 bg-majestic-gold rotate-45"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 relative">
            Frequently asked questions
          </h2>
          
          <p className="text-gray-600 text-sm max-w-sm mx-auto">
            Here are some common questions about our services to help you understand better.
          </p>
        </div>

        {/* FAQs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-[1.5rem] p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="flex justify-between items-start gap-6">
                <h3 className="text-xs md:text-[13px] font-bold text-black mt-1">
                  {faq.question}
                </h3>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white shrink-0 transition-transform duration-300">
                  <span className="text-lg leading-none font-light">
                    {openId === faq.id ? '−' : '+'}
                  </span>
                </div>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 text-[11px] md:text-xs leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
