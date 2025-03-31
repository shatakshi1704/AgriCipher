import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import restback from "../images/baakibackground.png";
import Navbar from '../Components/Navbar';

export default function Support() {
  const [faqs, setFaqs] = useState([
    { question: "How can I contribute?", answer: "You can donate, volunteer, or spread awareness!", open: false },
    { question: "Where does my donation go?", answer: "It directly supports various agricultural initiatives and farmers.", open: false },
    { question: "Who can I contact for urgent support?", answer: "Reach out via email at support@yourwebsite.com or call +91 98765 43210.", open: false },
    { question: "How do I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions.", open: false },
    { question: "Can I track my donations?", answer: "Yes, log into your account to view donation history.", open: false },
    { question: "Is my personal data safe?", answer: "Yes, we prioritize security and follow encryption protocols.", open: false },
    { question: "How can I volunteer?", answer: "Sign up on our 'Get Involved' page to become a volunteer.", open: false },
    { question: "What payment methods do you accept?", answer: "We accept UPI, Credit/Debit cards, and PayPal.", open: false },
    { question: "What if my payment fails?", answer: "Try another payment method or contact support.", open: false },
    { question: "Do you provide tax receipts for donations?", answer: "Yes, you can download them from your account.", open: false },
    { question: "Is there a helpline number?", answer: "Yes, call us at +91-98765 43210 for support.", open: false },
    { question: "Can I get involved as an influencer?", answer: "Yes! Email us at marketing@yourwebsite.com.", open: false },
    { question: "How do I unsubscribe from emails?", answer: "Click 'Unsubscribe' at the bottom of any email from us.", open: false },
    { question: "Do you have a mobile app?", answer: "Currently, we are web-based. Mobile app is coming soon!", open: false },
    { question: "What happens after I donate?", answer: "You will receive a confirmation email with details.", open: false },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
  };

  return (
    <div className="min-h-screen w-full bg-[#e3ffcf] flex flex-col items-center p-10 space-y-10"
    style={{ backgroundImage: `url(${restback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      
      {/* Hero Section */}
      <div className="text-center w-full">
        <h1 className="lg:text-[50px] font-bold text-[#0c1403]-900 animate-fadeIn">Need Help? We're Here for You!</h1>

      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[
          { icon: "📞", title: "Call Us", text: "+91 74284 07090" },
          { icon: "📧", title: "Email Us", text: "agricipher.help@gmail.com" },
          { icon: "💬", title: "Chat with Us", text: "Live Chat Available" },
        ].map((item, index) => (
          <div key={index} className="bg-[#004b23] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-full">
            <div className="text-6xl">{item.icon}</div>
            <h3 className="text-3xl font-bold text-[#e3ffcf] mt-2">{item.title}</h3>
            <p className="text-[#e3ffcf] text-xl">{item.text}</p>
          </div>
        ))}
      </div>
      <br></br><br></br><br></br>

      {/* FAQs - Single Column */}
      <div className="w-full max-w-6xl">
        <h2 className="text-5xl font-bold text-[#0c1403] text-center mb-6">📖 Frequently Asked Questions</h2>
        <br></br>
        <div className="space-y-6 w-full">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-[#51a644] to-[#2e7d32] p-5 rounded-xl shadow-md cursor-pointer hover:bg-[#67bb0f] transition w-full"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-2xl font-semibold text-[#e3ffcf] flex justify-between">
                {faq.question} <span>{faq.open ? "➖" : "➕"}</span>
              </h3>
              {faq.open && <p className="mt-2 text-2xl text-[#e3ffcf]">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
