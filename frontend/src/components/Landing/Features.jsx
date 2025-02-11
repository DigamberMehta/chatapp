import { motion } from "framer-motion";
import { ShieldCheck, Accessibility, Gamepad2, ImageIcon } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 shadow-lg w-full max-w-md h-64 flex flex-col justify-between rounded-xl"
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <Icon size={32} className="text-blue-700" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-700 mt-2 flex-1">{description}</p>
    
    </motion.div>
  );
};

export default function Features() {
  return (
    <>
        <div className="flex flex-col items-center text-center p-10 space-y-8 bg-gradient-to-b from-[#FFEEDE] to-white">

      <h1 className="text-4xl font-bold">Explore Windows 11 features</h1>
      <p className="text-gray-600 max-w-2xl">
        Access AI from your fingertips with optimal performance at the ready.
        Embrace Windows 11 features to secure and refine your digital life.
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FeatureCard
          icon={ShieldCheck}
          title="Smart security"
          description="Before you even start your PC, Windows 11 is at work. Safeguard your device from phishing, network and cyber-attacks."
        />
        <FeatureCard
          icon={Accessibility}
          title="Windows 11 works how you work"
          description="Write with your own voice and adapt your digital experience to your unique audio and visual needs. Windows 11 OS is made for you."
        />
        <FeatureCard
          icon={Gamepad2}
          title="Gaming never looked so good"
          description="Immerse yourself in a cinematic gaming experience with next-level performance, smoother graphics, and natural lighting."
        />
        <FeatureCard
          icon={ImageIcon}
          title="Creativity meets intelligence"
          description="Use AI to focus on the moments that matter most. Edit your photos and videos with Windows 11."
        />
      </motion.div>
    </div>


</>

  );
}
