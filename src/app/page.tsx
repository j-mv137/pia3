"use client";

import { FormType, Q } from "@/components/forms/pregunta";
import { useSkipQ } from "./hooks/useSkipQ";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const skip = useSkipQ((state) => state.q);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  const router = useRouter();
  const { toast } = useToast();
  const onSubmit: SubmitHandler<FormType> = useCallback(
    async (data) => {
      try {
        const response = await fetch(
          "https://api-pia.onrender.com/api/new-survey",
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

        toast({ description: "La encuesta ha sido enviada con éxito" });
        router.push("/terminado");
      } catch (err) {
        toast({
          description: "Error al mandar el formulario, inténtelo de nuevo.",
        });
        console.error(err);
      }
    },
    [router, toast]
  );

  return (
    <div className="flex justify-center items-center md:px-20">
      <div className="md:max-w-screen-sm w-full px-4 py-8 flex flex-col items-center justify-center md:px-20 md:rounded-xl md:box-content">
        <h2 className="text-center font-semibold md:mb-8 mb-6">
          CUESTIONARIO INTERNACIONAL DE ACTIVIDAD FÍSICA (IPAQ)
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:text-base text-sm"
        >
          <div className="flex flex-col items-center justify-center gap-2 pb-10">
            <div className="w-full h-0.5 bg-neutral-300" />
            <p className="text-center leading-snug max-w-prose md:mt-4 md:my-6 my-2">
              Piense en todas las actividades{" "}
              <span className="font-bold">VIGOROSAS</span> que usted realizó en
              los últimos 7 días. Las actividades físicas intensas se refieren a
              aquellas que implican un esfuerzo físico intenso y que lo hacen
              respirar mucha más intensamente que lo normal. Piense sólo en
              aquellas actividades físicas que realizó durante por lo menos 10
              minutos seguidos.
            </p>
            <div className="w-full h-0.5 bg-neutral-300" />
          </div>
          <Q
            num={1}
            q="Durante los últimos 7 días ¿En cuántos realizo
              actividades físicas vigorosas tales como levantar pesos
              pesados, cavar, hacer ejercicios aeróbicos o andar
              rápido en bicicleta?"
            inputT="Días por semana"
            inputR="Ninguna actividad física intensa (vaya a la pregunta 3)"
            skipNext={true}
            register={register}
            errorT1={errors.q1T1}
          />
          {!skip[0] && (
            <Q
              num={2}
              q="Habitualmente, ¿Cuánto tiempo en total dedicó a una
                actividad física intensa en uno de esos días? (ejemplo:
                si practicó 20 minutos marque 0 h y 20 min)"
              inputT="Horas por día"
              inputT2="Minutos por día"
              inputR="No sabe / no está seguro"
              register={register}
              errorT1={errors.q2T1}
              errorT2={errors.q2T2}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-2  pb-10">
            <div className="w-full h-0.5 bg-neutral-300" />
            <p className="text-center leading-snug max-w-prose md:mt-4 md:my-6 my-2">
              Piense en todas las actividades{" "}
              <span className="font-bold">MODERADAS</span> que usted realizó en
              los últimos 7 días. Las actividades moderadas son aquellas que
              requieren un esfuerzo físico moderado que lo hace respirar algo
              más intensamente que lo normal. Piense solo en aquellas
              actividades que realizó durante por lo menos 10 minutos seguidos.
            </p>
            <div className="w-full h-0.5 bg-neutral-300" />
          </div>
          <Q
            num={3}
            q="Durante los últimos 7 días, ¿En cuántos días hizo
                actividades físicas moderadas como transportar pesos
                livianos, andar en bicicleta a velocidad regular o jugar
                a dobles en tenis? No incluya caminar"
            inputT="Días por semana"
            inputR="Ninguna actividad física intensa (vaya a la pregunta 5)"
            skipNext={true}
            register={register}
            errorT1={errors.q3T1}
          />
          {!skip[1] && (
            <Q
              num={4}
              q="Habitualmente, ¿Cuánto tiempo en total dedicó a una
              actividad física moderada en uno de esos días?
              (ejemplo: si practicó 20 minutos marque 0 h y 20 min)"
              inputT="Horas por día"
              inputT2="Minutos por día"
              inputR="No sabe / no está seguro"
              register={register}
              errorT1={errors.q4T1}
              errorT2={errors.q4T2}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-2  pb-10">
            <div className="w-full h-0.5 bg-neutral-300" />
            <p className="text-center leading-snug max-w-prose md:mt-4 md:my-6 my-2">
              Piense en el tiempo que usted dedicó a{" "}
              <span className="font-bold">CAMINAR</span> en los últimos 7 días.
              Esto incluye caminar en el trabajo o en la casa, para trasladarse
              de un lugar a otro, o cualquier otra caminata que usted podría
              hacer solamente para la recreación, el deporte, el ejercicio o el
              ocio.
            </p>
            <div className="w-full h-0.5 bg-neutral-300" />
          </div>
          <Q
            num={5}
            q="Durante los últimos 7 días, ¿En cuántos caminó por lo
              menos 10 minutos seguidos?"
            inputT="Días por semana"
            inputR="Ninguna actividad física intensa (vaya a la pregunta 7)"
            skipNext={true}
            register={register}
            errorT1={errors.q5T1}
          />
          {!skip[2] && (
            <Q
              num={6}
              q="Habitualmente, ¿Cuánto tiempo en total dedicó a
              caminar en uno de esos días?"
              inputT="Horas por día"
              inputT2="Minutos por día"
              inputR="No sabe / no está seguro"
              register={register}
              errorT1={errors.q6T1}
              errorT2={errors.q6T2}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-2  pb-10">
            <div className="w-full h-0.5 bg-neutral-300" />
            <p className="text-center leading-snug max-w-prose md:mt-4 md:my-6 my-2">
              La ultima pregunta es acerca del tiempo que pasó usted{" "}
              <span className="font-bold">SENTADO</span> durante los días
              hábiles de los últimos 7 dias. Esto incluye el tiempo dedicado al
              trabajo, en la casa, en una clase, y durante el tiempo libre.
              Puede incluir el tiempo que paso sentado ante un escritorio,
              leyendo, viajando en autobús, o sentado o recostado mirando tele.
            </p>
            <div className="w-full h-0.5 bg-neutral-300" />
          </div>
          <Q
            num={7}
            q="Habitualmente, ¿Cuánto tiempo pasó sentado durante
              un día hábil?"
            inputT="Horas por día"
            inputT2="Minutos por día"
            inputR="No sabe / no está seguro"
            register={register}
            errorT1={errors.q7T1}
          />
          <Button
            className="hover:bg-neutral-400 transition active:bg-neutral-600"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
