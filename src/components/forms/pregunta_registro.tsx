import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormTypeRegistro } from "@/app/registro-encuesta/page";

interface QRProps {
  type: "radio" | "text";
  labels: string[];
  q: string;
  register: UseFormRegister<FormTypeRegistro>;
  data:
    | "sexo"
    | "semestre"
    | "edad"
    | "estadoCivil"
    | "trabajo"
    | "porpietario"
    | "etnia"
    | "bachillerato";
  error: FieldError | undefined;
}

export const QR: React.FC<QRProps> = ({
  type,
  labels,
  q,
  register,
  data,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2 mb-4 text-sm">
      <p className="">{q}</p>
      {type === "radio" && (
        <RadioGroup defaultValue={labels[0]}>
          {labels.map((l, i) => {
            return (
              <div key={i} className="flex gap-2 items-center">
                <RadioGroupItem
                  className="size-3"
                  value={l}
                  {...register(data, { required: true })}
                />
                <Label htmlFor={l} className="text-xs">
                  {l}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
      {type === "text" && data === "edad" && (
        <div className="flex flex-col">
          {error && (
            <p className="mb-1 text-red-600 text-xs">Entrada inválida</p>
          )}
          <div className="flex gap-2">
            <Input
              className="w-3/5 h-4/5 text-xs"
              placeholder={labels[0]}
              type="number"
              {...register(data, {
                required: true,
                validate: (e) => {
                  try {
                    const val = Number(e);
                    if (val > 13 && val < 25) {
                      return true;
                    }
                  } catch {
                    return false;
                  }
                  return false;
                },
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};
