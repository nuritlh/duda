export default {
    saveToStorage,
    loadFromStorage,
    compareByName,
    compareByCity,
    compareByStatus
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function compareByName( a, b ) {

    if ( a.name < b.name ) {
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

function compareByCity( a, b ) {

    if ( a.city < b.city ) {
      return -1;
    }
    if ( a.city > b.city ){
      return 1;
    }
    return 0;
}

function compareByStatus( a, b ) {
     return a.active-b.active
}
