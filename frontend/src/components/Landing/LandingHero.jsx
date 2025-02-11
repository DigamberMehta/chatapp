import { motion } from "framer-motion";
import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white">
    <section className="container mx-auto flex items-center justify-center h-screen  px-4">
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl font-bold sm:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect & Chat with Your Community
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          A real-time chat application built for seamless communication with friends, peers, and your community.
        </motion.p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="flex items-center gap-2 bg-[#0BDA51] text-white hover:bg-[#0BDA51]">
              <MessageCircle className="w-5 h-5" /> Get Started
            </Button>

          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <Button variant="outline" className="flex items-center gap-2">
              <Users className="w-5 h-5" /> Learn More
            </Button>

          </motion.button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="https://scontent.whatsapp.net/v/t39.8562-34/427994311_379543138139277_6911984753687825348_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=SYC2QozZo1QQ7kNvgFjfh3g&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=Aj_25AgmRe8q70tIPfQrnOB&oh=01_Q5AaIN7CEHNbG-iEGC2eeW10Grir_FTP4Lry5lVpkSMdUowF&oe=67AF7880" 
          alt="Chat Illustration" 
          className="w-80 h-auto object-cover"
        />
      </div>
    </div>
  </section>
    </div>
  )
}

export default LandingHero