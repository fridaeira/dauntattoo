import React from "react";

export default function Apphero() {
  return (
    <div
      className="d-flex align-items-end justify-content-end p-5"
      style={{
        backgroundImage: "url(/philip.jpg)",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Redo för nästa semester?</h2>
        <h2 style={{ textAlign: "center" }}>
          Vi har över 2000 hotell som väntar på dig!
        </h2>
        <div className="text-center">
          <button>Boka nu!</button>
        </div>
      </div>
    </div>
  );
}
