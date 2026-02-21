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
  const timeoutIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    if (!text) return;

    const safeSetDisplay = (value: string) => {
      if (isMountedRef.current) setDisplayText(value);
    };
    const safeSetTyping = (value: boolean) => {
      if (isMountedRef.current) setIsTyping(value);
    };

    safeSetTyping(true);

    const delayTimer = setTimeout(() => {
      let currentIndex = 0;

      const typeCharacter = () => {
        if (!isMountedRef.current) return;
        if (currentIndex <= text.length) {
          safeSetDisplay(text.substring(0, currentIndex));
          currentIndex++;
          const t = setTimeout(typeCharacter, speed);
          timeoutIdsRef.current.push(t);
        } else {
          safeSetTyping(false);
        }
      };

      typeCharacter();
    }, delay);

    timeoutIdsRef.current.push(delayTimer);

    return () => {
      isMountedRef.current = false;
      timeoutIdsRef.current.forEach((id) => clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, [text, speed, delay]);

  return {
    displayText,
    isTyping,
    ref
  };
};
