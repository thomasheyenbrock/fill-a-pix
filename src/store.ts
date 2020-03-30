import Vue from "vue";
import Vuex from "vuex";
import { Block, State } from "../";
import games from "./assets/games";

Vue.use(Vuex);

const areAllBlocksFilled = (blocks: Block[][]) => {
  return blocks.every((row) => {
    return row.every((block) => {
      return block.state !== null;
    });
  });
};

const getSelfAndNeighbours = (
  blocks: Block[][],
  row: number,
  column: number,
) => {
  const neighbours: Block[] = [];
  blocks.forEach((blockRow, rowIndex) =>
    blockRow.forEach((block, columnIndex) => {
      if (
        Math.abs(row - rowIndex) <= 1 &&
        Math.abs(column - columnIndex) <= 1
      ) {
        neighbours.push(block);
      }
    }),
  );
  return neighbours;
};

const countFilledBlocks = (blocks: Block[][], row: number, column: number) => {
  const relevantBlocks = getSelfAndNeighbours(blocks, row, column);
  return relevantBlocks.reduce((acc, block) => {
    if (block.state === "filled") {
      acc++;
    }
    return acc;
  }, 0);
};

const isBlockCorrect = (blocks: Block[][], row: number, column: number) => {
  if (blocks[row][column].state === null) {
    return false;
  } else if (blocks[row][column].number === null) {
    return true;
  }
  return countFilledBlocks(blocks, row, column) === blocks[row][column].number;
};

const isGameWon = (blocks: Block[][]) =>
  blocks.every((row, rowIndex) =>
    row.every((_, columnIndex) =>
      isBlockCorrect(blocks, rowIndex, columnIndex),
    ),
  );

const makeUseOfReachedLimit = (
  relevantBlocks: Block[],
  row: number,
  column: number,
  limitType: "filled" | "empty",
  limit: number,
) => {
  let changedBlocks = 0;
  const nonEmptyBlocks = relevantBlocks.filter(
    (block) => block.state === limitType,
  );
  if (nonEmptyBlocks.length > limit) {
    throw new Error(
      `number of ${limitType} blocks exceeded limit for block at position (${row}, ${column})`,
    );
  } else if (nonEmptyBlocks.length === limit) {
    relevantBlocks
      .filter((block) => block.state === null)
      .forEach((block) => {
        block.state = limitType === "filled" ? "empty" : "filled";
        changedBlocks++;
      });
  }
  return changedBlocks;
};

const findSolutionIteration = (blocks: Block[][], changedBlocks: number) => {
  let hasAnyBlockBeenChanged = false;
  blocks.forEach((row, rowIndex) =>
    row.forEach((block, columnIndex) => {
      if (block.number === null) return;
      const relevantBlocks = getSelfAndNeighbours(
        blocks,
        rowIndex,
        columnIndex,
      );
      if (relevantBlocks.every((block) => block.state !== null)) return;
      const changedBlocksAdterFilledLimit = makeUseOfReachedLimit(
        relevantBlocks,
        rowIndex,
        columnIndex,
        "filled",
        block.number,
      );
      const changedBlocksAdterEmptyLimit = makeUseOfReachedLimit(
        relevantBlocks,
        rowIndex,
        columnIndex,
        "empty",
        relevantBlocks.length - block.number,
      );
      hasAnyBlockBeenChanged =
        hasAnyBlockBeenChanged ||
        changedBlocksAdterEmptyLimit > 0 ||
        changedBlocksAdterFilledLimit > 0;
    }),
  );
  return [isGameWon(blocks), hasAnyBlockBeenChanged];
};

const initialHeight = 3;
const initialWidth = 3;

const initialState: State = {
  blocks: Array.from({ length: initialHeight }).map(() =>
    Array.from({ length: initialWidth }).map(() => ({
      number: null,
      state: null,
    })),
  ),
  games,
  gameState: "menu",
  height: initialHeight,
  width: initialWidth,
};

export default new Vuex.Store<State>({
  state: initialState,
  mutations: {
    playPredefinedGame(state, name: string) {
      const game = games.find((game) => game.name === name);
      if (!game) return;
      state.blocks = JSON.parse(JSON.stringify(game.blocks));
      state.height = game.height;
      state.width = game.width;
      state.gameState = "running";
    },
    reset(state) {
      state.gameState = "menu";
    },
    setBlockNumber(
      state,
      {
        row,
        column,
        number,
      }: { row: number; column: number; number: number | null },
    ) {
      state.blocks[row][column].number = number;
    },
    setDimensions(state, { height, width }: { height: number; width: number }) {
      if (width > state.width) {
        state.blocks = state.blocks.map((row) =>
          row.concat(
            Array.from({ length: width - state.width }).map(() => ({
              number: null,
              state: null,
            })),
          ),
        );
      }
      if (width < state.width) {
        state.blocks.forEach((row) => row.splice(width, state.width - width));
      }
      state.width = width;

      if (height > state.height) {
        state.blocks = state.blocks.concat(
          Array.from({ length: height - state.height }).map(() =>
            Array.from({ length: state.width }).map(() => ({
              number: null,
              state: null,
            })),
          ),
        );
      }
      if (height < state.height) {
        state.blocks.splice(height, state.height - height);
      }
      state.height = height;
    },
    solve(state) {
      let solved = false;
      try {
        while (!solved) {
          let changedBlocks = 0;
          const [isGameWon, hasAnyBlockBeenChanged] = findSolutionIteration(
            state.blocks,
            changedBlocks,
          );
          if (!hasAnyBlockBeenChanged) {
            throw new Error("search for solution got stuck");
          }
          solved = isGameWon;
        }
        state.gameState = "success";
      } catch (error) {
        state.gameState = "notSolvable";
      }
    },
    startGame(state) {
      state.gameState = "running";
      state.blocks.forEach((row, rowIndex) =>
        row.forEach((_, columnIndex) => {
          const number = state.blocks[rowIndex][columnIndex].number;
          if (typeof number === "number") {
            state.blocks[rowIndex][columnIndex].number = Math.min(
              Math.max(number, 0),
              9,
            );
          } else {
            state.blocks[rowIndex][columnIndex].number = null;
          }
        }),
      );
    },
    toggleBlockState(state, { row, column }: { row: number; column: number }) {
      const currentState = state.blocks[row][column].state;
      switch (currentState) {
        case "filled":
          state.blocks[row][column].state = "empty";
          break;
        case "empty":
          state.blocks[row][column].state = null;
          break;
        default:
          state.blocks[row][column].state = "filled";
          break;
      }

      if (!areAllBlocksFilled(state.blocks)) {
        state.gameState = "running";
      } else if (isGameWon(state.blocks)) {
        state.gameState = "success";
      } else {
        state.gameState = "finished";
      }
    },
  },
  actions: {},
});
