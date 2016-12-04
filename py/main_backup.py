# -*- coding: utf-8 -*-
import pandas as pd
import io  
import sys
import tushare as ts
import json
from math import isnan

sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8

basics = ts.get_stock_basics()  #从远程获取基本信息
yearRise = pd.read_excel('../data/year_rise.xls')  #需要把删除所有的空格，并另存为97-2003格式
columnName1 = 'code'
columnName2 = '代码'


#for index,row in basics.iterrows():
	#basics.ix[index:index+1, columnName1] = str(row[columnName1]).zfill(6)


for index,row in yearRise.iterrows():
	yearRise.ix[index:index+1, columnName2] = str(row[columnName2]).zfill(6)


#测试根据字符串或数字能否选择到相应的行数据
#print(basics[basics[columnName1]=='000001'])   
#print(yearRise[yearRise[columnName2]=='000001'])

#print(basics.columns)  #打印列名
basics.reset_index(inplace=True)  #把索引code转为数据
#print(basics.columns)  #打印列名

stocks = pd.merge(basics, yearRise, left_on=columnName1,right_on=columnName2, how='left')  #合并basics和yearRise两个报表
stocks['涨跌幅度'][stocks['涨跌幅度'] != stocks['涨跌幅度']] = -9999  #清空涨跌幅为NaN的数据，由于是float类型，只能通过 data!=data来判断
stocks['收盘'][stocks['收盘'] != stocks['收盘']] = 0



length = len(stocks)
print(stocks.dtypes)
#设置股价强度
stocks['priceStrength'] = 0  
stocks['capitalisation'] = 0  
stocks = stocks.sort(columns='涨跌幅度',ascending=False)  
stocks.reset_index(inplace=True,drop=True) #重建排序后的索引
for index,row in stocks.iterrows():
	stocks.ix[index:index+1, 'priceStrength'] = int((length - index - 1)/length*100)
	stocks.ix[index:index+1, 'capitalisation'] = int(row['收盘'] * row['totals'])

#设置利润强度
stocks['profitStrength'] = 0  
stocks = stocks.sort(columns='profit',ascending=False)  
stocks.reset_index(inplace=True,drop=True) #重建排序后的索引
for index,row in stocks.iterrows():
	stocks.ix[index:index+1, 'profitStrength'] = int((length - index - 1)/length*100)

stocks = stocks.loc[:,['code','name','涨跌幅度','profit','timeToMarket','rev','totals','pe','priceStrength','profitStrength','capitalisation']]  #获取某几列






#生成json array
stocksJson = []
for index,row in stocks.iterrows():
	stock = {}
	for col_name in stocks.columns:
		stock[col_name] = str(row[col_name])
	stocksJson.append(stock)


#print (stocksJson)
outputJson = json.loads(str(stocksJson).replace("'", "\""))
json.dump(outputJson, open('../data/stocks.json', 'w'))