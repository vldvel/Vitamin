import React, { ReactElement } from "react";
import { IFruit } from "types";

interface Properties {
  author: IFruit["image"]["author"];
}
export default function ImageAttribution({ author }: Properties): ReactElement {
  return (
    <>
      <div className="w-full h-full absolute top-0 bg-gradient-to-b from-transparent via-transparent text-opacity-50 text-black to-current" />
      <div className="absolute bottom-1 right-1 text-xs text-white px-1">
        <span>Photo by </span>
        <a
          href={author.url}
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          {author.name}
        </a>
        <span> on </span>
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Unsplash
        </a>
      </div>
    </>
  );
}
