import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "../../hooks/useInView";

interface AnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right';
  delay?: 'delay-100' | 'delay-200' | 'delay-300' | 'delay-400' | '';
  threshold?: number;
  rootMargin?: string;
}

const Animation = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 'delay-100',
  threshold = 0.1,
  rootMargin = "-50px"
}: AnimationProps) => {
  const { ref, isInView } = useInView(threshold, rootMargin);

  return (
    <div
      ref={ref}
      className={cn(
        isInView ? `animate-${animation} ${delay}` : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
};

Animation.displayName = "Animation";

export default Animation;
