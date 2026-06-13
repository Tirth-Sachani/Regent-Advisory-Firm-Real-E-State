"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import {
  MessageSquare, X, Send, User, Shield, Phone, Mail, Award,
  Search, Sliders, LineChart, Calculator, Scale, Calendar, BookOpen, FileText, CheckCircle,
  Mic, MicOff, Volume2, VolumeX, RefreshCw
} from "lucide-react";
import { properties, Property } from "@/data/properties";
import SafeImage from "@/components/ui/SafeImage";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionConfig, premiumEase } from "@/lib/animations";

type TabId = "chat" | "search" | "recs" | "budget" | "mortgage" | "compare" | "booking" | "knowledge" | "voice";

interface Message {
  sender: "client" | "concierge";
  text: string;
  properties?: any[];
  leadCapture?: boolean;
}

export default function AISuitePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("chat");
  const drawerRef = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion } = useMotionConfig();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Chat State
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      sender: "concierge",
      text: "Welcome to Regent Advisory. I'm Olivia. Are we optimizing for immediate commercial rental cash flow today, or capital growth via premium residential properties?"
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatTyping, setIsChatTyping] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    submitted: false,
    loading: false
  });
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 2. Search Assistant State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchNarrative, setSearchNarrative] = useState("");

  // 3. Recommendations State
  const [recCategory, setRecCategory] = useState("Residential");
  const [recMaxBudget, setRecMaxBudget] = useState("10000000");
  const [recMinBudget, setRecMinBudget] = useState("100000");
  const [recLocation, setRecLocation] = useState("London");
  const [recPropertyType, setRecPropertyType] = useState("Apartment");
  const [recInvestmentGoal, setRecInvestmentGoal] = useState("Capital Growth");
  const [recBedrooms, setRecBedrooms] = useState("2");
  const [recBathrooms, setRecBathrooms] = useState("1");
  const [recRoi, setRecRoi] = useState("5.0");
  const [recMinSqft, setRecMinSqft] = useState("500");
  const [recSearchQuery, setRecSearchQuery] = useState("");
  const [recResults, setRecResults] = useState<any[]>([]);
  const [recLoading, setRecLoading] = useState(false);
  const [recPage, setRecPage] = useState(1);
  const [recHasMore, setRecHasMore] = useState(false);
  const [savedProperties, setSavedProperties] = useState<string[]>([]);

  // Contact Advisor State
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactPropertyId, setContactPropertyId] = useState<string | null>(null);
  const [contactPropertyName, setContactPropertyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactModalLoading, setContactModalLoading] = useState(false);
  const [contactError, setContactError] = useState("");

  // 4. Budget Advisor State
  const [budgetIncome, setBudgetIncome] = useState("250000");
  const [budgetSavings, setBudgetSavings] = useState("500000");
  const [budgetDebt, setBudgetDebt] = useState("15000");
  const [budgetResult, setBudgetResult] = useState<any>(null);
  const [budgetLoading, setBudgetLoading] = useState(false);

  // 5. Mortgage State
  const [mortgagePrincipal, setMortgagePrincipal] = useState("1500000");
  const [mortgageRate, setMortgageRate] = useState("4.5");
  const [mortgageTenure, setMortgageTenure] = useState("25");
  const [mortgageResult, setMortgageResult] = useState<any>(null);
  const [mortgageLoading, setMortgageLoading] = useState(false);

  // 0. Live DB Properties State
  const [dbProperties, setDbProperties] = useState<Property[]>(properties);

  // 6. Comparison State
  const [compareProp1, setCompareProp1] = useState(properties[0]?.id || "");
  const [compareProp2, setCompareProp2] = useState(properties[1]?.id || "");
  const [compareProp3, setCompareProp3] = useState(properties[2]?.id || "");
  const [compareResult, setCompareResult] = useState<any>(null);
  const [compareLoading, setCompareLoading] = useState(false);

  // 7. Booking State
  const [bookingMsg, setBookingMsg] = useState("Would love to book a viewing for next Thursday morning.");
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("10:00 AM");
  const [bookingDay, setBookingDay] = useState("Monday");
  const [bookingSuccess, setBookingSuccess] = useState<any>(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingStep, setBookingStep] = useState<"form" | "chat" | "summary">("form");
  const [bookingChatHistory, setBookingChatHistory] = useState<any[]>([]);
  const [bookingChatInput, setBookingChatInput] = useState("");
  const [bookingVerification, setBookingVerification] = useState<any>(null);
  const [bookingError, setBookingError] = useState("");
  const bookingChatEndRef = useRef<HTMLDivElement>(null);

  // 8. Knowledge Base RAG State
  const [kbQuery, setKbQuery] = useState("How does FEMA regulate properties bought by NRIs?");
  const [kbReply, setKbReply] = useState("");
  const [kbLoading, setKbLoading] = useState(false);

  // 9. Multilingual Voice Assistant State
  const [voiceMessages, setVoiceMessages] = useState<any[]>([
    {
      sender: "concierge",
      text: "Hello, I'm Olivia. You can type or speak with me."
    }
  ]);
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState("English");
  const [voiceTextInput, setVoiceTextInput] = useState("");
  const [voiceOnlyMode, setVoiceOnlyMode] = useState(false);
  const [voiceStatusText, setVoiceStatusText] = useState("Idle"); // Idle, Listening..., Processing..., Speaking...
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const speechRecognitionRef = useRef<any>(null);

  useEffect(() => {
    if (activeTab === "chat") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatTyping, activeTab]);

  useEffect(() => {
    if (activeTab === "booking" && bookingStep === "chat") {
      bookingChatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [bookingChatHistory, bookingStep, activeTab]);

  useEffect(() => {
    // Fetch live properties from the Supabase database
    const fetchDbProperties = async () => {
      try {
        const res = await fetch("/api/properties");
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.properties && result.properties.length > 0) {
            setDbProperties(result.properties);
            setSearchResults(result.properties.slice(0, 12));
            
            // Set defaults for comparison
            setCompareProp1(result.properties[0]?.id || "");
            setCompareProp2(result.properties[1]?.id || "");
            setCompareProp3(result.properties[2]?.id || "");
          }
        }
      } catch (err) {
        console.error("Failed to load DB properties:", err);
      }

      // Fetch initial recommendation results with scored metrics
      try {
        const recRes = await fetch("/api/ai/recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            preferences: {
              category: "Residential",
              max_budget: 10000000,
              min_budget: 100000,
              preferred_region: "London",
              preferred_locations: ["London"],
              property_type: "Apartment",
              investment_goal: "Capital Growth",
              bedrooms: 2,
              bathrooms: 1,
              roi: 5.0,
              min_sqft: 500
            },
            limit: 20,
            page: 1
          })
        });
        const recResult = await recRes.json();
        if (recResult.success && recResult.recommendations) {
          setRecResults(recResult.recommendations);
          setRecHasMore(!!recResult.hasMore);
          return;
        }
      } catch (recErr) {
        console.error("Failed to load initial recommendations:", recErr);
      }

      // Fallback if APIs fail
      setSearchResults(properties.slice(0, 12));
      setRecResults(properties.slice(0, 12).map(p => ({
        ...p,
        property_type: "Apartment",
        roi: 5.8,
        rental_yield: 4.8,
        demand_score: 82,
        matchPercentage: 92,
        explanation: ["✓ Within Budget", "✓ Good location fit"]
      })));
    };

    fetchDbProperties();
  }, []);

  const handleTabClick = (tab: TabId) => {
    if (tab === "search") return;
    setActiveTab(tab);
    setIsOpen(true);
  };

  // --- Handlers ---

  // Web Speech API Locale mappings
  const LANGUAGE_CODES: Record<string, string> = {
    English: 'en-US',
    Gujarati: 'gu-IN',
    Hindi: 'hi-IN',
    Spanish: 'es-ES',
    French: 'fr-FR',
    German: 'de-DE',
    Arabic: 'ar-SA',
    Portuguese: 'pt-PT',
    Italian: 'it-IT',
    Chinese: 'zh-CN',
    Japanese: 'ja-JP',
    Urdu: 'ur-PK'
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
          setIsRecording(true);
          setVoiceStatusText("Listening...");
        };

        recognition.onresult = async (event: any) => {
          const transcriptText = event.results[0][0].transcript;
          handleVoiceQuerySubmit(transcriptText);
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setIsRecording(false);
          setVoiceStatusText("Error: " + event.error);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        speechRecognitionRef.current = recognition;
      }
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [detectedLanguage, voiceMessages]);

  const speakLocalSpeech = (text: string, languageName: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const locale = LANGUAGE_CODES[languageName] || 'en-US';
    utterance.lang = locale;
    utterance.rate = 0.90; // Set speaking speed to medium (professional advisory pace)

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(locale) && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('natural')));
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setVoiceStatusText("Speaking...");
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setVoiceStatusText("Idle");
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setVoiceStatusText("Idle");
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceQuerySubmit = async (transcriptText: string) => {
    setIsRecording(false);
    setVoiceStatusText("Processing...");
    setVoiceMessages(prev => [...prev, { sender: "client", text: transcriptText }]);

    try {
      const respondRes = await fetch("/api/voice/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          transcript: transcriptText,
          conversationHistory: voiceMessages.map(m => ({
            role: m.sender === "client" ? "user" : "model",
            text: m.text
          })),
          activeLanguage: detectedLanguage
        })
      });

      if (!respondRes.ok) throw new Error("Failed to get voice response.");

      const result = await respondRes.json();
      if (result.success) {
        const replyText = result.response;
        const newLang = result.detected_language || detectedLanguage;

        setDetectedLanguage(newLang);
        setVoiceMessages(prev => [...prev, { sender: "concierge", text: replyText, properties: result.properties || [] }]);
        setVoiceStatusText("Speaking...");

        try {
          const speakRes = await fetch("/api/voice/speak", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: replyText, language: newLang })
          });

          if (speakRes.ok) {
            const contentType = speakRes.headers.get("content-type") || "";
            if (contentType.includes("application/json")) {
              const resultData = await speakRes.json().catch(() => null);
              speakLocalSpeech(replyText, newLang);
            } else {
              const blob = await speakRes.blob();
              const url = URL.createObjectURL(blob);
              setAudioUrl(url);
              setIsSpeaking(true);

              if (audioPlayerRef.current) {
                audioPlayerRef.current.src = url;
                audioPlayerRef.current.play();
              }
            }
          } else {
            speakLocalSpeech(replyText, newLang);
          }
        } catch (speakErr) {
          console.warn("Failed OpenAI TTS endpoint call, using browser synthesis fallback:", speakErr);
          speakLocalSpeech(replyText, newLang);
        }
      }
    } catch (err: any) {
      console.error(err);
      setVoiceStatusText("Idle");
      setVoiceMessages(prev => [...prev, { sender: "concierge", text: "I apologize, I could not complete your request. Please try again." }]);
    }
  };

  const handleVoiceTextInputSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!voiceTextInput.trim()) return;
    const query = voiceTextInput;
    setVoiceTextInput("");
    handleVoiceQuerySubmit(query);
  };

  const handleMicClick = () => {
    if (isSpeaking) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current.src = "";
      }
      setIsSpeaking(false);
      setVoiceStatusText("Idle");
    }

    if (isRecording) {
      if (speechRecognitionRef.current) {
        speechRecognitionRef.current.stop();
      }
      setIsRecording(false);
      setVoiceStatusText("Idle");
    } else {
      if (speechRecognitionRef.current) {
        const locale = LANGUAGE_CODES[detectedLanguage] || 'en-US';
        speechRecognitionRef.current.lang = locale;
        speechRecognitionRef.current.start();
      } else {
        setVoiceStatusText("Web Speech API not supported in this browser.");
      }
    }
  };

  // 1. Olivia Chat Handler
  const handleChatSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { sender: "client", text: userText }]);
    setIsChatTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userText,
          chatHistory: chatMessages.map(m => ({
            role: m.sender === "client" ? "user" : "model",
            text: m.text
          }))
        })
      });

      const result = await res.json();
      setIsChatTyping(false);

      if (res.ok) {
        setChatMessages(prev => [
          ...prev,
          {
            sender: "concierge",
            text: result.reply,
            properties: result.properties,
            leadCapture: result.leadCapture
          }
        ]);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setIsChatTyping(false);
      setChatMessages(prev => [
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
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          natureOfInquiry: "Chatbot Lead Registration",
          message: "Lead registered interest directly inside the Regent Concierge chatbot session."
        })
      });

      if (!res.ok) throw new Error("Inquiry failed");
      setLeadForm(prev => ({ ...prev, loading: false, submitted: true }));
      setChatMessages(prev => [
        ...prev,
        {
          sender: "concierge",
          text: `Thank you, ${leadForm.name}. Your details have been registered with absolute security. A private advisor will reach out to you within 24 hours.`
        }
      ]);
    } catch (err) {
      setLeadForm(prev => ({ ...prev, loading: false }));
    }
  };

  // 2. AI Search Assistant
  const handleSearchSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchLoading(true);

    try {
      const res = await fetch("/api/search/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: searchQuery })
      });
      const result = await res.json();
      setSearchResults(result.properties || []);
      setSearchNarrative(result.content || "");
    } catch (err) {
      console.error(err);
    } finally {
      setSearchLoading(false);
    }
  };

  // 3. AI Recommendations
  const handleRecsSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setRecLoading(true);
    setRecPage(1);

    try {
      const res = await fetch("/api/ai/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          preferences: {
            category: recCategory,
            max_budget: Number(recMaxBudget) || null,
            min_budget: Number(recMinBudget) || null,
            preferred_region: recLocation,
            preferred_locations: [recLocation],
            property_type: recPropertyType,
            investment_goal: recInvestmentGoal,
            bedrooms: Number(recBedrooms) || null,
            bathrooms: Number(recBathrooms) || null,
            roi: Number(recRoi) || null,
            min_sqft: Number(recMinSqft) || null
          },
          searchQuery: recSearchQuery,
          limit: 20,
          page: 1
        })
      });
      const result = await res.json();
      setRecResults(result.recommendations || []);
      setRecHasMore(!!result.hasMore);
    } catch (err) {
      console.error(err);
    } finally {
      setRecLoading(false);
    }
  };

  const handleRecsLoadMore = async () => {
    if (recLoading) return;
    const nextPage = recPage + 1;
    setRecLoading(true);

    try {
      const res = await fetch("/api/ai/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          preferences: {
            category: recCategory,
            max_budget: Number(recMaxBudget) || null,
            min_budget: Number(recMinBudget) || null,
            preferred_region: recLocation,
            preferred_locations: [recLocation],
            property_type: recPropertyType,
            investment_goal: recInvestmentGoal,
            bedrooms: Number(recBedrooms) || null,
            bathrooms: Number(recBathrooms) || null,
            roi: Number(recRoi) || null,
            min_sqft: Number(recMinSqft) || null
          },
          searchQuery: recSearchQuery,
          limit: 20,
          page: nextPage
        })
      });
      const result = await res.json();
      if (result.success && result.recommendations) {
        setRecResults((prev) => [...prev, ...result.recommendations]);
        setRecPage(nextPage);
        setRecHasMore(!!result.hasMore);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setRecLoading(false);
    }
  };

  const handleContactAdvisorSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactPropertyId) {
      setContactError("Name, Email, and Property ID are required.");
      return;
    }
    setContactModalLoading(true);
    setContactError("");
    try {
      const res = await fetch("/api/crm/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          phone: contactPhone,
          propertyId: contactPropertyId
        })
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setContactSuccess(true);
      } else {
        setContactError(result.error || "Failed to contact advisor.");
      }
    } catch (err) {
      console.error(err);
      setContactError("An unexpected error occurred. Please try again.");
    } finally {
      setContactModalLoading(false);
    }
  };

  // 4. Budget Advisor
  const handleBudgetSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setBudgetLoading(true);

    try {
      const res = await fetch("/api/ai/budget-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          income: budgetIncome,
          savings: budgetSavings,
          debt: budgetDebt
        })
      });
      const result = await res.json();
      setBudgetResult(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      setBudgetLoading(false);
    }
  };

  // 5. Mortgage & EMI Calculator
  const handleMortgageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMortgageLoading(true);

    try {
      const res = await fetch("/api/ai/mortgage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          principal: mortgagePrincipal,
          interestRate: mortgageRate,
          tenureYears: mortgageTenure
        })
      });
      const result = await res.json();
      setMortgageResult(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      setMortgageLoading(false);
    }
  };

  // 6. Comparison
  const handleCompareSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setCompareLoading(true);

    try {
      const res = await fetch("/api/ai/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyIds: [compareProp1, compareProp2, compareProp3].filter(Boolean)
        })
      });
      const result = await res.json();
      setCompareResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setCompareLoading(false);
    }
  };

  // 7. Booking Workflow Handlers
  const handleBookingVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail || !bookingMsg || !bookingDate) {
      setBookingError("Please fill out all required fields, including appointment date.");
      return;
    }
    setBookingLoading(true);
    setBookingError("");

    try {
      const res = await fetch("/api/ai/appointment-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookingName,
          email: bookingEmail,
          phone: bookingPhone,
          request: bookingMsg,
          bookingDate,
          bookingTime,
          bookingDay
        })
      });

      if (!res.ok) {
        setBookingError("Failed to verify appointment details. Please try again.");
        setBookingLoading(false);
        return;
      }

      const result = await res.json();

      if (result.is_spam) {
        setBookingError("Your inquiry could not be verified by Olivia. Please ensure details are genuine and do not contain marketing materials.");
        setBookingLoading(false);
        return;
      }

      setBookingVerification(result);

      if (!result.completed) {
        setBookingChatHistory([
          { role: "user", content: bookingMsg },
          { role: "assistant", content: result.message }
        ]);
        setBookingStep("chat");
      } else {
        setBookingStep("summary");
      }
    } catch (err: any) {
      console.error(err);
      setBookingError("An unexpected error occurred during verification. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  const handleBookingChatSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!bookingChatInput.trim()) return;

    const userText = bookingChatInput;
    setBookingChatInput("");
    setBookingChatHistory(prev => [...prev, { role: "user", content: userText }]);
    setBookingLoading(true);

    try {
      const updatedHistory = [
        ...bookingChatHistory.map(m => ({ role: m.role, content: m.content })),
        { role: "user", content: userText }
      ];

      const res = await fetch("/api/ai/appointment-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookingName,
          email: bookingEmail,
          phone: bookingPhone,
          request: bookingMsg,
          bookingDate,
          bookingTime,
          bookingDay,
          conversationHistory: updatedHistory
        })
      });

      if (!res.ok) {
        setBookingError("Failed to send details to Olivia. Please try again.");
        setBookingLoading(false);
        return;
      }

      const result = await res.json();
      setBookingVerification(result);

      if (!result.completed) {
        setBookingChatHistory(prev => [
          ...prev,
          { role: "assistant", content: result.message }
        ]);
      } else {
        setBookingStep("summary");
      }
    } catch (err) {
      console.error(err);
      setBookingError("Failed to communicate with Olivia. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  const handleBookingConfirm = async () => {
    if (!bookingVerification) return;
    setBookingLoading(true);

    try {
      const summary = bookingVerification.summary || {};
      const finalDate = bookingDate ? `${bookingDay}, ${bookingDate} at ${bookingTime}` : (summary.date || "Not specified");
      const res = await fetch("/api/ai/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: bookingName,
          email: bookingEmail,
          phone: bookingPhone,
          request: bookingMsg,
          intent: summary.intent || "Property Viewing",
          lead_score: bookingVerification.lead_score || 50,
          urgency: summary.urgency || "Warm Lead",
          budget: summary.budget || "Not specified",
          location: summary.location || "Not specified",
          appointment_date: finalDate,
          property_type: summary.property_type || "Not specified"
        })
      });

      if (!res.ok) {
        setBookingError("Failed to confirm your appointment. Please try again.");
        setBookingLoading(false);
        return;
      }

      const result = await res.json();
      setBookingSuccess(result.data);
    } catch (err) {
      console.error(err);
      setBookingError("Failed to confirm your appointment. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  const handleBookingEdit = () => {
    setBookingStep("form");
    setBookingVerification(null);
    setBookingChatHistory([]);
  };

  // 8. Compliance & RAG Hub
  const handleKbSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!kbQuery.trim()) return;
    setKbLoading(true);

    try {
      const res = await fetch("/api/ai/knowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: kbQuery })
      });
      const result = await res.json();
      setKbReply(result.reply);
    } catch (err) {
      console.error(err);
    } finally {
      setKbLoading(false);
    }
  };

  const handleKbSearchDirect = async (q: string) => {
    setKbLoading(true);
    try {
      const res = await fetch("/api/ai/knowledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q })
      });
      const result = await res.json();
      setKbReply(result.reply);
    } catch (err) {
      console.error(err);
    } finally {
      setKbLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans flex items-end gap-3 sm:gap-4 max-w-[calc(100vw-2rem)]">
      {/* Floating Vertical Icon Dock */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col gap-2 bg-[#081322]/90 border border-tertiary/20 p-2 shadow-2xl rounded-none backdrop-blur-md shrink-0"
      >
        <motion.button
          onClick={() => handleTabClick("chat")}
          animate={{ scale: isOpen && activeTab === "chat" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "chat" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="Olivia Advisor Chat"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            Olivia Advisor Chat
          </span>
        </motion.button>

        <motion.button
          disabled
          onClick={() => handleTabClick("search")}
          animate={{ scale: 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="p-3 transition-colors duration-300 relative group cursor-not-allowed opacity-40 text-tertiary/50"
          title="AI Search Assistant (Disabled)"
        >
          <Search className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Search Assistant (Disabled)
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("recs")}
          animate={{ scale: isOpen && activeTab === "recs" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "recs" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="AI Property Matcher"
        >
          <Sliders className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Property Matcher
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("budget")}
          animate={{ scale: isOpen && activeTab === "budget" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "budget" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="AI Budget Advisor"
        >
          <LineChart className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Budget Advisor
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("mortgage")}
          animate={{ scale: isOpen && activeTab === "mortgage" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "mortgage" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="AI Mortgage Advisor"
        >
          <Calculator className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Mortgage Advisor
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("compare")}
          animate={{ scale: isOpen && activeTab === "compare" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "compare" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="AI Property Comparer"
        >
          <Scale className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Property Comparer
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("booking")}
          animate={{ scale: isOpen && activeTab === "booking" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "booking" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="AI Appointment Scheduler"
        >
          <Calendar className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Appointment Scheduler
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("voice")}
          animate={{ scale: isOpen && activeTab === "voice" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "voice" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="Olivia AI Voice Concierge"
        >
          <Mic className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            Olivia AI Voice Concierge
          </span>
        </motion.button>

        <motion.button
          onClick={() => handleTabClick("knowledge")}
          animate={{ scale: isOpen && activeTab === "knowledge" ? 1.15 : 1.0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`p-3 transition-colors duration-300 relative group cursor-pointer ${isOpen && activeTab === "knowledge" ? "bg-tertiary text-primary" : "text-tertiary hover:bg-tertiary/10"
            }`}
          title="AI Compliance RAG Hub"
        >
          <BookOpen className="w-5 h-5" />
          <span className="absolute right-full mr-2 px-2 py-1 bg-primary text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-tertiary/20">
            AI Compliance RAG Hub
          </span>
        </motion.button>
      </motion.div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#081322]/40 backdrop-blur-sm z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, x: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, x: shouldReduceMotion ? 0 : 30 }}
            transition={{ duration: 0.4, ease: premiumEase }}
            className="fixed inset-x-4 bottom-24 top-4 sm:relative sm:inset-auto sm:w-[420px] md:w-[480px] h-auto sm:h-[650px] bg-[#0c1c30]/95 backdrop-blur-xl border border-tertiary/20 shadow-2xl flex flex-col rounded-none overflow-hidden z-50"
          >
            {/* Drawer Header */}
            <div className="bg-[#081322] px-6 py-4 border-b border-tertiary/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-tertiary/10 text-tertiary border border-tertiary/30 flex items-center justify-center rounded-none font-serif text-sm">
                  R
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
                    {activeTab === "chat" && "Regent Concierge (Olivia)"}
                    {activeTab === "search" && "AI Property Search"}
                    {activeTab === "recs" && "AI Preferences Recommendation"}
                    {activeTab === "budget" && "AI Budget Advisor"}
                    {activeTab === "mortgage" && "AI Mortgage Calculator"}
                    {activeTab === "compare" && "AI Property Compare"}
                    {activeTab === "booking" && "AI Appointment Booking"}
                    {activeTab === "knowledge" && "AI Compliance RAG"}
                    {activeTab === "voice" && "AI Voice Concierge (Olivia)"}
                  </h4>
                  <p className="text-[10px] text-tertiary tracking-widest uppercase flex items-center gap-1">
                    <Shield className="w-2.5 h-2.5" /> Elite AI Advisory Suite
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

            {/* Drawer Content */}
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 scrollbar-thin text-[#e2e8f0]">

              {/* 1. Chat Tab */}
              {activeTab === "chat" && (
                <div className="flex-1 flex flex-col h-full gap-4">
                  <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-1">
                    {chatMessages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: msg.sender === "client" ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-2"
                      >
                        <div
                          className={`flex gap-3 max-w-[85%] ${msg.sender === "client" ? "self-end flex-row-reverse" : "self-start"
                            }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-none border flex items-center justify-center text-xs shrink-0 ${msg.sender === "client"
                                ? "bg-tertiary/10 border-tertiary/30 text-tertiary"
                                : "bg-primary border-outline/20 text-white"
                              }`}
                          >
                            {msg.sender === "client" ? <User className="w-4 h-4" /> : <Award className="w-4 h-4 text-tertiary" />}
                          </div>

                          <div
                            className={`p-3 text-sm leading-relaxed border ${msg.sender === "client"
                                ? "bg-tertiary/10 border-tertiary/20 text-white"
                                : "bg-surface-container-low border-outline/10 text-[#e2e8f0]"
                              }`}
                          >
                            {msg.text}
                          </div>
                        </div>

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
                                  <SafeImage
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
                      </motion.div>
                    ))}

                    {isChatTyping && (
                      <div className="flex gap-3 max-w-[85%] self-start">
                        <div className="w-8 h-8 rounded-none border border-outline/20 bg-primary flex items-center justify-center text-xs text-white">
                          <Award className="w-4 h-4 text-tertiary" />
                        </div>
                        <div className="bg-surface-container-low border border-outline/10 p-3 flex items-center gap-1">
                          <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                          <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                          <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  <form onSubmit={handleChatSend} className="pt-2 border-t border-tertiary/10 bg-[#081322] flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask Olivia about investments, regions..."
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

              {/* 2. Search Tab */}
              {activeTab === "search" && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-white/60">Type a conversational search query. Our AI will translate it to database SQL parameters.</p>
                  <form onSubmit={handleSearchSubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="e.g., luxury apartment in Richmond with a gym"
                      className="flex-1 bg-[#081322] border border-outline/20 px-3 py-2 text-sm focus:outline-none focus:border-tertiary text-white"
                    />
                    <button type="submit" disabled={searchLoading} className="bg-tertiary text-primary px-4 py-2 font-semibold text-sm hover:bg-tertiary-hover cursor-pointer">
                      {searchLoading ? "..." : "Search"}
                    </button>
                  </form>

                  {searchNarrative && (
                    <div className="bg-surface-container-low border border-outline/10 p-3 text-xs text-white/80 leading-relaxed font-serif">
                      {searchNarrative}
                    </div>
                  )}

                  <div className="flex flex-col gap-2 mt-2">
                    {searchResults.map((prop) => (
                      <Link
                        href={`/portfolio/${prop.id}`}
                        key={prop.id}
                        onClick={() => setIsOpen(false)}
                        className="bg-surface-container-low/40 hover:bg-surface-container-low border border-outline/10 p-3 flex justify-between items-center transition-all group"
                      >
                        <div>
                          <h5 className="font-serif text-sm font-semibold text-white group-hover:text-tertiary transition-colors">{prop.title}</h5>
                          <p className="text-[10px] text-white/50">{prop.location}</p>
                        </div>
                        <span className="text-xs font-bold text-tertiary">{prop.price}</span>
                      </Link>
                    ))}
                    {!searchLoading && searchResults.length === 0 && searchQuery && (
                      <p className="text-xs text-center text-white/40 mt-4">No matching assets found.</p>
                    )}
                  </div>
                </div>
              )}

              {/* 3. Recommendations Tab */}
              {activeTab === "recs" && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-white/60 font-serif leading-relaxed">Match your investment targets with active properties via vector similarity.</p>
                  <form onSubmit={handleRecsSubmit} className="flex flex-col gap-3 border-b border-tertiary/10 pb-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Category</label>
                        <select
                          value={recCategory}
                          onChange={(e) => setRecCategory(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        >
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Land & Farms">Land & Farms</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Property Type</label>
                        <select
                          value={recPropertyType}
                          onChange={(e) => setRecPropertyType(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        >
                          <option value="">All Types</option>
                          <option value="apartment">Apartment</option>
                          <option value="villa">Villa</option>
                          <option value="house">House</option>
                          <option value="penthouse">Penthouse</option>
                          <option value="duplex">Duplex</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="office">Office</option>
                          <option value="retail">Retail</option>
                          <option value="warehouse">Warehouse</option>
                          <option value="farmhouse">Farmhouse</option>
                          <option value="land">Land</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Preferred Region</label>
                        <input
                          type="text"
                          value={recLocation}
                          onChange={(e) => setRecLocation(e.target.value)}
                          placeholder="e.g. London"
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Keywords / Features</label>
                        <input
                          type="text"
                          value={recSearchQuery}
                          onChange={(e) => setRecSearchQuery(e.target.value)}
                          placeholder="e.g. pool, gym, garden"
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Min Budget (£)</label>
                        <input
                          type="number"
                          value={recMinBudget}
                          onChange={(e) => setRecMinBudget(e.target.value)}
                          placeholder="Min budget"
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Max Budget (£)</label>
                        <input
                          type="number"
                          value={recMaxBudget}
                          onChange={(e) => setRecMaxBudget(e.target.value)}
                          placeholder="Max budget"
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Investment Goal</label>
                        <select
                          value={recInvestmentGoal}
                          onChange={(e) => setRecInvestmentGoal(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        >
                          <option value="">No Preference</option>
                          <option value="Capital Growth">Capital Growth</option>
                          <option value="Immediate Cash Flow">Immediate Cash Flow</option>
                          <option value="High Rental Yield">High Rental Yield</option>
                          <option value="Long Term Hold">Long Term Hold</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">ROI Requirement (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={recRoi}
                          onChange={(e) => setRecRoi(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Min Beds</label>
                        <input
                          type="number"
                          value={recBedrooms}
                          onChange={(e) => setRecBedrooms(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Min Baths</label>
                        <input
                          type="number"
                          value={recBathrooms}
                          onChange={(e) => setRecBathrooms(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Min Size (sqft)</label>
                        <input
                          type="number"
                          value={recMinSqft}
                          onChange={(e) => setRecMinSqft(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={recLoading}
                      className="bg-tertiary text-primary py-2.5 font-semibold text-xs uppercase tracking-wider hover:bg-tertiary-hover mt-2 cursor-pointer transition-colors"
                    >
                      {recLoading ? "Analyzing Supabase Data..." : "Retrieve Matching Assets"}
                    </button>
                  </form>

                  <div className="flex flex-col gap-4 mt-2">
                    {recResults.map((prop) => (
                      <div
                        key={prop.id}
                        className="bg-surface-container-low/40 border border-outline/10 p-4 flex flex-col gap-3 transition-all relative"
                      >
                        {/* Top Header: Image, Title, Price, Type */}
                        <div className="flex gap-4">
                          <div className="relative w-20 h-20 bg-[#1a2e46] overflow-hidden shrink-0 border border-outline/10">
                            <SafeImage
                              src={prop.images && prop.images[0] ? prop.images[0] : "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"}
                              alt={prop.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="min-w-0 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-1">
                                <h6 className="font-serif text-[11px] sm:text-xs font-bold text-white leading-snug truncate">
                                  {prop.title}
                                </h6>
                                <span className="text-[8px] px-1.5 py-0.5 bg-tertiary/10 border border-tertiary/30 text-tertiary font-bold uppercase shrink-0 font-sans">
                                  {prop.matchPercentage || 100}% Match
                                </span>
                              </div>
                              <p className="text-[9px] text-white/50 font-sans mt-0.5">{prop.location} • <span className="text-white/70 font-semibold">{prop.property_type || "Premium Asset"}</span></p>
                              <p className="text-[9px] text-white/60 font-sans line-clamp-1 mt-1">{prop.description}</p>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-xs font-bold text-tertiary font-serif">{prop.price}</span>
                              <span className="text-[8px] text-white/60 font-sans">{prop.bedrooms} Beds • {prop.bathrooms} Baths • {prop.sqft?.toLocaleString()} sqft</span>
                            </div>
                          </div>
                        </div>

                        {/* Investment Stats Panel */}
                        <div className="grid grid-cols-3 gap-2 bg-[#081322]/50 border border-outline/5 p-2 text-center text-xs font-serif">
                          <div className="flex flex-col">
                            <span className="text-[7px] text-white/40 uppercase tracking-wider font-sans">ROI</span>
                            <span className="text-tertiary font-bold text-[10px]">{prop.roi || 6.2}%</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[7px] text-white/40 uppercase tracking-wider font-sans">Rental Yield</span>
                            <span className="text-white font-bold text-[10px]">{prop.rental_yield || 5.1}%</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[7px] text-white/40 uppercase tracking-wider font-sans">Advisory Score</span>
                            <span className="text-white font-bold text-[10px]">{prop.demand_score || 85}/100</span>
                          </div>
                        </div>

                        {/* Matches Reasons */}
                        {prop.explanation && prop.explanation.length > 0 && (
                          <div className="pt-2 border-t border-outline/10 text-[9px] text-white/60 font-sans flex flex-col gap-1">
                            <span className="font-bold text-tertiary uppercase tracking-wider text-[8px]">Why This Property Matches:</span>
                            {prop.explanation.map((item: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-1">
                                <span className="text-tertiary font-sans">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Actions Bar */}
                        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-outline/10">
                          <Link
                            href={`/portfolio/${prop.id}`}
                            onClick={() => setIsOpen(false)}
                            className="text-[10px] text-center border border-outline/30 hover:border-white text-white font-serif uppercase py-1.5 transition-colors cursor-pointer flex items-center justify-center"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => {
                              setContactPropertyId(prop.id);
                              setContactPropertyName(prop.title);
                              setContactName("");
                              setContactEmail("");
                              setContactPhone("");
                              setContactSuccess(false);
                              setContactError("");
                              setContactModalOpen(true);
                            }}
                            className="text-[10px] text-center bg-tertiary hover:bg-tertiary-hover text-primary font-bold uppercase py-1.5 transition-colors cursor-pointer"
                          >
                            Contact Advisor
                          </button>
                        </div>

                        <div className="flex justify-between items-center text-[8px] mt-1 text-white/40 font-sans uppercase tracking-wider">
                          <button
                            onClick={() => {
                              setSavedProperties(prev => 
                                prev.includes(prop.id) ? prev.filter(id => id !== prop.id) : [...prev, prop.id]
                              );
                            }}
                            className="hover:text-tertiary transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            ★ {savedProperties.includes(prop.id) ? "Saved" : "Save Asset"}
                          </button>
                          <button
                            onClick={() => {
                              if (!compareProp1 || compareProp1 === prop.id) {
                                setCompareProp1(prop.id);
                              } else if (!compareProp2 || compareProp2 === prop.id) {
                                setCompareProp2(prop.id);
                              } else {
                                setCompareProp3(prop.id);
                              }
                              setActiveTab("compare");
                            }}
                            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                          >
                            ⇄ Compare
                          </button>
                        </div>
                      </div>
                    ))}
                    {recResults.length === 0 && !recLoading && (
                      <p className="text-xs text-center text-white/40 mt-4 font-serif">No matching assets found.</p>
                    )}
                    {recHasMore && (
                      <button
                        onClick={handleRecsLoadMore}
                        disabled={recLoading}
                        className="w-full mt-4 py-2.5 border border-tertiary text-tertiary font-sans text-xs uppercase tracking-widest hover:bg-tertiary/10 transition-colors disabled:opacity-40 cursor-pointer text-center"
                      >
                        {recLoading ? "Loading More..." : "Load More Properties"}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* 4. Budget Advisor Tab */}
              {activeTab === "budget" && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-white/60">Calculate maximum real estate purchase budget and score Debt-to-Income (DTI) thresholds.</p>
                  <form onSubmit={handleBudgetSubmit} className="flex flex-col gap-3">
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Gross Annual Earnings (£)</label>
                      <input
                        type="number"
                        value={budgetIncome}
                        onChange={(e) => setBudgetIncome(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Accumulated Savings / Downpayment (£)</label>
                      <input
                        type="number"
                        value={budgetSavings}
                        onChange={(e) => setBudgetSavings(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Total Annual Debt Obligations (£)</label>
                      <input
                        type="number"
                        value={budgetDebt}
                        onChange={(e) => setBudgetDebt(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={budgetLoading}
                      className="bg-tertiary text-primary py-2 font-semibold text-xs uppercase tracking-wider hover:bg-tertiary-hover cursor-pointer"
                    >
                      {budgetLoading ? "Analyzing profile..." : "Generate Budget Analysis"}
                    </button>
                  </form>

                  {budgetResult && (
                    <div className="mt-4 border-t border-outline/10 pt-4 flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#081322] p-2 border border-outline/10 text-center">
                          <span className="text-[9px] text-white/50 block">Max Property Budget</span>
                          <span className="font-serif text-sm font-bold text-tertiary">£{budgetResult.max_property_price.toLocaleString()}</span>
                        </div>
                        <div className="bg-[#081322] p-2 border border-outline/10 text-center">
                          <span className="text-[9px] text-white/50 block">Available Downpayment</span>
                          <span className="font-serif text-sm font-bold text-white">£{budgetResult.available_down_payment.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low border border-outline/10 p-3 text-xs leading-relaxed font-serif text-white/90">
                        <strong>Advisor Assessment:</strong> {budgetResult.ai_advice}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 5. Mortgage Tab */}
              {activeTab === "mortgage" && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-white/60">Generate standard mathematical EMI schedules alongside Olivia's conversational advice.</p>
                  <form onSubmit={handleMortgageSubmit} className="flex flex-col gap-3">
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Loan Amount (£)</label>
                      <input
                        type="number"
                        value={mortgagePrincipal}
                        onChange={(e) => setMortgagePrincipal(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Interest Rate (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          value={mortgageRate}
                          onChange={(e) => setMortgageRate(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Tenure (Years)</label>
                        <input
                          type="number"
                          value={mortgageTenure}
                          onChange={(e) => setMortgageTenure(e.target.value)}
                          className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={mortgageLoading}
                      className="bg-tertiary text-primary py-2 font-semibold text-xs uppercase tracking-wider hover:bg-tertiary-hover cursor-pointer"
                    >
                      {mortgageLoading ? "Calculating..." : "Compute EMI Plan"}
                    </button>
                  </form>

                  {mortgageResult && (
                    <div className="mt-4 border-t border-outline/10 pt-4 flex flex-col gap-3 text-xs">
                      <div className="flex justify-between items-center">
                        <span>Monthly Installment (EMI)</span>
                        <strong className="text-tertiary font-serif text-sm">£{mortgageResult.emi.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total Interest Paid</span>
                        <strong className="text-white font-serif">£{mortgageResult.totalInterest.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between items-center border-b border-outline/10 pb-2">
                        <span>Total Capital Repaid</span>
                        <strong className="text-white font-serif">£{mortgageResult.totalPayout.toLocaleString()}</strong>
                      </div>
                      <div className="bg-surface-container-low border border-outline/10 p-3 leading-relaxed font-serif text-white/90">
                        <strong>Interest Breakdown Commentary:</strong> {mortgageResult.advisoryNarrative}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 6. Comparison Tab */}
              {activeTab === "compare" && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-white/60">Select up to three properties to run an unstructured alignment analysis using Gemini.</p>
                  <form onSubmit={handleCompareSubmit} className="flex flex-col gap-3">
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Asset 1</label>
                      <select
                        value={compareProp1}
                        onChange={(e) => setCompareProp1(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      >
                        {dbProperties.map((prop) => (
                          <option key={prop.id} value={prop.id}>{prop.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Asset 2</label>
                      <select
                        value={compareProp2}
                        onChange={(e) => setCompareProp2(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      >
                        {dbProperties.map((prop) => (
                          <option key={prop.id} value={prop.id}>{prop.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Asset 3</label>
                      <select
                        value={compareProp3}
                        onChange={(e) => setCompareProp3(e.target.value)}
                        className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white"
                      >
                        <option value="">(None)</option>
                        {dbProperties.map((prop) => (
                          <option key={prop.id} value={prop.id}>{prop.title}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      disabled={compareLoading}
                      className="bg-tertiary text-primary py-2 font-semibold text-xs uppercase tracking-wider hover:bg-tertiary-hover cursor-pointer"
                    >
                      {compareLoading ? "Generating matrix..." : "Compare Properties"}
                    </button>
                  </form>

                  {compareResult && (
                    <div className="mt-4 border-t border-outline/10 pt-4 flex flex-col gap-4">
                      {compareResult.breakdowns && compareResult.breakdowns.map((item: any, r: number) => (
                        <div key={r} className="bg-[#081322] border border-outline/10 p-3 flex flex-col gap-2">
                          <h6 className="font-serif text-xs font-bold text-tertiary">{item.title}</h6>
                          <p className="text-[10px] text-white/80">
                            <strong>Pros:</strong> {Array.isArray(item.pros) ? item.pros.join(", ") : item.pros}
                          </p>
                          <p className="text-[10px] text-white/60">
                            <strong>Cons:</strong> {Array.isArray(item.cons) ? item.cons.join(", ") : item.cons}
                          </p>
                          <div className="flex justify-between text-[9px] border-t border-outline/10 pt-2 mt-1">
                            <span>Appreciation: {item.appreciationOutlook}</span>
                            <span>Transit: {item.transitScore}</span>
                          </div>
                        </div>
                      ))}
                      {compareResult.investmentRecommendation && (
                        <div className="bg-surface-container-low border border-outline/10 p-3 text-xs leading-relaxed font-serif text-white/90">
                          <strong>Investment Recommendation:</strong> {compareResult.investmentRecommendation}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* 7. Booking Tab */}
              {activeTab === "booking" && (
                <div className="flex flex-col gap-4 h-full">
                  <p className="text-xs text-white/60">Schedule consulting and viewing sessions with Olivia. Available slots are evaluated dynamically.</p>

                  {bookingSuccess ? (
                    <div className="bg-surface-container-low border border-tertiary/20 p-6 text-center flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
                      <CheckCircle className="w-12 h-12 text-tertiary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="font-serif text-sm font-semibold text-white">Consultation Confirmed</h5>
                        <p className="text-[11px] text-white/70">Your appointment has been verified and registered with our private real estate advisory desk.</p>
                      </div>
                      <div className="w-full bg-[#081322] p-3 text-left border border-outline/10 text-xs flex flex-col gap-2 font-serif">
                        <p><strong>Advisor Assigned:</strong> Olivia (Senior Advisor)</p>
                        <p><strong>Preferred Time:</strong> {bookingSuccess.scheduled_time || "Thursday Morning (Next Week)"}</p>
                        <p><strong>Notifications Sent:</strong> Admin Dashboard, Email, WhatsApp</p>
                      </div>
                      <span className="text-[9px] text-tertiary uppercase tracking-widest mt-1">
                        Confirmation ID: {bookingSuccess.appointment_id || "REG-90812"}
                      </span>
                    </div>
                  ) : (
                    <>
                      {bookingError && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-3 text-xs flex items-center gap-2">
                          <Shield className="w-4 h-4 text-red-400 shrink-0" />
                          <span>{bookingError}</span>
                        </div>
                      )}

                      {bookingStep === "form" && (
                        <form onSubmit={handleBookingVerify} className="flex flex-col gap-3">
                          <div>
                            <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Full Name</label>
                            <input
                              type="text"
                              required
                              value={bookingName}
                              onChange={(e) => setBookingName(e.target.value)}
                              className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Email Address</label>
                            <input
                              type="email"
                              required
                              value={bookingEmail}
                              onChange={(e) => setBookingEmail(e.target.value)}
                              className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Phone Number</label>
                            <input
                              type="tel"
                              value={bookingPhone}
                              onChange={(e) => setBookingPhone(e.target.value)}
                              className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                            />
                          </div>

                          {/* Interactive Date & Day Selection */}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Preferred Date</label>
                              <input
                                type="date"
                                required
                                value={bookingDate}
                                onChange={(e) => {
                                  setBookingDate(e.target.value);
                                  if (e.target.value) {
                                    const d = new Date(e.target.value);
                                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                    setBookingDay(days[d.getDay()]);
                                  }
                                }}
                                className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Preferred Day</label>
                              <select
                                value={bookingDay}
                                onChange={(e) => setBookingDay(e.target.value)}
                                className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                              >
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                              </select>
                            </div>
                          </div>

                          {/* Interactive Time Slot Selection */}
                          <div>
                            <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Preferred Time Slot</label>
                            <select
                              value={bookingTime}
                              onChange={(e) => setBookingTime(e.target.value)}
                              className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary h-[34px]"
                            >
                              <option value="09:00 AM">09:00 AM</option>
                              <option value="10:00 AM">10:00 AM</option>
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="12:00 PM">12:00 PM (Noon)</option>
                              <option value="01:00 PM">01:00 PM</option>
                              <option value="02:00 PM">02:00 PM</option>
                              <option value="03:00 PM">03:00 PM</option>
                              <option value="04:00 PM">04:00 PM</option>
                              <option value="05:00 PM">05:00 PM</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block">Scheduling Request</label>
                            <textarea
                              value={bookingMsg}
                              onChange={(e) => setBookingMsg(e.target.value)}
                              rows={3}
                              className="w-full bg-[#081322] border border-outline/20 p-2 text-xs text-white resize-none focus:outline-none focus:border-tertiary"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={bookingLoading}
                            className="bg-tertiary text-primary py-2 font-semibold text-xs uppercase tracking-wider hover:bg-tertiary-hover cursor-pointer transition-colors w-full flex items-center justify-center gap-2"
                          >
                            {bookingLoading ? (
                              <>
                                <span className="w-2.5 h-2.5 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                                Running Olivia AI Verification...
                              </>
                            ) : "Confirm Schedule Session"}
                          </button>
                        </form>
                      )}

                      {bookingStep === "chat" && (
                        <div className="flex-1 flex flex-col min-h-0 h-[450px]">
                          <div className="bg-tertiary/10 border border-tertiary/20 p-2 text-[10px] text-tertiary uppercase tracking-wider mb-2 font-serif text-center">
                            Verification Chat: Collecting Missing Details
                          </div>
                          <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-1 min-h-0">
                            {bookingChatHistory.map((msg, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex gap-2.5 max-w-[85%] ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
                                  }`}
                              >
                                <div
                                  className={`w-7 h-7 border flex items-center justify-center text-[10px] shrink-0 ${msg.role === "user"
                                      ? "bg-tertiary/10 border-tertiary/30 text-tertiary"
                                      : "bg-primary border-outline/20 text-white"
                                    }`}
                                >
                                  {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5 text-tertiary" />}
                                </div>
                                <div
                                  className={`p-2.5 text-xs leading-relaxed border ${msg.role === "user"
                                      ? "bg-tertiary/10 border-tertiary/20 text-white"
                                      : "bg-surface-container-low border-outline/10 text-[#e2e8f0]"
                                    }`}
                                >
                                  {msg.content}
                                </div>
                              </motion.div>
                            ))}

                            {bookingLoading && (
                              <div className="flex gap-2.5 max-w-[85%] self-start">
                                <div className="w-7 h-7 border border-outline/20 bg-primary flex items-center justify-center text-[10px] text-white">
                                  <Award className="w-3.5 h-3.5 text-tertiary" />
                                </div>
                                <div className="bg-surface-container-low border border-outline/10 p-2.5 flex items-center gap-1">
                                  <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                                  <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                                  <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                                </div>
                              </div>
                            )}
                            <div ref={bookingChatEndRef} />
                          </div>

                          <form onSubmit={handleBookingChatSend} className="pt-2 mt-2 border-t border-tertiary/10 flex gap-2">
                            <input
                              type="text"
                              value={bookingChatInput}
                              onChange={(e) => setBookingChatInput(e.target.value)}
                              placeholder="Provide requested details..."
                              disabled={bookingLoading}
                              className="flex-1 bg-[#081322] border border-outline/20 px-3 py-2 text-xs focus:outline-none focus:border-tertiary text-white"
                            />
                            <button
                              type="submit"
                              disabled={bookingLoading}
                              className="bg-tertiary hover:bg-tertiary-hover text-primary px-3 flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" />
                            </button>
                          </form>
                        </div>
                      )}

                      {bookingStep === "summary" && bookingVerification && (
                        <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4">
                          <div className="bg-surface-container-low border border-tertiary/20 p-4 flex flex-col gap-3">
                            <h5 className="font-serif text-xs font-semibold text-white tracking-widest uppercase border-b border-outline/10 pb-2">
                              Please Review Your Appointment Details
                            </h5>
                            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-serif">
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">CLIENT</span>
                                <span className="text-white font-semibold">{bookingName}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">INTENT</span>
                                <span className="text-white font-semibold">{bookingVerification.summary?.intent || "Property Viewing"}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">LOCATION</span>
                                <span className="text-white font-semibold">{bookingVerification.summary?.location || "Not specified"}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">BUDGET</span>
                                <span className="text-tertiary font-bold">{bookingVerification.summary?.budget || "Not specified"}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">PREFERRED DATE</span>
                                <span className="text-white font-semibold">{bookingVerification.summary?.date || (bookingDate ? `${bookingDay}, ${bookingDate} at ${bookingTime}` : "Not specified")}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">PROPERTY TYPE</span>
                                <span className="text-white font-semibold">{bookingVerification.summary?.property_type || "Not specified"}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">URGENCY</span>
                                <span className={`text-[10px] px-2 py-0.5 font-sans uppercase font-bold border rounded-sm inline-block ${bookingVerification.summary?.urgency === "Hot Lead" ? "text-red-400 border-red-500/30 bg-red-500/5" :
                                    bookingVerification.summary?.urgency === "Warm Lead" ? "text-yellow-400 border-yellow-500/30 bg-yellow-500/5" :
                                      "text-slate-400 border-slate-500/30 bg-slate-500/5"
                                  }`}>{bookingVerification.summary?.urgency || "Warm Lead"}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-white/50 block font-sans">LEAD QUALITY SCORE</span>
                                <div className="flex items-center gap-1.5 font-sans font-bold">
                                  <span className={`text-xs ${bookingVerification.lead_score >= 80 ? "text-green-400" :
                                      bookingVerification.lead_score >= 50 ? "text-yellow-400" :
                                        "text-slate-400"
                                    }`}>{bookingVerification.lead_score}/100</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2.5">
                            <button
                              onClick={handleBookingEdit}
                              disabled={bookingLoading}
                              className="flex-1 border border-outline/30 text-white font-serif text-xs py-2 hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              Edit
                            </button>
                            <button
                              onClick={handleBookingConfirm}
                              disabled={bookingLoading}
                              className="flex-1 bg-tertiary hover:bg-tertiary-hover text-primary font-bold text-xs uppercase tracking-wider py-2 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              {bookingLoading ? (
                                <>
                                  <span className="w-2.5 h-2.5 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                                  Saving...
                                </>
                              ) : "Confirm & Schedule"}
                            </button>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* 8. Knowledge Base Tab */}
              {activeTab === "knowledge" && (
                <div className="flex flex-col gap-4">
                  <p className="text-xs text-white/60">Ask regulatory/tax questions regarding FEMA laws, TDS rules, and NRI property compliance.</p>
                  <form onSubmit={handleKbSubmit} className="flex gap-2">
                    <input
                      type="text" value={kbQuery} onChange={(e) => setKbQuery(e.target.value)}
                      placeholder="e.g., What are the TDS rules for buying from an NRI?"
                      className="flex-1 bg-[#081322] border border-outline/20 px-3 py-2 text-sm focus:outline-none focus:border-tertiary text-white"
                    />
                    <button type="submit" disabled={kbLoading} className="bg-tertiary text-primary px-4 py-2 font-semibold text-sm hover:bg-tertiary-hover cursor-pointer">
                      {kbLoading ? "..." : "Ask"}
                    </button>
                  </form>

                  {/* Suggested Questions */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-[10px] text-white/40 w-full font-semibold uppercase tracking-wider">Suggested Compliance Queries:</span>
                    {[
                      "What are the FEMA rules for an NRI buying a home?",
                      "What TDS rate applies when buying property from an NRI?",
                      "Can an NRI repatriate sale proceeds from property sales?",
                      "What are the rules for inheriting real estate as an NRI?"
                    ].map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setKbQuery(q);
                          handleKbSearchDirect(q);
                        }}
                        className="text-[10px] bg-tertiary/10 hover:bg-tertiary/20 text-tertiary border border-tertiary/20 px-2.5 py-1 text-left cursor-pointer transition-colors w-full"
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  {kbReply && (
                    <div className="bg-surface-container-low border border-outline/10 p-4 text-xs leading-relaxed font-serif text-white/90 flex flex-col gap-3 mt-2">
                      <p className="whitespace-pre-line">{kbReply}</p>
                    </div>
                  )}
                </div>
              )}

              {/* 9. Olivia Voice Concierge Tab */}
              {activeTab === "voice" && (
                <div className="flex flex-col gap-5 h-full relative">
                  {/* Embedded Custom Styles */}
                  <style>{`
                    @keyframes voiceWave {
                      0%, 100% { transform: scaleY(0.3); }
                      50% { transform: scaleY(1.2); }
                    }
                    .wave-bar {
                      display: inline-block;
                      width: 4px;
                      height: 28px;
                      background-color: #C5A059;
                      margin: 0 3px;
                      border-radius: 2px;
                      transform-origin: center;
                      animation: voiceWave 1.0s ease-in-out infinite;
                    }
                    .wave-bar:nth-child(2) { animation-delay: 0.15s; }
                    .wave-bar:nth-child(3) { animation-delay: 0.3s; }
                    .wave-bar:nth-child(4) { animation-delay: 0.45s; }
                    .wave-bar:nth-child(5) { animation-delay: 0.6s; }

                    @keyframes pulseMic {
                      0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.4); }
                      70% { box-shadow: 0 0 0 20px rgba(197, 160, 89, 0); }
                      100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
                    }
                    .pulse-mic-btn {
                      animation: pulseMic 2s infinite;
                    }
                  `}</style>

                  <div className="flex items-center justify-between border-b border-tertiary/10 pb-3">
                    <p className="text-xs text-white/70">Multilingual Voice Concierge (Language: <strong>{detectedLanguage}</strong>)</p>
                    <div className="flex items-center gap-2">
                      <select
                        value={detectedLanguage}
                        onChange={(e) => {
                          const newLang = e.target.value;
                          setDetectedLanguage(newLang);
                          if (typeof window !== 'undefined' && window.speechSynthesis) {
                            window.speechSynthesis.cancel();
                          }
                        }}
                        className="bg-[#081322] border border-outline/20 p-1 text-[10px] text-white focus:outline-none focus:border-tertiary cursor-pointer h-[34px] px-2"
                      >
                        {Object.keys(LANGUAGE_CODES).map((lang) => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                      <label className="text-[10px] text-white/50 tracking-wider uppercase flex items-center gap-1 cursor-pointer min-h-[44px]">
                        <input
                          type="checkbox"
                          checked={voiceOnlyMode}
                          onChange={(e) => setVoiceOnlyMode(e.target.checked)}
                          className="accent-tertiary"
                        />
                        Voice Only
                      </label>
                      <button
                        onClick={() => {
                          setVoiceMessages([{ sender: "concierge", text: "Hello, I'm Olivia. You can speak or type with me." }]);
                          setDetectedLanguage("English");
                          setVoiceStatusText("Idle");
                          if (typeof window !== 'undefined' && window.speechSynthesis) {
                            window.speechSynthesis.cancel();
                          }
                        }}
                        className="text-[10px] text-tertiary border border-tertiary/20 px-3 py-1 hover:bg-tertiary/10 cursor-pointer flex items-center gap-1 min-h-[44px]"
                        title="Reset Session"
                      >
                        <RefreshCw className="w-2.5 h-2.5" /> Reset
                      </button>
                    </div>
                  </div>

                  {/* Main circular voice interface */}
                  <div className="flex flex-col items-center justify-center py-6 gap-4 bg-[#081322]/40 border border-outline/10 p-6">
                    {/* Pulsing visual core */}
                    <div className="relative flex items-center justify-center w-32 h-32">
                      <button
                        onClick={handleMicClick}
                        className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ${isRecording ? 'bg-red-500/20 border-2 border-red-500 pulse-mic-btn' :
                            isSpeaking ? 'bg-tertiary/20 border-2 border-tertiary' :
                              'bg-tertiary hover:bg-tertiary-hover text-primary'
                          }`}
                      >
                        {isRecording ? (
                          <MicOff className="w-8 h-8 text-red-400" />
                        ) : isSpeaking ? (
                          <Volume2 className="w-8 h-8 text-tertiary animate-pulse" />
                        ) : (
                          <Mic className="w-8 h-8" />
                        )}
                      </button>
                    </div>

                    {/* Dynamic wave animation */}
                    {(isRecording || isSpeaking) && (
                      <div className="flex items-center justify-center h-8">
                        <span className="wave-bar"></span>
                        <span className="wave-bar"></span>
                        <span className="wave-bar"></span>
                        <span className="wave-bar"></span>
                        <span className="wave-bar"></span>
                      </div>
                    )}

                    <div className="text-center">
                      <span className={`text-xs font-bold uppercase tracking-widest ${isRecording ? 'text-red-400' :
                          isSpeaking ? 'text-tertiary' :
                            'text-white/60'
                        }`}>
                        {isRecording ? "🔴 Listening..." :
                          isSpeaking ? "🔊 Olivia Speaking..." :
                            voiceStatusText === "Processing..." ? "⏳ Processing..." :
                              "🎤 Tap to Speak"}
                      </span>
                      <p className="text-[10px] text-white/40 mt-1 font-serif">Supports English, Gujarati, Hindi, Spanish, Urdu, etc.</p>
                    </div>
                  </div>

                  {/* Audio Player (Hidden) */}
                  <audio
                    ref={audioPlayerRef}
                    onEnded={() => {
                      setIsSpeaking(false);
                      setVoiceStatusText("Idle");
                    }}
                    onError={() => {
                      setIsSpeaking(false);
                      setVoiceStatusText("Idle");
                    }}
                    className="hidden"
                  />

                  {/* Transcript Viewer (Hidden in Voice Only Mode) */}
                  {!voiceOnlyMode && (
                    <div className="flex-1 border border-outline/10 bg-[#081322]/20 p-4 overflow-y-auto flex flex-col gap-3 max-h-[200px] scrollbar-thin">
                      <span className="text-[9px] text-white/30 uppercase tracking-widest font-sans border-b border-outline/10 pb-1 mb-1 block">Live Transcript Logs</span>
                      {voiceMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col gap-1 text-xs max-w-[90%] ${msg.sender === "client" ? "self-end items-end" : "self-start items-start"
                            }`}
                        >
                          <span className="text-[9px] text-white/40 uppercase font-sans">
                            {msg.sender === "client" ? "You" : "Olivia"}
                          </span>
                          <div className={`p-2.5 leading-relaxed border ${msg.sender === "client" ? "bg-tertiary/10 border-tertiary/20 text-white" : "bg-[#081322]/50 border-outline/10 text-white/90"
                            }`}>
                            {msg.text}
                          </div>

                          {msg.properties && msg.properties.length > 0 && (
                            <div className="flex flex-col gap-2.5 mt-1.5 w-full">
                              {msg.properties.map((prop: any) => (
                                <Link
                                  href={`/portfolio/${prop.id}`}
                                  key={prop.id}
                                  onClick={() => setIsOpen(false)}
                                  className="bg-[#081322]/60 hover:bg-[#081322] border border-outline/10 hover:border-tertiary/30 p-2.5 flex gap-3 transition-all duration-300 group w-full text-left"
                                >
                                  <div className="relative w-12 h-12 bg-[#1a2e46] overflow-hidden shrink-0">
                                    {prop.images && prop.images[0] && (
                                      <SafeImage
                                        src={prop.images[0]}
                                        alt={prop.title}
                                        className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform"
                                      />
                                    )}
                                  </div>
                                  <div className="flex flex-col justify-center min-w-0 flex-1">
                                    <h5 className="font-serif text-[11px] font-semibold text-white truncate group-hover:text-tertiary transition-colors">
                                      {prop.title}
                                    </h5>
                                    <p className="text-[9px] text-white/60 mt-0.5">{prop.location} • <span className="text-tertiary font-bold">{prop.price}</span></p>
                                    
                                    {/* Premium Investment Metrics inline */}
                                    {prop.roi !== undefined && (
                                      <div className="grid grid-cols-3 gap-1.5 mt-2 pt-1.5 border-t border-outline/5 text-[8px] text-white/50">
                                        <div>
                                          <span className="block font-sans uppercase text-[7px] text-white/40">Est. ROI</span>
                                          <strong className="text-tertiary font-bold">{prop.roi}%</strong>
                                        </div>
                                        <div>
                                          <span className="block font-sans uppercase text-[7px] text-white/40">Yield</span>
                                          <strong className="text-white font-bold">{prop.rental_yield}%</strong>
                                        </div>
                                        <div>
                                          <span className="block font-sans uppercase text-[7px] text-white/40">Risk</span>
                                          <span className={`font-bold ${prop.risk_level === 'Low' ? 'text-green-400' : 'text-yellow-400'}`}>
                                            {prop.risk_level || 'Low'}
                                          </span>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Typing indicator when processing */}
                      {voiceStatusText === "Processing..." && (
                        <div className="flex flex-col gap-1 text-xs max-w-[90%] self-start items-start">
                          <span className="text-[9px] text-white/40 uppercase font-sans">Olivia</span>
                          <div className="bg-[#081322]/50 border border-outline/10 p-2.5 flex items-center gap-1">
                            <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                            <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                            <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="w-1.5 h-1.5 bg-tertiary rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Accessibility Fallback: Text input field at the bottom of the voice tab */}
                  <form onSubmit={handleVoiceTextInputSubmit} className="mt-2 flex gap-2 w-full">
                    <input
                      type="text"
                      value={voiceTextInput}
                      onChange={(e) => setVoiceTextInput(e.target.value)}
                      placeholder={`Type a message to Olivia (${detectedLanguage})...`}
                      disabled={voiceStatusText === "Processing..." || isSpeaking || isRecording}
                      className="flex-1 bg-[#081322] border border-outline/20 px-3 py-2 text-xs focus:outline-none focus:border-tertiary text-white min-h-[44px]"
                    />
                    <button
                      type="submit"
                      disabled={!voiceTextInput.trim() || voiceStatusText === "Processing..." || isSpeaking || isRecording}
                      className="bg-tertiary hover:bg-tertiary-hover text-primary px-3 flex items-center justify-center transition-colors cursor-pointer min-h-[44px]"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}
            {/* Contact Advisor Modal Overlay */}
            {contactModalOpen && (
              <div className="absolute inset-0 bg-[#081322]/95 backdrop-blur-md z-50 p-6 flex flex-col justify-center animate-in fade-in duration-300">
                <div className="flex justify-between items-center border-b border-tertiary/20 pb-3 mb-4">
                  <h5 className="font-serif text-sm font-semibold tracking-wider text-white uppercase">
                    Contact Regent Advisor
                  </h5>
                  <button 
                    onClick={() => {
                      setContactModalOpen(false);
                      setContactSuccess(false);
                      setContactError("");
                    }}
                    className="text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {contactSuccess ? (
                  <div className="text-center py-6 flex flex-col items-center gap-4">
                    <CheckCircle className="w-12 h-12 text-tertiary animate-bounce" />
                    <div>
                      <h6 className="font-serif text-sm font-semibold text-white">Inquiry Registered</h6>
                      <p className="text-xs text-white/70 mt-1 leading-relaxed font-sans">
                        Thank you. Your request for <span className="text-tertiary font-semibold">{contactPropertyName}</span> has been logged directly inside our Mayfair CRM. An advisory consultant will connect with you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setContactModalOpen(false);
                        setContactSuccess(false);
                      }}
                      className="mt-4 px-6 py-2 bg-tertiary text-primary text-xs font-semibold tracking-wider uppercase hover:bg-tertiary-hover cursor-pointer"
                    >
                      Return to Recommendations
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactAdvisorSubmit} className="flex flex-col gap-3">
                    <p className="text-xs text-white/70 mb-2 leading-relaxed">
                      Request private due diligence dossier and coordinate direct briefing for:<br/>
                      <strong className="text-tertiary font-serif">{contactPropertyName}</strong>
                    </p>

                    {contactError && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-200 p-2.5 text-xs">
                        {contactError}
                      </div>
                    )}

                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-[#0c1c30] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                        placeholder="e.g. Sir Arthur Conan"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Email Address</label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-[#0c1c30] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                        placeholder="e.g. arthur@mayfairwealth.com"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-tertiary tracking-widest uppercase mb-1 block font-sans">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full bg-[#0c1c30] border border-outline/20 p-2 text-xs text-white focus:outline-none focus:border-tertiary"
                        placeholder="e.g. +44 7700 900077"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactModalLoading}
                      className="mt-2 bg-tertiary hover:bg-tertiary-hover text-primary font-bold text-xs uppercase tracking-wider py-2.5 transition-colors cursor-pointer disabled:opacity-40"
                    >
                      {contactModalLoading ? "Registering Lead..." : "Submit Confidential Request"}
                    </button>
                  </form>
                )}
              </div>
            )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
