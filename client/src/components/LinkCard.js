import React from "react";
export const LinkCard = ({ link }) => {
  return (
    <div>
      <h2>Link</h2>
      <p>
        Short link:{" "}
        <a href={link.to} target="_blank" rel="noopener norefrer">
          {link.to}
        </a>
      </p>
      <p>
        Original link:{" "}
        <a href={link.from} target="_blank" rel="noopener norefrer">
          {link.from}
        </a>
      </p>
      <p>
        Clicks:
        <strong>{link.clicks}</strong>
      </p>
      <p>
        Date:
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </div>
  );
};
