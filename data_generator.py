from numpy import random

AVG_SPEND = 500
STD_DEV = 500
BIAS_AVG = 5
BIAS_STDDEV = 10
BIAS_PERMONTH = 50

out_str = ""
out_ans = ""

for i in range(10000):
	inc = random.normal(AVG_SPEND, STD_DEV)
	inc = abs(round(inc, 0))
	bias = random.normal(BIAS_AVG, BIAS_STDDEV)
	for j in range(11): # Data point for each month
		r = round(random.normal(bias * j, BIAS_PERMONTH), 2)
		out_str += f"{inc + r}"
		if j != 10:
			out_str += "\t"
	out_str += "\n"
	out_ans += f"{inc + round(random.normal(bias* j, BIAS_PERMONTH), 2)}\n"

file = open('out.txt', 'w')
file.write(out_str)
file.close()

file = open('ans.txt', 'w')
file.write(out_ans)
file.close()