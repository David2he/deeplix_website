import { useEffect, useState } from "react";

export const GeneratedText = () => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [randomNumberContent, setRandomNumberContent] = useState([
    ["InnerBrownRaise", "0"],
    ["LipPress", "0"],
    ["LipPucker", "0"],
    ["Attention", "0"],
    ["Fear", "0"],
    ["Surprise", "0"],
    ["Valences", "0"],
    ["Engagement", "0"],
  ]);

  const generateRandomNumbers = () => {
    return randomNumberContent.map((content) => {
      return [content[0], (Math.random() * 2).toFixed(4).toString()];
    });
  };

  useEffect(() => {
    let intervalId;

    if (isGenerating) {
      intervalId = setInterval(() => {
        setRandomNumberContent(generateRandomNumbers());
      }, 100);

      setTimeout(() => {
        clearInterval(intervalId);
        setIsGenerating(false);
      }, 10000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isGenerating]);

  return (
    <>
      <ul>
        <li>Measurements</li>
        <li>Expressions</li>
        <li>Ethnicity : European</li>
        {randomNumberContent.map((content, index) => {
          return (
            <li key={index}>
              {content[0]} : {content[1]}
            </li>
          );
        })}
      </ul>
    </>
  );
};
