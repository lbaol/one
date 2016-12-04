# -*- coding: utf-8 -*-
import pandas as pd
import io  
import sys
import tushare as ts
import json
from math import isnan

sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8

#获取并预处理报表

#从远程获取基本信息报表
basics = ts.get_stock_basics() 
basics.reset_index(inplace=True)  #把索引code转为数据

#删除近一年上市的股票
basics = basics[basics['timeToMarket']<=20151204]


#从excel获取年度涨幅报表，需要把删除所有的空格，并另存为97-2003格式
yearRise = pd.read_excel('../data/year_rise.xls')  
for index,row in yearRise.iterrows():
	yearRise.ix[index:index+1, '代码'] = str(row['代码']).zfill(6)

#从excel获取年度涨幅报表，需要把删除所有的空格，并另存为97-2003格式
halfYearRise = pd.read_excel('../data/half_year_rise.xls')  
for index,row in halfYearRise.iterrows():
	halfYearRise.ix[index:index+1, '代码'] = str(row['代码']).zfill(6)


#合并basics和yearRise两个报表
stocks = pd.merge(basics, yearRise, left_on='code',right_on='代码', how='left') 
stocks = pd.merge(stocks, halfYearRise, left_on='code',right_on='代码', how='left') 

#清空NaN的数据，由于是float类型，只能通过 data!=data来判断
stocks['涨跌幅度'][stocks['涨跌幅度'] != stocks['涨跌幅度']] = -9999  
stocks['半年涨跌幅度'][stocks['半年涨跌幅度'] != stocks['半年涨跌幅度']] = -9999  
stocks['收盘'][stocks['收盘'] != stocks['收盘']] = 0



length = len(stocks)
#设置股价强度和总市值
stocks['priceStrength'] = 0  
stocks['capitalisation'] = 0  
stocks = stocks.sort(columns='涨跌幅度',ascending=False)  
stocks.reset_index(inplace=True,drop=True) #重建排序后的索引
for index,row in stocks.iterrows():
	stocks.ix[index:index+1, 'priceStrength'] = int((length - index - 1)/length*100)
	stocks.ix[index:index+1, 'capitalisation'] = int(row['收盘'] * row['totals'])

#设置股价强度和总市值
stocks['halfPriceStrength'] = 0  
stocks = stocks.sort(columns='半年涨跌幅度',ascending=False)  
stocks.reset_index(inplace=True,drop=True) #重建排序后的索引
for index,row in stocks.iterrows():
	stocks.ix[index:index+1, 'halfPriceStrength'] = int((length - index - 1)/length*100)

#设置利润强度
stocks['profitStrength'] = 0  
stocks = stocks.sort(columns='profit',ascending=False)  
stocks.reset_index(inplace=True,drop=True) #重建排序后的索引
for index,row in stocks.iterrows():
	stocks.ix[index:index+1, 'profitStrength'] = int((length - index - 1)/length*100)



#获取某几列
stocks = stocks.loc[:,['code','name','涨跌幅度','profit','timeToMarket','rev','totals','pe','priceStrength','profitStrength','capitalisation','半年涨跌幅度','halfPriceStrength','industry']]  

#生成stock的array json
stocksJson = []
for index,row in stocks.iterrows():
	stock = {}
	for col_name in stocks.columns:
		stock[col_name] = str(row[col_name])
	stocksJson.append(stock)
outputJson = json.loads(str(stocksJson).replace("'", "\""))
json.dump(outputJson, open('../data/stocks.json', 'w'))