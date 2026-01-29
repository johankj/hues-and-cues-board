// Exact colors for each cell extracted from the board image
const cellColors = {"A":{1:{h:20.8,s:69.6,l:22.0},2:{h:13.1,s:67.4,l:25.3},3:{h:6.9,s:67.4,l:27.6},4:{h:2.8,s:67.3,l:31.2},5:{h:0.0,s:66.3,l:34.9},6:{h:357.7,s:70.1,l:36.7},7:{h:358.3,s:69.1,l:40.6},8:{h:357.4,s:71.3,l:45.1},9:{h:357.5,s:74.9,l:50.0},10:{h:358.0,s:85.1,l:52.7},11:{h:358.0,s:85.1,l:52.7},12:{h:357.1,s:85.2,l:52.4},13:{h:355.6,s:84.4,l:52.4},14:{h:351.3,s:85.9,l:52.7},15:{h:348.0,s:83.7,l:52.0},16:{h:343.4,s:81.5,l:51.2},17:{h:336.2,s:83.1,l:48.8},18:{h:331.7,s:86.0,l:47.5},19:{h:325.0,s:87.8,l:45.1},20:{h:323.4,s:76.5,l:46.7},21:{h:321.2,s:66.8,l:47.3},22:{h:318.4,s:59.8,l:45.9},23:{h:315.5,s:55.7,l:45.1},24:{h:311.2,s:50.2,l:44.1},25:{h:306.4,s:47.9,l:42.2},26:{h:298.0,s:44.2,l:40.8},27:{h:292.1,s:42.7,l:41.8},28:{h:287.2,s:41.8,l:41.8},29:{h:280.9,s:41.1,l:42.0},30:{h:273.0,s:40.3,l:43.3}},"B":{1:{h:23.9,s:60.9,l:33.1},2:{h:18.9,s:62.6,l:35.7},3:{h:15.0,s:65.3,l:37.3},4:{h:11.8,s:64.9,l:41.4},5:{h:7.2,s:66.2,l:44.1},6:{h:2.3,s:66.5,l:46.9},7:{h:0.7,s:69.0,l:49.4},8:{h:358.8,s:78.9,l:51.6},9:{h:0.3,s:84.7,l:53.9},10:{h:359.7,s:84.3,l:54.9},11:{h:357.5,s:85.9,l:55.5},12:{h:353.9,s:83.8,l:53.9},13:{h:349.7,s:85.0,l:52.9},14:{h:346.9,s:84.1,l:53.1},15:{h:341.4,s:85.1,l:52.5},16:{h:335.4,s:85.5,l:51.4},17:{h:331.2,s:85.8,l:50.4},18:{h:325.6,s:82.6,l:49.6},19:{h:325.1,s:69.9,l:51.8},20:{h:323.0,s:60.3,l:51.6},21:{h:319.2,s:50.4,l:49.8},22:{h:314.4,s:48.1,l:47.6},23:{h:311.0,s:47.6,l:44.9},24:{h:303.8,s:42.3,l:43.5},25:{h:300.7,s:41.1,l:42.0},26:{h:293.3,s:41.8,l:41.8},27:{h:287.2,s:41.4,l:42.2},28:{h:280.9,s:41.1,l:42.0},29:{h:273.7,s:41.4,l:42.2},30:{h:269.7,s:43.1,l:41.4}},"C":{1:{h:27.1,s:61.2,l:40.4},2:{h:23.1,s:64.0,l:41.4},3:{h:20.7,s:65.5,l:44.3},4:{h:15.1,s:66.0,l:46.1},5:{h:11.9,s:67.5,l:48.2},6:{h:8.6,s:69.2,l:49.6},7:{h:6.1,s:75.6,l:51.8},8:{h:4.3,s:81.7,l:52.9},9:{h:3.4,s:84.2,l:55.3},10:{h:359.0,s:85.6,l:59.0},11:{h:355.5,s:84.5,l:59.4},12:{h:352.6,s:84.8,l:58.8},13:{h:348.5,s:84.0,l:58.4},14:{h:343.7,s:82.9,l:56.5},15:{h:337.2,s:84.6,l:56.7},16:{h:332.2,s:84.1,l:55.7},17:{h:328.5,s:80.3,l:56.3},18:{h:326.2,s:66.8,l:56.3},19:{h:321.7,s:54.0,l:53.9},20:{h:317.3,s:44.9,l:51.6},21:{h:313.1,s:41.5,l:49.6},22:{h:307.7,s:38.9,l:46.9},23:{h:303.4,s:38.9,l:44.9},24:{h:296.5,s:38.1,l:43.7},25:{h:290.2,s:38.7,l:43.5},26:{h:287.7,s:41.1,l:42.0},27:{h:279.3,s:42.1,l:42.0},28:{h:273.7,s:41.4,l:42.2},29:{h:269.7,s:44.0,l:40.6},30:{h:267.2,s:49.7,l:38.2}},"D":{1:{h:33.2,s:64.9,l:48.0},2:{h:30.2,s:70.0,l:50.4},3:{h:26.1,s:71.3,l:50.8},4:{h:25.4,s:81.5,l:53.3},5:{h:20.9,s:79.3,l:52.5},6:{h:17.4,s:81.7,l:52.9},7:{h:15.5,s:87.6,l:55.9},8:{h:11.9,s:87.3,l:56.9},9:{h:6.0,s:85.6,l:59.0},10:{h:2.3,s:84.1,l:62.9},11:{h:357.1,s:82.9,l:65.7},12:{h:354.3,s:84.1,l:65.5},13:{h:350.1,s:83.5,l:64.3},14:{h:343.6,s:84.0,l:63.3},15:{h:337.6,s:83.2,l:62.7},16:{h:330.9,s:84.3,l:62.5},17:{h:327.4,s:67.3,l:60.4},18:{h:323.6,s:53.9,l:57.5},19:{h:315.6,s:42.1,l:55.3},20:{h:312.8,s:38.8,l:52.5},21:{h:303.0,s:32.3,l:49.2},22:{h:298.5,s:34.2,l:46.5},23:{h:293.2,s:34.2,l:45.9},24:{h:287.6,s:35.7,l:45.1},25:{h:283.8,s:38.1,l:43.7},26:{h:278.6,s:39.7,l:42.9},27:{h:272.3,s:42.3,l:42.2},28:{h:269.0,s:44.9,l:40.6},29:{h:263.1,s:48.0,l:39.2},30:{h:256.5,s:49.2,l:36.3}},"E":{1:{h:37.2,s:80.2,l:52.4},2:{h:34.4,s:88.2,l:53.5},3:{h:32.1,s:94.8,l:55.1},4:{h:30.6,s:93.1,l:54.5},5:{h:28.0,s:92.1,l:55.3},6:{h:23.1,s:90.1,l:56.5},7:{h:19.5,s:88.3,l:59.6},8:{h:14.6,s:86.9,l:61.0},9:{h:10.6,s:86.9,l:64.1},10:{h:6.9,s:84.2,l:67.6},11:{h:0.9,s:83.0,l:70.0},12:{h:356.2,s:83.9,l:70.8},13:{h:350.2,s:82.6,l:70.8},14:{h:343.6,s:81.0,l:69.0},15:{h:334.2,s:80.8,l:67.3},16:{h:330.5,s:70.2,l:67.1},17:{h:323.9,s:53.3,l:63.9},18:{h:317.4,s:43.0,l:60.8},19:{h:307.5,s:34.0,l:58.4},20:{h:301.7,s:29.6,l:54.3},21:{h:292.3,s:28.2,l:51.4},22:{h:285.8,s:29.9,l:49.8},23:{h:284.4,s:31.4,l:48.0},24:{h:279.8,s:33.1,l:47.5},25:{h:275.3,s:37.1,l:44.9},26:{h:267.9,s:38.1,l:44.3},27:{h:266.3,s:41.4,l:42.2},28:{h:262.3,s:47.0,l:39.2},29:{h:256.0,s:49.0,l:37.6},30:{h:242.8,s:47.5,l:35.1}},"F":{1:{h:40.8,s:97.4,l:54.1},2:{h:39.9,s:97.4,l:55.5},3:{h:37.2,s:95.4,l:57.3},4:{h:35.1,s:95.1,l:60.2},5:{h:33.4,s:95.9,l:61.8},6:{h:30.2,s:94.5,l:64.1},7:{h:24.6,s:89.9,l:64.9},8:{h:19.5,s:89.3,l:66.9},9:{h:15.1,s:89.1,l:67.6},10:{h:9.7,s:86.7,l:70.6},11:{h:6.3,s:85.1,l:73.7},12:{h:359.4,s:85.1,l:76.3},13:{h:352.4,s:83.6,l:76.1},14:{h:347.1,s:81.0,l:75.3},15:{h:334.0,s:79.1,l:73.7},16:{h:327.2,s:59.7,l:71.8},17:{h:319.1,s:42.9,l:68.4},18:{h:308.3,s:33.7,l:66.3},19:{h:300.0,s:28.5,l:62.2},20:{h:288.0,s:29.1,l:59.6},21:{h:278.1,s:29.3,l:57.8},22:{h:276.2,s:29.1,l:54.1},23:{h:273.8,s:28.5,l:51.2},24:{h:266.8,s:29.9,l:50.2},25:{h:266.2,s:33.1,l:47.5},26:{h:257.9,s:36.2,l:45.5},27:{h:256.7,s:39.1,l:43.1},28:{h:255.3,s:47.5,l:38.8},29:{h:244.0,s:47.9,l:36.9},30:{h:241.6,s:45.5,l:32.4}},"G":{1:{h:44.7,s:95.8,l:53.5},2:{h:42.7,s:98.1,l:57.6},3:{h:40.2,s:96.3,l:57.5},4:{h:38.2,s:96.1,l:60.2},5:{h:35.2,s:96.4,l:67.5},6:{h:31.3,s:93.1,l:65.7},7:{h:27.8,s:93.7,l:68.8},8:{h:23.3,s:92.1,l:70.4},9:{h:19.5,s:90.0,l:72.5},10:{h:14.2,s:87.7,l:74.5},11:{h:6.1,s:86.0,l:77.6},12:{h:2.6,s:85.3,l:78.6},13:{h:354.0,s:84.9,l:79.2},14:{h:350.1,s:82.0,l:78.2},15:{h:334.2,s:78.2,l:78.4},16:{h:324.2,s:51.7,l:76.5},17:{h:305.7,s:31.3,l:73.7},18:{h:298.3,s:27.6,l:75.1},19:{h:280.9,s:29.2,l:68.4},20:{h:272.2,s:30.0,l:64.7},21:{h:264.8,s:30.2,l:62.4},22:{h:259.0,s:30.1,l:59.0},23:{h:257.4,s:30.9,l:56.3},24:{h:250.8,s:30.5,l:53.7},25:{h:248.7,s:30.6,l:51.4},26:{h:243.8,s:32.0,l:49.0},27:{h:242.9,s:35.9,l:45.9},28:{h:240.0,s:39.6,l:43.5},29:{h:235.7,s:49.5,l:38.8},30:{h:239.3,s:46.7,l:35.3}},"H":{1:{h:48.4,s:97.4,l:54.3},2:{h:46.3,s:100.0,l:58.0},3:{h:44.1,s:100.0,l:59.4},4:{h:42.6,s:100.0,l:62.7},5:{h:41.2,s:100.0,l:64.9},6:{h:37.5,s:96.5,l:66.5},7:{h:34.8,s:96.3,l:68.4},8:{h:32.5,s:94.7,l:70.2},9:{h:26.8,s:94.2,l:72.9},10:{h:22.7,s:92.2,l:74.7},11:{h:17.9,s:89.9,l:76.7},12:{h:13.2,s:86.7,l:79.4},13:{h:7.5,s:76.6,l:81.6},14:{h:1.0,s:68.5,l:82.5},15:{h:342.2,s:58.7,l:82.0},16:{h:305.1,s:31.5,l:78.2},17:{h:278.2,s:29.7,l:78.2},18:{h:266.0,s:30.0,l:80.4},19:{h:255.7,s:32.8,l:74.9},20:{h:250.2,s:32.4,l:71.6},21:{h:243.4,s:32.9,l:68.4},22:{h:235.2,s:34.4,l:64.1},23:{h:233.1,s:34.0,l:59.6},24:{h:231.4,s:34.8,l:56.7},25:{h:230.1,s:35.3,l:52.7},26:{h:230.3,s:34.4,l:49.6},27:{h:228.5,s:39.5,l:46.7},28:{h:229.2,s:44.6,l:43.9},29:{h:226.2,s:54.2,l:39.4},30:{h:226.9,s:59.8,l:36.1}},"I":{1:{h:52.4,s:98.3,l:52.5},2:{h:51.0,s:97.3,l:57.1},3:{h:50.0,s:96.1,l:59.6},4:{h:48.4,s:97.9,l:62.7},5:{h:49.8,s:96.7,l:64.3},6:{h:46.2,s:97.6,l:66.9},7:{h:47.0,s:96.3,l:68.0},8:{h:45.2,s:96.1,l:70.2},9:{h:47.1,s:87.1,l:72.7},10:{h:49.5,s:77.6,l:75.5},11:{h:48.8,s:69.0,l:77.3},12:{h:52.1,s:53.5,l:80.6},13:{h:58.1,s:33.3,l:81.8},14:{h:80.9,s:28.4,l:84.1},15:{h:133.8,s:16.9,l:84.9},16:{h:195.6,s:33.3,l:84.1},17:{h:211.3,s:62.2,l:85.5},18:{h:210.0,s:63.2,l:85.1},19:{h:210.4,s:62.2,l:78.2},20:{h:213.0,s:54.2,l:74.3},21:{h:214.5,s:51.3,l:69.4},22:{h:213.5,s:52.5,l:65.3},23:{h:218.4,s:46.6,l:62.5},24:{h:219.4,s:43.3,l:57.8},25:{h:220.2,s:42.4,l:53.7},26:{h:221.0,s:41.3,l:50.6},27:{h:221.7,s:43.6,l:47.3},28:{h:223.2,s:48.1,l:45.3},29:{h:223.5,s:53.1,l:41.8},30:{h:223.3,s:59.0,l:38.2}},"J":{1:{h:56.6,s:93.8,l:55.7},2:{h:56.0,s:93.7,l:56.3},3:{h:55.4,s:93.3,l:59.2},4:{h:56.9,s:91.5,l:63.1},5:{h:56.4,s:92.3,l:64.5},6:{h:55.7,s:92.7,l:67.6},7:{h:56.9,s:87.3,l:69.2},8:{h:58.3,s:76.8,l:72.9},9:{h:62.6,s:70.1,l:73.7},10:{h:68.7,s:63.3,l:76.5},11:{h:75.8,s:54.3,l:79.4},12:{h:87.0,s:45.5,l:82.7},13:{h:109.3,s:37.8,l:85.5},14:{h:129.6,s:33.3,l:85.3},15:{h:149.0,s:38.3,l:84.1},16:{h:180.0,s:42.6,l:81.6},17:{h:194.8,s:70.1,l:82.9},18:{h:197.6,s:81.0,l:83.5},19:{h:196.2,s:79.4,l:79.0},20:{h:197.8,s:84.4,l:74.9},21:{h:201.4,s:76.7,l:71.4},22:{h:204.5,s:68.0,l:66.9},23:{h:206.2,s:62.3,l:62.5},24:{h:209.7,s:56.0,l:59.0},25:{h:210.3,s:52.0,l:55.1},26:{h:213.8,s:47.8,l:52.0},27:{h:215.9,s:47.8,l:48.0},28:{h:217.8,s:50.6,l:46.1},29:{h:221.0,s:51.5,l:44.5},30:{h:222.6,s:54.3,l:41.2}},"K":{1:{h:57.3,s:87.3,l:59.8},2:{h:57.3,s:89.8,l:61.4},3:{h:57.2,s:88.5,l:62.5},4:{h:56.2,s:87.9,l:64.3},5:{h:58.0,s:83.1,l:65.1},6:{h:58.2,s:77.4,l:67.1},7:{h:61.7,s:69.9,l:70.0},8:{h:64.8,s:67.3,l:71.2},9:{h:68.8,s:63.8,l:70.8},10:{h:75.9,s:57.2,l:71.6},11:{h:87.4,s:50.0,l:73.3},12:{h:101.1,s:41.5,l:74.5},13:{h:112.0,s:38.5,l:77.1},14:{h:130.2,s:35.7,l:77.5},15:{h:145.9,s:37.9,l:77.3},16:{h:169.8,s:41.6,l:77.8},17:{h:183.3,s:45.8,l:76.9},18:{h:184.2,s:48.7,l:77.1},19:{h:191.5,s:61.9,l:75.3},20:{h:195.2,s:73.3,l:73.5},21:{h:197.2,s:85.4,l:70.4},22:{h:197.6,s:86.7,l:67.6},23:{h:199.9,s:76.4,l:65.1},24:{h:204.2,s:64.8,l:61.0},25:{h:206.8,s:61.3,l:58.4},26:{h:208.9,s:54.8,l:53.1},27:{h:210.9,s:51.2,l:49.8},28:{h:215.2,s:50.2,l:47.3},29:{h:217.8,s:51.1,l:45.7},30:{h:220.2,s:51.8,l:44.7}},"L":{1:{h:58.2,s:87.2,l:54.1},2:{h:58.4,s:85.0,l:55.5},3:{h:59.3,s:81.2,l:56.3},4:{h:59.6,s:78.6,l:57.8},5:{h:60.7,s:77.0,l:59.0},6:{h:62.1,s:71.0,l:60.8},7:{h:67.2,s:66.1,l:62.9},8:{h:72.9,s:60.2,l:63.5},9:{h:80.2,s:55.3,l:63.1},10:{h:88.0,s:50.5,l:64.3},11:{h:96.3,s:46.3,l:65.7},12:{h:107.3,s:42.5,l:67.3},13:{h:125.1,s:37.6,l:69.2},14:{h:132.6,s:37.8,l:67.8},15:{h:140.3,s:38.8,l:68.6},16:{h:154.5,s:40.7,l:68.2},17:{h:164.8,s:42.1,l:68.8},18:{h:168.5,s:43.0,l:69.0},19:{h:176.8,s:44.2,l:66.3},20:{h:184.0,s:50.3,l:65.3},21:{h:188.6,s:60.9,l:63.9},22:{h:190.4,s:69.0,l:60.8},23:{h:193.7,s:84.1,l:58.0},24:{h:197.0,s:83.0,l:58.4},25:{h:200.4,s:74.0,l:56.3},26:{h:203.3,s:63.9,l:53.3},27:{h:208.0,s:53.8,l:51.6},28:{h:210.7,s:54.3,l:48.0},29:{h:215.2,s:50.2,l:47.3},30:{h:216.5,s:54.1,l:45.3}},"M":{1:{h:61.6,s:77.0,l:52.2},2:{h:62.0,s:75.4,l:52.2},3:{h:62.8,s:73.1,l:53.3},4:{h:64.7,s:71.7,l:54.3},5:{h:67.5,s:67.9,l:56.1},6:{h:72.1,s:63.2,l:55.3},7:{h:76.4,s:59.5,l:56.5},8:{h:82.3,s:55.4,l:56.1},9:{h:88.9,s:50.9,l:56.9},10:{h:96.8,s:47.4,l:58.2},11:{h:109.5,s:43.5,l:59.0},12:{h:118.5,s:39.5,l:59.8},13:{h:129.4,s:40.5,l:59.8},14:{h:136.0,s:41.3,l:59.2},15:{h:139.8,s:41.5,l:59.8},16:{h:145.0,s:42.4,l:61.2},17:{h:152.5,s:42.3,l:60.6},18:{h:156.3,s:42.0,l:62.2},19:{h:159.8,s:43.0,l:62.2},20:{h:168.1,s:44.4,l:59.8},21:{h:174.0,s:46.3,l:57.6},22:{h:179.5,s:48.2,l:55.3},23:{h:185.3,s:59.1,l:54.9},24:{h:189.2,s:70.8,l:52.9},25:{h:192.4,s:81.5,l:48.8},26:{h:197.1,s:77.3,l:50.0},27:{h:200.8,s:69.5,l:51.2},28:{h:205.9,s:60.2,l:51.8},29:{h:207.5,s:60.8,l:47.1},30:{h:210.0,s:60.9,l:45.1}},"N":{1:{h:66.8,s:67.1,l:51.2},2:{h:69.1,s:66.1,l:51.4},3:{h:73.0,s:64.6,l:52.4},4:{h:76.2,s:60.7,l:52.2},5:{h:78.0,s:59.0,l:51.2},6:{h:83.6,s:56.4,l:52.4},7:{h:91.2,s:51.8,l:51.2},8:{h:95.5,s:49.8,l:50.8},9:{h:100.5,s:48.0,l:51.0},10:{h:108.0,s:44.0,l:49.0},11:{h:113.3,s:43.2,l:49.0},12:{h:122.4,s:39.4,l:50.2},13:{h:129.2,s:43.9,l:50.4},14:{h:137.3,s:43.9,l:50.4},15:{h:139.2,s:43.8,l:52.5},16:{h:141.6,s:42.7,l:54.1},17:{h:141.2,s:43.2,l:55.1},18:{h:146.6,s:42.4,l:55.1},19:{h:146.8,s:42.3,l:56.5},20:{h:152.2,s:42.6,l:56.3},21:{h:158.2,s:45.1,l:55.7},22:{h:167.9,s:47.9,l:53.3},23:{h:174.0,s:48.4,l:51.4},24:{h:182.2,s:54.8,l:49.4},25:{h:185.1,s:66.1,l:48.6},26:{h:190.9,s:80.1,l:47.3},27:{h:195.6,s:83.6,l:47.8},28:{h:198.9,s:74.8,l:50.2},29:{h:200.7,s:72.8,l:47.6},30:{h:204.6,s:68.5,l:46.1}},"O":{1:{h:76.6,s:53.7,l:50.0},2:{h:78.8,s:52.8,l:50.2},3:{h:79.7,s:51.4,l:50.0},4:{h:86.0,s:49.8,l:50.0},5:{h:89.5,s:48.0,l:49.8},6:{h:98.6,s:45.5,l:48.2},7:{h:104.3,s:43.3,l:48.4},8:{h:112.5,s:40.3,l:46.7},9:{h:114.8,s:39.6,l:46.1},10:{h:125.6,s:43.6,l:43.1},11:{h:130.6,s:49.0,l:40.8},12:{h:132.5,s:54.5,l:41.4},13:{h:135.7,s:61.3,l:41.6},14:{h:134.2,s:61.6,l:42.9},15:{h:136.6,s:58.8,l:44.7},16:{h:138.0,s:54.0,l:46.1},17:{h:137.1,s:46.4,l:49.0},18:{h:140.9,s:45.1,l:50.0},19:{h:140.4,s:44.8,l:51.0},20:{h:139.8,s:43.1,l:53.1},21:{h:148.6,s:44.8,l:53.1},22:{h:156.6,s:45.7,l:51.6},23:{h:163.8,s:46.6,l:51.6},24:{h:170.0,s:50.0,l:49.4},25:{h:177.4,s:59.5,l:46.5},26:{h:182.7,s:65.0,l:47.1},27:{h:187.3,s:75.8,l:47.1},28:{h:189.8,s:91.0,l:43.5},29:{h:194.6,s:93.8,l:44.5},30:{h:198.0,s:80.1,l:47.3}},"P":{1:{h:85.2,s:43.5,l:45.1},2:{h:89.1,s:45.1,l:45.7},3:{h:93.9,s:42.1,l:46.1},4:{h:100.0,s:41.7,l:45.1},5:{h:109.1,s:39.8,l:46.3},6:{h:116.0,s:39.7,l:44.9},7:{h:122.7,s:40.4,l:42.7},8:{h:128.4,s:45.4,l:40.2},9:{h:137.5,s:57.6,l:36.1},10:{h:140.7,s:64.1,l:32.7},11:{h:144.5,s:75.9,l:31.0},12:{h:145.2,s:82.4,l:31.2},13:{h:143.8,s:78.2,l:34.1},14:{h:142.6,s:75.0,l:36.1},15:{h:139.6,s:72.0,l:39.2},16:{h:138.2,s:69.4,l:41.0},17:{h:131.1,s:57.0,l:44.7},18:{h:136.7,s:55.4,l:45.7},19:{h:137.2,s:51.3,l:46.7},20:{h:138.5,s:47.4,l:48.4},21:{h:142.4,s:47.2,l:49.0},22:{h:151.0,s:51.2,l:48.2},23:{h:159.7,s:58.1,l:45.9},24:{h:165.0,s:60.9,l:45.1},25:{h:170.0,s:67.0,l:43.9},26:{h:174.7,s:73.8,l:42.0},27:{h:179.6,s:71.6,l:42.7},28:{h:183.7,s:94.2,l:40.8},29:{h:189.1,s:96.3,l:42.9},30:{h:193.3,s:87.3,l:46.5}}};

