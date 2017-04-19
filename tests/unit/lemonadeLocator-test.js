/**
 * Created by brien on 2017-04-14.
 */
const chai = require('chai');
const assert = chai.assert;

describe('Lemonade Stand', function () {
   beforeEach(function () {
       this.lemonadeStandLocator = require('../../app/lib/lemonadeLocator');
   });

   it('should give all lemonade stands', function () {
      let stands = this.lemonadeStandLocator.getAllLocations();
      let expectedResponse = [
          {
              id: 1,
              lat: 45.2,
              long: 10.1,
              name: "Brien's Lemonade Stand!"
          },
          {
              id: 2,
              lat: 20.0,
              long: 5.1,
              name: "The Best Lemonade Stand"
          }
      ];

      assert.sameDeepMembers(stands, expectedResponse, 'Did not get the same lemonade stands');
   });

   it('should give all the lemonade stands with a specific id', function() {
      let stands = this.lemonadeStandLocator.getAllLocations({id: 1});
      let expectedResponse = [
          {
              id: 1,
              lat: 45.2,
              long: 10.1,
              name: "Brien's Lemonade Stand!"
          }
      ];

       assert.sameDeepMembers(stands, expectedResponse, 'Getting one lemonade stand by id');
   });

});