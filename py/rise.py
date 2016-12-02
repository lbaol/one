# -*- coding: utf-8 -*-
import tushare as ts

import io  
import sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8

growth =  ts.get_growth_data(2016,3)
