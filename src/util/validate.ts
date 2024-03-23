export const isValidNickname = (nickname: string): boolean => {
  const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]{3,12}$/;
  return regex.test(nickname) && /[가-힣]/.test(nickname);
};

export const isValidIntroduction = (introduction: string): boolean => {
  const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9,.!? ]{5,25}$/;
  return regex.test(introduction) && /[가-힣]/.test(introduction);
};
