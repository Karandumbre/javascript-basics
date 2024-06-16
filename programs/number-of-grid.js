const numIslands = (grid) => {
  let islandCount = 0; // Counter for islands
  for (let x = 0; x < grid.length; ++x) {
    // Loop through each row
    for (let y = 0; y < grid[0].length; ++y) {
      // Loop through each column
      if (grid[x][y] === 1) {
        // Check if the current element is land
        traverseIsland(x, y, grid); // If land, traverse the entire island
        islandCount++; // Increment the island count after traversal
      }
    }
  }
  return islandCount; // Return the total number of islands found
};

const traverseIsland = (x, y, grid) => {
  if (
    x < 0 ||
    x >= grid.length || // Check for out-of-bounds rows
    y < 0 ||
    y >= grid[0].length || // Check for out-of-bounds columns
    grid[x][y] !== 1 // Check if the cell is not land (either water or visited)
  ) {
    return; // Stop the recursion if any condition is met
  }
  grid[x][y] = "2"; // Mark the cell as visited by setting it to "2"

  // Recursively visit all adjacent cells (vertical and horizontal)
  traverseIsland(x + 1, y, grid);
  traverseIsland(x, y + 1, grid);
  traverseIsland(x - 1, y, grid);
  traverseIsland(x, y - 1, grid);
};

console.log(
  numIslands([
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
);
