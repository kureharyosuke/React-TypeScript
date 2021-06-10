import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}
/**
 * Apply Validation
 *
 * React Hook Form 은 양식 유효성 검사를 위해 기준 HTML표준과 일치하여 양식 유효성 검사를 쉽게 만듭니다.
 *
 * 지원되는 유효성 검사 규칙목록 :
 * - required : 필수
 * - min : 최소
 * - max : 최대
 * - minLength
 * - maxLength
 * - pattern
 * - validate : 발리데이트
 */
export default function ApplyValidation() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      {/* register("firstName"에 해당하는 양식 유효성 검사와 제출 모두에 해당 값을 사용하여, firstName 의 글자수 20 */}
      <input {...register("lastName", { pattern: /^[A-Za-z] +$/i })} />
      {/* pathhen으로 RegX 타입체크  */}
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      {/* min max 나이를 검사한다.  */}
      <input type="submit" />
    </form>
  );
}
