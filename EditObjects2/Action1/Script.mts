Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("QtyTb", dtGlobalSheet)   'adding form dataTable
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("minus").Click                                   'minus from quantity
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("cartCount").Highlight                            'show cart count
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuCart").Click                                 'go to cart page
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuCart").HoverTap                              'hover cart option to click on remove items
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("removeCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Sync @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").CloseAllTabs @@ hightlight id_;_263828_;_script infofile_;_ZIP::ssf7.xml_;_