// Helper function to get color for a cell
function getCellColor(row, col) {
    const color = cellColors[row]?.[col];
    if (color) {
        return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
    }
    return 'hsl(0, 0%, 50%)'; // fallback gray
}

// Generate the grayscale strip
function generateGrayscaleStrip() {
    const grayscaleStrip = document.getElementById('grayscale-strip');

    for (let col = 1; col <= 30; col++) {
        const cell = document.createElement('div');
        cell.className = 'grayscale-cell';

        // Calculate lightness for grayscale (from dark to light)
        const lightness = 10 + (col - 1) * (85 / 29);
        cell.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;

        grayscaleStrip.appendChild(cell);
    }
}

// Generate column numbers
function generateColumnNumbers() {
    const columnNumbers = document.getElementById('column-numbers');

    for (let col = 1; col <= 30; col++) {
        const label = document.createElement('div');
        label.className = 'column-number';
        label.textContent = col;
        columnNumbers.appendChild(label);
    }
}

// Generate the main color grid
function generateColorGrid() {
    const colorGrid = document.getElementById('color-grid');
    const rowLabels = document.getElementById('row-labels');
    const rows = 'ABCDEFGHIJKLMNOP';

    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const rowLetter = rows[rowIndex];

        // Create row label
        const rowLabel = document.createElement('div');
        rowLabel.className = 'row-label';
        rowLabel.textContent = rowLetter;
        rowLabels.appendChild(rowLabel);

        // Create cells for this row
        for (let col = 1; col <= 30; col++) {
            const cell = document.createElement('div');
            cell.className = 'color-cell';
            cell.dataset.row = rowLetter;
            cell.dataset.col = col;

            // Use exact extracted color
            cell.style.backgroundColor = getCellColor(rowLetter, col);

            colorGrid.appendChild(cell);
        }
    }
}

