import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download, Music, Pause, X } from 'lucide-react';
import heroImg from '@/assets/latheeshan1.png';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const [showVibe, setShowVibe] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const closeVibe = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setShowVibe(false);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden text-white flex items-center pt-20 bg-[#0f0f11] bg-gradient-to-r from-[#1a0e0a] via-[#0f0f11] to-[#061e2d]"
    >

      {/* Catch My Vibe Button - TOP RIGHT CORNER */}
<motion.div
  className="absolute top-6 right-6 z-50"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.4 }}
>
  <Button
    onClick={() => setShowVibe(true)}
    variant="hero"
    className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-md shadow-lg hover:scale-105 transition-transform"
  >
    Catch My Vibe
    <Music className="ml-2 h-5 w-5" />
  </Button>
</motion.div>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <motion.img
          src={heroImg}
          alt="Hero"
          className="w-[140%] h-[150%] object-contain object-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-2 from-[#061e2d]/90 to-transparent z-10" />
      </div>


      {/* TEXT CONTENT */}
      <div className="relative z-20 max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center">
        <motion.div
          className="text-center lg:text-left pl-4 lg:pl-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base sm:text-lg text-gray-400 mb-4">Hello, I'm</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              <Typewriter
                words={['LATHEESHAN']}
                loop={2}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-6">
            Full Stack Developer
          </h2>


<motion.div
  className="bg-[#1e1e1e] rounded-lg shadow-lg p-6 font-mono text-sm text-left mb-8 border border-gray-700 relative"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Fake top bar */}
  <div className="absolute top-2 left-4 flex space-x-2">
    <span className="w-3 h-3 bg-red-500 rounded-full" />
    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
    <span className="w-3 h-3 bg-green-500 rounded-full" />
  </div>

  <pre className="mt-6 text-gray-300 whitespace-pre-wrap">
    <code>
      <Typewriter
        words={[
          `My code creates the Emotions the Emontions create the code`, ]}
        typeSpeed={30}
        deleteSpeed={0}
        delaySpeed={1000}
        cursor
        cursorStyle="_"
      />
    </code>
  </pre>
</motion.div>

          {/* MOBILE IMAGE */}
        <motion.div
          className="block sm:hidden mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src={heroImg}
            alt="Hero Mobile"
            className="w-9/5 mx-auto h-auto object-contain"
          />
        </motion.div>
          {/* Buttons with slide-up animation */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="portfolio" size="xl">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Icons with fade-in animation */}
          <motion.div
            className="flex gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a href="https://github.com/latheeshan-3" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Github className="h-6 w-6" />
            </Button>
            </a>

            <a href="https://www.linkedin.com/in/latheeshan-t-7b503a245/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Linkedin className="h-6 w-6" />
            </Button>
            </a>

            <a href="mailto:latheeshan.t@gmail.com " target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Mail className="h-6 w-6" />
            </Button>
            </a>

          </motion.div>
        </motion.div>

        

      {/* Vibe Modal */}
      {showVibe && (
        <motion.div
          className="fixed bottom-8 right-8 bg-[#1e1e1e] text-white p-6 rounded-lg shadow-2xl border border-gray-700 z-50 w-[300px] sm:w-[360px]"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">🎧 Vibe Mode</h4>
            <button onClick={closeVibe}>
              <X className="h-5 w-5 hover:text-red-400" />
            </button>
          </div>
          <p className="text-sm mb-4 text-gray-300">
            Wear headphones to feel greater. Playing a track from my recent vibe library.
          </p>

          <div className="flex items-center gap-4">
            <Button
              onClick={togglePlay}
              className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Music className="mr-2 h-5 w-5" />
                  Play
                </>
              )}
            </Button>
          </div>

          <audio ref={audioRef} src="/Weekend.mp3" preload="auto" />
        </motion.div>
      )}

      </div>
    </section>
  );
};

export default Hero;
 