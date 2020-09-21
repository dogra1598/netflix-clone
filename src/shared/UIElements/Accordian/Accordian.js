import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./Accordian.css";

const Accordian = (props) => {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{props.title}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>{props.content}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
