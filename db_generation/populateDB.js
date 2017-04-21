var Stand = require('../app/lib/models/Stand');
var csv = require('csv');
var fs = require('fs');

const parser = csv.parse({}, function(err, data) {
    if(err) {
        return console.log("DB MIGRATION FAILED ", err);
    }

    // We will use Sequelize bulk insert to make this one transaction
    // Premake the objects by looping over the csv
    // Then do a bulk insert.
    // PostGres has a copy function that lets you copy csvs
    // however I don't know if sequelize supports this..
    standObjects = []

    for(var i = 1; i < data.length; i++) {
        const currentRow = data[i];
        const currentStandObject = {}
        currentStandObject.address = currentRow[0];
        currentStandObject.city = currentRow[1];
        currentStandObject.state = currentRow[2]
        currentStandObject.country = currentRow[3];
        currentStandObject.postalCode = currentRow[4];
        currentStandObject.phoneNumber = currentRow[5];
        currentStandObject.location = {
            type: 'Point',
            coordinates: [parseFloat(currentRow[7]), parseFloat(currentRow[6])],
            crs: { type: 'name', properties: { name: 'EPSG:4326'} }
        };
        currentStandObject.rating = Math.floor(Math.random() * 5 + 1);
        standObjects.push(currentStandObject);
    }

    Stand.bulkCreate(standObjects).then(() => {
        console.log("MIGRATION COMPLETE!");
    }).catch((error) => {
        console.log("MIGRATION FAILED ", error);
    })
});

fs.createReadStream(__dirname+'/starbucks_stores.csv').pipe(parser);
