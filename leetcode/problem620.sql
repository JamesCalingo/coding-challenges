# Write your MySQL query statement below

SELECT * from Cinema
WHERE (id % 2)
AND NOT (description = "boring")
ORDER BY rating DESC

# https://leetcode.com/problems/not-boring-movies/
