import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  const baseStyle = 'bg-surface-container-lowest p-6 rounded-2xl border border-surface-variant/30 shadow-sm overflow-hidden';
  const hoverStyle = hoverEffect
    ? 'hover:shadow-[0px_15px_40px_rgba(15,77,50,0.1)] hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div className={`${baseStyle} ${hoverStyle} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
