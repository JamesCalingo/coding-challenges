import functools

fibonacci = [1, 2]
last = fibonacci[len(fibonacci) -1]
while last < 4000000:
    last = fibonacci[len(fibonacci) -1]
    next = fibonacci[len(fibonacci)-2]
    fibonacci.append(next + last)
evens = [i for i in fibonacci if i % 2 == 0]
even_sum = functools.reduce(lambda a, b: a + b, evens)
print(even_sum)
