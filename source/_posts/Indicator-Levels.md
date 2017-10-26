---
title: 'Indicator Levels'
categories: 'Data Access and FAQ'
sortIndex: '1'
---
## PM2.5

QLEAR combines the two different AQI calculation methods from the US and China, and computes PM2.5 concentration levels.

US EPA's AQI calculation methods reference from: https://cfpub.epa.gov/airnow/index.cfm?action=airnow.calculator  
China AQI calculation methods reference from: http://210.72.1.216:8080/gzaqi/Document/aqijsgd.pdf  

| Status | Value (ug/m3) | AQI US in (ug/m3) | AQI CN in (ug/m3) |
| --- | --- | --- | --- |
| Good | <=35 | 0-12 | 0-35 |
| Moderate | <=75 | 12.1-35.4 | 36-75 |
| Sensitive | <=100 | 35.5-55.4 | 76-115 |
| Unhealthy | <=120 | 55.5-150.4 | 116-150 |
| Very Unhealthy | <=200 | 150.5-250.4 | 151-250 |
| Hazardous | >200 | >250.5 | >250 |

## CO2

RESET certification https://www.reset.build/ is a real-time green building verification system released by GIGA http://www.giga.build/ in 2009. The system sets a CO2 level less than 600ppm as best, and a level less than 1000ppm as satisfied. To help the users know their CO2 levels more intuitively, instead of using simple notations like satisfied and unsatisfied, RESET classifies the CO2 levels as the following:   

| Status | Value (ppm) |
| --- | --- |
| Excellent | <=600 |
| Good | <=1000 |
| Moderate | <=1500 |
| Sensitive | <=2500 |
| Impaired | <=5000 |
| Unhealthy | >5000 |

## TVOC

LEED certification http://www.usgbc.org/leed is a green building judgement tool released by U.S. Green Building Council (USGBC) http://www.usgbc.org/leed in 2003.The system sets a TVOC level more than 0.5mg/m3 as unsatisfied. To help the users know their TVOC levels more intuitively, instead of using simple notations like satisfied and unsatisfied, QLEAR classifies the TVOC levels according to this certification as the following:  

| Status | Value (mg/m3) |
| --- | --- |
| Good | <=0.45 |
| Moderate | <=0.55 |
| Unhealthy | >0.55 |