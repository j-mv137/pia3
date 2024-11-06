"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type CalifFormType = {
  prom: string;
};

const Calif = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalifFormType>();
  const onSubmit: SubmitHandler<CalifFormType> = useCallback(async (data) => {
    console.log(data);
  }, []);

  return (
    <div className="flex justify-center items-center md:px-20">
      <div className="md:max-w-screen-sm w-full px-4 py-8 flex flex-col items-center justify-left md:px-20 md:rounded-xl md:box-content">
        <form
          className="md:text-base text-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="max-w-prose flex flex-col  gap-2 mb-4 text-sm">
            <p className="mb-2">
              ¿Qué calificación obtuviste en el anterior semestre o ciclo
              escolar que cursaste? (En una escala de 0-100)
            </p>
            {errors.prom && (
              <p className="mb-1 text-red-600 text-xs">Entrada inválida</p>
            )}
            <Input
              className="w-3/5 h-4/5 flex text-xs"
              {...register("prom", {
                required: true,
                validate: (e) => {
                  try {
                    const val = Number(e);

                    if (val >= 0 && val <= 100) {
                      return true;
                    }
                  } catch {
                    return false;
                  }
                  return false;
                },
              })}
              type="number"
            />
          </div>
          <Button
            className="hover:bg-neutral-400 transition active:bg-neutral-600"
            type="submit"
          >
            Continuar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Calif;