// Selection and preview functionality
let currentSelectedCell = null;
let isPreviewVisible = true;

function updatePreview(color, coordinate, isHover = false) {
    const previewSwatch = document.getElementById('preview-swatch');
    const previewText = document.getElementById('preview-text');

    previewSwatch.style.backgroundColor = color;

    if (coordinate) {
        previewText.textContent = isHover ? `Hovering: ${coordinate}` : `Selected: ${coordinate}`;
    } else {
        previewText.textContent = 'Hover or select a color';
        previewSwatch.style.backgroundColor = '#333';
    }
}

function selectCell(cell) {
    // Remove previous selection
    if (currentSelectedCell) {
        currentSelectedCell.classList.remove('selected');
    }

    // Add selection to new cell
    cell.classList.add('selected');
    currentSelectedCell = cell;

    // Scroll the cell into view if needed
    cell.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

    // Update preview and display
    const coordinate = `${cell.dataset.row}-${cell.dataset.col}`;
    const color = window.getComputedStyle(cell).backgroundColor;
    updatePreview(color, coordinate, false);
    document.getElementById('selection-display').textContent = `Selected: ${coordinate}`;
}

function clearSelection() {
    if (currentSelectedCell) {
        currentSelectedCell.classList.remove('selected');
        currentSelectedCell = null;
    }
    document.getElementById('selection-display').textContent = '';
    updatePreview(null, null);
}

