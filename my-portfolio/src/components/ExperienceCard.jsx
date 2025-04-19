import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ExperienceCard.css';

const ExperienceCard = ({ title, subtitle, bulletPoints, date, tags, logo, className = '' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`experience-card ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="experience-card-split-content">
                <div className="experience-card-left-half">
                    {logo && (
                        <div className="experience-card-logo-container">
                            <img
                                src={logo}
                                alt={`${title} logo`}
                                className="experience-card-logo"
                            />
                        </div>
                    )}

                    {title && <h3 className="experience-card-title">{title}</h3>}
                    {subtitle && <p className="experience-card-subtitle">{subtitle}</p>}
                    {date && <span className="experience-card-date">{date}</span>}

                    {tags && tags.length > 0 && (
                        <div className="experience-card-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="experience-card-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="experience-card-right-half">
                    {bulletPoints && bulletPoints.length > 0 && (
                        <ul className="experience-card-bullet-points">
                            {bulletPoints.map((point, index) => (
                                <li key={index} className="experience-card-bullet-point">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Subtle gradient background effect */}
            <div className={`experience-card-gradient ${isHovered ? 'visible' : ''}`}></div>
        </div>
    );
};

ExperienceCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bulletPoints: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.string,
    className: PropTypes.string,
};

export default ExperienceCard;
