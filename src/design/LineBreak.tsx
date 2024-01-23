import { Fragment } from "react";

export default function LineBreak({ contents }: { contents: string[] | null }) {
  return (
    <div>
      {contents?.map((content) => (
        <Fragment key={content}>
          {content}
          <br />
        </Fragment>
      ))}
    </div>
  );
}
