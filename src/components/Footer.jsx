import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-3 max-w-11/12 mx-auto py-12 font-primary">
      <div>
        <p className="text-sm mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis libero nostrum quisquam tempora blanditiis eum, unde esse assumenda maiores veritatis</p>
        <h2 className="text-5xl font-bold font-secondary flex gap-2 items-center"><img className="h-15 w-15" src="./assets/vul_logo.png" alt="vulenris logo" />VULNERIS</h2>
      </div>
      <div className="flex flex-col gap-3 justify-self-center">
        <h3 className="font-bold text-lg">Home</h3>
        <ul className="flex flex-col gap-2">
          <li>About</li>
          <li>Products</li>
          <li>Services</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 justify-self-center">
        <h3 className="font-bold text-lg">Company</h3>
        <ul className="flex flex-col gap-2">
          <li>Career</li>
          <li>Blog</li>
          <li>Support Center</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 justify-self-center">
        <h3 className="font-bold text-lg">Socials</h3>
        <ul className="flex gap-6">
          <li><Linkedin /></li>
          <li><Instagram /></li>
          <li><Facebook /></li>
        </ul>
      </div>
      <div className="col-span-4 row-span-1 h-5 mt-6 gap-5 flex justify-between items-center">
        <p className="text-sm">© 2025 VULNERIS. All rights reserved.</p>
        <div className="flex gap-5">
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms of Service</p>
        </div>
      </div>
    </div>
    
  )
}