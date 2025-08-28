import { ChevronDown } from "lucide-react";

interface DownArrowButtonProps {
  onClick?: () => void;
  className?: string;
}

const DownArrowButton = ({ onClick, className = "" }: DownArrowButtonProps) => {
  return (
    <div 
      onClick={onClick} 
      className={`absolute right-[50%] bottom-0 transform translate-1/2 h-10 w-10 flex items-center justify-center bg-white border text-red-500 shadow-2xl shadow-red-500 rounded-full cursor-pointer ${className}`}
    >
      <ChevronDown />
    </div>
  );
};

export default DownArrowButton;
