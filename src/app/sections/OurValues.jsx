import { Card,CardContent } from "@/components/ui/card"
export default function OurValues(){
    return (
        <section className="mb-16">
           
        <h2 className="text-4xl font-bold mb-8 text-center text-primary">Our Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lg text-center">
           
           <Card className="bg-accent p-6 shadow-sm">
              <CardContent className="p-0 flex flex-col items-center">
                  <span className="text-3xl mb-2 inline-block">✅</span>
                  <h4 className="font-semibold mb-1 text-accent-foreground">Integrity</h4>
                  <p className="text-sm text-accent-foreground/80">Security without compromise.</p>
              </CardContent>
           </Card>
           <Card className="bg-accent p-6 shadow-sm">
               <CardContent className="p-0 flex flex-col items-center">
                  <span className="text-3xl mb-2 inline-block">🚀</span>
                  <h4 className="font-semibold mb-1 text-accent-foreground">Innovation</h4>
                  <p className="text-sm text-accent-foreground/80">Always ahead of the curve.</p>
               </CardContent>
           </Card>
           <Card className="bg-accent p-6 shadow-sm">
               <CardContent className="p-0 flex flex-col items-center">
                  <span className="text-3xl mb-2 inline-block">💡</span>
                  <h4 className="font-semibold mb-1 text-accent-foreground">Empowerment</h4>
                  <p className="text-sm text-accent-foreground/80">Putting control in your hands.</p>
               </CardContent>
           </Card>
            <Card className="bg-accent p-6 shadow-sm">
               <CardContent className="p-0 flex flex-col items-center">
                  <span className="text-3xl mb-2 inline-block">🤝</span>
                  <h4 className="font-semibold mb-1 text-accent-foreground">Trust</h4>
                  <p className="text-sm text-accent-foreground/80">Built on transparency and results.</p>
               </CardContent>
            </Card>
        </ul>
      </section>
    )
}