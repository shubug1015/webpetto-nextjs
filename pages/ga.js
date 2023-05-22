import Head from 'next/head';
import styled from 'styled-components';
import { useEffect } from 'react';

const Container = styled.div`
  ${(props) => props.theme.columnCenter}
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 80px);
  max-width: 100%;
`;

const Home = () => {
  // // Replace with your view ID.
  // var VIEW_ID = '232192986';

  // // Query the API and print the results to the page.
  // function queryReports() {
  //   console.log('mount A');
  //   gapi.client
  //     .request({
  //       path: '/v4/reports:batchGet',
  //       root: 'https://analyticsreporting.googleapis.com/',
  //       method: 'POST',
  //       body: {
  //         reportRequests: [
  //           {
  //             viewId: VIEW_ID,
  //             dateRanges: [
  //               {
  //                 startDate: '7daysAgo',
  //                 endDate: 'today',
  //               },
  //             ],
  //             metrics: [
  //               {
  //                 expression: 'ga:sessions',
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     })
  //     .then(displayResults, console.error.bind(console));
  // }

  // function displayResults(response) {
  //   console.log('mount B');
  //   var formattedJson = JSON.stringify(response.result, null, 2);
  //   document.getElementById('query-output').value = formattedJson;

  //   console.log(formattedJson);
  // }

  // Replace with your client ID from the developer console.
  var CLIENT_ID =
    '376760456260-ak1oa4rgm62dmo48mvq9aao9u71iiqqb.apps.googleusercontent.com';

  // Set authorized scope.
  var SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];

  function authorize(event) {
    // Handles the authorization flow.
    // `immediate` should be false when invoked from the button click.
    var useImmdiate = event ? false : true;
    var authData = {
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: useImmdiate,
    };

    gapi.auth.authorize(authData, function (response) {
      var authButton = document.getElementById('auth-button');
      if (response.error) {
        authButton.hidden = false;
      } else {
        authButton.hidden = true;
        queryAccounts();
      }
    });
  }

  function queryAccounts() {
    // Load the Google Analytics client library.
    gapi.client.load('analytics', 'v3').then(function () {
      // Get a list of all Google Analytics accounts for this user
      gapi.client.analytics.management.accounts.list().then(handleAccounts);
    });
  }

  function handleAccounts(response) {
    // Handles the response from the accounts list method.
    if (response.result.items && response.result.items.length) {
      // Get the first Google Analytics account.
      var firstAccountId = response.result.items[0].id;

      // Query for properties.
      queryProperties(firstAccountId);
    } else {
      console.log('No accounts found for this user.');
    }
  }

  function queryProperties(accountId) {
    // Get a list of all the properties for the account.
    gapi.client.analytics.management.webproperties
      .list({ accountId: accountId })
      .then(handleProperties)
      .then(null, function (err) {
        // Log any errors.
        console.log(err);
      });
  }

  function handleProperties(response) {
    // Handles the response from the webproperties list method.
    if (response.result.items && response.result.items.length) {
      // Get the first Google Analytics account
      var firstAccountId = response.result.items[0].accountId;

      // Get the first property ID
      var firstPropertyId = response.result.items[0].id;

      // Query for Views (Profiles).
      queryProfiles(firstAccountId, firstPropertyId);
    } else {
      console.log('No properties found for this user.');
    }
  }

  function queryProfiles(accountId, propertyId) {
    // Get a list of all Views (Profiles) for the first property
    // of the first Account.
    gapi.client.analytics.management.profiles
      .list({
        accountId: accountId,
        webPropertyId: propertyId,
      })
      .then(handleProfiles)
      .then(null, function (err) {
        // Log any errors.
        console.log(err);
      });
  }

  function handleProfiles(response) {
    // Handles the response from the profiles list method.
    if (response.result.items && response.result.items.length) {
      // Query the Core Reporting API.
      queryCoreReportingApi();
    } else {
      console.log('No views (profiles) found for this user.');
    }
  }

  function queryCoreReportingApi() {
    // Query the Core Reporting API for the number sessions for
    // the past seven days.
    gapi.client.analytics.data.ga
      .get({
        ids: 'ga:232192986',
        'start-date': '30daysAgo',
        'end-date': 'today',
        metrics: 'ga:sessions',
      })
      .then(function (response) {
        var formattedJson = JSON.stringify(response.result, null, 2);
        document.getElementById('query-output').value = formattedJson;
      })
      .then(null, function (err) {
        // Log any errors.
        console.log(err);
      });
  }

  useEffect(() => {
    // Add an event listener to the 'auth-button'.
    document.getElementById('auth-button').addEventListener('click', authorize);
  }, []);
  return (
    <Container>
      <Head>
        <script src='https://apis.google.com/js/client.js?onload=authorize'></script>
      </Head>
      {/* <h1>Hello Analytics Reporting API V4</h1>
      <p className='g-signin2' data-onsuccess='queryReports' />
      <textarea cols='80' rows='20' id='query-output' /> */}
      <button id='auth-button'>Authorize</button>
      <h1>Hello Analytics</h1>
      <textarea cols='80' rows='20' id='query-output'></textarea>
    </Container>
  );
};

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default Home;
