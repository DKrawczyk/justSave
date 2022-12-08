export const useCustomHooks = (dataArray: any[]) => {
  const sortNewestData = dataArray.sort((a, b) => {
    return new Date(a.created) > new Date(b.created) ? -1 : 1;
  });

  return sortNewestData;
};

// const getData = async () => {
//     await axios.get(`https://mysnt.sharepoint.com/sites/IntranetPL/_api/lists/getbytitle('WhoIsWho')/Items`, {
//
//         headers: {
//             // Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL3dlc3RldXJvcGUyLXNwaG9tZXAuc3ZjLm1zIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGM5ZDNjOTctM2ZkOS00MWM4LWEyYjEtNjQ2ZjM5NDJkYWYxLyIsImlhdCI6MTY3MDI0NjA1NiwibmJmIjoxNjcwMjQ2MDU2LCJleHAiOjE2NzAyNTAxMjUsImFjciI6IjEiLCJhaW8iOiJBVVFBdS84VEFBQUFYRWdvaFFobXZEWTUvdnJpTGQvdW9sL0VEekcyV0VIT0RaWk1XQXVzWEZqaXNWaytYZWo1REJURkQxdUMyNEVqUHF0QmFDeVNEN2huanFGQzJuSkJBQT09IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJPZmZpY2UgMzY1IFNoYXJlUG9pbnQgT25saW5lIiwiYXBwaWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJhcHBpZGFjciI6IjIiLCJhdXRoX3RpbWUiOjE2NzAyMzM4NDQsImZhbWlseV9uYW1lIjoiS3Jhd2N6eWsiLCJnaXZlbl9uYW1lIjoiRGF3aWQiLCJpcGFkZHIiOiIxODUuMTc5LjU4LjgzIiwibmFtZSI6IkRhd2lkIEtyYXdjenlrIiwib2lkIjoiMTdiNjY3MTEtNDNkYS00ZDVhLWI3YTUtMjg5YzRiMDU5MmFiIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTM3MDE4OTk3NjktMzY0MTkxMTYzMC0yNDU5MDQwMTYzLTEyNTU0NyIsInB1aWQiOiIxMDAzMjAwMjMyOTRFRTMzIiwicHdkX2V4cCI6IjEyMDI3ODgiLCJwd2RfdXJsIjoiaHR0cHM6Ly9wb3J0YWwubWljcm9zb2Z0b25saW5lLmNvbS9DaGFuZ2VQYXNzd29yZC5hc3B4IiwicmgiOiIwLkFUQUFsenlkak5rX3lFR2lzV1J2T1VMYThWMkdyZHhYa2lGRnJVMjY0LUUzczBVd0FBSS4iLCJzY3AiOiJTUEhvbWUiLCJzdWIiOiJLdzlrVk9Cd1p4NDRGMTJIS1N2RUtNaW9yWkdTLUl1cDBwSjIycy1oeGpJIiwidGlkIjoiOGM5ZDNjOTctM2ZkOS00MWM4LWEyYjEtNjQ2ZjM5NDJkYWYxIiwidW5pcXVlX25hbWUiOiJkYXdpZC5rcmF3Y3p5a0BzbnQucGwiLCJ1cG4iOiJkYXdpZC5rcmF3Y3p5a0BzbnQucGwiLCJ1dGkiOiIxang3S3hJS19FZS05dHZLbjZONEFBIiwidmVyIjoiMS4wIn0.n-lO1Eue7Kzua5Pwe6C2-tD0BZAKZbvudYBCQtjTn7sCejd0SA_tI8b14sJOH9N5lrci2Wt0Fc6xo5QvACx7h9nNii-YnUVTYnEf7A9IhpT-vpBbbq4o8KfZylVtVzPCrIXb8to1BqrmuHnVoXoir95gVojY-vdGWGyT8zWXwA_n6ntKsh5YqaLLdSOqNDitdtlK9F4kxoo9fpzBUlfKQdOiB7ISNkerhsKgN61P8C2RwesHao7ZxaKrQAutB74lOVlS3PVESfDsEyXuju8azkGK67waJpY6LNlokMH-fypslluLt8w95MNEUar8qpq7C9jN2IFU5zrTfbpEjrgtew",
//             Accept: "application/json;odata=verbose"
//         }
//     })
//     .then(function(resp) {
//         console.log(resp)
//     })
//     .catch(function(rej) {
//         console.log(rej)
//     })
//     .finally(() => console.log('done'))
// }

// console.log(getData())
