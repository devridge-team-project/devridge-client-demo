import { contents } from "document/sign-up/platform";
import { center, col } from "style/display";

export default function SignUp() {
  return (
    <div className={`min-h-screen ${center.colO(0)}`}>
      <div className={`${col(12)} w-80`}>
        <div className="text-3xl font-bold">회원가입 방식</div>
        <div className={col(2)}>
          {contents.map(({ textColor, bgColor, borderColor, title, image }) => (
            <div
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
            </div>
          ))}
          <div className="inline-flex h-12 w-full items-center justify-center">
            <hr className="my-8 h-px w-full bg-black" />
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-3">또는</div>
          </div>
          <div className={`${center.colO(0)} h-12 w-full rounded-md bg-black text-white`}>
            이메일로 가입하기
          </div>
        </div>
      </div>
    </div>
  );
}
