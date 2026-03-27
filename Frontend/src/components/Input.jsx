export default function Input({ 
  label, 
  error, 
  ...props 
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-bold text-secondary mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-primary border-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary transition ${
          error ? 'border-danger' : 'border-tertiary focus:border-secondary'
        }`}
        {...props}
      />
      {error && (
        <p className="text-danger text-sm mt-1 font-bold">{error}</p>
      )}
    </div>
  );
}
