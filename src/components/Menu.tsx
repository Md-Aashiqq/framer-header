import { motion } from "framer-motion";
import React, { createContext, ReactNode, useContext, useState } from "react";

const MenuContext = createContext(null);

const useMenu = () => useContext(MenuContext);

interface MenuItemProps {
  item: string;
  children: ReactNode;
}
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ item, children }: MenuItemProps) => {
  const menu = useMenu();

  return (
    <div
      className="relative text-gray-5"
      // @ts-ignore
      onMouseEnter={() => menu?.setActiveItem(item)}
    >
      <motion.p
        color="rgba(255,255,255, 0.5)"
        animate={{
          color:
            //  @ts-ignore
            menu?.activeItem === item
              ? "rgba(255,255,255, 1)"
              : "rgba(255,255,255, 0.5)",
        }}
        transition={{ duration: 0.25 }}
        className="cursor-pointer"
      >
        {item}
      </motion.p>
      {/* @ts-ignore */}
      {menu?.activeItem !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
        >
          {/* @ts-ignore */}

          {menu.activeItem === item && (
            <div className="absolute left-2/4 -translate-x-2/4 ">
              <motion.div
                layoutId="active"
                className="bg-slate-300 rounded-2xl overflow-hidden border border-cyan-50"
                transition={transition}
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ children }: any) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <MenuContext.Provider
      // @ts-ignore
      value={{ activeItem, setActiveItem }}
    >
      <div className="flex p-3 gap-3" onMouseLeave={() => setActiveItem(null)}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};
