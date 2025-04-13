import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
        Osaf Ali Sayed
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        Software Developer passionate about building high-impact applications.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-[#E50914] text-white font-semibold rounded-lg hover:bg-red-700 transition"
      >
        View Projects
      </motion.button>
    </motion.section>
  );
};

export default Home;
