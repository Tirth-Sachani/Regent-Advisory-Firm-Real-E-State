"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import { MessageSquare, X, Send, User, Shield, Phone, Mail, Award } from "lucide-react";

interface Message {
  sender: "client" | "concierge";
  text: string;
  properties?: any[];
  leadCapture?: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "concierge",
      text: "Welcome to Regent Advisory. I'm Olivia. Are we optimizing for immediate commercial rental cash flow today, or capital growth via premium residential properties?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    submitted: false,
    loading: false
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const clientMsg = input;
    setInput("");
    
    // Add client message
    setMessages(prev => [...prev, { sender: "client", text: clientMsg }]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: clientMsg,
          chatHistory: messages.map(m => ({
            role: m.sender === "client" ? "user" : "model",
            text: m.text
          }))
        }),
      });

      const result = await response.json();

      setIsTyping(false);

      if (response.ok) {
        setMessages(prev => [
          ...prev, 
          { 
            sender: "concierge", 
            text: result.reply, 
            properties: result.properties,
            leadCapture: result.leadCapture 
          }
        ]);
      } else {
        throw new Error(result.error || "Failed to get reply.");
      }
    } catch (err: any) {
      console.error(err);
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { 
          sender: "concierge", 
          text: "I do apologize, but I am experiencing connection difficulties. Please feel free to contact our Mayfair office directly at +44 (0) 20 7499 9000." 
        }
      ]);
    }
  };

  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLeadForm(prev => ({ ...prev, loading: true }));

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          natureOfInquiry: "Chatbot Lead Registration",
          message: "Lead registered interest directly inside the Regent Concierge chatbot session."
        }),
      });

      if (!response.ok) throw new Error("Inquiry submission failed.");

      setLeadForm(prev => ({ ...prev, loading: false, submitted: true }));
      setMessages(prev => [
        ...prev,
        {
          sender: "concierge",
          text: `Thank you, ${leadForm.name}. Your details have been registered with absolute security. A private advisor will reach out to you within 24 hours.`
        }
      ]);
    } catch (err) {
      console.error(err);
      setLeadForm(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans max-w-[calc(100vw-2rem)]">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-tertiary border border-tertiary/40 shadow-2xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
          title="Regent Private Advisor"
        >
          <div className="absolute inset-0 rounded-full bg-tertiary/10 scale-0 group-hover:scale-110 transition-transform duration-500 animate-pulse"></div>
          <MessageSquare className="w-6 h-6 text-tertiary" />
        </button>
      )}

      {/* Chat Box Panel */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[400px] h-[80vh] sm:h-[580px] bg-[#0c1c30]/95 backdrop-blur-xl border border-tertiary/20 shadow-2xl flex flex-col transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-6 rounded-none overflow-hidden">
          {/* Header */}
          <div className="bg-[#081322] px-6 py-4 border-b border-tertiary/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-tertiary/10 text-tertiary border border-tertiary/30 flex items-center justify-center rounded-none font-serif text-sm">
                R
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">Regent Concierge</h4>
                <p className="text-[10px] text-tertiary tracking-widest uppercase flex items-center gap-1">
                  <Shield className="w-2.5 h-2.5" /> Private Advisor
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === "client" ? "self-end flex-row-reverse" : "self-start"
                  }`}
                >
                  {/* Sender Avatar */}
                  <div
                    className={`w-8 h-8 rounded-none border flex items-center justify-center text-xs shrink-0 ${
                      msg.sender === "client"
                        ? "bg-tertiary/10 border-tertiary/30 text-tertiary"
                        : "bg-primary border-outline/20 text-white"
                    }`}
                  >
                    {msg.sender === "client" ? <User className="w-4 h-4" /> : <Award className="w-4 h-4 text-tertiary" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`p-3 text-sm leading-relaxed border ${
                      msg.sender === "client"
                        ? "bg-tertiary/10 border-tertiary/20 text-white"
                        : "bg-surface-container-low border-outline/10 text-[#e2e8f0]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Inline Property Recommendation Cards */}
                {msg.properties && msg.properties.length > 0 && (
                  <div className="flex flex-col gap-3 pl-11 mt-1">
                    {msg.properties.map((prop: any) => (
                      <Link
                        href={`/portfolio/${prop.id}`}
                        key={prop.id}
                        onClick={() => setIsOpen(false)}
                        className="bg-surface-container-low/50 hover:bg-surface-container-low border border-outline/10 hover:border-tertiary/30 p-3 flex gap-3 transition-all duration-300 group"
                      >
                        <div className="relative w-16 h-16 bg-[#1a2e46] overflow-hidden shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={prop.images[0]}
                            alt={prop.title}
                            className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <h5 className="font-serif text-xs font-semibold text-white truncate group-hover:text-tertiary transition-colors">
                            {prop.title}
                          </h5>
                          <p className="text-[10px] text-white/60 mt-0.5">{prop.location}</p>
                          <p className="text-[10px] text-tertiary font-bold mt-1">{prop.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Inline Lead Capture Form */}
                {msg.leadCapture && !leadForm.submitted && (
                  <div className="bg-surface-container-low/40 border border-tertiary/10 p-4 mt-2 ml-11 flex flex-col gap-3">
                    <p className="text-xs text-white/80 font-serif">Register Private Advisory Request:</p>
                    <form onSubmit={handleLeadSubmit} className="flex flex-col gap-2">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="bg-transparent border-b border-outline/20 text-xs py-1.5 focus:outline-none focus:border-tertiary text-white w-full"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="bg-transparent border-b border-outline/20 text-xs py-1.5 focus:outline-none focus:border-tertiary text-white w-full"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="bg-transparent border-b border-outline/20 text-xs py-1.5 focus:outline-none focus:border-tertiary text-white w-full"
                      />
                      <button
                        type="submit"
                        disabled={leadForm.loading}
                        className="bg-tertiary hover:bg-tertiary-hover text-[#0c1c30] text-[10px] tracking-widest font-semibold uppercase py-2 mt-2 w-full transition-colors cursor-pointer"
                      >
                        {leadForm.loading ? "Registering..." : "Submit Confidential Request"}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-[85%] self-start">
                <div className="w-8 h-8 rounded-none border border-outline/20 bg-primary flex items-center justify-center text-xs text-white">
                  <Award className="w-4 h-4 text-tertiary" />
                </div>
                <div className="bg-surface-container-low border border-outline/10 p-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-tertiary/10 bg-[#081322] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire about Chelsea townhouses, viewings..."
              className="flex-1 bg-[#0c1c30] border border-outline/20 px-4 py-3 text-sm focus:outline-none focus:border-tertiary text-white"
            />
            <button
              type="submit"
              className="bg-tertiary hover:bg-tertiary-hover text-[#0c1c30] p-3 flex items-center justify-center transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
