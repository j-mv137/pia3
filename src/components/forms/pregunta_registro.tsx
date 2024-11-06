import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import { UseFormRegister } from "react-hook-form";
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
}

export const QR: React.FC<QRProps> = ({ type, labels, q, register, data }) => {
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
                  {...register(data)}
                />
                <Label htmlFor={l} className="text-xs">
                  {l}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
      {type === "text" && (
        <div className="flex gap-2">
          <Input placeholder={labels[0]} type="text" {...register(data)} />
        </div>
      )}
    </div>
  );
};
