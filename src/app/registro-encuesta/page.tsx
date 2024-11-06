"use client";
import { QR } from "@/components/forms/pregunta_registro";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export type FormTypeRegistro = {
  sexo: "Masculino" | "Femenino";
  semestre: 1 | 2 | 3 | 4 | 5 | 6;
  edad: number;
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
  const { register, handleSubmit } = useForm<FormTypeRegistro>();
  const onSubmit = () => {};
  return (
    <div className="flex justify-center items-center md:px-20">
      <div className="md:max-w-screen-sm w-full px-4 py-8 flex flex-col items-center justify-left md:px-20 md:rounded-xl md:box-content">
        <h2 className="text-center font-semibold md:mb-8 mb-6">
          CUESTIONARIO DE REGISTRO
        </h2>
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
          />
          <QR
            type="radio"
            labels={["Masculino", "Femenino"]}
            q="Sexo"
            register={register}
            data="sexo"
          />
          <QR
            type="text"
            labels={[""]}
            q="Edad"
            register={register}
            data="edad"
          />
          <QR
            type="radio"
            labels={["Soltero/a", "Casado/a", "Divorciado/a"]}
            q="Estado civil"
            register={register}
            data="estadoCivil"
          />
          <QR
            type="radio"
            labels={["Si", "No"]}
            q="¿Se encuentra trabajando?"
            register={register}
            data="trabajo"
          />
          <QR
            type="radio"
            labels={["Si", "No"]}
            q="¿Pertenece a alg[un grupo étnico?"
            register={register}
            data="etnia"
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
