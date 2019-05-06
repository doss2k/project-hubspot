# Axon

Axon is an online Customer-Relationship-Management (CRM) tool for tracking company revenue, current and past clients, and deals in all of their various stages. The frontend was designed with React, Redux, and Sass. The backend is written in Node and utilizes the Express framework and a MySQL database. This application was developed by Cohort Five of the Project Shift Software Engineering Fellowship in May 2019.

### Homescreen - Dashboard

The homescreen displays a dashboard consisting of a graph of total annual revenue (developed with the Highcharts library), and a 2x3 grid of infographics depicting useful business metrics, formatted with the Numeral library.

### Companies

From the homescreen a user can click the Companies link in the navbar and view a list of companies that are in the CRM. This custom-designed list has various ascending and descending sort options, via a toggle in the list header.

The "CREATE COMPANY" button opens a form in which a user can enter a new company that will be added to the companies list and will persist in the database. Company information can be edited, updated, and/or deleted by the user.

### Deals

From the homescreen a user can click the Deals link in the navbar and view a list of deals that are in the CRM. There are five stages of deals: "initiated", "qualified", "contract sent", "closed won" and "closed lost". A deal is a sale and is associated with a name, a company, a stage, a create date (when the deal was created), a close date (when the deal is expected to be won or lost), and the monetary value of the contract. A company may be associated with more than one deal.

On this page, a user is able to drag and drop a deal to move it between different stages, which will change the deal's "stage" attribute. (Developed with the react-beautiful-dnd library.) All changes made to deals are updated and stored in the database.

The "CREATE DEAL" button opens a form in which a user can enter a new deal that, upon completion and validation, will persist in the database. Deal information can be edited, updated, and/or deleted by the user.

### Deployment

This application is deployed and accessible at https://project-hubspot.herokuapp.com/.
