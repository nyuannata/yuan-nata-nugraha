/// <reference types="vite/client" />

declare module 'react' {
  export function useRef<T = any>(initialValue?: T | null): { current: T };
  export function useState<T = any>(initialState?: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useId(): string;
  export function useMemo<T = any>(factory: () => T, deps?: any[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps?: any[]): T;
  export type FC<P = {}> = (props: P) => any;
  export type ReactNode = any;
  export type RefObject<T> = { current: T };
  export interface SVGAttributes<T = any> {
    [key: string]: any;
  }
  export interface HTMLAttributes<T = any> {
    [key: string]: any;
  }
  export interface MouseEvent<T = Element> {
    preventDefault(): void;
    stopPropagation(): void;
    target: T;
    currentTarget: T;
  }
  export interface ChangeEvent<T = Element> {
    target: T;
  }
  export interface FormEvent<T = Element> {
    preventDefault(): void;
  }
  export interface KeyboardEvent<T = Element> {
    key: string;
    preventDefault(): void;
  }
  export interface ReactElement<P = any, T = any> {
    type: T;
    props: P;
    key: any;
  }
  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  const ReactDOM: any;
  export default ReactDOM;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): {
    render(children: any): void;
    unmount(): void;
  };
}

declare module 'motion/react' {
  export const motion: any;
  export const AnimatePresence: any;
  export const useScroll: any;
  export const useTransform: any;
  export const useSpring: any;
  export type MotionValue<T = any> = any;
}

declare module 'lucide-react' {
  import * as React from 'react';
  export interface LucideProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }
  export type LucideIcon = React.FC<LucideProps>;
  export const Briefcase: LucideIcon;
  export const Mic2: LucideIcon;
  export const FileText: LucideIcon;
  export const Bot: LucideIcon;
  export const LayoutDashboard: LucideIcon;
  export const Brain: LucideIcon;
  export const MapPin: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Github: LucideIcon;
  export const Mail: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Instagram: LucideIcon;
  export const FileDown: LucideIcon;
  export const Code2: LucideIcon;
  export const Wrench: LucideIcon;
  export const Globe: LucideIcon;
  export const Cloud: LucideIcon;
  export const Wifi: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Activity: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const Cpu: LucideIcon;
  export const Layers: LucideIcon;
  export const Wand2: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Search: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Microscope: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Phone: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Award: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const ZoomIn: LucideIcon;
  export const Share2: LucideIcon;
  export const Mic: LucideIcon;
  export const MicOff: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Send: LucideIcon;
  export const User: LucideIcon;
  const icons: Record<string, LucideIcon>;
  export default icons;
}

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
