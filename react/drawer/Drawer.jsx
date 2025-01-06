/*********************************************
 * drawer sliding from bottom
 * with framer motion
 *********************************************/
import { useState } from "react";

import DrawerBox from "./DrawerBox";

function Drawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer-wrap">
      <button onClick={() => setOpen(true)} className="button">
        Open drawer
      </button>

      <DrawerBox open={open} setOpen={setOpen}>
        <h2>Drag the handle downwards to close it</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          laboriosam quos deleniti veniam est culpa quis nihil enim suscipit
          nulla aliquid iure optio quaerat deserunt, molestias quasi facere aut
          quidem reprehenderit maiores.
        </p>

        <p>
          Laudantium corrupti neque rerum labore tempore sapiente. Quos, nobis
          dolores. Esse fuga, cupiditate rerum soluta magni numquam nemo aliquid
          voluptate similique deserunt!
        </p>

        <p>
          Rerum inventore provident laboriosam quo facilis nisi voluptatem quam
          maxime pariatur. Velit reiciendis quasi sit magni numquam quos itaque
          ratione, fugit adipisci atque est, tenetur officiis explicabo id
          molestiae aperiam? Expedita quidem inventore magni? Doloremque
          architecto mollitia, dicta, fugit minima velit explicabo sapiente
          beatae fugiat accusamus voluptatum, error voluptatem ab asperiores quo
          modi possimus.
        </p>
      </DrawerBox>
    </div>
  );
}

export default Drawer;

