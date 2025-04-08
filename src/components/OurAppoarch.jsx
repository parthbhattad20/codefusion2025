import { Card, CardContent} from '@/components/ui/card'; 
import { ChevronDown, ChevronRight, Search, Shield, Wrench } from 'lucide-react';
export default function Approach(){
return (
    <section className="mb-16">
           <Card className="p-8 shadow-sm"> 
             <CardContent className="p-0">                
                <h2 className="text-3xl font-bold mb-8 text-center text-primary flex flex-col lg:flex-row items-center justify-center">Our Approach: <span className='hidden lg:ml-2 lg:flex lg:items-center'> Find <ChevronRight/>  Fix <ChevronRight/> Fortify</span></h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-center">
                
                   <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300"> 
                     <CardContent className="p-0 flex flex-col items-center">
                       <span className="text-5xl mb-3 inline-block"><Search /></span>
                       
                       <h3 className="font-semibold text-xl text-primary mb-2">Find</h3>
                       
                       <p className="text-muted-foreground">Discover hidden vulnerabilities using advanced scanning, penetration testing, and AI-driven threat intelligence.</p>
                     </CardContent>
                   </Card>
                   <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                     <CardContent className="p-0 flex flex-col items-center">
                       <span className="text-5xl mb-3 inline-block"><Wrench /></span>
                       <h3 className="font-semibold text-xl text-primary mb-2">Fix</h3>
                       <p className="text-muted-foreground">Deliver prioritized, actionable remediation guidance and support to eliminate security weaknesses effectively.</p>
                     </CardContent>
                   </Card>
                   <Card className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                     <CardContent className="p-0 flex flex-col items-center">
                       <span className="text-5xl mb-3 inline-block"><Shield /></span>
                       <h3 className="font-semibold text-xl text-primary mb-2">Fortify</h3>
                       <p className="text-muted-foreground">Strengthen defenses with continuous monitoring, security hardening, and strategic advisory services.</p>
                     </CardContent>
                   </Card>
                </ul>
             </CardContent>
           </Card>
        </section>
    )
}
