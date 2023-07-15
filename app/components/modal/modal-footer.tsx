import { Button, OutlineButton, ThemeColorEnum } from "../button";

export type IExternalModalFooterProps = {
  primaryTextBtn: string;
  primaryTypeBtn?: ThemeColorEnum;

  secondaryTextBtn?: string;
  secondaryTypeBtn?: ThemeColorEnum;

  primaryAction?: () => Promise<void>;
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
  const {
    primaryTextBtn,
    primaryTypeBtn,
    primaryAction,
    secondaryTextBtn,
    secondaryTypeBtn,
  } = footerProps;

  const handleSecondaryClick = () => {
    setOpen(false);
  };

  const handlePrimaryClick = async () => {
    if (primaryAction) {
      await primaryAction();
    }

    setOpen(false);
  };

  if (!footerProps || !footerProps.primaryTextBtn) {
    return null;
  }

  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <Button
        theme={primaryTypeBtn || ThemeColorEnum.primary}
        onClick={handlePrimaryClick}
        type="submit"
      >
        {primaryTextBtn}
      </Button>

      {secondaryTextBtn && (
        <OutlineButton
          theme={secondaryTypeBtn || ThemeColorEnum.primary}
          ref={cancelButtonRef}
          onClick={handleSecondaryClick}
        >
          {secondaryTextBtn}
        </OutlineButton>
      )}
    </div>
  );
}
