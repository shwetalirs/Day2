﻿'add cart from dataTable
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Bose Soundlink Bluetooth").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Bose Soundlink Bluetooth")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("QuantityTb", dtGlobalSheet) 'added val from table
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Reduce").Click                                     'minus from quantity before adding to the cart
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement_2").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").CloseAllTabs
