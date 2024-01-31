"use client"

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInforPros{
    barbershop: Barbershop
}

const BarbershopInfo = ({barbershop}: BarbershopInforPros) => {
    const router = useRouter();
    const handleBackClick = () => {
        router.replace("/");
    }
    return ( 
        <div>
        <div className="h-[250px] w-full relative">
          <Button onClick={handleBackClick} size="icon" variant="outline" className="z-50 absolute top-4 left-4">
            <ChevronLeftIcon />
          </Button>
  
          <Button
            size="icon"
            variant="outline"
            className="z-50 absolute top-4 right-4"
          >
            <MenuIcon />
          </Button>
          <Image
            src={barbershop.imageUrl}
            fill
            alt={barbershop.name}
            style={{ objectFit: "cover" }}
            className="opacity-75"
          />
        </div>

        <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
          <h1 className="font-bold text-xl">{barbershop.name}</h1>
          <div className="flex item-center gap-2 mt-2">
              <MapPinIcon className="text-primary" size={18}/>
            <p className="text-sm">{barbershop.address}</p>
          </div>
          <div className="flex item-center gap-2 mt-2">
              <StarIcon className="text-primary" size={18}/>
            <p className="text-sm">5,0 (899 avaliações)</p>
          </div>
        </div>
      </div>

     );
}
 
export default BarbershopInfo
;