import { Game } from "../../../";
import blocksFromNumberArray from "./blocksFromNumberArray";

const _ = null;

export default {
  blocks: blocksFromNumberArray([
    [_, _, 0, _, _, 0, _, _, _, _, _, _, _, _, 0, _, _, 0, 0, _],
    [_, 0, _, _, _, _, 0, _, _, 8, 8, _, _, 0, _, _, _, _, _, _],
    [_, _, 2, _, 0, _, _, 2, _, _, 5, _, _, _, _, _, _, 4, _, _],
    [_, 4, 3, _, _, _, _, 3, _, _, _, _, 3, _, _, 5, _, _, _, 4],
    [4, _, _, 3, 3, 3, _, _, _, 3, 3, _, _, _, 6, _, _, 1, _, 4],
    [_, _, _, _, _, 6, _, 5, 3, _, _, 3, _, 6, 6, _, _, 1, _, _],
    [_, _, 4, _, 5, _, 6, _, _, 3, 3, _, 3, 4, _, _, _, _, _, _],
    [0, _, 3, _, _, 5, _, _, 1, _, 0, _, 0, _, 5, _, 3, _, _, 4],
    [_, _, _, _, _, _, 3, 1, _, _, 0, _, _, _, 4, _, _, 4, _, 2],
    [_, 1, _, _, 6, 5, _, _, 2, 2, _, 1, _, _, 5, 6, 6, _, _, _],
    [_, 0, _, 3, _, 6, _, 2, _, 1, _, _, _, 2, _, 6, _, 3, _, _],
    [_, _, 0, _, _, 5, _, _, _, 1, _, _, 2, _, _, _, 3, _, 0, _],
    [_, 1, _, _, _, _, 7, 6, _, _, 3, _, _, 6, 7, _, _, _, 1, 0],
    [0, _, _, _, 5, _, 5, _, _, _, _, _, _, 5, 6, _, _, 3, _, _],
    [_, _, _, 5, _, _, _, 3, _, 3, _, _, 3, _, _, 6, _, _, 1, _],
    [_, 1, _, _, _, _, _, 3, _, 3, _, _, 3, _, _, _, _, 3, _, 0],
    [0, _, _, _, 7, _, _, _, _, _, _, _, 3, 5, _, 7, _, 3, 2, _],
    [1, _, 4, 5, 7, 7, _, _, 3, _, 3, _, _, 6, 7, _, 5, 4, _, 2],
    [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 4, _, _, _],
    [2, _, 2, 2, 2, 4, 4, 4, 3, _, _, 3, 4, 4, 4, 2, _, 2, _, 2],
  ]),
  height: 20,
  name: "te",
  width: 20,
} as Game;