import React from 'react';

const apiKey = 'fake key';
const apiUrl = 'https://factchecktools.googleapis.com/v1alpha1/claims:search';
const outputElement = document.getElementById('output');

const requestOptions = {
  method: 'GET',
  headers: {
    'Authorization': apiKey, //`Bearer ${apiKey}`,
    'query': "covid",
  },
};

fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
//   .then(data => {
//     outputElement.textContent = JSON.stringify(data, null, 2);
//   })
  .catch(error => {
    console.error('Error:', error);
  });


export default function Main() {
return (
  <div>
  <h2>main page content here</h2>
  <p>test out put</p>
  </div>


);
}
