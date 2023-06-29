import { Dialog, Transition } from "@headlessui/react";
import { Form } from "@remix-run/react";
import { Fragment, PropsWithChildren, useRef } from "react";
import { ModalFooter } from "./modal-footer";
import { ModalHeader } from "./modal-header";

export enum IModalSizeEnum {
  sm = "sm",
  md = "md",
  lg = "lg",
}

const ModalSizeOptions: {
  [key in IModalSizeEnum]: { class: string };
} = {
  [IModalSizeEnum.sm]: { class: "max-w-md" },
  [IModalSizeEnum.md]: { class: "max-w-lg" },
  [IModalSizeEnum.lg]: { class: "max-w-5xl" },
};

type ModalProps = {
  header: {
    title: string;
  };
  footer: {
    primaryTextBtn: string;

    primaryAction?: () => Promise<void>;
    secondaryTextBtn?: string;
  };
  size?: IModalSizeEnum;
  action: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export function Modal({
  header,
  footer,
  size = IModalSizeEnum.md,
  action,
  children,
}: PropsWithChildren<ModalProps>) {
  const { open, setOpen } = action;

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ${ModalSizeOptions[size].class}`}
              >
                <Form method="post">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
                        <ModalHeader title={header.title} />

                        <div className="mt-2">{children}</div>
                      </div>
                    </div>
                  </div>

                  <ModalFooter
                    setOpen={setOpen}
                    cancelButtonRef={cancelButtonRef}
                    primaryTextBtn={footer.primaryTextBtn}
                    secondaryTextBtn={footer.secondaryTextBtn}
                    primaryAction={footer.primaryAction}
                  />
                </Form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
