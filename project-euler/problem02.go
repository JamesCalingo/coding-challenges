package main

import "fmt"

func main() {
	var sum int
	fibonacci := []int{1, 2}
	last := fibonacci[len(fibonacci)-1]
	for last < 4000000 {
		last = fibonacci[len(fibonacci)-1]
		next := fibonacci[len(fibonacci)-2]
		fibonacci = append(fibonacci, next+last)
	}
	for _, elem := range fibonacci {
		if elem%2 == 0 {
			sum += elem
		}
	}
	fmt.Println(sum)
}
// https://projecteuler.net/problem=2
