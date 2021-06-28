# Coursework
A new look at tree balancing algorithm and different approach of a converting Binary Search Tree to **AVL**. 

## Idea
`doBalanced` function provides recursive tree traversal from leaves to parent's nodes, applying rotations in each depth until AVL conditions will be satisfied.

## Challenges
Exclude using of
- indices as the main premise to do rotations 
- an array as an additional data structure to convert BST to AVL

Apply recursion tree traversal instead of it.

## Goals
A balancing tree algorithm doesn't allocate extra memory for storing indices and additional data structures, memory has been used 20% less than before. If you have some a heap of data you shouldn't add each element and do rotation.
## Usage
E.g. 
If you have a mutable data, you can store it the a tree. This algorithm can be helpful for searching data with a complexity O(log n).
