# Problem 2

## THE QUESTION:

### Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

### 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,...

### By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

## THE GENERAL METHOD

Part 1 of this is simple: use a while loop to generate our fibonacci sequence (or in Go's case, a "for" loop since `for` is the ONLY keyword for loops in Go).

I did take the liberty of starting the sequence with 1 and 2 since they were given in the problem statement, as well as declaring a variable to hold the last term in the sequence. Due to the ever changing nature of the loop, last gets redeclared inside of it.

However, here's where things get interesting: each language in this folder has its own ways of getting the sum.

### JavaScript

I managed to do this "in place", so to speak: I initialized the answer AS the sum instead of creating a zero value variable.

JavaScript's `filter` and `reduce` methods make this easy: we simply filter out all of the odd values from our fibonacci array, and then reduce them into their sum.

### Python

This is very similar to the JavaScript approach, with one notable difference: list comprehension.

For those unfamiliar with it, list comprehension is a (but not necessarily THE) "Pythonic" way of filtering the array - you create a new one with only the values you need (Yes, this makes Python likely the most memory complex of these solutions). Once you have that list, Python's `reduce` method is similar to JavaScripts though written differently: you declare a function (i.e. a + b) as a lambda (anonymous) function, and then declare what you want to reduce.

### Go

For this one I decided to use a sum variable, because it showcases how writing loops in Go can be wildly different thanks to Go's `range` method.

With range, we iterate over our fibonacci sequence, find the values we need, and add them to our sum to get the total.
