import { useEffect, useState } from "react";

export default function useValidation(nickname: string, introduction: string) {
  /**
   * @규칙
   * - nickname
   *  - 영어, 한글, 숫자만 허용
   *  - 자음 모음만 오는 것은 안됨.
   *  - 3글자 이상 12글자 이하
   * - introduction
   *  - 영어, 한글, 숫자만 허용
   *  - 자음 모음만 오는 것은 안됨.
   *  - 5글자 이상 25글자 이하.
   *  - , . ! ? 만 허용
   * - skillIds: number[]
   * - occupation: number
   */
  const [isNicknameLengthCorrect, setIsNicknameLengthCorrect] = useState<boolean>(false);
  const [isNicknameWordCorrect, setIsNicknameWordCorrect] = useState<boolean>(false);
  const [isIntroductionLengthCorrect, setIsIntroductionLengthCorrect] = useState<boolean>(false);
  const [isIntroductionWordCorrect, setIsIntroductionWordCorrect] = useState<boolean>(false);

  useEffect(() => {
    if (nickname.length < 3 || nickname.length > 12) return setIsNicknameLengthCorrect(false);
    if (!/^[a-zA-Z0-9가-힣]*$/.test(nickname)) return setIsNicknameWordCorrect(false);
    if (introduction.length < 5 || introduction.length > 25)
      return setIsIntroductionLengthCorrect(false);
    if (!/^[a-zA-Z0-9가-힣,.!?]*$/.test(introduction)) return setIsIntroductionWordCorrect(false);
    setIsNicknameLengthCorrect(true);
    setIsNicknameWordCorrect(true);
    setIsIntroductionLengthCorrect(true);
    setIsIntroductionWordCorrect(true);
  }, [nickname, introduction]);

  console.log(
    "NL" + isNicknameLengthCorrect,
    "NW" + isNicknameWordCorrect,
    "IL" + isIntroductionLengthCorrect,
    "IW" + isIntroductionWordCorrect,
  );

  return {
    isNicknameLengthCorrect,
    isNicknameWordCorrect,
    isIntroductionLengthCorrect,
    isIntroductionWordCorrect,
  };
}
