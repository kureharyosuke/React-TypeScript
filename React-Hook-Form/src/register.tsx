import React from "react";
import ReactDom from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

/**
 * Register fields : 필드 등록
 *
 * React Hook Form의 핵심 개념 중 하나는 제어되지 않은 구성 요소를 후크에 넣는 것입니다.
 * 이렇게하면 양식 유효성 검사와 제출 모두에 해당 값을 사용할 수 있습니다. register
 * 참고 : 각 필드는되어 필요한 고유하도록 등록 과정의 핵심으로한다. name
 */

export default function Register() {
  const { register, handleSubmit } = useForm<IFormInput>(); // 타입을 IFormInput 인터페이스로 정의
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}
