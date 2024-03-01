import { useState } from "react";
import propTypes from "prop-types";

import ArrowDownIcon from "../../images/icon-arrow-down.svg?react";
import ArrowUpIcon from "../../images/icon-arrow-up.svg?react";

export const NavItem = ({ text = "", children }) => {
   const [selected, setSelected] = useState("");
   return (
      <div className="relative">
         <div className="flex space-x-2 cursor-pointer items-center">
            <span
               className="text-medium-gray hover:text-almost-black"
               onClick={() =>
                  children && setSelected(text !== selected ? text : "")
               }
            >
               {text}
            </span>
            {children && text !== selected && <ArrowDownIcon />}
            {children && text === selected && <ArrowUpIcon />}
         </div>
         {selected && children}
      </div>
   );
};

NavItem.propTypes = propTypes.string.isRequired;
