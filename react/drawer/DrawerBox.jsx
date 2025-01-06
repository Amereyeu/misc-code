/*********************************************
 * drawer box with framer motion
 *********************************************/
import {
  motion,
  useAnimate,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import useMeasure from "react-use-measure";

function DrawerBox({ open, setOpen, children }) {
  const [scope, animate] = useAnimate();

  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);

  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="drawer"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="drawer__inner"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="drawer__inner__content">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="drawer__inner__content__button"
              ></button>
            </div>
            <div className="drawer__inner__content__text">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default DrawerBox;

