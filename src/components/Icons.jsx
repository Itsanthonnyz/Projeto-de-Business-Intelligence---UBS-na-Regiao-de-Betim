const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const IconChart = (p) => (
  <svg {...base} {...p}><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8" width="3" height="10" /><rect x="17" y="5" width="3" height="13" /></svg>
)
export const IconMap = (p) => (
  <svg {...base} {...p}><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" /></svg>
)
export const IconPin = (p) => (
  <svg {...base} {...p}><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
)
export const IconTable = (p) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 10v10" /></svg>
)
export const IconFilter = (p) => (
  <svg {...base} {...p}><path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" /></svg>
)
export const IconCube = (p) => (
  <svg {...base} {...p}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></svg>
)
export const IconExternal = (p) => (
  <svg {...base} width={16} height={16} {...p}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
)
export const IconEye = (p) => (
  <svg {...base} width={16} height={16} {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>
)
export const IconCross = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} aria-hidden {...p}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" fill="currentColor" /></svg>
)
