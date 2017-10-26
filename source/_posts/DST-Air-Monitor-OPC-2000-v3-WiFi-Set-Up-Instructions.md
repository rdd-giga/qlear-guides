---
title: 'DST Air Monitor OPC 2000 v3 WiFi Set Up Instructions'
categories: 'Compatible Monitors'
subTitle: 'DST OPC 2000 with WiFi'
sortIndex: '3'
---
## Connecting the OPC-2000 v3 Monitor to Wi-Fi

### Determining that you have a OPC-2000 v3 Monitor

![](https://user-images.githubusercontent.com/26155270/31338270-18b51266-acc4-11e7-90b7-92e06763afa7.png)   

All OPC-2000 v3 monitors will have a "Wi-Fi" sign on the back of the monitor.


### Steps to connecting the monitor to WiFi

1. Plug in the electric power for the monitor.   
    
2. Find the “reset” button on the back.  
  
3. Press the “reset” button for 6 seconds.
    
4. Use an electronic device (cell phone, computer, etc.) to find a network starting with “MXCHIP_” in WLAN, then connect to it.  
![](https://user-images.githubusercontent.com/26155270/31338302-42e0b130-acc4-11e7-9668-3c7dda548d0a.png)    
    
5. In the web browser of your device, go to “10.10.10.1”    

6. Type in the username “admin” and password “admin” if your system requires   
![](https://user-images.githubusercontent.com/26155270/31338302-42e0b130-acc4-11e7-9668-3c7dda548d0a.png)   

7. The first screen you see will be all Chinese. Click “English” in the top right corner to switch to English.  
![](https://user-images.githubusercontent.com/26155270/31340219-0f66e4c6-accb-11e7-89fe-e88e3ee37d3a.png)  

8. Go to ”Station Mode Setting” to set up WiFi information:  
![](https://user-images.githubusercontent.com/26155270/31340219-0f66e4c6-accb-11e7-89fe-e88e3ee37d3a.png) 

9. Click “Scan” to search for nearby WiFi.  
![](https://user-images.githubusercontent.com/26155270/31340281-45dd56e8-accb-11e7-8f61-098cf695b6b8.png)
 
10. Then switch “Encryption Mode” to “Enable” and enter the password for the WiFi.
Note that this only supports basic WiFi protocols. Only WiFi on 2.4GHz will be found.  
![](https://user-images.githubusercontent.com/26155270/31340315-5fb1740a-accb-11e7-96c3-e4e3d15fa8c0.png)

11. Click “Save” to save this information. This is very important to do on each section.  
![](https://user-images.githubusercontent.com/26155270/31340350-7bd71892-accb-11e7-8b0a-dc09fac4d9ae.png)
 

12. After clicking “Save”, it will take you to this page:  
Ignore the “Yes” button. Do NOT click it.  
![](https://user-images.githubusercontent.com/26155270/31340382-973d8a80-accb-11e7-98f9-e4ceb98fd02d.png)  

13. Select “Uart Setting” on the left menu.  
Change “Baud Rate” to 9600.  
Click “Save”.  
Do NOT press “Yes” to restart the module.  
![](https://user-images.githubusercontent.com/26155270/31340494-ed3b8cf2-accb-11e7-93a9-d34b8a94136f.png)

14. Click “Network Setting”.  
Change Protocol to “TCP Client”. It might take a few seconds for the page to refresh.  
Set “Remote Port” to “20013”.  
Set “Server Address” to “139.198.1.114”, then click “Save”. Do NOT restart module.  
![](https://user-images.githubusercontent.com/26155270/31340632-6e45207e-accc-11e7-9d75-109e7afeb93d.png) 

15. The next step is the last step. Please review the previous steps to double check.  

16. Click “Wifi Mode Select”.  
Choose “Station Mode”. This will set the monitor to start sending data to the Remote Server IP.  
Click “Save”.  
![](https://user-images.githubusercontent.com/26155270/31340680-8d34e4ba-accc-11e7-89ae-237c057473b7.png) 

17. Click “Yes” to Reboot module.  
![](https://user-images.githubusercontent.com/26155270/31340735-b703e8ae-accc-11e7-9e60-4fdecfe986b1.png)
 
18. After seeing this, you should get kicked off the MXChip WiFi connection. And Done!  
![](https://user-images.githubusercontent.com/26155270/31340762-d5749efa-accc-11e7-9d51-df0488ad21fb.png)

--------

To learn about how to connect a monitor to QLEAR, click [here](/Adding-Hardware-to-QLEAR). 

**OR**

To learn more about the monitor, click [here](/DST-OPC-2000-(with-WiFi)).  
