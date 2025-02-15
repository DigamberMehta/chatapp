import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How secure is our chat application?",
    answer:
      "Our chat app uses end-to-end encryption to ensure your conversations remain private and secure.",
  },
  {
    question: "Can I use this app on multiple devices?",
    answer:
      "Yes, you can access your account and messages from multiple devices simultaneously.",
  },
  {
    question: "Is there a premium version available?",
    answer:
      "Currently, our chat app is free to use. We may introduce premium features in the future.",
  },
  {
    question: "How do I report a bug or issue?",
    answer:
      "You can report bugs through the support section within the app or by contacting our team via email.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 100) setIsVisible(true);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full p-10 mt-10 rounded-2xl shadow-xl"
    >
      <div className="w-[65%] mx-auto">

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </div>
            <motion.div
              initial="collapsed"
              animate={openIndex === index ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
                collapsed: { height: 0, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }, // Same duration for smooth collapse
              }}
              className="overflow-hidden mt-2 text-gray-600"
            >
              <div className="py-2">{faq.answer}</div> {/* Keep it rendered always */}
            </motion.div>


          </motion.div>
        ))}
      </div>
      </div> 
    </motion.div>
  );
}
