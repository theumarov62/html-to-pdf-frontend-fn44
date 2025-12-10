import { useState } from "react";

export default function Content({ styles, editMode, contentRef }) {
  const [fullName, setFullName] = useState("Abdulloh Umarov");
  const [address, setAddress] = useState(
    "Uzbekistan, Fergana,\nTadbirkorlar 186"
  );
  const [birthday, setBirthday] = useState("02.02.1994");
  const [tel, setTel] = useState("+998 (99) 777 77-77");
  const [email, setEmail] = useState("abdulloumarov810@gmail.com");

  const inlineStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const inlineStyleForText = {
    fontSize: "21px",
  };

  return (
    <div ref={contentRef}>
      <h1 style={{ fontFamily: styles.defaultFont }}>{fullName}</h1>

      {/* Name */}
      {editMode ? (
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />
      ) : (
        <div style={{ ...inlineStyle, fontFamily: styles.defaultFont }}>
          Name:
          <p style={inlineStyleForText}>{fullName}</p>
        </div>
      )}

      {/* Address */}
      {editMode ? (
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />
      ) : (
        <div style={{ ...inlineStyle, fontFamily: styles.defaultFont }}>
          Address:
          <p style={inlineStyleForText}>{address}</p>
        </div>
      )}

      {/* Birthday */}
      {editMode ? (
        <input
          type="text"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />
      ) : (
        <div style={{ ...inlineStyle, fontFamily: styles.defaultFont }}>
          Birthday:
          <p style={inlineStyleForText}>{birthday}</p>
        </div>
      )}

      {/* Tel */}
      {editMode ? (
        <input
          type="text"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />
      ) : (
        <div style={{ ...inlineStyle, fontFamily: styles.defaultFont }}>
          Tel:
          <p style={inlineStyleForText}>{tel}</p>
        </div>
      )}

      {/* Email */}
      {editMode ? (
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />
      ) : (
        <div style={{ ...inlineStyle, fontFamily: styles.defaultFont }}>
          Email:
          <p style={inlineStyleForText}>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      )}
    </div>
  );
}
