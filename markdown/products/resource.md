---
layout: products
title: Resource
permalink: /resource/
---

# mobi.Resource User Manual

### Rostering software


## Getting started

![Landing Screen]({{ site.baseurl }}/img/landing-screen.png)

To access **mobi.Resource**, click the yellow weebles icon labelled **Resource** on the landing page.

## About mobi.Resource

Mobi.Resource is a management tool for creating and updating vehicle and driver information, users, POIs, alerts, and much more.
To access mobi.Resource, click on the icon with 3 yellow mobi weebles in the top left corner of the mobi landing page.


## Summary page

![mobi.Resource summary page]({{ site.baseurl }}/img/resource/resource-ss-summary-page.png)
This is the summary page for mobi.Resource.


## Level and Branches

![View your levels and branches]({{ site.baseurl }}/img/resource/resource-ss-levels-branches.png)

The levels and branches tab will show you a list of your company hierarchy and addresses. 
If you need to edit any branch information or add any new branches to your company hierarchy, 
please contact [support@mobicorp.com](mailto:support@mobicorp.com).

![Dig into your company hierarchy]({{ site.baseurl }}/img/resource/resource-ss-levels-view.png)


## POIs

![View your POI list]({{ site.baseurl }}/img/resource/resource-ss-poi-tab.png)

 You can create a list of all points of interest for your company. There are 3 different ways you can add a list of POIs:

- **Providing mobi with a list** of each of your POIs, so we can upload them in bulk for you. Contact [support@mobicorp.com](mailto:support@mobicorp.com) for more details.
- Entering POIs by **committing routes** in [mobi.Route](../route). 
- Add POIs **manually** in mobi.Resource.

### Manually adding a new POI

![Create a new POI in mobi.Resource]({{ site.baseurl }}/img/resource/resource-ss-add-poi-button.png)

To manually create a POI, click the **Add+** tab at the top of the POI list.

![Adding a new POI]({{ site.baseurl }}/img/resource/resource-ss-add-poi-modal.png)

Your **POI ID** can be a customer number or something you create yourself, as long as it is original. 
No two POIs can have the same ID, so make sure each is unique. 

Next, add the **POI name**, the **level** (or branch) you wish to assign the POI, the **street address**, **city**, **state**, 
and **zip code**. You can create a **group name** to help sort your POIs if you like. 

Finally, you will select the **type of POI** from the drop down menu. You can choose whichever type suits your needs. 
Once you have all your information entered, click **Refresh Map** to view your POI on the map and then click **save**.

### Geofences

![POI Gefences]({{ site.baseurl }}/img/resource/resource-ss-poi-geofence-radius.png)

The circle around the drop pin on the map is the **geofence**. 
You can make this circle larger or smaller by updating the **geofence radius**. Make sure the radius is in **meters**. 
In order for the system to correlate a driver’s trip to a POI in the system, 
the driver must make a stop within the geofence radius of the POI. 

![POI list view]({{ site.baseurl }}/img/resource/resource-ss-poi-list-view.png)

You can edit any POIs already created by clicking on the name of the POI from the list view.

## Cost models
  
![Cost models]({{ site.baseurl }}/img/resource/resource-ss-cost-models.png)

Cost models help you customize your analytics to be specific to your company and drivers’ daily operations. 
These cost models are based on the data collected from the mobi devices installed in your vehicles. 
They capture accurate data so you can see where your company can save on costs.

## Revenue models

![Revenue models]({{ site.baseurl }}/img/resource/resource-ss-revenue-models.png)

The revenue model is your **average revenue per on site minute**. 

Here is a helpful formula for you to use to calculate your average revenue per on site minute:  

> Average revenue / Average session time.

## Driver cost models

Driver cost models can be created for each individual driver based on **per hour cost** and/or **commission per visit**. 
You can also update the **default driver cost model** if you want just one driver cost model to represent your entire fleet.

![Driver cost models]({{ site.baseurl }}/img/resource/resource-ss-add-driver-cost-model.png)

To create a driver cost model, click the **Add+** tab at the top.
Then add the **name** of your driver cost model and enter the **cost per hour amount** and/or **dollar amount for commission per visit**. 

![Add a driver cost model to a driver]({{ site.baseurl }}/img/resource/resource-ss-give-driver-cost-model.png)

Next, **add the cost model to a driver** so it can be applied. Click on **Drivers** at the top. 
Find the driver you want to assign the driver cost model to and click on **Driver Name or ID**. In the pop-up window, update the cost model for this driver.


## Vehicle cost models

![Vehicle cost models]({{ site.baseurl }}/img/resource/resource-ss-vehicle-cost-model.png)

Vehicle cost models can be created for each vehicle based on their **cost per mile** and/or **cost per gallon**. 
You can also update the **default vehicle cost model** if you want only one vehicle cost model to represent your entire fleet.

To create a new vehicle cost model, click the **Add+** button at the top. Then add the **name** of your vehicle cost 
model and enter the cost per mile and/ or cost per gallon and mpg.

![Add a vehicle cost model to a vehicle]({{ site.baseurl }}/img/resource/resource-ss-vehicle-gets-cost-model.png)

Next, add the cost model to a vehicle for it to be applied. Click on **Vehicles** at the top of the screen. 
Find the vehicle you want to assign the vehicle cost model to, and click on the **Vehicle ID**. 
In the pop-up window, update the **cost model** for this vehicle.

## Vehicles

![Vehicles in mobi.Resource]({{ site.baseurl }}/img/resource/resource-ss-vehicles.png)

The Vehicle’s tab will let you **view**, **edit**, or **add to a list** of all your vehicles. 

