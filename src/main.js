
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'application/jason;charset=utf-8',
    },
    params: {
        'api-key': API_KEY,
    },
})

const getTrendingMoviesPreview = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    movies.forEach(movie => {

        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

const getCategoriesPreview = async () => {
    const { data } = await api('genre/movie/list');

    const categories = data.genres;
    console.log(categories)
    categories.forEach(categorie => {

        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');

        const categorieContainer = document.createElement('div');
        categorieContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', `id${categorie.id}`);
        const categoryTitleText = document.createTextNode(categorie.name);

        categoryTitle.appendChild(categoryTitleText);
        categorieContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categorieContainer);
    });
}


getTrendingMoviesPreview();
getCategoriesPreview();