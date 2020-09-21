import React from "react";

import Accordian from "../../../shared/UIElements/Accordian/Accordian";
import Button from "../../../shared/UIElements/Button/Button";
import "./Faq.css";

const Faq = (props) => {
  return (
    <div className="faq">
      <div className="faq__title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <Accordian
        title="What is Netflix?"
        content="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
      />
      <Accordian
        title="How much does Netflix cost?"
        content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 799 to ₹ 199 a month. No extra costs, no contracts."
      />
      <Accordian
        title="Where can I watch?"
        content="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 799 to ₹ 199 a month. No extra costs, no contracts."
      />
      <Accordian
        title="How much does Netflix cost?"
        content="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
      />
      <Accordian
        title="How do I cancel?"
        content="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <Accordian
        title="What can I watch on Netflix?"
        content="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />

      <div className="header__signup">
        <h2>Ready to watch? Sign up to create your membership.</h2>
        <Button type="link" href="#" title="Get Started &rarr;" />{" "}
        {/* signup link */}
      </div>
    </div>
  );
};

export default Faq;
