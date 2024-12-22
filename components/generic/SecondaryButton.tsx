import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SecondaryButton = ({
  href,
  children,
  className,
  onClick,
}: SecondaryButtonProps) => {
  return (
    <Link
      href={href}
      className={`border border-bear hover:bg-gray-50 py-3 px-5 text-bear ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;