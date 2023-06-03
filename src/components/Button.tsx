import Link from "next/link";
import React from "react";

type ButtonProps = { text: string; link: string; target?: string };

function Button({ text, link, target }: ButtonProps) {
  return (
    <Link className="btn" href={link} target={target}>
      {text}
    </Link>
  );
}

export default Button;
