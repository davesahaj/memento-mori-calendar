"use client";

import { useEffect, useState } from "react";
import { quotesData } from "../constants/quotes";

export const Quotes = () => {
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    const quote = quotesData[Math.floor(Math.random() * quotesData.length)];

    setQuote(quote);
  }, []);

  return (
    <div className="flex flex-col pt-[10%] px-16 justify-start items-center gap-2 flex-1">
      <span className="text-2xl">{quote.quote}</span>
      {quote.author ? (
        <span className="font-bold italic">—{quote.author}</span>
      ) : (
        ""
      )}
    </div>
  );
};