function randomSelect() {
    const rows = 'ABCDEFGHIJKLMNOP';
    const randomRow = rows[Math.floor(Math.random() * rows.length)];
    const randomCol = Math.floor(Math.random() * 30) + 1;

    // Find and select the cell
    const selectedCell = document.querySelector(
        `.color-cell[data-row="${randomRow}"][data-col="${randomCol}"]`
    );

    if (selectedCell) {
        selectCell(selectedCell);
    }
}

function togglePreview() {
    const previewPanel = document.getElementById('preview-panel');
    const toggleBtn = document.getElementById('toggle-preview');

    isPreviewVisible = !isPreviewVisible;

    if (isPreviewVisible) {
        previewPanel.classList.remove('hidden');
        toggleBtn.textContent = 'Hide Preview';
    } else {
        previewPanel.classList.add('hidden');
        toggleBtn.textContent = 'Show Preview';
    }
}

// Initialize the board
function init() {
    generateGrayscaleStrip();
    generateColumnNumbers();
    generateColorGrid();

    // Add event listeners
    document.getElementById('random-btn').addEventListener('click', randomSelect);
    document.getElementById('clear-btn').addEventListener('click', clearSelection);
    document.getElementById('toggle-preview').addEventListener('click', togglePreview);

    // Add click listeners to all color cells
    const colorCells = document.querySelectorAll('.color-cell');
    colorCells.forEach(cell => {
        cell.addEventListener('click', () => selectCell(cell));

        // Add hover listeners
        cell.addEventListener('mouseenter', () => {
            if (!currentSelectedCell) {
                cell.classList.add('hovered');
                const coordinate = `${cell.dataset.row}-${cell.dataset.col}`;
                const color = window.getComputedStyle(cell).backgroundColor;
                updatePreview(color, coordinate, true);
            }
        });

        cell.addEventListener('mouseleave', () => {
            cell.classList.remove('hovered');
            if (!currentSelectedCell) {
                updatePreview(null, null);
            }
        });
    });

    // Info modal functionality
    const infoBtn = document.getElementById('info-btn');
    const infoModal = document.getElementById('info-modal');
    const closeModal = document.querySelector('.close-modal');

    infoBtn.addEventListener('click', () => {
        infoModal.classList.add('show');
    });

    closeModal.addEventListener('click', () => {
        infoModal.classList.remove('show');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === infoModal) {
            infoModal.classList.remove('show');
        }
    });
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
