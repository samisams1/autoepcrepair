import { inputType } from "./inputType";
const Input = ({
  name,
  children,
  type,
  placeholder,
  value,
  onChange,
}: inputType) => {
  return (
    <div className="my-2">
      <label htmlFor={name} className="font-medium text-slate-500 text-base">
        {children}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border outline-none px-2 py-1 rounded-md my-2"
      />
    </div>
  );
};

export default Input;