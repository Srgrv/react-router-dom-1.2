import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//extra-reducers
import { addTodoAsync } from "../store/slices/aboutSlice";

const Field = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data.addTask);
    let value = data.addTask;
    dispatch(addTodoAsync(value));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            placeholder="write a task"
            {...register("addTask", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 3,
                message: "Должно быть не менее 3 символов",
              },
            })}
          />
          <input type="submit" value="add" />
        </label>
        <div>
          {errors?.addTask && <p>{errors?.addTask?.message || "Errors"}</p>}
        </div>
      </form>
    </div>
  );
};

export default Field;
