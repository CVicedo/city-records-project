// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_MAPS_KEY: 'AIzaSyCjC2h7B-zlM358R8e86IPUqKkm7LrQEzI',
  URL_FETCH_STORES: 'http://localhost:5000/api/records/stores',
  URL_FETCH_RECORDS: 'http://localhost:5000/api/records'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
