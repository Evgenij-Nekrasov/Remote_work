import { useState } from "react";

import LogoIcon from "../../images/logo.svg?react";
import MenuIcon from "../../images/icon-menu.svg?react";
import MenuCloseIcon from "../../images/icon-close-menu.svg?react";
import { Button } from "../button/Button";
import { NavItem } from "../navItem/NavItem";
import { NavMenu } from "../navMenu/NavMenu";
import { FEATURES, COMPANY } from "./constants";
import { MobileMenu } from "../mobileMenu/MobileMenu";

export const Header = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   return (
      <header className="flex items-center">
         <LogoIcon />
         <nav className="hidden xl:flex space-x-16 ml-10 items-center">
            <NavItem text="Feature">
               <NavMenu items={FEATURES} />
            </NavItem>
            <NavItem text="Company">
               <NavMenu items={COMPANY} />
            </NavItem>
            <NavItem text="Careers" />
            <NavItem text="About" />
         </nav>
         <div className="hidden xl:flex ml-auto space-x-5">
            <Button>Login</Button>
            <Button hasBorder={true}>Register</Button>
         </div>
         <div
            className="flex xl:hidden ml-auto cursor-pointer z-30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
         >
            {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
         </div>
         <MobileMenu isOpen={isMobileMenuOpen} />
      </header>
   );
};
