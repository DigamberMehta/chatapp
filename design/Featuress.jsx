import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Features = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const visibleCards = 3;
  const totalCards = 6;
  const scrollAmount = 2; // Scrolls 2 cards at a time

  const handleNext = () => {
    if (currentIndex + scrollAmount < totalCards - visibleCards + 1) {
      setCurrentIndex(currentIndex + scrollAmount);
    } else {
      setCurrentIndex(totalCards - visibleCards);
    }
  };

  const handlePrev = () => {
    if (currentIndex - scrollAmount >= 0) {
      setCurrentIndex(currentIndex - scrollAmount);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="h-fit flex flex-col items-center justify-center py-[30px]">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-4 min-h-[250px] my-2"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * 33.33}%` }} 
          transition={{ duration: 0.6, ease: "easeInOut" }} 
        >
          {/* Card 1 */}
          <motion.div
            className="min-w-[30%] flex items-center justify-center flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=VETE-E16gmMQ7kNvgEwLFF-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=A3uJs2H6P6giMKLOwJ9d5TG&oh=01_Q5AaIPLdZ3qMvQZBPx2-_hYWVik4tDFYVikh4jVamF5Df4WW&oe=67B0EFCA" alt="" className="rounded-xl mb-4" />
            <span className="text-lg">Privacy and security</span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="min-w-[30%] flex items-center justify-center flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=VETE-E16gmMQ7kNvgEwLFF-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=A3uJs2H6P6giMKLOwJ9d5TG&oh=01_Q5AaIPLdZ3qMvQZBPx2-_hYWVik4tDFYVikh4jVamF5Df4WW&oe=67B0EFCA" alt="" className="rounded-xl mb-4" />
            <span className="text-lg">Privacy and security</span>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="min-w-[30%] flex items-center justify-center flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=VETE-E16gmMQ7kNvgEwLFF-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=A3uJs2H6P6giMKLOwJ9d5TG&oh=01_Q5AaIPLdZ3qMvQZBPx2-_hYWVik4tDFYVikh4jVamF5Df4WW&oe=67B0EFCA" alt="" className="rounded-xl mb-4" />
            <span className="text-lg">Privacy and security</span>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="min-w-[30%] flex items-center justify-center flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=VETE-E16gmMQ7kNvgEwLFF-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=A3uJs2H6P6giMKLOwJ9d5TG&oh=01_Q5AaIPLdZ3qMvQZBPx2-_hYWVik4tDFYVikh4jVamF5Df4WW&oe=67B0EFCA" alt="" className="rounded-xl mb-4" />
            <span className="text-lg">Privacy and security</span>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="min-w-[30%] flex items-center justify-center flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=VETE-E16gmMQ7kNvgEwLFF-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=A3uJs2H6P6giMKLOwJ9d5TG&oh=01_Q5AaIPLdZ3qMvQZBPx2-_hYWVik4tDFYVikh4jVamF5Df4WW&oe=67B0EFCA" alt="" className="rounded-xl mb-4" />
            <span className="text-lg">Privacy and security</span>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="min-w-[30%] flex items-center justify-center flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img src="https://scontent.whatsapp.net/v/t39.8562-34/409923743_807244881161302_7535830063297760273_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=VETE-E16gmMQ7kNvgEwLFF-&_nc_zt=3&_nc_ht=scontent.whatsapp.net&_nc_gid=A3uJs2H6P6giMKLOwJ9d5TG&oh=01_Q5AaIPLdZ3qMvQZBPx2-_hYWVik4tDFYVikh4jVamF5Df4WW&oe=67B0EFCA" alt="" className="rounded-xl mb-4" />
            <span className="text-lg">Privacy and security</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="text-blue-500" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          disabled={currentIndex >= totalCards - visibleCards}
        >
          <ChevronRight className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default Features;
