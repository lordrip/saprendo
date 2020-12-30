import { Operation } from '../models';

const getRandomNumber = (range: number) => {
  const value = Math.floor(Math.random() * range);

  if (value <= 0) {
    return getRandomNumber(range);
  }

  return value;
};

export const getOperation = (operator: string, range: number): Operation => {
  const allocatedNumbers = [];
  let num1 = getRandomNumber(range);
  let num2 = getRandomNumber(range);

  if (operator === '-' && num2>num1 ){
    const num3 = num2;
    num1 = num2;
    num2 = num3;
  } else if (operator === '/' && (num1%num2)!=0 ) {
    return getOperation(operator,range);
  }

  const answer =  eval(`${num1}${operator}${num2}`);
  allocatedNumbers.push(answer);

  const opt1 = getRandomResult(range, allocatedNumbers);
  const opt2 = getRandomResult(range, allocatedNumbers);
  const opt3 = getRandomResult(range, allocatedNumbers);

  return { num1, num2, opt1, opt2, opt3, answer, operator };
};


const getRandomResult = (range: number, allocatedNumbers: number[]) => {
  const newNumber = getRandomNumber(range);
  if (allocatedNumbers.includes(newNumber)) {
    return getRandomResult(range, allocatedNumbers);
  }

  allocatedNumbers.push(newNumber);
  return newNumber;
};
