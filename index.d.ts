export type GameState =
  | "menu"
  | "setup"
  | "running"
  | "finished"
  | "success"
  | "notSolvable";

export type Block = {
  number: number | null;
  state: "filled" | "empty" | null;
};

export type Game = {
  blocks: Block[][];
  height: number;
  name: string;
  width: number;
};

export type State = {
  blocks: Block[][];
  games: Game[];
  gameState: GameState;
  height: number;
  width: number;
};
