---
title: 'Public Data API'
categories: 'Data Access and FAQ'
sortIndex: '0'
---
For data access, we also have a basic public facing data API. This is only available for Pro Workspaces.

Note that Monitors are Hardware.

There are currently two available APIs:

1. API Request for Monitors
2. API Request for Latest Monitor Data

## API Access URLs

For testing purposes, please use QLEAR's testing API via the following URL:
`https://api-testing.qlear.build/`

When officially pulling data, please use the following URL:
`https://api.qlear.build/`

## 1. API Request for Monitors

#### Interface

```
GET /v1/monitors
```

#### API Parameters


| Parameters | Description |
| --- | --- |
| token | Access Token from workspace in QLEAR. | 


#### Example

> GET /v1/monitors?token=6711d819-61bb-4342-9ae3-17c8a477629b

#### Returns

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

* identifier - Default ID of the Monitor
* label - A label for the monitor that you can set on the Dashboard
* last_received_at - Last received data from the monitor
* status - 1 means it's working, 0 means it is not working

## 2. API Request for Latest Monitor Data

#### Interface

```
GET /v1/monitors/latest
```

#### API Parameters

| Parameters | Description |
| --- | --- |
| token | Access Token from workspace in QLEAR |
| identifier | Use the identifier from v1/monitor API Request |


#### Example

> GET /v1/monitors/latest?token=6711d819-61bb-4342-9ae3-17c8a477629b&identifier=1116210504


#### Returns

```
[
  {
    "temperature":26.7,
    "humidity":41.0,
    "hcho":0.0,
    "co":1985.0,
    "co2":486.0,
    "tvoc":0.730667,
    "pm2p5":7.0,
    "pm10":0.0,
    "reading_time":"2017-05-02 17:55:40 +0800",
    "created_at":"2017-05-02 17:55:40 +0800"
  }
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
* reading_time
* created_at

---------

## Notes

* Everything is expected to be in utf-8
* Date structure: 2015-05-26 14:36:32 +0800