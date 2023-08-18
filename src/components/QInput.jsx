import { Input } from "@nextui-org/react";

const QInput = ({ type, label, placeholder, variant, color, className }) => {
  return (
    <Input
      type={type}
      label={label}
      placeholder={placeholder}
      variant={variant}
      color={color}
      className={className}
    />
  );
};

export default QInput;
