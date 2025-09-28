---
sidebar_position: 6
title: Data Format Document
---



Click here for the decoding code: [JavaScript decoding example code](https://resource.heltec.cn/download/Sensor%20Hub%20for%20industry/data_decode.js)

The following is a detailed description of the data format.



## 1. LoRaWAN Node Data Upload Format

### 1.1 Overall Data Packet Format

| Sensor-1 ID | Total Length(bytes) | Sensor Data Packet 1-1 | Sensor Data Packet 1-2 | ... | Sensor Data Packet 1-n | ... | Sensor-2 ID | Total Length(bytes) | Sensor Data Packet 1-1 | ... |
|-------------|---------------------|------------------------|------------------------|-----|------------------------|-----|-------------|---------------------|------------------------|-----|
| 2 bytes     | 1 byte              |                        |                        |     |                        |     | 2 bytes     | 1 byte              |                        |     |

:::note
Each LoRaWAN packet can contain data from multiple sensors.  
Each sensor can contain multiple types of sub-data.
:::


### 1.2 Sensor Data Packet Format

| Sensor Data Packet | ID Data Type Inside the Packet | Total Valid Data Length (bytes) | Valid Data of This Sensor Packet |
|--------------------|--------------------------------|---------------------------------|----------------------------------|
| 4 bits             | 4 bits                         | 1 byte                          | ...                              |

:::note
**Total Valid Data Length (bytes)**: This field is only present for arrays, omitted for other data types.
:::

| Data Type | Value  | Bytes Occupied |
|-----------|--------|----------------|
| array     | 0b0000 | max 64         |
| double    | 0b0001 | 8              |
| float     | 0b0010 | 4              |
| bool      | 0b0011 | 1              |
| int8_t    | 0b0100 | 1              |
| uint8_t   | 0b0101 | 1              |
| int16_t   | 0b0110 | 2              |
| uint16_t  | 0b0111 | 2              |
| int32_t   | 0b1000 | 4              |
| uint32_t  | 0b1001 | 4              |



### 1.3 Sensor Raw Data Conversion Instructions

All data types (except for arrays) are split in the same way as floats.  
When packing, the low byte comes first.

```c
typedef union {
    union bits_32_raw_data {
        uint32_t uint32_t_raw_data;
        int32_t  int32_t_raw_data;
        float    float_raw_data;
    };
    uint8_t bits_32_convert_data[4];
} bits_32_type_convert_t;

data[0] = bits_32_convert_data[0];
data[1] = bits_32_convert_data[1];
data[2] = bits_32_convert_data[2];
data[3] = bits_32_convert_data[3];
