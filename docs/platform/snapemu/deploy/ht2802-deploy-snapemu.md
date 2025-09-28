---
sidebar_position: 1
title: HT-M2802 Local Deployment SnapEmu
---


After successfully configuring the HT-M2802 gateway according to [this document](https://docs.heltec.cn/en/gateway/ht-m2802/quick_start.html#connect-to-the-network-using-eth), use SSH to connect.

![](img/ht2802_deploy_snapemu/1.jpg)

After successful connection, use this command to download SnapEmu.

```
bash <(curl -sSL https://raw.gitmirror.com/HelTecAutomation/snapemu/main/install.sh)
```

![](img/ht2802_deploy_snapemu/2.png)

- The domain name here can be freely filled in, and the web pages accessed afterwards are only related to the SSH address. 

- The password for entering the database can be freely set. Please note that if you download again, it needs to be the same as the password for this database

If you encounter such a problem, simply use this command `docker-compose up -d` to update Docker. If not, please skip.

![](img/ht2802_deploy_snapemu/3.jpg)

After successful download, log in to the SSH hotspot address webpage and Snapemu deployment will be successful, as shown in the figure.

![](img/ht2802_deploy_snapemu/4.jpg)




