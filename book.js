const loadLibrary = () => {
    fetch('http://openlibrary.org/search.json?q=javascript')
    .then(res => res.json())
    .then(data => displayLibrary(data));
}
loadLibrary();

const displayLibrary = data => {
    const librarys = data.docs;
    const librarysDiv = document.getElementById('books');
    librarysDiv.textContent = '';
    if(!books){

    }
    librarys.forEach(library => {
        const div = document.createElement('div');
        div.classList.add('library')
        div.innerHTML = `
            <img width="200px" src="${library.cover_i}">
            <h3>${library.title}</h3>
            <h3>author_name:${library.author_name}</h3>
            <h3>publisher: ${library.publisher}</h3>
            <p>publish_year: ${library.first_publish_year}</p>
        `;
        librarysDiv.appendChild(div);

    });
    toggleSpinner('none');
}

// search area
const loadBook = searchText => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLibrary(data))
}

loadBook('javascript');

// search area
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const srarchBook = () => {
    const searchText = document.getElementById('search-field').Value;
    // display spinner
    toggleSpinner('block');
    loadBook(searchText);

    document.getElementById('search-field').Value = '';

}







