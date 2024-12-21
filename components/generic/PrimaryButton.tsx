import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton = ({
  href,
  children,
  className,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <Link
      href={href}
      className={`bg-bear hover:bg-bearHover py-3 px-5 text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;