import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  title, 
  subtitle, 
  content, 
  date, 
  image, 
  link, 
  tags,
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        bg-glass p-6 rounded-xl shadow-lg transition-all duration-300
        transform ${isHovered ? 'scale-105 -translate-y-2' : ''}
        border border-transparent ${isHovered ? 'border-white/20' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg h-48">
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
          />
        </div>
      )}
      
      <div className="space-y-3">
        {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
        
        {subtitle && <p className="text-gray-300">{subtitle}</p>}
        
        {content && <p className="text-gray-400">{content}</p>}
        
        {date && <span className="text-sm text-gray-500 block">{date}</span>}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {link && (
          <div className="pt-3">
            <a 
              href={link.url} 
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className={`
                inline-block px-4 py-2 rounded bg-[#E50914] text-white 
                font-semibold text-sm transition-all duration-300
                hover:bg-red-700 ${isHovered ? 'shadow-lg' : ''}
              `}
            >
              {link.text || "Learn More"}
            </a>
          </div>
        )}
      </div>
      
      {/* Subtle gradient background effect */}
      <div 
        className={`
          absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
          opacity-0 transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : ''}
        `}
      ></div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
    external: PropTypes.bool
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string
};

export default Card;