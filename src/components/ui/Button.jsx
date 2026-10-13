export default function Button({ href, children, variant = 'primary', className = '', ...props }) {
  return (
    <a className={`button button-${variant} ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  );
}