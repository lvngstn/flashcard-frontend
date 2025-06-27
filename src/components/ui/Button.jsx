const variantStyles = {
    primary: "bg-primary-500 px-3 py-1 rounded text-neutral-50 hover:bg-primary-600",
    secondary: "bg-primary-200 px-3 py-1 rounded text-neutral-950 hover:bg-primary-250",
    tertiary: "text-neutral-400 px-3 py-1 rounded hover:text-neutral-500",
    primary_icon: "p-1 bg-primary-350 rounded-full fill-neutral-50 stroke-neutral-50 hover:bg-primary-400 hover:fill-neutral-50 hover:stroke-neutral-50",
    secondary_icon: "fill-neutral-950 stroke-neutral-950 hover:fill-neutral-900 hover:stroke-neutral-900",
    tertiary_icon: "stroke-neutral-400 hover:stroke-neutral-500 fill-none"
  };
  
  const Button = ({ children, h = "h-fit", w = "w-fit", variant = "primary", className = "", onClick = () => {}, ...props }) => {
    return (
      <button className={`inline-flex items-center gap-2 ${h} ${w} ${variantStyles[variant]} ${className}`} onClick={onClick} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;
  