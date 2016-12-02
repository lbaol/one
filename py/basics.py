# -*- coding: utf-8 -*-
import tushare as ts

import io  
import sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8

basics =  ts.get_stock_basics()
for index,row in basics.iterrows():
	print (index)
	print (row['name'])