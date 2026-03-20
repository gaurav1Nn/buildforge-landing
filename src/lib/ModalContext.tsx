import { createContext, useContext, useState } from "react";
import { ReserveModal } from "@/components/ReserveModal";

const ModalContext = createContext<{ open: () => void }>({ open: () => {} });

export const useReserveModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ReserveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
};
