export const host = process.env.REACT_APP_BASE_URL;

//user route
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;

//books route
export const addBook = `${host}/api/books/addBook`;
export const allBooks = `${host}/api/books/allBooks`;
export const bestSellingBooks = `${host}/api/books/isbestselling`;
export const featuredBooks = `${host}/api/books/isfeatured`;
export const latestBooks = `${host}/api/books/islatest`;
export const authorsPick = `${host}/api/books/authorspick`;
export const relatedBooks = `${host}/api/books/relatedbooks/:id`;
export const bookDelete = `${host}/api/books/delete/:id`;
export const bookUpdate = `${host}/api/books/update/:id`;
export const bookDetail = `${host}/api/books/:id`;




//authors route
export const addAuthor = `${host}/api/authors/addAuthor`;
export const allAuthors = `${host}/api/authors/allAuthors`;
export const authorDelete = `${host}/api/authors/delete/:id`;
export const authorUpdate = `${host}/api/authors/update/:id`;
export const authorDetail = `${host}/api/authors/:id`;
export const singleAuthorsBooks = `${host}/api/authors/:id/books`;



//category route
export const addCategory = `${host}/api/category/addCategory`;
export const allCategories = `${host}/api/category/allCategory`;
export const singleCategoryBooks = `${host}/api/category/:id/books`;
export const categoryDelete = `${host}/api/category/delete/:id`;
export const categoryUpdate = `${host}/api/category/update/:id`;
export const categoryDetail = `${host}/api/category/:id`;



//format route
export const addFormat = `${host}/api/format/addFormat`;
export const allFormats = `${host}/api/format/allFormats`;
export const formatDelete = `${host}/api/format/delete/:id`;
export const formatUpdate = `${host}/api/format/update/:id`;
export const formatDetail = `${host}/api/format/:id`;