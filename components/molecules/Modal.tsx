import {FC, ReactNode, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {motion} from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

/**
 * Modal component created using createPortal
 * @param isOpen
 * @param onClose
 * @param children
 * @constructor
 */
const Modal: FC<ModalProps> = ({isOpen, onClose, children}) => {
    const modalRef = useRef<HTMLDivElement | undefined>(null);

    useEffect(() => {
        if (!modalRef.current) return;
        if (isOpen) modalRef.current?.focus();
    }, [isOpen]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    }

    const mainDivVariants = {
        hidden: { opacity: 0,},
        visible: { opacity: 1, },
    }

    if (!isOpen) return null;
    return createPortal(
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]"
            onClick={() => onClose}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            tabIndex={1}
            variants={mainDivVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{duration: .5, ease: "easeInOut"}}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 text-stone-200 dark:bg-stone-800"
                onClick={(e: Event) => e.stopPropagation()}
                initial={{scale: 0.5}}
                animate={{scale: 1}}
                exit={{scale: 0.5}}
                transition={{duration: 0.4}}
                ref={modalRef}
            >
                {children}
            </motion.div>
        </motion.div>,
        document.body
    )
}

export default Modal;