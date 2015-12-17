function getOccurrences() {
  console.log('Fetching occurrences');
  var input = document.getElementById('word');

  fetch('/api/occurrences/' + input.value)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      var occurrencesList = document.getElementById('occurrences');
      Object.keys(json).forEach(function (key) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(key + ': ' + json[key] + ' times'));
        occurrencesList.appendChild(li);
      });
    })
}
