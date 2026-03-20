import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  bgColor,
  textColor,
  fontSize,
  radius = 'rounded',
  padding,
  className = '',
  type = 'button',
  target,
}: ButtonProps) {

  // Base classes
  let classes = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none";
  let currentPadding = padding;

  if (variant === 'primary') {
    if (!currentPadding) currentPadding = 'px-10 py-3.5';
    classes += ` ${bgColor || 'bg-[#4BCBF5]'} ${textColor || 'text-white'} shadow-sm hover:shadow hover:bg-opacity-80 active:scale-95`;
  } else if (variant === 'secondary') {
    if (!currentPadding) currentPadding = 'px-10 py-3.5';
    classes += ` ${bgColor || 'bg-[#2A317A]'} ${textColor || 'text-white'} shadow-sm hover:bg-[#1C2D4A] active:scale-95`;
  } else if (variant === 'outline') {
    if (!currentPadding) currentPadding = 'px-10 py-3.5';
    classes += ` bg-transparent border border-[#2A317A] text-[#2A317A] hover:bg-[#2A317A] hover:text-white active:scale-95`;
  } else if (variant === 'ghost') {
    if (!currentPadding) currentPadding = 'p-0';
    classes += ` bg-transparent border-none shadow-none hover:shadow-none ${textColor || 'text-[#4BCBF5] hover:text-[#2A317A]'}`;
  }

  const finalClasses = `${classes} ${radius} ${fontSize || 'text-[16px]'} ${currentPadding} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} target={target} className={finalClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
}
