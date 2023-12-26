/**
 *  생일로 만 나이를 구하는 함수
 * @param birthday  `YYYY-MM-DD` 형식의 생일
 * @returns 만 나이
 */
export default function getAge(birthday: string) {
  const today = new Date();
  const birthDate = new Date(birthday);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }
  return age;
}
