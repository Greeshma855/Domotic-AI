import { motion } from "framer-motion";

const LandingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{
        height: 0,
        top: "-100vh",
      }}
      transition={{
        duration: 1,
        delay: 2,
        ease: "easeInOut",
      }}
      onAnimationComplete={onComplete}
      className="fixed top-0 left-0 w-full z-50 overflow-hidden"
    >
      <div
        style={{
          background: "linear-gradient(270deg, blue, orange)",
          backgroundSize: "400% 400%",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "gradientMove 6s ease infinite",
        }}
      >
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
            letterSpacing: "-0.5em",
            color: "white",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            letterSpacing: "normal",
            color: "white",
          }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className="text-7xl font-bold"
        >
          DomoticAI
        </motion.h1>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default LandingScreen;
