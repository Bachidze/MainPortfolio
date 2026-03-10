export interface ExperienceItem {
  name: string;
  image: string;
  url: string;
  alt: string;
  duration: string;
}

export interface MediaItem {
  name: string;
  image: string;
  url: string;
  alt: string;
}

export interface AboutData {
  name: string;
  bio: string;
  image: string;
  alt: string;
}

export interface ProjectSlide {
  url: string;
  image: string;
  alt: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  growRate: number;
  waveOffset: number;
  waveSpeed: number;
}

export interface DoubleArrowProps {
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
}
