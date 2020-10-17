
## Application Overview

A client has asked that I support their startup, Bus-Mall by developing an application for bus riders to choose which provided products they are most interested in. Each user gets to vote 25 times from a total of 20 images of products. 
Their votes, the number of times each product was viewed and a total of all votes will be reflected on a chart. With this data the client will be able to know which products they should include in their catalog to be supplied to bus riders so that they can get some shopping in during their journeys. In developing this application I used a form for user votes, a chart from [Chart.JS](https://www.chartjs.org/) and relied on local storage to store and persistently update vote data to allow for accumulation of information.

**As a client, I would like to:**

1. display three unique products by chance so that the viewers can pick a favorite.

2. the votes for each image to appear on the left side of the browser

**As a developer I would like to**

1. Create a constructor function that creates an object associated with each product, and has the following properties:

- Name of the product
- File path of image

2. Create an algorithm that will randomly generate three **random** images from the images directory and display them side-by-side-by-side in the browser window.

3. Attach an event listener to the section of the HTML page where the images are going to be displayed.

4. When a user selects and **submits** a product I want 3 **new** products to appear

5. In the constructor function define a property to hold the number of times a product has been clicked.

After every selection by the viewer, update the newly added property to reflect if it was clicked.

6. Allow the user 25 rounds to select products

7. Only **after** the 25 rounds, can the results be display

8. Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.

9. After voting rounds have been completed, remove the event listeners on the product.

10. Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.
