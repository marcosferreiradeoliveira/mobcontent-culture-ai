"use client";

import { Button, ButtonProps } from "./button";
import { trackEvent } from "@/utils/analytics";

interface AnalyticsButtonProps extends ButtonProps {
  eventName: string;
  eventCategory?: string;
  eventLabel?: string;
  eventValue?: number;
}

export function AnalyticsButton({
  eventName,
  eventCategory = "button_click",
  eventLabel,
  eventValue,
  onClick,
  children,
  ...props
}: AnalyticsButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the button click
    trackEvent(eventName, {
      event_category: eventCategory,
      event_label: eventLabel || (typeof children === 'string' ? children : eventName),
      ...(eventValue !== undefined && { value: eventValue }),
      element: 'button',
    });

    // Call the original onClick handler if it exists
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
