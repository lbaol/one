
# -*- coding: utf-8 -*-
import tushare as ts

import io  
import sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer,encoding='utf8')  #更改标准输出为utf8


h = ts.get_h_data('002337', start='2015-03-10', end='2015-03-10')
print (h)