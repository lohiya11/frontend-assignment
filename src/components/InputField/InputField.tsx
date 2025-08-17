import React, { useState } from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  type?: 'text' | 'password';
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  clearable?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  type = 'text',
  variant = 'outlined',
  size = 'md',
  clearable = false,
}) => {

  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const sizeClasses: Record<string, string> = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-3',
    lg: 'py-3 px-4 text-lg',
  };

  const variantClasses = {
    outlined: 'border border-gray-400 bg-white',
    filled: 'bg-gray-200 border border-gray-300',
    ghost: 'bg-transparent border border-transparent',
  };

  const baseClass = `
    rounded w-full relative
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${invalid ? 'border-red-500' : ''}
  `;

  return (
    <div className="flex flex-col gap-1 relative">
      {label && <label className="font-medium">{label}</label>}

      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={baseClass}
        />

        {/* Spinner */}
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Clear button */}
        {!loading && clearable && value && (
          <button
            onClick={() => onChange({ target: { value: '' } } as any)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            ×
          </button>
        )}

        {/* Eye toggle for password */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 select-none"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>

      {/* Error / Helper text */}
      {invalid && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
      {!invalid && helperText && (
        <span className="text-gray-500 text-xs">{helperText}</span>
      )}
    </div>
  );
};

export default InputField;
