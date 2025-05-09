import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

interface InfoPillProps {
  text: string;
  image: string;
}

const InfoPill: React.FC<InfoPillProps> = ({ text, image }) => {
  // Animation variants for the pill
  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.figure
      className={cn(
        'flex items-center gap-3 p-3 bg-white bg-opacity-10 backdrop-blur-lg rounded-full shadow-lg',
        'border border-white border-opacity-20 hover:bg-opacity-20'
      )}
      variants={pillVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      role="group"
      aria-label={`Info pill: ${text}`}
    >
      <img
        src={image}
        alt={text}
        className="w-8 h-8 object-contain rounded-full"
        loading="lazy"
      />
      <figcaption className="text-white font-medium text-sm md:text-base">
        {text}
      </figcaption>
    </motion.figure>
  );
};

export default InfoPill;
