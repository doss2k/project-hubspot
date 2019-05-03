# Axon

## Introduction

Axon is an online Customer-Relationship-Management (CRM) tool developed by PSC5 that helps companies track clients, deals, and revenue.

### Homescreen - Dashboard

The homescreen displays a dashboard consisting of a graph of total revenue, year to date, developed with Highcharts, and a 2x3 infographic of useful data about company metrics, such as average time to close a deal, success rate, and top client.

### Companies

From the homescreen a user can click on the Companies link in the navbar and view a list of companies that are in the CRM. The list is sortable, ascending or descending, via a toggle in the list head.

The "CREATE COMPANY" button opens a form in which a user can enter a new company, which, upon completion, will persist in the database.

### Deals

From the homescreen a user can click on the Deals link in the navbar and view a list of deals that are in the CRM. There are 5 deal stages - "initiated", "qualified", "contract sent", "closed won" and "closed lost". A deal is a sale and should be associated with a "name", "company" "stage", "create date" (when the deal was created), "close date" (when it's expected that the deal will either be won or lost) and "amount". A deal contains all of these attributes. A company may be associated with more than one deal.

On this page, a user is able to drag and drop a deal to move it between different stages, which will change the deal's "stage" attribute. The data persists and and the database is updated with the new state.(Developed with the react-beautiful-dnd library.)

The "CREATE DEAL" button opens a form in which a user can enter a new deal that, upon completion, will persist in the database.

### Deployment

This application is deployed and accessible at https://project-hubspot.herokuapp.com/.
