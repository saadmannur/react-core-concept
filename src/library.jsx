import Book from './book.jsx'

export default function Library({books}){
    return (
        <div>
            <h2>The National Library</h2>
            <p>Books collection: {books.length}</p>
            <p>Address: </p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book> )
                }
            </ul>
        </div>
    )
}