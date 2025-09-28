// Browse by data - organized by categories
export const browseByData = [
  {
    key: "esp32",
    image: "esp32",
    title: "Plug & Play",
    moreLink: "/docs/devices/open-source-devices/esp32-series/",
    docList: [
      {
        path: "/docs/devices/open-source-devices/esp32-series/esp32-quick-start",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Heltec ESP32 Series Quick Start",
      },
      {
        path: "/docs/devices/open-source-devices/esp32-series/lora-32",
        image: "/img/undraw_docusaurus_tree.svg",
        title: "WiFi LoRa 32 Series",
      },
      {
        path: "/docs/devices/open-source-devices/esp32-series/vision-master",
        image: "/img/undraw_docusaurus_react.svg",
        title: "Vision Master Series",
      },
      {
        path: "/docs/cloud-platform-integration",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Cloud Platform Integration Guide",
      },
      {
        path: "/docs/sensor-data-collection",
        image: "/img/undraw_docusaurus_react.svg",
        title: "Sensor Data Collection System",
      },
      {
        path: "/docs/cloud-platform-integration",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Cloud Platform Integration Guide",
      },
    ],
  },
  {
    key: "arduino",
    image: "arduino",
    title: "Arduino & ESP32",
    moreLink: "/docs/category/getting-started",
    docList: [
      {
        path: "/docs/heltec-wifi-kit-32-guide",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Heltec WiFi Kit 32 Getting Started Guide",
      },
      {
        path: "/docs/bluetooth-low-energy",
        image: "/img/undraw_docusaurus_react.svg",
        title: "Bluetooth Low Energy (BLE) Development",
      },
      {
        path: "/docs/wifi-mesh-network",
        image: "/img/undraw_docusaurus_tree.svg",
        title: "WiFi Mesh Network Construction",
      },
      {
        path: "/docs/lora-communication-protocol",
        image: "/img/undraw_docusaurus_react.svg",
        title: "LoRa Communication Protocol Deep Dive",
      },
    ],
  },
  {
    key: "networking",
    image: "networking",
    title: "Networking & Communication",
    moreLink: "/docs/category/networking",
    docList: [
      {
        path: "/docs/lora-communication-protocol",
        image: "/img/undraw_docusaurus_react.svg",
        title: "LoRa Communication Protocol Deep Dive",
      },
      {
        path: "/docs/wifi-mesh-network",
        image: "/img/undraw_docusaurus_tree.svg",
        title: "WiFi Mesh Network Construction",
      },
      {
        path: "/docs/bluetooth-low-energy",
        image: "/img/undraw_docusaurus_react.svg",
        title: "Bluetooth Low Energy (BLE) Development",
      },
      {
        path: "/docs/cloud-platform-integration",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Cloud Platform Integration Guide",
      },
    ],
  },
  {
    key: "sensors",
    image: "sensors",
    title: "Sensors & Sensing",
    moreLink: "/docs/category/sensors-sensing",
    docList: [
      {
        path: "/docs/sensor-data-collection",
        image: "/img/undraw_docusaurus_tree.svg",
        title: "Sensor Data Collection System",
      },
      {
        path: "/docs/heltec-wifi-kit-32-guide",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Heltec WiFi Kit 32 Getting Started Guide",
      },
      {
        path: "/docs/edge-ai-model-deployment",
        image: "/img/undraw_docusaurus_mountain.svg",
        title: "Edge AI Model Deployment",
      },
      {
        path: "/docs/esp32-deep-sleep",
        image: "/img/undraw_docusaurus_tree.svg",
        title: "ESP32 Deep Sleep Mode",
      },
    ],
  },
];

// Get category by key
export const getCategoryByKey = (key) => {
  return browseByData.find((category) => category.key === key);
};

// Get all category keys
export const getAllCategoryKeys = () => {
  return browseByData.map((category) => category.key);
};

// Get category titles
export const getCategoryTitles = () => {
  return browseByData.map((category) => ({
    key: category.key,
    title: category.title,
  }));
};
