"use client";
import { QR } from "@/components/forms/pregunta_registro";
import { Button } from "@/components/ui/button";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypeRegistro>();
  const onSubmit: SubmitHandler<FormTypeRegistro> = useCallback((data) => {
    console.log(data);
  }, []);
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
          <Button type="submit" className="" variant="default">
            Continuar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistroEncuesta;
