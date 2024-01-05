import LineBreak from "design/LineBreak";
import { agreements } from "document/sign-up/agreements";

export default function Agreements() {
  return (
    <div>
      {agreements.map(({ title, contents }) => (
        <div key={title}>
          <LineBreak contents={contents} />
        </div>
      ))}
    </div>
  );
}
