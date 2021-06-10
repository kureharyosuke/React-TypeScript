import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>(); // 제너릭타입 <Inputs>을 추가됨.
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    // {/*  "handleSubmit"은 "onSubmit"을 호출하기 전에 입력내용을 확인합니다. */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/ * "register"함수를 호출하여 입력을 후크에 등록 * /}
      <input defaultValue="test" {...register("example")} />
      {
        / * 필수 또는 기타 표준 HTML 유효성 검사 규칙을 사용한 유효성 검사 포함 * /
      }
      <input {...register("exampleRequired", { required: true })} />
      {/ * 필드 유효성 검사가 실패하면 오류가 반환됩니다. * /}
      {errors.exampleRequired && (
        <span>This field is required 이 필드는 필수입니다</span>
      )}
      <input type="submit" />
    </form>
  );
}
