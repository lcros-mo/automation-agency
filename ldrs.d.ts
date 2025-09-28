declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-ring': {
        size?: string | number;
        stroke?: string | number;
        'bg-opacity'?: string | number;
        speed?: string | number;
        color?: string;
      };
      'l-orbit': {
        size?: string | number;
        speed?: string | number;
        color?: string;
      };
      'l-pulse': {
        size?: string | number;
        speed?: string | number;
        color?: string;
      };
      'l-waveform': {
        size?: string | number;
        speed?: string | number;
        color?: string;
      };
      'l-momentum': {
        size?: string | number;
        speed?: string | number;
        color?: string;
      };
      'l-line-wobble': {
        size?: string | number;
        speed?: string | number;
        color?: string;
      };
    }
  }
}

export {};