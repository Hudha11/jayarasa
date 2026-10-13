export default function Eyebrow({ children, light = false, centered = false }) {
  const classes = ['eyebrow', light ? 'eyebrow-light' : '', centered ? 'eyebrow-centered' : '']
    .filter(Boolean)
    .join(' ');
  return <div className={classes}><span className="eyebrow-line" />{children}</div>;
}