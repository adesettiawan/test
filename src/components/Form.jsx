import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Field fullname is required!"),
    email: yup.string().email().required(),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required()
      .typeError("Field age is number!"),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't match!")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

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
        <small style={{ padding: "10px 0px", color: "red" }}>
          {errors.fullName?.message}
        </small>
        <input type="text" placeholder="Email..." {...register("email")} />
        <small style={{ padding: "10px 0px", color: "red" }}>
          {errors.email?.message}
        </small>
        <input type="text" placeholder="Age..." {...register("age")} />
        <small style={{ padding: "10px 0px", color: "red" }}>
          {errors.age?.message}
        </small>
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        <small style={{ padding: "10px 0px", color: "red" }}>
          {errors.password?.message}
        </small>
        <input
          type="password"
          placeholder="Confirm Password..."
          {...register("confirmPassword")}
        />
        <small style={{ padding: "10px 0px", color: "red" }}>
          {errors.confirmPassword?.message}
        </small>
        <input type="submit" className="submit" />
      </form>
    </>
  );
};

export default Form;
