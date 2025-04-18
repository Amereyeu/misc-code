

import { AnimatePresence, motion } from "framer-motion";
import { Children, cloneElement, useEffect, useId, useState } from "react";

function Background({
  children,
  defaultValue,
  onValueChange,
  transition,
  enableHover = false,
}) {
  const [activeId, setActiveId] = useState(null);
  const uniqueId = useId();

  const handleSetActiveId = (id) => {
    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  return Children.map(children, (child, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: "box",
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className="box__overlay"
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>

        <div className="box__card">{child.props.children}</div>
      </>
    );
  });
}

export default Background;

