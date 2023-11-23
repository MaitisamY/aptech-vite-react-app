import { useState } from "react";
import SearchDatatables from "../SearchDatatables";
import { PaginationButton } from "../Buttons";
import Div from "../Div";
import Table from "../Table";
import CommonButton from "../Buttons";

export default function ResultData(props) {
    const { results } = props;
    const perPage = 10;
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter results based on the search query
    const filteredResults = results.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const start = (page - 1) * perPage;
    const end = page * perPage;
  
    const resultsSliced = filteredResults.slice(start, end);
  
    const handlePage = (newPage) => {
        setPage(newPage);
    };
  
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setPage(1); // Reset to the first page when the search query changes
    };

    const pageNumbers = Array.from({ length: Math.ceil(results.length / perPage) }, (_, index) => index + 1);

    return (
        <>
            <Div style={{ display: "flex", width: "96%", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <SearchDatatables 
                    name="searchResult"
                    type="text" 
                    className="search-input"
                    placeholder="Search by test title" 
                    value={searchQuery} 
                    onChange={handleSearch} 
                    autoComplete="off"
                />
                <span style={{ marginLeft: "10px" }}><strong>Total Results: {results.length}</strong></span>
            </Div>
            {filteredResults.length === 0 && (
                <p>No matched data found.</p>
            )}
            {filteredResults.length > 0 && (
                <Table className="list-items-table">
                    <thead>
                        <tr>
                            <th>Test title</th>
                            <th>Date</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultsSliced.map((resultsBar) => (
                            <tr key={resultsBar.id}>
                                <td>
                                    {resultsBar.title}
                                </td>
                                <td>
                                    {resultsBar.date}
                                </td>
                                <td>
                                    {resultsBar.marks}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                {pageNumbers.length > 1 && filteredResults.length > 0 && (
                    <>
                        <Div>
                            <PaginationButton 
                                className="btn-navi first" 
                                onClick={() => handlePage(1)}
                                text="First"
                            />
                            <PaginationButton 
                                className="btn-navi prev-next" 
                                onClick={() => handlePage(page - 1)} 
                                disabled={page === 1}
                                text="Prev"    
                            />
                            {pageNumbers.map((number, index) => {
                                // Show dots when there are more than 4 pages and skip rendering some page numbers
                                if (pageNumbers.length > 3 && (index < page - 2 || index > page + 2)) {
                                    // Show dots instead of page number
                                    if (index === 0 || index === pageNumbers.length - 1) {
                                        return <span key={index}>...</span>;
                                    }
                                    return null;
                                }

                                return (
                                    <PaginationButton
                                        key={number}
                                        id={number}
                                        onClick={() => handlePage(number)}
                                        className={page === number ? 'btn-navi numbers active' : 'btn-navi numbers'}
                                        text={number}
                                    />
                                        
                                );
                            })}
                            <PaginationButton 
                                className="btn-navi prev-next" 
                                onClick={() => handlePage(page + 1)} 
                                disabled={page === pageNumbers.length}
                                text="Next"
                            />
                            <PaginationButton 
                                className="btn-navi last" 
                                onClick={() => handlePage(pageNumbers.length)}
                                text="Last"
                            />
                        </Div>
                        {/* <p>Page {page} of {pageNumbers.length}</p> */}
                        <p>Showing {start + 1} to {end} of {filteredResults.length} entries</p>
                    </>
                )}
            </Div>
        </>
    )
}