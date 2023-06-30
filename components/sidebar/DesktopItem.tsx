"use client";

import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { IconType } from "react-icons";

interface DesktopItemProps {
  label: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={twMerge(
          "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-abu hover:text-coklat hover:bg-gray-100",
          active && "bg-gray-100 text-coklat"
        )}
      >
        <Icon className="w-6 h-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};
export default DesktopItem;
