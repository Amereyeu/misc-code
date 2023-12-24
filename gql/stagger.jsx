import { motion } from 'framer-motion';

function Stagger() {
  const items = [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
    {
      id: '4',
    },
    {
      id: '5',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
    },
    {
      id: '9',
    },
  ];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <>
      <motion.ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: '0px',
          marginBottom: '8px',
          marginTop: '15px',
          paddingLeft: '0px',
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {items.map((one) => (
          <motion.li
            style={{
              listStyle: 'none',
              marginRight: '-10px',
            }}
            key={one.id}
            variants={item}
            whileHover={{
              // scale: 1.2,
              marginRight: '5px',
              transition: { ease: 'easeOut' },
            }}
          >
            <div
              style={{
                background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '3px solid #4C79DF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '38px',
              }}
            >
              <span role="img" style={{ paddingRight: 0 }}>
                {one.id}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Stagger;
