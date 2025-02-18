
// eslint-disable-next-line react/prop-types
const BackgroundOverlay = ({ onClose, className = '', position = 'fixed' }) => {
  return (
    <div
      className={`${position} bg-overlay opacity-50 inset-0 flex items-center justify-center ${className}`}
      onClick={onClose}
    ></div>
  );
};

export default BackgroundOverlay;
