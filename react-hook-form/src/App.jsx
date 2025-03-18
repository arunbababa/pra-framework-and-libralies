// つまるところカスタムフック
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // この関数は、フォームが送信されたときに呼び出されます。
  const onSubmit = data => console.log(data);

  // 見てわかるが、register は input 要素に対して、名前付けもできて、その名前を watch で監視できる
  console.log(watch("example")); // watch input value by passing the name of it
  console.log(watch("exampleRequired")); // watch input value by passing the name of it
  console.log(watch("myInput")); // watch input value by passing the name of it
  return (
    <>
    {/* // memo : dateはonSubmit時にformのvalueを取得する
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="example" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue="exampleRequired" {...register("exampleRequired", { required: true, minLength: 10 })} />
      
      <input defaultValue="myInput" {...register("myInput", { required: true })} />

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>example is required</span>}
      <br />
      {errors.myInput && <span>myInput is required</span>}
      <br />
      {errors.exampleRequired && <span>exampleRequired is minLength</span>}
      <br />
      <input type="submit" />
    </form>

    <a href="register">registerを見てみよう</a>
    </>
  );
}