![Edit vehicles in mobi.Resource]({{ site.baseurl }}/img/resource/resource-ss-vehicle-edit-modal.png)

To **edit** an existing vehicle, select the vehicle you wish to edit. A pop-up window will appear. 
Then you can reassign a **GPS device**, update the **VIN #**, enter a **description**, and add a **make and model**. 
You can also assign a [cost model](#vehicle-cost-models) and an existing driver to a vehicle. 

To add a new vehicle to your fleet, click the **Add+** button at the top of the screen. A pop-up window titled Add Vehicle will appear. 
Enter a **unique ID** (no two vehicles can have the same ID), **pick a level**, and enter a **17-digit VIN**. 
If you are moving an existing device to this new vehicle, enter in the **Device ID**. Click Save to create your new vehicle.

> If you need to move a vehicle to a **new branch location**, please contact [support@mobicorp.com](mailto:support@mobicorp.com?subject=I need to move a vehicle to a new branch&body=Vehicle ID:%0D%0A Move to branch:). 
Make sure to include the **vehicle ID** and **branch** you want to move the vehicle to in the email. 


>If you need a **device for a new vehicle**, please contact [support@mobicorp.com](mailto:support@mobicorp.com?subject=New vehicle needs a device&body=Vehicle ID:) to order one.

## Drivers

![Drivers in mobi.Resource]({{ site.baseurl }}/img/resource/resource-ss-drivers.png)

The Driver tab will let you edit existing drivers or add new drivers. 

![Edit drivers]({{ site.baseurl }}/img/resource/resource-ss-edit-existing-driver.png)

To **edit an existing driver**, click on the driver you want to edit. You can edit the driver **last name** and **first name**. 

The driver last name and first name is what will appear on the live map and in all reports. 
You can also update the **level** and **vehicle** a driver is assigned to.

For routing purposes, you can add a POI as the **driver’s start and end address** when creating a route. 
To learn more about this feature, please view the user guide for [mobi.Route](../route).

To add a new driver to your fleet, click the **Add+** button at the top of screen.

![Add a new driver in mobi.Resource]({{ site.baseurl }}/img/resource/resource-ss-add-new-driver.png)

In the pop-up window, enter how you want the driver name to appear in live map and reports. 
Create a **unique Driver ID** (no two drivers can have the same Driver ID). 

Assign the driver to a **vehicle** and a **level**. Some optional fields you can include are **shift pattern**, 
**overtime allotted**, **start and end POI**, and **service type**.

## Maintenance reminders

![Maintenance reminders]({{ site.baseurl }}/img/resource/resource-ss-maintenance-reminders.png)

To set up maintenance reminders, click on the **maintenance reminder icon** from the mobi.Resource summary page. 
Then click the green **Add+** button at the top of the screen.

![Add a maintenance reminder]({{ site.baseurl }}/img/resource/resource-ss-add-maintenance-reminder.png)

Enter the **vehicle ID** of the vehicle you wish to create a reminder for in the vehicle section. 
Create a **Reminder Name** and select the **Maintenance Type**.  

Select when you want to be reminded based on **Miles, Engine Hours, or Days**.

Click save to create your reminder. You can create as many maintenance reminders for as many vehicles as you like. 

You can **edit** any existing reminders or mark a reminder as completed by selecting the name of the maintenance 
reminder you want to edit. To view the **status** of a maintenance reminder, go to [mobi.Locate](../locate/#maintenance-reminders) and click 
on the **Reports** tab. Then select **Maintenance Reminders**.


## Schedule reports

![Schedule reports]({{ site.baseurl }}/img/resource/resource-ss-scheduled-reports.png)

To **view, edit, or delete** schedule reports that have already been created using the 
[Schedule Reports feature in mobi.Locate](../locate/#schedule-reports), click the **Schedule Reports icon** 
from the mobi.Resource summary page.

![Edit or delete a scheduled report]({{ site.baseurl }}/img/resource/resource-ss-edit-scheduled-report.png)

To **edit** or **delete** any schedule reports, click on the report name. A pop-up window will appear that 
will allow you to **update the report name**, **email address**, and **times** of when the report runs.

## Alert configurations

![Alert configurations]({{ site.baseurl }}/img/resource/resource-ss-alert-configurations.png)

To create an alert to be sent to your **email** or **cell phone**, click the **Alert Configuration icon** on the 
mobi.Resource summary page. Then click on the green **Add+** button at the top. 

![Add a new alert]({{ site.baseurl }}/img/resource/resource-ss-add-alert.png)

You can select one of four different types of alerts:

- **Geofence Alert:** 
  - This alert monitors when a specific driver/s from a level **enter the geofence** of a POI with an **exception configuration**. 
  To create an exception configuration for a POI, please view the [“How to Create a POI”](#geofences) section. 
- **Off Hours Alert:** 
  - This alert monitors when a specific driver/s from a level is **active** a certain amount of minutes **outside your office hours**. 
  To set up office hours, please contact [support@mobicorp.com](mailto:support@mobicorp.com?subject=Need to set up off hours)
- **Speeding Alert:** 
  - This alert monitors when a driver is going a certain amount **over the speed limit**.
- **Idle Time Alert:**
  - This alert monitors when a driver has **idled over 5 minutes**. 

For each alert, create an **alert name**, the **levels** or **drivers to monitor**, **minimum time between alerts**, input an 
**email address**, and decide if you want a **10 digit phone number** for SMS email message (text message).

![Add a 10 digit phone number for SMS alerts]({{ site.baseurl }}/img/resource/resource-ss-sms-setup.png)

To set up your 10 digit phone number to received SMS messages, select the **‘?’** icon to view how to set up your number 
based on your carrier.

