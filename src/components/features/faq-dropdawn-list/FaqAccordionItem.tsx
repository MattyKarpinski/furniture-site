import { AccordionData } from "./FaqTypes";
import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { RefObject } from 'react';

function FaqAccordionItem({
    data,
    isOpen,
    btnOnClick,
    }: {
    data: AccordionData;
    isOpen: boolean;
    btnOnClick: () => void;}) {
  
    
    function getRefValue<C>(ref: RefObject<C>) {
        return ref.current as C;
      }

      
      
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    
    useEffect(() => {
        if (isOpen) {
          const contentEl = getRefValue(contentRef);
    
          setHeight(contentEl.scrollHeight);
        } else {
          setHeight(0);
        }
      }, [isOpen]);
  
    return (
        <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <p className="accordion-item-btn" onClick={btnOnClick}>
                {data.title}
            </p>
        <div className="accordion-item-container" style={{ height }}>
          <p ref={contentRef} className="accordion-item-content">
            {data.content}
          </p>
        </div>
      </li>
  )
}

export default FaqAccordionItem