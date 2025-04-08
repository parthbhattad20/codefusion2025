import { Card,CardContent , CardHeader , CardTitle } from "@/components/ui/card"
export default function Impact(){
    return (
        <section className="mb-16">      
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Impact Delivered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300"> 
              <CardHeader>
                
                <CardTitle className="text-xl font-semibold text-primary">Reduced Attack Surface for FinTech Leader</CardTitle>
              </CardHeader>
              <CardContent>
                 
                <p className="mb-4">A major financial services client faced increasing targeted attacks. Our <strong className='text-primary'>Find › Fix › Fortify</strong> cycle identified and remediated 95% of critical vulnerabilities within 3 months.</p>
                 
                <p className="text-sm text-muted-foreground font-medium">Result: Drastic reduction in intrusion attempts, enhanced compliance posture.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <CardTitle className="text-xl font-semibold text-primary">Secured Cloud Migration for SaaS Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">During a complex cloud transition, we provided continuous security validation, ensuring misconfigurations were fixed <strong className='text-primary'>before</strong> they could be exploited.</p>
                <p className="text-sm text-muted-foreground font-medium">Result: Seamless migration with zero security incidents, increased customer trust.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <CardTitle className="text-xl font-semibold text-primary">Hardened IoT Infrastructure for Manufacturer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Identified critical flaws in connected devices. Our team provided specific firmware fixes and network segmentation strategies (<strong className='text-primary'>Fix & Fortify</strong>).</p>
                <p className="text-sm text-muted-foreground font-medium">Result: Secured product ecosystem, protected sensitive operational data.</p>
              </CardContent>
            </Card>
          </div>
        </section>
    )
}