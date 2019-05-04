# Axon

## Introduction

Axon is an online Customer-Relationship-Management (CRM) tool for tracking company revenue, current and past clients, and deals in all of their various stages. It was developed by Cohort Five of the Project Shift Software Engineering Fellowship.

### Homescreen - Dashboard

The homescreen displays a dashboard consisting of a graph of total revenue, year to date (developed with the highcharts library), and a 2x3 grid of infographics depicting useful business metrics.

### Companies

From the homescreen a user can click on the Companies link in the navbar and view a list of companies that are in the CRM. This custom-designed list has various ascending and descending sort options, via a toggle in the list header.

The "CREATE COMPANY" button opens a form in which a user can enter a new company that will be added to the companies list and will persist in the database. All company data can be edited, updated, and/or deleted by the user.

### Deals

From the homescreen a user can click on the Deals link in the navbar and view a list of deals that are in the CRM. There are five stages od deals: "initiated", "qualified", "contract sent", "closed won" and "closed lost". A deal is a sale and is associated with a name, a company, a stage, a create date (when the deal was created), a close date (when the deal is expected to be won or lost), and monetary value of the contract. A company may be associated with more than one deal.

On this page, a user is able to drag and drop a deal to move it between different stages, which will change the deal's "stage" attribute. The data persists and the database is updated with the new deal. (Developed with the react-beautiful-dnd library.)

The "CREATE DEAL" button opens a form in which a user can enter a new deal that, upon completion, will persist in the database. All deal information can be edited, updated, and/or deleted by the user.

### Deployment

This application is deployed and accessible at https://project-hubspot.herokuapp.com/.
