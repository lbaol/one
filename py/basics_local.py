# -*- coding: utf-8 -*-
import pandas as pd
import io  
import sys
import tushare as ts

sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8

# read from

basics1 = pd.read_csv('../data/1.csv')
basics2 = pd.read_csv('../data/2.csv')
#print(basics)
#stocks = basics1.loc[:,['code','name']]
#stocks = basics1.iloc[:,[0,1]]
startDate = '2015-03-10'
endDate ='2015-03-12'

startPrice = ts.get_h_data('002337', start=startDate, end=startDate)
endPrice = ts.get_h_data('002337', start=endDate, end=endDate)
print (type(startPrice.open))
print (pd.DataFrame(endPrice.close))

#basics2.columns=['code','name','industry']
# stocks = pd.merge(basics1, basics2, on=['code','name'], how='left')
# for index,row in stocks.iterrows():
# 	print(str(row.code).zfill(6))

