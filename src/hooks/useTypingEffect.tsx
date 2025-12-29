import { useState, useEffect, useRef } from 'react';

interface TypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypingEffect = ({ text, speed = 50, delay = 0 }: TypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!text) return;

    setIsTyping(true);
    
    const timer = setTimeout(() => {
      let currentIndex = 0;
      
      const typeCharacter = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
          setTimeout(typeCharacter, speed);
        } else {
          setIsTyping(false);
        }
      };
      
      typeCharacter();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return {
    displayText,
    isTyping,
    ref
  };
};