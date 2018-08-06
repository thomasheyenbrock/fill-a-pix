import { Block } from "../../../";

const blocksFromNumberArray = (numberArray: (number | null)[][]): Block[][] =>
  numberArray.map(row => row.map(number => ({ number, state: null })));

export default blocksFromNumberArray;
