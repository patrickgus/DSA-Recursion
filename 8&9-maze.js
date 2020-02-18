// 8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it.
// There are more than one possible paths through the Maze to the single exit point.
// Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array).
// The starting point is the top left corner and the exit is indicated by e. For simplicity purpose,
// use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze.
// The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *.
// Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

// 9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze.
// To find all possible exit paths through the maze, think about how many places you can move at each turn.
// Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths
// with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

const solveMaze = (maze, row, column, path) => {
  if (maze[row][column] === "e") {
    return path;
  }

  if (
    maze[row][column] === "*" ||
    column > maze.length ||
    row > maze.length ||
    column < 0 ||
    row < 0
  ) {
    return false;
  }

  if (maze[row][column] === "") {
    if (maze[row][column + 1] === "") {
      return "R" + solveMaze(maze, row, column++, path);
    } else if (maze[row][column - 1] === "") {
      return "L" + solveMaze(maze, row, --column);
    } else if (maze[row - 1][column] === "") {
      return "U" + solveMaze(maze, --row, column);
    } else if (maze[row + 1][column] === "") {
      return "D" + solveMaze(maze, row++, column);
    }
  }
  return path;
};

solveMaze(maze, 0, 0, []);
