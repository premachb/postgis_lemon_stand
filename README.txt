Stand Locator using PostGIS:

This project serves a Node.JS server that reads from a PostGRES Database running the PostGIS extension. 
I took a CSV which contains the lat/long details of every Starbucks in the world and used these to
represent my stands in my database. 

Endpoints:

/stands/nearest -> Returns the closest stands to a lat/long point  
  Query Parameters:  
   > lat: Latitude  
   > lng: Longitude  
   > count: (default 5) Amount of results
   
/stands/region -> Returns the stands contained in a region  
  Still a WIP.  
  
