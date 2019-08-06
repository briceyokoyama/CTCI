function rbn(graph, n1, n2) {
  let queue = [n1];
  let found = false;
  let visited = new Set();
  while (!found && queue.length > 0) {
    let currNode = queue.shift();
    if (visited.has(currNode)) continue;

    visited.add(currNode);

    if (currNode === n2) {
      found = true;
    } else {
      graph[currNode].forEach(node => queue.push(node));
    }
  }

  return found;
}

let graph = {
  'a': ['b'],
  'b': ['c'],
  'c': ['d'],
  'd': ['e'],
  'e': [],
  'f': ['b, c']
}

console.log(rbn(graph, 'a', 'f'));