import Template from "design/Template";
import { Link } from "react-router-dom";
import { col } from "style/display";

export default function Test() {
  return (
    <div>
      <img src="/images/cat.png" alt="cat" width={500} height={500} />
      <Template subject="This is Template's Subject">
        <div>This is Template's Children </div>
      </Template>
      <div className={col(4)}>
        <Link className="w-48 bg-black text-white" to="/sign-in">
          Go to Sign In
        </Link>
        <Link className="w-48 bg-black text-white" to="/sign-up">
          Go to Sign Up
        </Link>
      </div>
    </div>
  );
}
