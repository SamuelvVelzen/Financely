import { BreadCrumb, IBreadCrumbConfig } from "./breadcrumb";

type BreadCrumbsProps = {
  className?: string;
  breadCrumbs: IBreadCrumbConfig[];
  divider?: string;
};

export function BreadCrumbs({
  className = "",
  breadCrumbs,
  divider = "/",
}: BreadCrumbsProps) {
  return (
    <div>
      {breadCrumbs.map((breadCrumb, index) => (
        <>
          <BreadCrumb key={index} breadCrumbConfig={breadCrumb} />
          {index + 1 < breadCrumbs.length && (
            <span className="text-darkgrey"> {divider} </span>
          )}
        </>
      ))}
    </div>
  );
}
