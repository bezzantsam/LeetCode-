# Write your MySQL query statement below
select event_day as day, emp_id, sum(out_time-in_time) as total_time
FROM Employees
group by day, emp_id

