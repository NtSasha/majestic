"use client";

import { useState } from "react";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";

const tours = [
  {
    id: 1,
    name: "Akagera Park",
    price: "$49/ per person",
    image: "/images/image3.png",
  },
  {
    id: 2,
    name: "Gorilla Trekking",
    price: "$49/ per person",
    image: "/images/image2.png",
  },
  {
    id: 3,
    name: "Lake kivu",
    price: "$49/ per person",
    image: "/images/image1.png",
  },
  {
    id: 4,
    name: "Bisoke Crater",
    price: "$49/ per person",
    image: "/images/rectangle-51.png",
  }
];

export default function BookDestinationPage() {
  const [step, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);
  
  // Step 2 & 3 State
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  // Step 4 State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  // Step 5 State
  const [paymentMethod, setPaymentMethod] = useState("card");

  const selectedTour = tours.find(t => t.id === selectedTourId);
  const basePricePerPerson = 22000;
  const totalPeople = adults + childrenCount;
  const totalPrice = basePricePerPerson * totalPeople;

  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <HomeHero 
        title={
          <>
            Plan your next adventure <br />
            with Majestic
          </>
        }
        subtitle={null} 
        showButton={false} 
        showStats={false} 
      />

      <div className="flex-grow max-w-7xl mx-auto px-4 w-full pt-20 pb-24">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-bold text-black mb-4">
            Book a Destination
          </h1>
          <p className="text-sm text-gray-600">
            Complete your booking in a few simple steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-24 relative z-0">
          {/* Base Connecting Line */}
          <div className="absolute top-1/2 -left-8 md:-left-16 -right-8 md:-right-16 h-[1px] bg-[#d4d4d4] -z-10 transform -translate-y-1/2"></div>
          {/* Active Brown Line Segment */}
          <div className={`absolute top-1/2 -left-8 md:-left-16 h-[1px] bg-majestic-gold -z-10 transform -translate-y-1/2 transition-all duration-500 ${
            step >= 5 ? 'w-[calc(100%+2rem)] md:w-[calc(100%+4rem)]' : 
            step >= 4 ? 'w-[calc(75%+2rem)] md:w-[calc(75%+4rem)]' : 
            step >= 3 ? 'w-[calc(50%+2rem)] md:w-[calc(50%+4rem)]' : 
            step >= 2 ? 'w-[calc(25%+2rem)] md:w-[calc(25%+4rem)]' : 
            'w-0'
          }`}></div>
          
          <div className="flex justify-between items-center z-10">
            {/* Step 1: Location (Active) */}
            <div className="w-12 h-12 rounded-full bg-majestic-gold flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Step 2: Calendar */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 2 ? 'bg-majestic-gold shadow-md text-white' : 'bg-[#efefef] text-black'}`}>
              <svg className={`w-5 h-5 ${step >= 2 ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Step 3: People */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 3 ? 'bg-majestic-gold shadow-md text-white' : 'bg-[#efefef] text-black'}`}>
              <svg className={`w-5 h-5 ${step >= 3 ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            {/* Step 4: User Profile */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 4 ? 'bg-majestic-gold shadow-md text-white' : 'bg-[#efefef] text-black'}`}>
              <svg className={`w-5 h-5 ${step >= 4 ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            {/* Step 5: Payment */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${step >= 5 ? 'bg-majestic-gold shadow-md text-white' : 'bg-[#efefef] text-black'}`}>
              <svg className={`w-5 h-5 ${step >= 5 ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>
        </div>

        {!isConfirmed ? (
          <>
            {step === 1 && (
          <>
            {/* Select a tour section */}
            <div className="mb-12">
              <div className="relative flex justify-center items-center mb-10">
                <h2 className="text-2xl font-bold text-black text-center">Select a tour</h2>
                <div className="absolute right-0">
                  <Link href="/tours" className="px-6 py-2 border border-majestic-gold text-majestic-gold rounded-full text-sm font-semibold hover:bg-majestic-gold hover:text-white transition-colors duration-300 hidden sm:flex items-center gap-2">
                    Browse all tours
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 py-4">
                {tours.map((tour) => (
                  <div 
                    key={tour.id} 
                    onClick={() => setSelectedTourId(tour.id)}
                    className="group relative rounded-2xl overflow-hidden h-[400px] cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <img src={tour.image} alt={tour.name} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${selectedTourId === tour.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 bg-majestic-gold text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                      Featured
                    </div>
                    
                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">{tour.name}</h3>
                        <p className="text-gray-300 text-sm font-medium">{tour.price}</p>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg ${selectedTourId === tour.id ? 'bg-majestic-gold text-white' : 'bg-white text-black group-hover:bg-majestic-gold group-hover:text-white'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {selectedTourId === tour.id ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                          )}
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center w-full mt-16">
              <button 
                onClick={() => setStep(2)}
                disabled={!selectedTourId}
                className={`w-48 py-3 border rounded-full text-sm font-semibold transition-colors duration-300 relative flex items-center justify-center ${
                  selectedTourId 
                    ? 'border-gray-400 text-black hover:border-black cursor-pointer' 
                    : 'border-gray-200 text-black cursor-not-allowed'
                }`}
              >
                Continue
                <svg className="w-4 h-4 absolute right-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </>
        )}

        {(step >= 2 && step <= 5) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            
            {/* Left Column */}
            <div>
              {step === 2 ? (
                <>
                  <h3 className="text-xl font-bold text-black mb-6">Choose Your Date</h3>
                  
                  <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-black mb-3">Preferred Start Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-10">
                      <label className="block text-sm font-bold text-black mb-3">Custom days</label>
                      <div className="relative">
                        <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm appearance-none bg-white">
                          <option>4 days</option>
                          <option>5 days</option>
                          <option>6 days</option>
                        </select>
                        <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(1)} 
                        className="w-32 py-3 border border-gray-300 text-black rounded-full text-sm font-semibold hover:border-black transition-colors duration-300 relative flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 rotate-180 absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Back
                      </button>
                      <button 
                        onClick={() => setStep(3)}
                        className="w-32 py-3 border border-gray-300 text-black rounded-full text-sm font-semibold hover:border-black transition-colors duration-300 relative flex items-center justify-center"
                      >
                        Continue
                        <svg className="w-4 h-4 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              ) : step === 3 ? (
                <>
                  <h3 className="text-xl font-bold text-black mb-6">Traveler&apos;s Information</h3>
                  
                  <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    
                    <div className="mb-8">
                      <label className="block text-sm font-bold text-black mb-4">Adults ( 12+ years)</label>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setAdults(Math.max(1, adults - 1))} 
                          className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-black hover:border-black transition-colors duration-200"
                        >
                          <span className="text-xl leading-none -mt-1">-</span>
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-black">{adults}</span>
                        <button 
                          onClick={() => setAdults(adults + 1)} 
                          className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-black hover:border-black transition-colors duration-200"
                        >
                          <span className="text-xl leading-none -mt-1">+</span>
                        </button>
                      </div>
                    </div>

                    <div className="mb-12">
                      <label className="block text-sm font-bold text-black mb-4">Children (1 -12 years)</label>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} 
                          className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-black hover:border-black transition-colors duration-200"
                        >
                          <span className="text-xl leading-none -mt-1">-</span>
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-black">{childrenCount}</span>
                        <button 
                          onClick={() => setChildrenCount(childrenCount + 1)} 
                          className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center text-black hover:border-black transition-colors duration-200"
                        >
                          <span className="text-xl leading-none -mt-1">+</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(2)} 
                        className="w-32 py-3 border border-gray-300 text-black rounded-full text-sm font-semibold hover:border-black transition-colors duration-300 relative flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 rotate-180 absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Back
                      </button>
                      <button 
                        onClick={() => setStep(4)}
                        className="w-32 py-3 border border-gray-300 text-black rounded-full text-sm font-semibold hover:border-black transition-colors duration-300 relative flex items-center justify-center"
                      >
                        Continue
                        <svg className="w-4 h-4 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </>
              ) : step === 4 ? (
                <>
                  <h3 className="text-xl font-bold text-black mb-6">Contact Information</h3>
                  
                  <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-bold text-black mb-3">First Name</label>
                        <input 
                          type="text" 
                          placeholder="John"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-3">Last Name</label>
                        <input 
                          type="text" 
                          placeholder="Doe"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-black mb-3">Email</label>
                      <input 
                        type="email" 
                        placeholder="Johndoe@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-black mb-3">Phone Number</label>
                      <input 
                        type="text" 
                        placeholder="+250 788888888"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm"
                      />
                    </div>

                    <div className="mb-10">
                      <label className="block text-sm font-bold text-black mb-3">special Request</label>
                      <textarea 
                        placeholder="Enter your message"
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-0 focus:border-black text-black text-sm h-32 resize-none"
                      ></textarea>
                    </div>

                    <div className="flex gap-4">
                      <button 
                        onClick={() => setStep(3)} 
                        className="w-32 py-3 border border-gray-300 text-black rounded-full text-sm font-semibold hover:border-black transition-colors duration-300 relative flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 rotate-180 absolute left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Back
                      </button>
                      <button 
                        onClick={() => setStep(5)}
                        className="w-32 py-3 border border-gray-300 text-black rounded-full text-sm font-semibold hover:border-black transition-colors duration-300 relative flex items-center justify-center"
                      >
                        Continue
                        <svg className="w-4 h-4 absolute right-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-black mb-6">Payment Method</h3>
                  
                  <div className="space-y-4">
                    {/* Payment Options */}
                    <button 
                      onClick={() => setPaymentMethod('card')}
                      className={`w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-colors duration-300 ${paymentMethod === 'card' ? 'border-black bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                    >
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <div>
                        <div className="font-bold text-black text-sm mb-1">Credit / Debit Card</div>
                        <div className="text-xs text-gray-500 font-medium">Visa, MasterCard, Amex</div>
                      </div>
                    </button>

                    <button 
                      onClick={() => setPaymentMethod('mobile')}
                      className={`w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-colors duration-300 ${paymentMethod === 'mobile' ? 'border-black bg-white shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                    >
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <div className="font-bold text-black text-sm mb-1">Mobile Money</div>
                        <div className="text-xs text-gray-500 font-medium">MTN, Airtel (RWF)</div>
                      </div>
                    </button>

                    <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col gap-6">
                      {/* Secure Payment Box */}
                      <div className="bg-amber-600/10 border border-amber-600 text-amber-600 rounded-xl p-3 md:p-4 flex gap-3">
                        <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div>
                          <div className="font-bold text-sm mb-0.5">Secure Payment</div>
                          <div className="text-[11px] opacity-90 leading-snug">Your payment information is secure. You won&apos;t be charged until we confirm</div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setStep(4)} 
                          className="w-32 py-2 border border-black text-black rounded-full text-xs font-bold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          Back
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => {
                            setIsConfirmed(true);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-32 py-2 border border-black text-black rounded-full text-xs font-bold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                          confirm
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </>
              )}
            </div>

            {/* Right Column: Booking Summary */}
            <div>
              <h3 className="text-xl font-bold mb-6 invisible" aria-hidden="true">Spacer</h3>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm h-fit">
                <div className="bg-[#4d3b0e] py-4 px-6">
                  <h3 className="text-white font-bold text-sm">Booking Summary</h3>
                </div>
                <div className="p-6">
                  <div className="flex gap-6 mb-8">
                    <img src={selectedTour?.image} alt={selectedTour?.name} className="w-[120px] h-[80px] object-cover rounded-lg shadow-sm" />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-black text-base mb-1">{selectedTour?.name || 'Akagera National Park'}</h4>
                      <p className="text-xs text-gray-600 font-medium">6 - 9 Days</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 pb-6 space-y-4">
                    {step >= 3 && (
                      <div className="flex justify-between items-center text-xs font-semibold text-gray-500">
                        <span>Date</span>
                        <span>{selectedDate || "17 -12 -2025"}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm font-semibold text-black">
                      <span>{totalPeople} {totalPeople === 1 ? 'Person' : 'People'}</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex justify-between items-center text-base font-bold text-black">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center max-w-2xl mx-auto text-center mt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Booking Confirmed</h2>
            <p className="text-gray-700 mb-10 max-w-[450px] leading-relaxed text-[13px]">
              Thank you for booking with Majestic. We&apos;ve sent a confirmation email to bonnieumurerwa@gmail.com. Our team will contact you within 24 hours to finalize the details.
            </p>
            
            {/* Booking Summary Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm w-full max-w-md text-left mb-10">
              <div className="bg-[#4d3b0e] py-4 px-6">
                <h3 className="text-white font-bold text-sm">Booking Summary</h3>
              </div>
              <div className="p-6 pb-8">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Tour</span>
                  <span className="font-semibold text-black text-xs">{tours.find(t => t.id === selectedTourId)?.name || 'Akagera National Park'}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Date</span>
                  <span className="font-semibold text-black text-xs">{selectedDate || '17 -12 -2025'}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Travelers</span>
                  <span className="font-semibold text-black text-xs">{totalPeople || 1} {totalPeople === 1 ? 'Adult' : 'People'}</span>
                </div>
                <div className="flex justify-between items-center pt-8 pb-2">
                  <span className="text-black font-bold text-sm">Total</span>
                  <span className="text-black font-bold text-sm">${totalPrice || 22000}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Fanned Images before Footer */}
      <div className="w-full relative h-[250px] flex items-center justify-center -mb-24 z-20 overflow-visible hidden md:flex">
        <img src="/images/rectangle-51.png" alt="Destination" className="w-[200px] h-[200px] object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] absolute transform -rotate-[16deg] -translate-x-[240px] translate-y-8" />
        <img src="/images/image2.png" alt="Destination" className="w-[220px] h-[220px] object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] absolute transform -rotate-[8deg] -translate-x-[120px] translate-y-4 z-10" />
        <img src="/images/image1.png" alt="Destination" className="w-[240px] h-[240px] object-cover rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] absolute transform rotate-0 z-20" />
        <img src="/images/rectangle-53.png" alt="Destination" className="w-[220px] h-[220px] object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] absolute transform rotate-[8deg] translate-x-[120px] translate-y-4 z-10" />
        <img src="/images/rectangle-49.png" alt="Destination" className="w-[200px] h-[200px] object-cover rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] absolute transform rotate-[16deg] translate-x-[240px] translate-y-8" />
      </div>
      <Footer />
    </main>
  );
}
