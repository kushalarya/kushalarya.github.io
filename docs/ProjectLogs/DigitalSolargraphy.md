# Digital Solargraphy

Logging all the progress here



Status: **In Progress**

Stage: **POC**

Goals:
1. Should be able to take a picture on boot 
2. Shutdown after capturing & saving picture 



### Hardware needed
   1. Raspberry Pi Zero W
   2. Camera
   3. USB to UART board
   4. WittyPi4 - ordered - will use for future improvements 


### Hardware details 
- Raspberry pi zero w
    - Processor -> BCM2835
    - ARM port -> arm6hf
- Camera
    - 5MP with fisheye lense

#### Step 1
Building Operating System
*Why?* Need for quick boot

Using Buildroot (buildroot-2023.02.6.tar.gz)


```bash
sudo apt install sed make binutils gcc g++ bash patch gzip bzip2 perl tar cpio bc unzip rsync wget libncurses-dev

wget https://buildroot.org/downloads/buildroot-2023.02.6.tar.gz
tar xvzf buildroot-2023.02.6.tar.gz
cd buildroot-2023.02.6

make list-defconfigs # select raspberrypi0w_defconfig -> save -> name your .config file
make menuconfig # for adding whatever you want to add in OS -> save
make all
```

2-3 hours for building image
Build stuck, 
restarted the build, 
it's been 12+ hrs, still building. 



### Open Questions
1. can i use a soda can instead of 3D printing the case ?
    - how will i fit ND filter ?
    - High temperature withstand 
    - Waterprofing ?

2. can i use PVC Pipe for the case ?
    - how will i fit ND filter ?
    - High temperature withstand
    - Waterprofing ?
