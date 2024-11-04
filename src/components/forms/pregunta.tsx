"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useState } from "react";
import { useSkipQ } from "@/app/hooks/useSkipQ";
import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";

interface QProps {
  className?: string;
  num: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  q: string;
  inputT: string;
  inputR: string;
  skipNext?: boolean;
  inputT2?: string;
  register: UseFormRegister<FormType>;
  errorT1: FieldError | undefined;
  errorT2?: FieldError | undefined;
}

export type FormType = {
  q1T1: string;
  q1R: boolean;
  q2T1: string;
  q2T2: string;
  q2R: boolean;
  q3T1: string;
  q3R: boolean;
  q4T1: string;
  q4T2: string;
  q4R: boolean;
  q5T1: string;
  q5R: boolean;
  q6T1: string;
  q6T2: string;
  q6R: boolean;
  q7T1: string;
  q7R: boolean;
};

export const Q: React.FC<QProps> = ({
  className,
  num,
  q,
  inputR,
  inputT,
  skipNext = false,
  inputT2,
  register,
  errorT1,
  errorT2,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  //   const inputT1Ref = useRef<HTMLInputElement | null>(null);
  //   const inputT2Ref = useRef<HTMLInputElement | null>(null);

  const setQ = useSkipQ((state) => state.setQ);

  const handleSkip = useCallback(() => {
    setQ(Math.floor(num / 2), !isChecked);
  }, [isChecked, setQ, num]);

  return (
    <div className={cn("pb-7", className)}>
      <div className="max-w-prose md:mt-4 md:mb-6 mb-7">
        <p className="flex gap-1">
          <span className="font-semibold">{num}</span>
          {q}
        </p>
      </div>
      <div className="px-6">
        <div className="flex flex-col">
          {errorT1 && (
            <span className="mb-1 text-red-600 text-xs">
              Respuesta inválida
            </span>
          )}
          <div className="flex gap-2 items-center md:gap-3 mb-4">
            <Input
              disabled={isChecked}
              type="number"
              className="w-1/2"
              {...register(`q${num}T1`, {
                maxLength: 2,
                validate: (value) => {
                  if (num === 1 || num === 3 || num === 5) {
                    try {
                      const val = Number(value);
                      if (val >= 0 && val <= 7) return true;
                    } catch {
                      return false;
                    }

                    return false;
                  }
                  try {
                    const val = Number(value);
                    if (val >= 0 && val <= 24) return true;
                  } catch {
                    return false;
                  }

                  return false;
                },
              })}
              //   ref={(e) => {
              //     register(`q${num}T1`).ref(e);
              //     inputT1Ref.current = e;
              //   }}
            />
            <Label htmlFor="Text11">{inputT}</Label>
          </div>
        </div>
        {inputT2 && (num === 2 || num === 4 || num === 6) && (
          <div className="flex flex-col">
            {errorT2 && (
              <span className="mb-1 text-red-600 text-xs">
                Respuesta inválida
              </span>
            )}
            <div className="flex gap-2 items-center md:gap-3 mb-4">
              <Input
                disabled={isChecked}
                type="number"
                className="w-1/2"
                {...register(`q${num}T2`, {
                  maxLength: 3,
                  validate: (value) => {
                    try {
                      const val = Number(value);
                      if (val >= 0 && val <= 60) return true;
                    } catch {
                      return false;
                    }

                    return false;
                  },
                })}
                //   ref={(e) => {
                //     register(`q${num}T1`).ref(e);
                //     inputT2Ref.current = e;
                //   }}
              />
              <Label htmlFor="Text2">{inputT2}</Label>
            </div>
          </div>
        )}
        <div className="flex gap-2 items-center md:gap-3">
          <Input
            className="max-w-5"
            type="checkbox"
            {...register(`q${num}R`, {
              onChange: () => {
                setIsChecked((prev) => !prev);
                if (skipNext) handleSkip();
                // handleChecked();
              },
            })}
          />
          <Label htmlFor="Radio">{inputR}</Label>
        </div>
      </div>
    </div>
  );
};
