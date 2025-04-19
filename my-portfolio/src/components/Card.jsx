import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Card.css';

const Card = ({ title, subtitle, content, date, image, link, tags, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`card ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {image && (
                <div className="card-image-container">
                    <img src={image} alt={title} className="card-image" />
                </div>
            )}

            <div className="card-content">
                {title && <h3 className="card-title">{title}</h3>}

                {subtitle && <p className="card-subtitle">{subtitle}</p>}

                {content && <p className="card-description">{content}</p>}

                {date && <span className="card-date">{date}</span>}

                {tags && tags.length > 0 && (
                    <div className="card-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="card-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {link && (
                    <div>
                        <a
                            href={link.url}
                            target={link.external ? '_blank' : '_self'}
                            rel={link.external ? 'noopener noreferrer' : ''}
                            className="card-link"
                        >
                            {link.text || 'Learn More'}
                        </a>
                    </div>
                )}
            </div>

            {/* Subtle gradient background effect */}
            <div className={`card-gradient ${isHovered ? 'visible' : ''}`}></div>
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
        external: PropTypes.bool,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
};

export default Card;
