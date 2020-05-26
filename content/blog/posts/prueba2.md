---
path: "/blog/prueba3"
date: "2019-05-04"
title: "How to Check if a Variable is"
tags: ["number", "cycling", "pepito"]
img: ./images/prueba2.png
description: "We can check if a variable is a number in multiple ways.We can check if a variable is a number in multiple ways. We can check if a variable is a number in multiple ways. We can check if a variable is a number in multiple ways. We can check if a variable is a number in multiple ways. We can check if a variable is a number in multiple ways."
---
We can check if a variable is a number in multiple ways.
## isNaN
We can check by calling `isNaN` with the variable as the argument. It also detects if a string’s content is a number. For example:
```
isNaN(1) // false
isNaN('1') // false
isNaN('abc') // true
```
**Note:** `isNaN(null)` is `true` .
### typeof Operator
We can use the `typeof` operator before a variable to check if it’s a number, like so:
```
typeof 1 == 'number' // true
typeof '1' == 'number' // false
```
![](https://cdn-images-1.medium.com/max/800/1*3X6EiKc-njoRpCB1AWnv3Q.png)