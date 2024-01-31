import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { MenuIcon} from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between items-center flex felx-row" >
            <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
            <Button variant="outline" size="icon" className="h-8 w-8">
                <MenuIcon size={18}/>
            </Button>
            </CardContent>

        </Card>

     );
}
 
export default Header;