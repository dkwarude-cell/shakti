export default function Button({ 
  children, 
  variant = 'primary', 
  isLoading = false,
  className = '',
  ...props 
}) {
  const baseClasses = 'px-4 py-2 rounded-lg font-bold transition disabled:opacity-50 duration-300';
  
  const variantClasses = {
    primary: 'bg-secondary text-primary hover:bg-yellow-400 shadow-lg',
    donor: 'bg-donor text-white hover:bg-teal-600 shadow-lg',
    supplier: 'bg-supplier text-white hover:bg-blue-600 shadow-lg',
    institute: 'bg-institute text-primary hover:bg-yellow-400 shadow-lg',
    danger: 'bg-danger text-white hover:bg-red-700 shadow-lg',
    success: 'bg-success text-white hover:bg-teal-600 shadow-lg',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary',
    'outline-donor': 'border-2 border-donor text-donor hover:bg-donor hover:text-white',
    'outline-supplier': 'border-2 border-supplier text-supplier hover:bg-supplier hover:text-white',
    'outline-institute': 'border-2 border-institute text-institute hover:bg-institute hover:text-primary',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
