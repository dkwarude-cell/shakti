export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-tertiary rounded-xl shadow-xl p-6 border-l-4 border-secondary ${className}`}>
      {children}
    </div>
  );
}
