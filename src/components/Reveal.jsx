import { useEffect, useRef, useState } from 'react';

// Fades + slides content in when it scrolls into view. Use `delay` (ms) to show items one by one.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ ...style, '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
