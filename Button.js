// components/Button.js
export default function Button({ children, onClick, className }) {
    return (
      <button
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  