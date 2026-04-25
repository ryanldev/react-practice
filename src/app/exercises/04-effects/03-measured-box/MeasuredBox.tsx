/*
 * TASK 3 — MeasuredBox
 *
 * Render a box with dynamic content and display its measured height in real time.
 * The measurement should happen before the browser paints to avoid visual flicker.
 *
 * Hooks: useLayoutEffect, useRef, useState
 * DOM API: getBoundingClientRect()
 *
 * DOCS: https://react.dev/reference/react/useLayoutEffect
 */

import styles from './MeasuredBox.module.css';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const dynamicContent = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis posuere arcu, eget finibus libero auctor id. Phasellus volutpat, arcu sed dictum cursus, libero erat porta purus, vel ultricies turpis ante et orci. Donec posuere felis nisl, vitae lobortis massa vehicula at. Donec congue congue aliquet. Sed interdum elit massa. Curabitur accumsan nulla justo. Sed sodales viverra magna, nec tempor quam fermentum quis. Aliquam scelerisque, orci dapibus luctus interdum, est urna sagittis lectus, eu ultricies dolor diam sed lectus. Suspendisse sit amet lobortis neque, in hendrerit turpis. Sed fringilla efficitur libero, at euismod justo congue in. Duis sit amet lobortis orci, vel tempor arcu.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis posuere arcu, eget finibus libero auctor id. Phasellus volutpat, arcu sed dictum cursus, libero erat porta purus, vel ultricies turpis ante et orci. Donec posuere felis nisl, vitae lobortis massa vehicula at. Donec congue congue aliquet. Sed interdum elit massa. Curabitur accumsan nulla justo. Sed sodales viverra magna, nec tempor quam fermentum quis. Aliquam scelerisque, orci dapibus luctus interdum, est urna sagittis lectus, eu ultricies dolor diam sed lectus. Suspendisse sit amet lobortis neque, in hendrerit turpis. Sed fringilla efficitur libero, at euismod justo congue in. Duis sit amet lobortis orci, vel tempor arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis posuere arcu, eget finibus libero auctor id. Phasellus volutpat, arcu sed dictum cursus, libero erat porta purus, vel ultricies turpis ante et orci. Donec posuere felis nisl, vitae lobortis massa vehicula at. Donec congue congue aliquet. Sed interdum elit massa. Curabitur accumsan nulla justo. Sed sodales viverra magna, nec tempor quam fermentum quis. Aliquam scelerisque, orci dapibus luctus interdum, est urna sagittis lectus, eu ultricies dolor diam sed lectus. Suspendisse sit amet lobortis neque, in hendrerit turpis. Sed fringilla efficitur libero, at euismod justo congue in. Duis sit amet lobortis orci, vel tempor arcu.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis posuere arcu, eget finibus libero auctor id. Phasellus volutpat, arcu sed dictum cursus, libero erat porta purus, vel ultricies turpis ante et orci. Donec posuere felis nisl, vitae lobortis massa vehicula at. Donec congue congue aliquet. Sed interdum elit massa. Curabitur accumsan nulla justo. Sed sodales viverra magna, nec tempor quam fermentum quis. Aliquam scelerisque, orci dapibus luctus interdum, est urna sagittis lectus, eu ultricies dolor diam sed lectus. Suspendisse sit amet lobortis neque, in hendrerit turpis. Sed fringilla efficitur libero, at euismod justo congue in. Duis sit amet lobortis orci, vel tempor arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis posuere arcu, eget finibus libero auctor id. Phasellus volutpat, arcu sed dictum cursus, libero erat porta purus, vel ultricies turpis ante et orci. Donec posuere felis nisl, vitae lobortis massa vehicula at. Donec congue congue aliquet. Sed interdum elit massa. Curabitur accumsan nulla justo. Sed sodales viverra magna, nec tempor quam fermentum quis. Aliquam scelerisque, orci dapibus luctus interdum, est urna sagittis lectus, eu ultricies dolor diam sed lectus. Suspendisse sit amet lobortis neque, in hendrerit turpis. Sed fringilla efficitur libero, at euismod justo congue in. Duis sit amet lobortis orci, vel tempor arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis posuere arcu, eget finibus libero auctor id. Phasellus volutpat, arcu sed dictum cursus, libero erat porta purus, vel ultricies turpis ante et orci. Donec posuere felis nisl, vitae lobortis massa vehicula at. Donec congue congue aliquet. Sed interdum elit massa. Curabitur accumsan nulla justo. Sed sodales viverra magna, nec tempor quam fermentum quis. Aliquam scelerisque, orci dapibus luctus interdum, est urna sagittis lectus, eu ultricies dolor diam sed lectus. Suspendisse sit amet lobortis neque, in hendrerit turpis. Sed fringilla efficitur libero, at euismod justo congue in. Duis sit amet lobortis orci, vel tempor arcu.'
]

export function MeasuredBox() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [currentContent, setCurrentContent] = useState<string>('');
  const [boxHeight, setBoxHeight] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent(dynamicContent[Math.floor(Math.random() * 1)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { height } = boxRef.current.getBoundingClientRect();
      setBoxHeight(Math.ceil(height));
    };
  }, [currentContent]);

  return (
    <div className={styles.measuredContainer}>
      <div>Box Height: {boxHeight}</div>
      <div className={styles.measuredBox} ref={boxRef}>{currentContent}</div>
    </div>
  );
}
