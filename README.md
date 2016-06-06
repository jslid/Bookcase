
![Bookcase Logo Graphic](http://www.jslid.com/bookcase-img/bookcase-github-graphic.png)

#Bookcase - Simple Responsive CSS Framework

Bookcase is an extremely simple responsive CSS grid framework, that acts as an excellent starting point for web related projects. Bookcase is a simple framework in the fact that it bypasses all of the bells and whistles that many responsive frameworks contain to provide just simple basic styles to make it easier to add your own additional styles as necessary. Not only this, but Bookcase has been developed with all three CSS Pre-Processors in mind. Bookcase has a version for: 

 - LESS
 - SASS
 - Stylus

Bookcase also contains three starter templates in HTML, HAML, and Jade. Users can make use of either CSS Pre-Processor or HTML template language by making minor tweaks to the task runner of your choosing (Grunt or Gulp).


----------

## **Getting Started**

Getting started with Bookcase is easy, choose between three options: 

#### **Github**

> Download the repository - [https://githubt.com/jslid/Bookcase](https://github.com/jslid/Bookcase)

#### **Bower**

> $ bower install bookcase

#### **NPM** 

> $ npm install bookcase-framework 


----------

## **Using the Framework** 

The Bookcase framework has two separate grid systems. A standard grid system based on floats, and a flex-grid. Both grid systems are based on column percentages. The default number of columns in both grid systems is 12. This number can easily be changed to however many columns you prefer by editing the "**variables**"  file in the pre-processor folder of your choosing. It is possible to have a standard grid and flex grid with different column totals. 

### **Standard Grid**

Bookcase's standard grid is similar to nearly all responsive frameworks, which contain a "container, row, then columns". The difference with bookcase is varying naming options for elements. For example: 

#### **Containers and Bookcases**

All grid elements need to be wrapped in a container class element. This class can either be called a "**container**," or a "**bookcase**". Inside of a container/bookcase resides a "**row**," or a "**shelf**". 

    <div class="container">
	    <div class="row">
	    </div>
	</div>

or 

    <div class="bookcase">
	    <div class="shelf">
		</div>
	</div>

##### **Full Length Containers**
A containers size is determined by the "container" variables, in the variables file. It is possible for containers to be full-page length using the following classes: 

    <div class="container-wide">
	    <div class="row">
		</div>
	</div>

or

    <div class="bookcase-wide">
	    <div class="shelf">
	    </div>
	</div>


#### **Columns** 

Columns reside within either a "row" or "shelf", and it is possible to nest additional rows/shelfs and columns within one another. Bookcase provides two methods of naming columns, depending on which one makes it easier you or your team to interpret. Bookcase is divided into the following sizes: 

 - Mobile or Small (sm)
 - Tablet or Medium (md)
 - Desktop or Large (lg)
 - HD or XL (xl)

Bookcase is a mobile first framework, therefore you should design with mobile devices in mind and adjust column structures as the device width becomes larger. Below are examples for all media/width types: 

##### **Mobile/Small (sm) Devices** 

    <div class="container">
	    <div class="row">
		    <div class="col-6">
			    <p>This is a mobile 6 column</p>
			</div>
			<div class="col-3">
				<p>This is a mobile 3 column</p>
			</div>
		</div>
	</div>

or 

    <div class="bookcase">
	    <div class="shelf">
		    <div class="col-6-sm">
			    <p>This is a small 6 column</p>
			</div>
			<div class="col-3-sm">
				<p>This is a small 3 column</p>
			</div>
		</div>

##### **Tablet/Medium (md) Devices**

    <div class="container">
	    <div class="row">
		    <div class="col-12 col-5-tablet">
			    <p>This column is full length on mobile devices and 5 columns wide on a tablet device.</p>
			</div>
			<div class="col-8-tablet">
				<p>This content is 8 columns wide on a tablet device.</p>
			</div>
		</div>
	</div>

or

    <div class="bookcase">
	    <div class="shelf">
		    <div class="col-12-sm col-5-md">
			    <p>This column is full length on small devices and 5 columns wide on medium devices.</p>
			</div class="col-8-md">
				<p>This content is 8 columns wide on a medium device.</p>
			</div>
		</div>
	</div>

##### **Desktop/Large (lg) Devices**

    <div class="container">
	    <div class="row>
		    <div class="col-4-desktop">
			    <p>This content is 4 columns wide on desktop devices</p>
			</div>
			<div class="col-7 col-2-tablet col-3-desktop">
				<p>This content is 7 columns wide on a mobile device, 2 columns wide on a tablet, and 3 columns wide on a desktop</p>
			</div>
		</div>
	</div>

or 

    <div class="bookcase">
	    <div class="shelf">
		    <div class="col-4-lg">
			    <p>This content is 4 columns wide on large devices</p>
			</div>
			<div class"col-7-sm col-2-md col-3-lg">
				<p>This content is 7 columns wide on a small device, 2 columns wide on a medium device, and 3 columns wide on a large device</p>
			</div>
		</div>
	</div>

##### **HD/XL (xl) Devices**

    <div class="container">
	    <div class="row">
		    <div class="col-6 col-4-desktop col-2-hd">
			    <p>This content is 6 columns wide on a mobile and tablet device, 4 columns wide on a desktop, and 2 columns wide on an HD device.</p>
			</div>
			<div class="col-6-hd">
				<p>This content is 6 columns wide on an HD device</p>
			</div>
		</div>
	</div>

or

    <div class="bookcase">
	    <div class="shelf">
		    <div class="col-6-sm col-4-lg col-2-xl">
			    <p>This content is 6 columns whide on a small and medium device, 4 columns wide on a large device, and 2 columns wide on an HD device.</p>
			</div>
			<div class="col-6-xl">
				<p>This content is 6 columns wide on an XL device.</p>
			</div>
		</div>
	</div>



