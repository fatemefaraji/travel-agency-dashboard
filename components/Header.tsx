import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

interface HeaderProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ title, description, ctaText, ctaUrl }) => {
  const location = useLocation();

  // Animation variants for header content
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Animation variants for CTA button
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <header className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-12 md:py-20 overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 text-center"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <article>
          <h1 
            className={cn(
              'text-white font-bold tracking-tight',
              location.pathname === '/' 
                ? 'text-3xl md:text-5xl lg:text-6xl' 
                : 'text-2xl md:text-4xl'
            )}
          >
            {title}
          </h1>
          <p 
            className={cn(
              'mt-4 text-gray-200 font-light max-w-2xl mx-auto',
              location.pathname === '/' 
                ? 'text-base md:text-xl' 
                : 'text-sm md:text-lg'
            )}
          >
            {description}
          </p>
        </article>

        {ctaText && ctaUrl && (
          <motion.div
            className="mt-8"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
          >
            <Link to={ctaUrl}>
              <button
                type="button"
                className="relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white text-indigo-900 font-semibold text-base md:text-lg rounded-full overflow-hidden group"
              >
                {/* Button hover effect */}
                <span className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:fill-white transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4V20M4 12H20" strokeWidth="2" stroke="currentColor" />
                  </svg>
                  <span className="group-hover:text-white transition-colors duration-300">
                    {ctaText}
                  </span>
                </span>
              </button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
