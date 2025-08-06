import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypingEffect = ({ text, speed = 50, delay = 0 }: TypingEffectOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !isTyping && displayText !== text) {
      setIsTyping(true);
      setDisplayText('');
      
      const timer = setTimeout(() => {
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
  }, [inView, text, speed, delay, isTyping, displayText]);

  return { ref, displayText, isTyping };
};