function dijkstra (graph, origin, destination) {
  let distances = {}; // {node: distance}

  let reachableEdges = origin.edges.slice();
  let distance = 0; // this distance will monotonously increase
  while (!distances.hasOwnProperty(destination)) {

    // find the closest reachable nearestEdge, increase the distance
    let nearestEdge = stack.reduce((minimum, current) => {
      if (!distances.hasOwnProperty(current.destination)) {
        return current.distance < minimum.distance ? current : minimum;
      } else {
        return minimum;
      }
    }, reachableEdges[0]);

    distance = distance + nearestEdge.distance;

    // add edges, starting at nearestEdge.destination, to reachableEdges
    nearestEdge.destination.edges.map((edge) => {
      if (!distances.hasOwnProperty(edge.destination)) {
        reachableEdges.push(edge);
      }
    });

  }
}
