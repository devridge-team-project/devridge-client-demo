import { center, col } from "style";
import { Link } from "react-router-dom";
import { contents } from "../static/auth";

export default function SignUp() {
  return (
    <div className={`absolute top-0 w-full min-h-screen ${center.colO(0)}`}>
      <div className={`${col(12, 80)}`}>
        <div className="text-3xl font-bold">회원가입 방식</div>
        <div className={col(2)}>
          {contents.map(({ href, textColor, bgColor, borderColor, title, image }) => (
            <a
              href={href}
              className={
                `bg-${bgColor} ${borderColor ? `border-${borderColor} border-2 ` : ""}` +
                `${center.colO(0)} ${textColor} h-12 w-full rounded-md relative`
              }
              key={title}
            >
              <img
                src={`/images/icons/${image}.png`}
                alt="sign-up"
                className="absolute left-5 h-10 w-10"
              />
              {title}로 가입하기
            </a>
          ))}
          <div className="inline-flex h-12 w-full items-center justify-center">
            <hr className="my-8 h-px w-full bg-black" />
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-3">또는</div>
          </div>
          <Link
            to="/sign-up/join"
            className={`${center.colO(0)} h-12 w-full rounded-md bg-black text-white`}
          >
            이메일로 가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}
