/*
import * as RadixModal from "@radix-ui/react-dialog";
interface Props {
  trigger: JSX.Element;
  open?: boolean;
  on_open_change?: () => void;
  content: JSX.Element;
  modal_frame_classNames?: string;
}
export const Modal = ({
  trigger,
  content,
  open,
  on_open_change,
  modal_frame_classNames = "",
}: Props) => {
  // <RadixModal.Content className={`modal-open-animation fixed top-1/2 left-1/2 z-20 flex max-w-full -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-white py-3 px-5 drop-shadow-lg lg:px-8 lg:py-6 ${top_border ? get_border_color(top_border) : ""}`}>
  return (
    <RadixModal.Root onOpenChange={on_open_change} open={open}>
      <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className="modal-overlay bg-gray-500" />
        <RadixModal.Content
          className={`modal-open-animation fixed z-20 flex max-w-full rounded-lg bg-white drop-shadow-lg ${modal_frame_classNames}`}
        >
          {content}
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  );
};
export default Modal;
*/
import * as RadixModal from "@radix-ui/react-dialog";
interface ModalProps {
  trigger: JSX.Element;
  open?: boolean;
  on_open_change?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  trigger,
  open,
  on_open_change,
  className = "",
  children,
}) => {
  return (
    <RadixModal.Root onOpenChange={on_open_change} open={open}>
      <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className="modal-overlay bg-gray-500" />
        <RadixModal.Content
          className={`modal-open-animation fixed z-20 flex max-w-full rounded-lg bg-white drop-shadow-lg ${className}`}
        >
          {children}
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  );
};
export default Modal;
