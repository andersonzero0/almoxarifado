"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, User } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { Bounce, toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

export default function Login() {
  const { login } = useAuthContext();
  const router = useRouter()

  const formSchema = z.object({
    username: z.string().min(1, "Nome de usuário obrigatório!").max(225),
    password: z
      .string()
      .min(8, "É obrigatório que a senha tenha no minimo 8 digitos!"),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    try {
      await login({ username: data.username, password: data.password });
      router.push("/")
    } catch (error: unknown) {
      console.log(error)
      toast.error("Error ao tentar fazer login, tente novamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <main className="container h-screen flex flex-row m-auto">
      <div className="basis-1/2 h-full flex flex-col p-4">
        <h2 className="text-center bg-[#0047AD] text-white font-bold py-2 rounded-md text-lg">
          ALMOXARIFADO
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-1 justify-center gap-6 *:w-96 items-center"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="font-normal flex flex-row items-center gap-1 text-lg"
            >
              <User /> Nome de usuário
            </label>
            <input
              id="username"
              type="text"
              className="border py-2 px-1 focus:outline-[#FAA500]"
              autoComplete="off"
              placeholder="Ex. user0101"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-red-800 block mt-2">
                {errors.username?.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-normal flex flex-row items-center gap-1 text-lg"
            >
              <KeyRound />
              Senha
            </label>
            <input
              minLength={8}
              id="password"
              type="password"
              className="border py-2 px-1 focus:outline-[#FAA500]"
              autoComplete="off"
              placeholder="Sua senha secreta"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-800 block mt-2">
                {errors.password?.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#FAA500] w-96 py-2 font-bold text-white rounded-sm text-lg"
          >
            ENTRAR
          </button>
        </form>
      </div>

      <div className="bg-gray-500 basis-1/2">
        <img
          src={"./fundo-login.jpg"}
          className="h-full object-cover bg-gradient-to-r to-transparent"
        />
      </div>
    </main>
  );
}
