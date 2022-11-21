import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Fullname..."
          {...register("fullName")}
        />
        <input type="text" placeholder="Email..." {...register("email")} />
        <input type="text" placeholder="Age..." {...register("age")} />
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <input type="submit" className="submit" />
      </form>
    </>
  );
};

export default Form;
