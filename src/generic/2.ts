/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
type stringType = Pick<AllType, "name" | "color">;
type numberType = Pick<AllType, "position" | "weight">;

function compare(top, bottom): AllType {
  return top.stringType, bottom.numberType;
}

export {};
