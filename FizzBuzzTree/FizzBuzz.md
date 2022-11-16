# FizzBuzz Binary Tree

- take in a binary tree, will contain only number values,
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
- If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- If the value is not divisible by 3 or 5, do nothing.

## Interviewer

- Input: tree with values

- Output: fizz, buzz, and fizzbuzz

## Test Cases

- What is the depth of the tree?
- What is the difference between kary tree usage and binary tree?
- Is there a prefered way to traverse the tree?

## Visualization

![Alt text](assets/FizzBuzz%20Tree%20Visual.png)

## [Code:](index.js)

## [Tests:](fizzbuzz.test.js)

## Big O

- Time Complexity O(n), traversing the tree and checking the values, this only requires one method of looping through the nodes which is a while.

- Space Complexity O(n) size of the original tree is not effected by the requested problem domain.

## Feedback

- Using a kary tree was my method to solving this issue but the goal was to solve the problem as if it was a binary tree. I can use some of the methods from a kary tree to creating a functions that connects to a binary tree.

- I have got to be mindful of asking questions, the issue is to know WHAT questions to ask or better yet how to ask them. I have to apply my confidence in traversing then move to what I know can be the most efficient way to solve the issue. It is also important to learn the properties of each node inside of any type of tree.
