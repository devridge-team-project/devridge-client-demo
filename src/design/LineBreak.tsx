import { Fragment } from "react";

export default function LineBreak({ contents }: { contents: string[] | null }) {
  return (
    <div>
      {contents?.map((content, index) => (
        <Fragment key={index}>
          {content}
          <br />
        </Fragment>
      ))}
    </div>
  );
}
