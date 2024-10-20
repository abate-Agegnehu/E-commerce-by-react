import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav_box">Description</div>
        <div className="descriptionbox_nav_box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox_description">
        <p>
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ex
          repellendus nostrum quidem et quo ipsum repellat quibusdam quam
          mollitia voluptas minima nam est rem in, odio voluptatem earum
          accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus maxime officiis laudantium consequatur nobis, assumenda
          accusantium optio quos, adipisci ducimus magnam ab! Aut fugit
          officiis, voluptate dignissimos dolor quas iure?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus ad at molestiae atque, provident facere quis esse. Voluptates dolorum sunt asperiores quisquam similique excepturi eos necessitatibus blanditiis veritatis odit!
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox
