---
sidebar_position: 6
title: Heltec Online Platforms
---

import DocCard from '@theme/DocCard';

# Build a LoRaWAN System
<div style={{ textAlign: 'center' }}>
  ![](/img/main-img/4.png)
</div>

## Resource guidance stickers

Building a LoRaWAN system aims to utilize **Heltec LoRa devices** to achieve low-power, long-distance, low data rate wireless communication, especially in IoT application scenarios. Read data using Heltec LoRa nodes and upload it through the LoRaWAN gateway, and finally display its data and curves on our cloud platform **SnapEmu**.


## Summary

This document is a comprehensive guidance document aimed at explaining how to quickly build a LoRaWAN network. To build a LoRaWAN communication system you must need these three parts:

- **A LoRaWAN server:**  
  LoRaWAN server includes two parts, **Network Server** and **Application Server** (also generally called **NS**). All operations will be based on **SnapEmu**.

- **A LoRa Gateway:**  
  A specialized device for LoRaWAN packet **Uplink/Downlink forwarding**. You can recognize it as a bridge between LoRa Node devices and the LoRa NS.

- **A LoRa Node device:**  
  Usually these are **sensors** or **actuators** used to collect data or control devices.



```mdx-code-block
import DocCardList from '@theme/DocCardList';

## Usage Guide
<DocCardList />
```



## Preparation

- **Heltec LoRaWAN server** – [SnapEmu](platform.snapemu.com)  
- **Heltec LoRa Gateway** – [Several optional gateways](https://heltec.org/product-category/lora/lora-gateway)

| Heltec Gateway                                                                 | Feature                                   |
| ------------------------------------------------------------------------------- | ----------------------------------------- |
| [HT-M02 Edge LoRa Gateway (V2)](https://heltec.org/project/ht-m02-v2/)          | The edge computing LoRa gateway integrated with Wi-Fi, PoE and LTE functions |
| [HT-M2802 Indoor LoRa Gateway](https://heltec.org/project/ht-m2802/)            | Having high-performance hotspots          |
| [HT-M2808 Indoor Hotspot For Helium](https://heltec.org/project/ht-m2808/)      | Full LoRaWAN/LongFi gateway support Helium network |
| [HT-M01S Indoor LoRa Gateway (Rev.2.0)](https://heltec.org/project/ht-m01s-v2/) | A standard LoRaWAN gateway based on ESP32 MCU |
| [HT-M7603 Indoor LoRa Gateway](https://heltec.org/project/ht-m7603/)            | A cost-effective eight-channel indoor LoRa gateway |
| [HT1303 LoRaWAN Concentrator Module](https://heltec.org/project/ht1303/)        | LoRa gateway module based on SX1303+SX1250 chipset |
| [HT-H7608 Wi-Fi HaLow Router / Gateway](https://heltec.org/project/ht-h7608/)   | Used for long-distance/high-speed data transmission |

**Heltec LoRa Node device -**  
- [ESP32 + LoRa Series](https://heltec.org/product-category/lora/lrnode/page/2/)
- [nRF52840 + LoRa Series](https://heltec.org/project/mesh-node-t114/)
- [Cubcell Series](https://heltec.org/shop-default/page/2/)
- [WiFi HaLow Series](https://heltec.org/product-category/halow/)



### Plug & Play

| Heltec LoRa Node                                                                 | Feature                                             |
| -------------------------------------------------------------------------------- | --------------------------------------------------- |
| [Heltec Capsule Sensor V3](https://heltec.org/project/heltec-capsule-sensor-v3/) | A portable LoRa/LoRaWAN device based on ESP32-S3 and SX1262 |
| [HRU-3601](https://heltec.org/project/hru-3601/)                                 | A low cost indoor LoRa t&h (temperature and humidity) monitor |
| [Sensor Hub](https://heltec.org/project/sensor-hub/)                             | A ready-to-use LoRa/LoRaWAN sensor for indoor (industrial) applications |
| [Sensor Hub – Bus Transformer](https://heltec.org/project/sensor-hub-hri-3622/)  | Drives third-party RS-485 sensors (outdoor series)  |
| [RS485-LoRa Wireless Converter](https://heltec.org/project/rs485-lora-wireless-converter/) | HRI-4851 converts 485 bus into LoRa, HRI-4852 connects HRI-4851 to server via ETH or LTE |
| [RS485-LoRaWAN Wireless Converter](https://heltec.org/project/rs485-lorawan-wireless-converter/) | Converts 485 bus into LoRa, LTE, and Ethernet communication |
| [RS485-TCP/UDP/MQTT Converter HRI-4853](https://heltec.org/project/rs4853-tcp-udp-mqtt-converter/) | Converts RS-485 bus into LTE and Ethernet communication |
| [Wireless Aggregator – Bus Transformer](https://heltec.org/project/hri-3632/)    | A LoRa/LoRaWAN device for outdoor applications      |
| [Wireless Aggregator – Sensor Docker](https://heltec.org/project/hri-3631/)      | A LoRa/LoRaWAN device for outdoor applications      |
| [Wireless Aggregator – Valve Controller](https://heltec.org/project/hri-3633/)   | A LoRaWAN converter belonging to Sensor Hub Outdoor |
| [Wireless Temperature Measuring Rod](https://heltec.org/project/temperature-rod/) | A rod type wireless thermoprobe with LoRa wireless transmission |
| [Wireless Thermoprobe](https://heltec.org/project/wireless-thermoprobe/)         | Displays or uploads temperature via LoRaWAN         |


### Maker Series

| Heltec LoRa Node                                                                 | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [WiFi LoRa 32(V3)](https://heltec.org/project/wifi-lora-32-v3/)                  | A classic IoT development board          |
| [Wireless Paper](https://heltec.org/project/wireless-paper/)                     | An E-Ink development kit with multiple wireless drive methods |
| [Wireless Shell(V3)](https://heltec.org/project/wireless-shell-v3/)              | Wi-Fi, BLE, and LoRa solutions           |
| [Wireless Stick Lite(V3)](https://heltec.org/project/wireless-stick-lite-v2/)    | A development board for Wi-Fi, Bluetooth and LoRa |
| [Wireless Stick(V3)](https://heltec.org/project/wireless-stick-v3/)              | High-performance, small size dev board   |
| [Wireless Tracker](https://heltec.org/project/wireless-tracker/)                 | Development kit based on ESP32-S3FN8     |
| [Vision Master E213](https://heltec.org/project/vision-master-e213/)             | IoT development board with 2.13-inch E-Ink |
| [Vision Master E290](https://heltec.org/project/vision-master-e290/)             | IoT development board with 2.9-inch E-Ink |
| [Vision Master T190](https://heltec.org/project/vision-master-t190/)             | ESP32+LoRa development board with 1.9-inch TFT |
| [Multi Size E-ink Drive Board](https://heltec.org/project/e-ink-driveboard/)     | E-ink drive board, accessory of E-ink display |
| [HT-CT62](https://heltec.org/project/ht-ct62/)                                   | LoRa/LoRaWAN node module, high sensitivity, low cost |
| [HT-AT62](https://heltec.org/project/ht-at62/)                                   | Cost-effective LoRa node module          |
| [Mesh Node T114 (Rev.1.0)](https://heltec.org/project/mesh-node-t114-rev-1-0/)   | Low power board based on nRF52840 + SX1262 |
| [Mesh Node T114 (Rev.2.0)](https://heltec.org/project/mesh-node-t114/)           | Low power board based on nRF52840 + SX1262 |
| [Sufficient IoT Hub](https://heltec.org/project/sufficient-iot-hub/)             | Linux SiP with 1GHz dual-core ARM A7 + 128MB DDR3 |
| [Wireless Bridge](https://heltec.org/project/wireless-bridge/)                   | Converts WiFi/Bluetooth ↔ LoRa           |


### CubeCell Series

| Heltec LoRa Node                                                                 | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [CubeCell – AB01 Dev-Board (V2)](https://heltec.org/project/htcc-ab01-v2/)       | LoRa development board integrated with MCU |
| [CubeCell – AM01 Module (V2)](https://heltec.org/project/htcc-am01-v2/)          | Small stamp-hole package module          |
| [CubeCell 1/2AA Node (HTCC-AB02A)](https://heltec.org/project/htcc-ab02a/)       | Developer-friendly LoRa node             |
| [CubeCell AM02 Module Plus](https://heltec.org/project/htcc-am02/)               | Supports AT transparent transmission     |
| [CubeCell Dev-Board Plus (HTCC-AB02)](https://heltec.org/project/htcc-ab02/)     | Dev-Board based on ASR605x (ASR6501, ASR6502) |
| [CubeCell GPS-6502 (HTCC-AB02S)](https://heltec.org/project/htcc-ab02s/)         | Dev board with AIR530Z GPS module        |


### WiFi HaLow Series

| Heltec WiFi HaLow                                                                | Feature                                  |
| -------------------------------------------------------------------------------- | ---------------------------------------- |
| [ESP32 Wi-Fi HaLow Camera](https://heltec.org/project/ht-hc32/)                  | Dev board with ESP32-S3 + WiFi HaLow module and built-in camera |
| [Raspberry Pi Wi-Fi HaLow Camera HAT](https://heltec.org/project/ht-hr01/)       | Pi HAT with Wi-Fi HaLow module and 5MP camera |
| [Wi-Fi HaLow Dongle 802.11ah](https://heltec.org/project/ht-hd01/)               | Long-range communicator, can replace Ethernet cables |




