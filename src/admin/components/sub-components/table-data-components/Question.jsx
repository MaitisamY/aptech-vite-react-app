import { useState } from "react";
import { tests } from "../../Datatable-data";
import SearchDatatables from "../SearchDatatables";
import CommonButton, { PaginationButton } from "../Buttons";
import Div from "../Div";
import Table from "../Table";

export default function QuestionData(props) {
    const { questions } = props;
    const perPage = 5;
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter subjects based on the search query
    const filteredQuestions = questions.filter(question => question.title.toLowerCase().includes(searchQuery.toLowerCase()));
  
    const start = (page - 1) * perPage;
    const end = page * perPage;
  
    const questionsSliced = filteredQuestions.slice(start, end);
  
    const handlePage = (newPage) => {
        setPage(newPage);
    };
  
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setPage(1); // Reset to the first page when the search query changes
    };

    const pageNumbers = Array.from({ length: Math.ceil(questions.length / perPage) }, (_, index) => index + 1);

    return (
        <>
            <Div style={{ display: "flex", width: "96%", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <SearchDatatables 
                    name="searchQuestion"
                    type="text" 
                    className="search-input"
                    placeholder="Search by question" 
                    value={searchQuery} 
                    onChange={handleSearch} 
                    autoComplete="off"
                />
                <span style={{ marginLeft: "10px" }}><strong>Total questions: {questions.length}</strong></span>
            </Div>
            {filteredQuestions.length === 0 && (
                <p>No matched data found.</p>
            )}
            {filteredQuestions.length > 0 && (
                <Table className="list-items-table">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Test</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questionsSliced.map((questionsBar) => (
                            <tr key={questionsBar.id}>
                                <td>{questionsBar.title}</td>
                                <td>
                                    {tests.filter(bar => bar.id === questionsBar.testId).map((bar) => (
                                        <p key={bar.id}>{bar.title}</p>))}
                                </td>
                                <td>
                                    <CommonButton style={{ marginLeft: "10px" }} className="actions modify" text="Modify" /> 
                                    <CommonButton style={{ marginLeft: "10px" }} className=" actions delete" text="Delete" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px"}}>
                {pageNumbers.length > 1 && filteredQuestions.length > 0 && (
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
                        <p>Showing {start + 1} to {end} of {filteredQuestions.length} entries</p>
                    </>
                )}
            </Div>
        </>
    )
}