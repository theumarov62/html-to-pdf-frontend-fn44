import { useRef, useState } from "react";
import Content from "./components/Content";
import Header from "./components/header";

const fonts = ["Arial", "Courier New", "Tahoma", "Times New Roman"];

export default function App() {
  const [styles, setStyles] = useState({
    defaultFont: "Times New Roman",
  });

  function download(file) {
    const url = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  }
  function generate() {
    fetch("https://spokeless-laryngeally-aja.ngrok-free.dev/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        html: contentRef.current.innerHTML,
      }),
    })
      .then((res) => {
        return res.blob();
      })
      .then((res) => {
        download(res);
      });
  }

  const contentRef = useRef();

  const [editMode, setEditMode] = useState(false);

  function handleFont(value) {
    setStyles((prev) => {
      return { ...prev, defaultFont: value };
    });
  }

  return (
    <div>
      <Header
        generate={generate}
        contentRef={contentRef}
        fonts={fonts}
        styles={styles}
        handleFont={handleFont}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Content styles={styles} editMode={editMode} contentRef={contentRef} />
    </div>
  );
}
