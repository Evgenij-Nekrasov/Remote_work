const borderStyles =
   "border-2 border-almost-black rounded-lg hover:bg-black hover:text-white";
const filledStyles =
   "text-white hover:text-black bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:almost-black border-2 border-almost-black";

export const Button = ({
   children = "",
   hasBorder = false,
   isFilled = false,
}) => {
   return (
      <button
         className={`text-medium-gray px-5 py-2 
			${hasBorder && borderStyles} ${isFilled && filledStyles}`}
      >
         {children}
      </button>
   );
};
