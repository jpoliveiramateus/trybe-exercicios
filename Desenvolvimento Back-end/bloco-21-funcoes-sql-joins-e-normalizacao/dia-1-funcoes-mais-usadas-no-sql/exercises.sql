-- 1
SELECT MAX(salary)
FROM hr.employees;
-- 2
SELECT  MAX(salary) - MIN(salary)
FROM hr.employees;
-- 3
SELECT  job_id, AVG(salary) AS 'average_salary'
FROM hr.employees
GROUP BY job_id
ORDER BY `average_salary` DESC;
-- 4
SELECT SUM(salary)
FROM hr.employees;
-- 5
SELECT MAX(salary),
	MIN(salary),
  SUM(salary),
	ROUND(AVG(salary), 2)
FROM hr.employees;
-- 6
SELECT job_id , COUNT(*) AS 'total'
FROM hr.employees
WHERE job_id = "it_prog";
-- 7
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id;
-- 8
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
HAVING job_id = "it_prog";
-- 9
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id != 'it_prog'
GROUP BY job_id
ORDER BY `average_salary` DESC;
-- 10
SELECT department_id,
	AVG(salary) 'average_salary' ,
	COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;
-- 11
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;
-- 12
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;
-- 13
SELECT employee_id, first_name, YEAR(hire_date) 
FROM hr.employees;
-- 14
SELECT employee_id, first_name, YEAR(hire_date)
FROM hr.employees;
-- 15
SELECT employee_id, first_name, MONTH(hire_date)
FROM hr.employees;
-- 16
SELECT UPPER(CONCAT(first_name, " ", last_name))
FROM hr.employees;
-- 17
SELECT last_name, first_name, hire_date
FROM hr.employees
WHERE hire_date LIKE '1987-07%';
-- 18
SELECT first_name,
	last_name,
	DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked'
FROM hr.employees;