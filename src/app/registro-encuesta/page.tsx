"use client";
import { QR } from "@/components/forms/pregunta_registro";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormTypeRegistro = {
  sexo: "Masculino" | "Femenino";
  semestre: "Primero" | "Segundo" | "Tercero" | "Cuarto" | "Quinto" | "Sexto";
  edad: string;
  estadoCivil: "Soltero/a" | "Casado/a" | "Divorciado/a";
  trabajo: "Si" | "No";
  porpietario: "Propietario/a" | "Inquilino/a" | "Vivo con mi familia";
  etnia: "Si" | "No";
  bachillerato:
    | "Bachillerato general"
    | "Bachillerato técnico"
    | "Bachillerato bilinüe progresivo";
};

const RegistroEncuesta = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypeRegistro>();
  const onSubmit: SubmitHandler<FormTypeRegistro> = useCallback(
    async (data) => {
      try {
        const response = await fetch(
          "https://api-pia.onrender.com/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }
        toast({ description: "El registro se ha llevado a cabo." });
        router.push("/calificaciones");
      } catch (err) {
        toast({
          description: "Error al mandar el formulario, inténtelo de nuevo.",
        });
        console.error(err);
      }
    },
    [toast, router]
  );
  return (
    <div className="flex justify-center items-center md:px-20">
      <div className="md:max-w-screen-sm w-full px-4 py-8 flex flex-col items-center justify-left md:px-20 md:rounded-xl md:box-content">
        <h2 className="font-semibold md:mb-8 mb-6">CUESTIONARIO DE REGISTRO</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:text-base text-sm"
        >
          <QR
            type="radio"
            labels={[
              "Bachillerato General",
              "Bachillerato técnico",
              "Bachillerato billingüe progresivo",
            ]}
            q="¿Cuál es el tipo de bachillerato en el que se encuentra?"
            register={register}
            data="bachillerato"
            error={errors.bachillerato}
          />
          <QR
            type="radio"
            labels={[
              "Primero",
              "Segundo",
              "Tercero",
              "Cuarto",
              "Quinto",
              "Sexto",
            ]}
            q="¿Qué semestre cursa actualmente?"
            register={register}
            data="semestre"
            error={errors.semestre}
          />
          <QR
            type="radio"
            labels={["Masculino", "Femenino"]}
            q="Sexo"
            register={register}
            data="sexo"
            error={errors.sexo}
          />
          <QR
            type="text"
            labels={[""]}
            q="Edad"
            register={register}
            data="edad"
            error={errors.edad}
          />
          <QR
            type="radio"
            labels={["Soltero/a", "Casado/a", "Divorciado/a"]}
            q="Estado civil"
            register={register}
            data="estadoCivil"
            error={errors.estadoCivil}
          />
          <QR
            type="radio"
            labels={["Si", "No"]}
            q="¿Se encuentra trabajando?"
            register={register}
            data="trabajo"
            error={errors.trabajo}
          />
          <QR
            type="radio"
            labels={["Si", "No"]}
            q="¿Pertenece a alg[un grupo étnico?"
            register={register}
            data="etnia"
            error={errors.etnia}
          />
          <Button
            className="hover:bg-neutral-400 transition active:bg-neutral-600"
            type="submit"
            variant="default"
          >
            Continuar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistroEncuesta;
