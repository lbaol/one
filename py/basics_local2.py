# -*- coding: utf-8 -*-
import pandas as pd
import io  
import sys
import tushare as ts

sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8

basics = pd.read_csv('../data/stock_basics.csv')
yearRise = pd.read_csv('../data/year_rise.csv')
columnName1 = 'code'
columnName2 = '代码'
#basics.insert(1,'codes','')
#yearRise.insert(1,'codes','')


for index,row in basics.iterrows():
	basics.ix[index:index+1, columnName1] = str(row[columnName1]).zfill(6)


for index,row in yearRise.iterrows():
	yearRise.ix[index:index+1, columnName2] = str(row[columnName2]).zfill(6)

#print(basics)
print(basics[basics[columnName1]=='000001'])
print(yearRise[yearRise[columnName2]=='000001'])

stocks = pd.merge(basics, yearRise, left_on=columnName1,right_on=columnName2, how='left')
print(stocks)
