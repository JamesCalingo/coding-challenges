data = open("data.txt", "r")
list_data = data.readlines()

points = []
for datum in list_data:
    num_data = int(datum)
    points.append(num_data)

def count_descents(data):
    descents = 0
    for i in range (1, len(data)):
        if data[i] > data[i-1]:
            descents += 1
    return descents

print(count_descents(points))