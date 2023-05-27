import Link from "next/link";
import React from "react";

type ButtonProps = { text: string; link: string };

function Button({ text, link }: ButtonProps) {
  return (
    <Link className="btn" href={link}>
      {text}
    </Link>
  );
}

export default Button;
