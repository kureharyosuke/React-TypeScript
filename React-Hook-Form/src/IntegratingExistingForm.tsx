import React from "react";
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import Register from "./register";

interface IFormValues {
  "First Name": string;
  Age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

//  다음 구성 요소는 기존 입력 구성 요소의 예입니다.
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// React.forwardRef를 사용하여 ref를 전달할 수도 있습니다.
const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const App = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      {/* Type '{}' is missing the following properties from type 'InputProps': label, register, required */}
      <Select label="Age" {...register("Age")} />
      {/* Input 과 Select 을 컴포넌트하니까, 타입스크립트에서 Props를 정의한다. 따라서 컴포넌트화 해서 이용할수 있다. */}
      <input type="submit" />
    </form>
  );
};
