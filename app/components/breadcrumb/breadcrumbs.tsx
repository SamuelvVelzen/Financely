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
        <span key={index}>
          <BreadCrumb breadCrumbConfig={breadCrumb} />
          {index + 1 < breadCrumbs.length && (
            <span className="text-darkgrey"> {divider} </span>
          )}
        </span>
      ))}
    </div>
  );
}
