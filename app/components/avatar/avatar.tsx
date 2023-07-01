import { User } from "@prisma/client";

export enum IAvatarSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

type AvatarProps = {
  className?: string;
  user: User;
  size?: IAvatarSize;
};

export function Avatar({
  user,
  size = IAvatarSize.md,
  className = "",
}: AvatarProps) {
  const { firstName, lastName } = user;

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary ${xOptions[size].avatarSize} ${className}`}
    >
      <span className={`font-bold text-light ${xOptions[size].textSize}`}>
        {Array.from(firstName)[0]}
        {Array.from(lastName)[0]}
      </span>
    </div>
  );
}

const xOptions: {
  [key in IAvatarSize]: { avatarSize: string; textSize: string };
} = {
  [IAvatarSize.sm]: {
    textSize: "text-xs",
    avatarSize: "h-5 w-5",
  },
  [IAvatarSize.md]: {
    textSize: "text-base",
    avatarSize: "h-10 w-10",
  },
  [IAvatarSize.lg]: {
    textSize: "text-lg",
    avatarSize: "h-15 w-15",
  },
};
