import React from "react";
import coffe from "../image/coffee-min.png";

const About = () => {
  return (
    <>
      <div>
        <div className="w-full bg-right bg-cover about h-72 md:bg-center saturate-50">
          <p className="absolute text-5xl font-bold transform -translate-x-1/2 -translate-y-1/2 font-next top-1/2 left-1/2 text-light">
            About US
          </p>
        </div>
      </div>
      <div className="w-full p-10 overflow-hidden min-h-72 md:p-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <div className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus distinctio praesentium porro quisquam. Eaque
            temporibus adipisci tenetur at impedit? Porro esse deserunt enim
            ducimus ut fugiat dolorum repellat distinctio voluptate! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Qui magnam aliquid
            dolorem est pariatur eos aspernatur repellat voluptate autem fugiat!
            Fuga aliquam dolorum architecto magnam neque iure blanditiis, error
            asperiores.
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              sint iusto fugit veritatis maxime quas nostrum cupiditate vero rem
              culpa consequatur explicabo molestias necessitatibus voluptas nam,
              nisi omnis eligendi voluptate.
            </p>
            <p className="my-2">
              Set green given greater grass unto living creeping it bearing. Saw
              firmament whales let given given all behold multiply dominion from
              moving fruitful replenish meat there image she’d for fish, after
              kind. Shall she’d gathered light said Forth, sixth. Man signs
              fifth give and beast firmament, days great, you after had created.
              Two bearing also heaven you’re living you’re signs night was. Fly
              behold you appear Can’t fruit from from yielding heaven Seas third
              to tree. Fly under seas. You. Lesser abundantly. Two bearing also
              heaven you’re living you’re signs night was. Man signs fifth give
              and beast firmament, days great, you after had created. Lesser
              abundantly. Two bearing also heaven you’re living you’re signs
              night was.
            </p>
          </div>
          <div className="mt-2">
            <img alt="#" src={coffe} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
