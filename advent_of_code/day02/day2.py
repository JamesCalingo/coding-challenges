data = open("data.txt", "r")
list_data = data.readlines()

directions = []
for datum in list_data:
    direction = datum.split()
    directions.append(direction)

def solution1(L):
    horizontal = 0
    vertical = 0
    for elem in L:
        amount = int(elem[1])
        if elem[0] == "forward":
            horizontal += amount
        elif elem[0] == "down":
            vertical += amount
        else:
            vertical -= amount
    return horizontal * vertical

def solution2(L):
    horizontal = 0
    depth = 0
    aim = 0
    for i in range(len(L)):
        elem = L[i]
        amount = int(elem[1])
        if elem[0] == "down":
            aim += amount
        elif elem[0] == "up":
            aim -= amount
        elif elem[0] == "forward" and aim == 0:
            horizontal += amount
        else:
            horizontal += amount
            depth += amount * aim
    return horizontal * depth

print(solution2(directions))