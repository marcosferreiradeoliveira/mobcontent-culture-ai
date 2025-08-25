import { useState, useEffect, useRef } from 'react';

interface TypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypingEffect = ({ text, speed = 50, delay = 0 }: TypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const hasStartedRef = useRef(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      
      const timer = setTimeout(() => {
        setIsTyping(true);
        let index = 0;
        
        const typeInterval = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typeInterval);
            setIsTyping(false);
          }
        }, speed);

        return () => clearInterval(typeInterval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [text, speed, delay]);

  return {
    displayText,
    isTyping,
    ref
  };
};