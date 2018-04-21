function dijkstra (graph, origin, destination) {
  let stack = [origin];
  let reachedNodes = {}; // {node: distance} mapping

  while (true) {
    let node = stack.pop();

    let nearestNode = node.edges.reduce((minimum, current) => {
      if (!reachedNodes.hasOwnProperty(nearestNode)) {
        return current.distance < minimum.distance ? current : minimum;
      } else {
        return minimum;
      }
    }, node.edges[0]);

  }
}

function findMinDistance () {

}
