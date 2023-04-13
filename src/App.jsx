import { useEffect, useState } from "react";
import "./App.scss";
import BottomResultBox from "./components/BottomResultBox/BottomResult";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ResultBox from "./components/ResultBox/ResultBox";
import TextArea from "./components/TextArea/TextArea";
import { pronouns } from "./data/pronouns";

const App = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [pronounCount, setPronounCount] = useState(0);
  const [readTime, setReadTime] = useState("-");
  const [longestWord, setLongestWord] = useState("-");
  const resultBar = [
    {
      title: "Words",
      value: words,
    },
    {
      title: "Characters",
      value: characters,
    },
    {
      title: "Sentences",
      value: sentence,
    },
    {
      title: "Paragraphs ",
      value: paragraph,
    },
    {
      title: "Pronouns",
      value: pronounCount,
    },
  ];
  const bottomResultBar = [
    {
      title: "Average Reading Time:",
      value: `~ ${readTime} minutes`,
    },
    {
      title: "Longest word:",
      value: longestWord,
    },
  ];

  // This function return pronoun array
  const matchWords = (subject, words) => {
    var regexMetachars = /[(){[*+?.\\^$|]/g;

    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].replace(regexMetachars, "\\$&");
    }

    var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");

    return subject.match(regex) || [];
  };
  function findLongestWord(str) {
    let longest = 0;
    let longStr = "";
    let regex = /\w+/g; // Note: ‘g’ searches a pattern more than once. (Global)
    let arr = str.match(regex);

    arr.map((val) => {
      if (val.length > longest) {
        longStr = val;
        longest = val.length;
      }
    });
    return longStr;
  }
  const handleText = (txt) => {
    setText(txt);
    setCharacters(text.trim().length);
    setWords(text.split(/\b\w+\b/).length - 1);
    setParagraph(text.replace(/\n$/gm, "").split(/\n/).length);
    setSentence(text.split(/[\.!\?]+\s/g).filter(Boolean).length);
    setPronounCount(matchWords(text, pronouns).length);
    setReadTime(Math.ceil(text.split(/\b\w+\b/).length / 250));
    setLongestWord(findLongestWord(text));
  };
  useEffect(() => {
    handleText;
  }, [text]);

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultBar={resultBar} />
          <TextArea handleText={handleText} />
          <BottomResultBox bottomResultBar={bottomResultBar} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
