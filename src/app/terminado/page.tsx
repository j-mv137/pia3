"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const End: React.FC = () => {
  const router = useRouter();
  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="bg-neutral-900 py-5 px-10 rounded-xl text-white">
            Gracias por contestar nuestra encuesta
          </div>
          <Button
            variant="link"
            onClick={() => {
              router.push("/");
            }}
          >
            Regresar
          </Button>
        </div>
      </div>
    </main>
  );
};

export default End;
