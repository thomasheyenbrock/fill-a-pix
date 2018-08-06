import { Game } from "../../../";
import blocksFromNumberArray from "./blocksFromNumberArray";

const _ = null;

export default {
  blocks: blocksFromNumberArray([
    [0, _, 2, _, _, _, _, 4, _, _, _, 4, _, _, _, 2, 4, 3, _, _, 0, _, 4, 4, _, _, 4, _, _, _],
    [2, _, _, _, 7, _, _, _, 5, _, _, _, 9, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 3, _],
    [2, _, 4, 5, _, _, 3, 4, _, _, _, 6, _, _, _, 4, _, _, _, 0, _, _, 6, _, _, 4, _, 5, _, _],
    [_, 7, 7, _, _, _, 6, _, 6, _, _, _, _, 6, _, _, 9, 6, _, _, _, _, _, 6, _, 6, 9, 7, 4, _],
    [_, 4, 4, _, _, _, 3, 4, _, 3, _, 6, 9, _, _, _, _, 7, _, _, _, _, 5, 6, 6, 7, 9, 7, _, _],
    [_, 6, _, _, 7, 7, _, _, 3, _, _, 6, 7, 7, 7, 7, _, 6, 5, 2, _, 3, 5, 5, 6, 6, 8, 7, 7, _],
    [3, _, 3, _, _, _, 3, _, _, 2, _, _, _, 6, 6, 6, _, 6, 5, 3, _, 3, 4, 5, 5, 6, 6, 6, _, _],
    [_, _, _, _, 3, _, _, 3, 2, _, _, _, _, 6, _, _, 6, _, _, _, 2, _, _, _, 6, _, 6, _, _, 3],
    [_, _, _, _, 1, 1, _, 3, _, _, 2, _, 5, _, 4, _, _, 4, _, _, 1, _, _, 4, _, _, 4, _, _, _],
    [0, _, 2, _, _, _, _, 2, _, _, 2, _, _, _, 6, _, _, _, 4, _, _, _, _, _, 6, _, 6, _, _, _],
    [_, _, _, 7, _, 6, 5, _, 4, 2, 1, 0, _, _, 3, _, _, _, 3, _, _, 4, 4, _, _, 3, _, _, _, 2],
    [2, _, 5, _, 8, 7, _, 5, _, _, _, _, _, _, _, 7, 7, _, _, _, _, _, 4, _, _, 6, _, _, 7, _],
    [_, _, _, 7, _, _, 5, _, 6, _, _, _, _, _, 2, _, _, _, 2, _, 0, 0, _, _, _, _, _, _, _, 2],
    [4, _, 6, 7, _, _, 6, 7, 6, 5, 2, _, 2, _, _, 3, 3, _, _, _, _, 0, 0, _, _, 3, _, _, 3, _],
    [4, _, _, 7, 8, 8, _, 7, 7, _, _, _, _, 4, 3, _, _, _, _, 2, 1, _, 0, _, _, _, _, _, 3, _],
    [_, _, 6, _, 8, 7, 8, 7, _, 5, _, 4, _, 4, _, _, _, _, 3, _, _, _, _, _, 5, 6, _, _, _, _],
    [3, _, 7, 7, _, 6, _, 7, 7, _, _, 3, 3, _, _, _, 4, _, _, 1, 0, _, _, 3, _, 6, _, _, 8, _],
    [_, 5, 7, 7, _, _, _, 6, 6, 6, 4, 3, _, _, _, 6, _, _, 3, _, _, _, _, _, 6, _, _, 8, _, _],
    [_, 5, 7, _, _, _, _, 4, _, _, 4, 2, _, 0, _, _, _, 4, _, 3, _, 3, _, 3, 4, _, _, 6, _, 3],
    [_, 5, _, 5, _, 4, 3, 2, _, _, 4, 2, 1, _, 4, _, _, 5, _, _, _, _, 3, _, _, 5, 4, _, _, _],
    [_, _, 4, _, 2, _, _, _, _, _, 4, 1, 2, _, 5, 5, _, _, _, 2, 1, 0, 1, _, 3, _, _, _, _, _],
    [2, _, 3, _, _, 2, 1, 1, 3, _, 3, 0, 2, _, 6, _, 4, _, _, 3, _, _, _, 3, _, _, 5, 7, _, 5],
    [_, _, _, 3, _, 0, 0, _, _, _, _, _, _, 6, 6, 5, _, 4, _, _, 4, _, 3, _, _, 5, 7, 7, _, 5],
    [0, 1, _, 3, _, _, _, _, _, _, _, _, 4, 6, _, _, 7, _, 5, 3, _, 4, _, _, 4, 6, 6, 6, _, 4],
    [_, 0, _, 3, _, _, _, 3, _, _, 0, 3, _, 7, _, _, 7, 5, 5, 3, 5, _, 2, 3, 5, _, _, _, 6, _],
    [_, _, 1, _, _, 2, _, 3, _, 1, _, _, 4, _, _, 6, _, _, _, _, _, _, _, _, 4, _, 4, 6, _, _],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, 6, _, _, 6, 5, 5, 4, _, 4, 3, _, 6, _, _, _, 5, 3],
    [_, 6, 6, _, _, _, _, _, _, 6, 6, _, 7, _, 4, _, _, 7, _, 6, _, _, _, 7, 7, 7, _, 4, _, _],
    [_, 9, 8, _, _, 6, _, _, 7, _, 9, 9, 8, _, _, _, _, 8, 9, _, 9, _, _, 9, 9, 8, _, _, _, _],
    [_, _, _, _, 6, _, 6, _, _, 6, _, _, 6, 5, _, _, 5, 6, _, _, _, _, _, _, _, 6, 5, _, _, 3],
  ]),
  height: 30,
  name: "cortile",
  width: 30,
} as Game;
