/**
 * @param {object} graph - { node1: {node2: 2.4, node3: null}, node2: {node1: null, node3: 1.3} }
 */
function dijkstra (graph, origin, destination) {
  let reachedNodes = {}; // {node: distance}

  let reachableEdges = origin.edges.slice();
  let distance = 0; // this distance will monotonously increase
  while (!reachedNodes.hasOwnProperty(destination)) {

    // find the closest reachable edge, increase the distance
    let nearestEdge = reachableEdges.reduce((minimum, current) => {
        return current.distance + reachedNodes[current] < minimum.distance + reachedNodes[minimum] ? current : minimum;
    }, reachableEdges[0]);

    // if new reached node, add it, increase the distance
    if (!reachedNodes.hasOwnProperty(nearestEdge.destination)) {
      reacedNodes[nearestEdge.destination] = nearestEdge.distance + distance;
      nearestEdge.destination.edges.map((edge) => {
        if (!reachedNodes.hasOwnProperty(edge.destination)) {
          reachableEdges.push(edge);
        }
      });
    }
    distance = distance + nearestEdge.distance;

    if (destination in reachableEdges) return reachedNodes;
  }
}
