# project-hubspot

<bold>Be sure to npm install in the server and client folders.</bold>

4/30 4pm update - Changed user/password in server.js to env variables. Create a .env file and add them there then reference the .env file in your launch.json. Remember to git ignore your env file. You will need to launch your server from VS Code instead of the command line for this to work.

Example:
<bold>launch.json</bold>
```js
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}\\server\\server.js",
      "envFile": "${workspaceFolder}\\server\\.env",
      "skipFiles": [
        "node_modules/**/*.js",
        "lib/**/*.js",
        "<node_internals>/**/*.js"
      ]
    }
  ]
}
```

<bold>.env file:</bold>
```js
user="username"
password="password"
```

# Server Setup
The instructions below assume that you successfully completed the MySQL lesson and already have the necessary software installed. If you have any issues reach out to the backend team.

1) Open MySQL Shell.
2) Open MySQL Workbench and connect to your local instance under "MySQL Connections."
3) Press CTRL+T to create a new query. Paste in the code snippet below and execute. (lighting bolt icon)

<details>
<summary>Click to reveal code </summary>

```sql
CREATE DATABASE IF NOT EXISTS projecthubspot;

USE projecthubspot;

CREATE TABLE IF NOT EXISTS Companies (
  `companyId` INT auto_increment primary key unique not null,
  `companyName` VARCHAR(150) CHARACTER SET utf8,
  `logoUrl` VARCHAR(250) CHARACTER SET utf8,
  `city` VARCHAR(50) CHARACTER SET utf8,
  `state` VARCHAR(50) CHARACTER SET utf8,
  `createdDate` INT,
  `updatedDate` INT
);
INSERT INTO Companies VALUES
    (NULL,'IBM','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/ibm.png','Armonk','New York',1546562110,1556580910),
    (NULL,'Cisco','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/cisco.png','San Francisco','California',1486168510,1526945710),
    (NULL,'United Health','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/unitedhealth.png','Minnetonka','Minnesota',1426376110,1503704110),
    (NULL,'Verizon','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/verizon.png','New York City','New York',1541464510,1551832510),
    (NULL,'Costco','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/costco.png','Seattle ','Washington',1285544110,1350776110),
    (NULL,'Exxon Mobil','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/exxonmobil.png','Irving ','Texas',1478216110,1512434110),
    (NULL,'Lowes','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/lowes.png','Charlotte','North Carolina',1437176110,1524008110),
    (NULL,'Boeing','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/boeing.png','Chicago','Illinois',1528846510,1545784510),
    (NULL,'Home Depot','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/homedepot.png','Atlanta','Georgia',1404776110,1471476910),
    (NULL,'State Farm Insurance','https://raw.githubusercontent.com/doss2k/project-hubspot/master/server/client/src/static/images/statefarm.png','Bloomington','Indiana',1494891310,1525563310);
    
    CREATE TABLE IF NOT EXISTS Deals (
    `dealId` INT auto_increment primary key unique not null,
    `dealName` VARCHAR(150) CHARACTER SET utf8,
    `stage` VARCHAR(150) CHARACTER SET utf8,
    `amount` NUMERIC(12, 2),
    `createdDate` INT,
    `closeDate` INT,
    `companyId` INT
);
INSERT INTO Deals VALUES
    (NULL,'State Farm Insurance','Initiated',100000.00,1524432669,1532298909,10),
    (NULL,'Home Depot POS Machine Sales','Contract Sent',500000.00,1540503069,1544744109,9),
    (NULL,'Boeing PC Sales','Closed Lost',780650.00,1532295069,1552570269,8),
    (NULL,'Lowes POS Machine Sales','Qualified',1200450.00,1541698269,1548016269,7),
    (NULL,'Exxon Mobil Automated Gas Pump Sales','Closed Won',34789000.00,1520984109,1542929709,6),
    (NULL,'Costco CC Machine Sales','Closed Lost',12300.00,1517229309,1540816509,5),
    (NULL,'Verizon Tablet Sales','Contract Sent',1560000.00,1576330269,1549215069,4),
    (NULL,'United Health PC Sales','Closed Won',490450.00,1513773309,1533422109,3),
    (NULL,'Cisco Router Sales','Initiated',3800650.00,1523140509,1536881709,2),
    (NULL,'IBM Computer Sales','Qualified',1678450.00,1555097469,1556393469,1);
```
</details>

4. Refresh all data under the navigator pane (left side of screen.)
5. Start the server and navigate to http://localhost:8000/api/companies to verify that the setup was sucessful.
