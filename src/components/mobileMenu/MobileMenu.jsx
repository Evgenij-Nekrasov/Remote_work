import { Button } from "../button/Button";
import { FEATURES, COMPANY } from "../header/constants";
import { MenuItem } from "../menuItem/MenuItem";
import { NavItem } from "../navItem/NavItem";

export const MobileMenu = ({ isOpen = false }) => {
   return (
      <>
         <div
            className={`fixed top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[100vh] ${
               isOpen ? "flex" : "hidden"
            }`}
         />
         <div
            className={`fixed right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[100vh]  ${
               isOpen ? "flex" : "hidden"
            }`}
         >
            <nav className="my-20 mx-5 space-y-5 text-lg w-full">
               <NavItem text="Features">
                  <div className="flex flex-col space-y-5 p-2">
                     {FEATURES.map(({ text, icon }, i) => (
                        <MenuItem key={i} text={text} icon={icon} />
                     ))}
                  </div>
               </NavItem>
               <NavItem text="Company">
                  <div className="flex flex-col space-y-5 p-2">
                     {COMPANY.map(({ text, icon }, i) => (
                        <MenuItem key={i} text={text} icon={icon} />
                     ))}
                  </div>
               </NavItem>
               <NavItem text="Careers" />
               <NavItem text="About" />
               <div className="flex flex-col space-y-5">
                  <Button>Login</Button>
                  <Button hasBorder={true}>Register</Button>
               </div>
            </nav>
         </div>
      </>
   );
};
