// maps
(function() {
  'use strict';

  {
    const sourceMap = new Map([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ]);

    // Convert source Map to entries array
    const entries = [...sourceMap.entries()];

    // Transform each entry
    const transformedEntries = entries.map(([key, value]) => [key, value.toUpperCase()]);

    // Build a new Map from the transformed entries
    const transformedMap = new Map(transformedEntries);

    console.log(transformedMap);
    // Map {1 => "ONE", 2 => "TWO", 3 => "THREE"}
  }

  {
    const sourceMap = new Map([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ]);

    // Build a new Map from the transformed entries
    const transformedMap = new Map(
      [...sourceMap.entries()].map(([key, value]) => [key, value.toUpperCase()])
    );

    console.log(transformedMap);
    // Map {1 => "ONE", 2 => "TWO", 3 => "THREE"}
  }

}());
