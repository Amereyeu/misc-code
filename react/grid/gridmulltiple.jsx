import { motion } from "framer-motion";

function Tiles({ rows: r, cols: c }) {
  const rows = new Array(r || 100).fill(1);
  const cols = new Array(c || 10).fill(1);

  const bg = {
    backgroundColor: "#000",
  };

  return (
    <div className="tiles-wrap">
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="tiles-row">
          {cols.map((_, j) => (
            <motion.div
              className="tile"
              whileHover={{
                backgroundColor: `#39f`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              style={bg}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}

export default Tiles;
