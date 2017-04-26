---
title: Data API
categories: Data Access
---
For data access, we also have a basic API, available for Pro Workspaces.

There are currently two available APIs:

1. API Request for Monitors
2. API Request for Latest Monitor Data

## API Access URLs

Learn about QLEAR's API via the following URL:
`https://api-sandbox.qlear.build/`

When officially pulling data, please use the following URL:
`https://api.qlear.build/`

These two will always be the same in terms of API, except t

## 1. 设备列表 API Request for Monitors

#### 接口 Interface

```
GET /v1/monitors
```

#### 参数 API Parameters

|参数 Parameters|说明 Description|
| --- | --- |
|token|Access Token. 如果没有请向 RESET 索取| Please request this from us if you do not have one already.

#### 举例 Example

> GET /v1/monitors?token=6711d819-61bb-4342-9ae3-17c8a477629b

#### 返回 Returns

```
[
  {
    identifier: "ACCF232C468E",
    label: "Indoor",
    last_received_at: "2015-05-26 15:04:48 +0800",
    status: 1
  },
  {
    identifier: "30219",
    label: "E410",
    last_received_at: "2015-05-26 15:04:48 +0800",
    status: 1
  },
  {
    identifier: "us-embassy-hyderabad",
    label: "US Embassy Hyderabad",
    last_received_at: "2015-05-26 15:04:48 +0800",
    status: 1
  }
]
```

* identifier 设备唯一识别号，可用于后续查询 Default ID of the Monitor
* label 自定义名称 A label for the monitor that you can set on the Dashboard
* last_received_at 最后接受数据时间 Last received data from the monitor
* status 状态，1 可用，0 暂停使用 1 means it's working, 0 means it is not



## 2. 设备数据 API Request for Latest Monitor Data

#### 接口 Interface

```
GET /v1/monitors/latest
```

#### 参数 API Parameters

|参数 Parameters|说明 Description|
|---|---|
|token|Access Token. 如果没有请向 RESET 索取 Please request this from us if you do not have one already. |
|device_identifier|设备唯一标识，即上诉接口返回的identifier Use the identifier from API Request for Monitor|


#### 举例 Example

> GET /v1/monitors/latest?token=6711d819-61bb-4342-9ae3-17c8a477629b&device_identifier=us-embassy-hyderabad


#### 返回 Return

```
[
  {
    temperature: null,
    humidity: null,
    hcho: null,
    co: null,
    co2: null,
    tvoc: null,
    pm2p5: 15.7,
    pm10: null,
    reading_time: "2015-05-26T11:00:00.000+08:00",
    created_at: "2015-05-26T11:59:13.000+08:00"
  },
]
```

* temperature
* humidity
* hcho
* co
* co2
* tvoc
* pm2p5
* pm10
* reading_time 设备读取数据时间
* created_at 数据入库时间


### 注意事项 What to be careful of:
---------
* 所有的请求和响应数据编码皆为**utf-8**格式 everything is expected to be in utf-8
* 日期格式统一使用如下样式 2015-05-26 14:36:32 This is the date structure we use