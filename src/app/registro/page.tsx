"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Registro = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center md:px-20 md:py-10">
      <div className="md:max-w-screen-sm w-full px-4 py-8 flex flex-col items-center justify-center md:px-20 md:rounded-xl md:box-content">
        <div className="max-w-prose text-center md:leading-normal leading-tight md:py-6 md:px-8 p-6 rounded-lg border-2 border-black">
          <h1 className="font-semibold leading-tight text-xl mb-2">
            Niveles de Actividad física y rendimiento académico
          </h1>
          <div className="flex flex-col gap-4 md:text-base text-sm">
            <p className="text-sm font-light">
              Favor de leer y contestar cada pregunta de la encuesta con
              detenimiento.
            </p>
            <p className="md:text-base text-sm font-light">
              Esta encuesta es aplicada únicamente con fines educativos. La
              encuesta es contestada de forma anónima.
            </p>
          </div>
        </div>
        <Button
          variant="link"
          onClick={() => router.push("/registro-encuesta")}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Registro;
