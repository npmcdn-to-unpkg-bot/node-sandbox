// array from method
(function() {
  'use strict';

  class Location {
    static fromJson(jsonTxt) {
      const rawObject = JSON.parse(jsonTxt),
            location = new Location();

      Object.assign(location, rawObject);

      return location;
    }

    hasUnit() {
      return typeof this.unit === 'string' && this.unit.trim().length > 0;
    }

    toString() {
      if (this.hasUnit()) {
        return `${this.street} #${this.unit}, ${this.zip}`;
      }

      return `${this.street}, ${this.zip}`;
    }
  }

  const thirtyRockJson = `{
    "street": "30 Rockefeller Place",
    "unit": "13B",
    "zip": "10112"
  }`;
  const thirtyRock = Location.fromJson(thirtyRockJson);
  console.log(thirtyRock.toString()); // 30 Rockefeller Place #13B, 10112

  const whiteHouseJson = `{
    "street": "1600 Pennsylvania Ave",
    "zip": "20006"
  }`;
  const whiteHouse = Location.fromJson(whiteHouseJson);
  console.log(whiteHouse.toString()); // 1600 Pennsylvania Ave, 20006
}());
