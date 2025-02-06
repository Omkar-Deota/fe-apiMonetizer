import { AvatarIcon, AvatarProps, useAvatar } from '@heroui/react';
import { forwardRef, useMemo, useCallback, useState } from 'react';

const CustomAvatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    src,
    icon = <AvatarIcon />,
    alt,
    classNames,
    slots,
    name,
    showFallback: initialShowFallback,
    fallback: customFallback,
    getInitials,
    getAvatarProps,
    getImageProps
  } = useAvatar({
    ref,
    ...props
  });

  // State to manage fallback display
  const [showFallback, setShowFallback] = useState(initialShowFallback);

  // Enhanced fallback to handle both custom component and initials
  const fallbackContent = useMemo(() => {
    // If there is an image source and fallback is not forced, no fallback content is needed
    if (!showFallback && src) return null;

    const ariaLabel = alt || name;

    if (customFallback) {
      return (
        <div
          aria-label={ariaLabel}
          className={slots.fallback({ class: classNames?.fallback })}
          role="img"
        >
          {customFallback}
        </div>
      );
    }

    // Render initials as fallback
    return name ? (
      <span aria-label={ariaLabel} className="font-bold text-lg" role="img">
        {getInitials(name).toUpperCase().slice(0, 2)}
      </span>
    ) : (
      <span
        aria-label={ariaLabel}
        className={slots.icon({ class: classNames?.icon })}
        role="img"
      >
        {icon}
      </span>
    );
  }, [
    showFallback,
    src,
    customFallback,
    name,
    classNames,
    alt,
    getInitials,
    icon,
    slots
  ]);

  // Fallback handler if the image fails to load
  const handleImageError = useCallback(() => {
    setShowFallback(true); // Set fallback to show when the image fails to load
  }, []);

  return (
    <div {...getAvatarProps()}>
      {src && !showFallback ? (
        <img
          {...getImageProps()}
          alt={alt || name}
          onError={handleImageError}
        />
      ) : (
        fallbackContent
      )}
    </div>
  );
});

CustomAvatar.displayName = 'CustomAvatar';

export default CustomAvatar;
