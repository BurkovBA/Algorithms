#include "Node.h"

#include <iostream>

template <class T> class Node {
  T data;   // the data of interest itself
  Node<T> *next; // pointer to the next list element
}
