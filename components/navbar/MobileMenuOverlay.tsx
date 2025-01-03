interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuOverlay = ({ isOpen, onClose }: MobileMenuOverlayProps) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    />
  );
};

export default MobileMenuOverlay;
