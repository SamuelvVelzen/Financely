export type IExternalModalFooterProps = {
  formName?: string;

  primaryTextBtn: string;

  primaryAction?: () => Promise<void>;
  secondaryTextBtn?: string;
};

type ModalFooterProps = {
  setOpen: (value: boolean) => void;
  cancelButtonRef: React.MutableRefObject<null>;

  footerProps: IExternalModalFooterProps;
};

export function ModalFooter({
  setOpen,
  cancelButtonRef,
  footerProps,
}: ModalFooterProps) {
  const { formName, primaryTextBtn, primaryAction, secondaryTextBtn } =
    footerProps;

  const handleSecondaryClick = () => {
    setOpen(false);
  };

  const handlePrimaryClick = async () => {
    if (primaryAction) {
      await primaryAction();
    }

    setOpen(false);
  };

  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="submit"
        form={formName}
        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        onClick={handlePrimaryClick}
      >
        {primaryTextBtn}
      </button>
      {secondaryTextBtn && (
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={handleSecondaryClick}
          ref={cancelButtonRef}
        >
          {secondaryTextBtn}
        </button>
      )}
    </div>
  );
}
