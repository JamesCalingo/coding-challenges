# Import the data which I've put into a .txt file
data = open("data.txt", "r")
list_data = data.readlines()

# Convert the data to ints
points = []
for datum in list_data:
    num_data = int(datum)
    points.append(num_data)

# Part 1
def count_descents(data):
    descents = 0
    for i in range (1, len(data)):
        if data[i] > data[i-1]:
            descents += 1
    return descents

print(count_descents(points))

# Part 2
def count_ranged_descents(data):
    descents = 0
    for i in range (len(data) - 3):
        range1 = data[i] + data[i + 1] + data[i + 2]
        range2 = range1 - data[i] + data[i + 3]
        if range2 > range1:
            descents+= 1
    return descents

print(count_ranged_descents(points))