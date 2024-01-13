import React, { useState } from 'react';
import AllProjectData from "./AllProjectData";
import Card from "./Card";
import Categories from "./Categories";
import Certificate from "./Certificate";

const allCategories = ["All", ...new Set(AllProjectData.map((item) => item.category))];

const Project = () => {
    const [categories, setCategories] = useState(allCategories);
    const [cardItems, setCardItems] = useState(AllProjectData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [activeCategory, setActiveCategory] = useState('All');

    const menuFilter = (category) => {
        if (category === 'All') {
            setCardItems(AllProjectData);
        } else {
            const filteredData = AllProjectData.filter((item) => item.category === category);
            setCardItems(filteredData);
        }

        setCurrentPage(1);
        setActiveCategory(category);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCardItems = cardItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div>
                <div className="d-flex justify-content-center py-3">
                    <h1 className="bg-danger d-inline-flex px-5 bd-highlight rounded-pill">Here Are Some My Project </h1>
                </div>
                <div className="container-fluid">
                    <Categories categories={categories} menuFilter={menuFilter} activeCategory={activeCategory} />
                    <Card cardItems={currentCardItems} />
                    <div className="d-flex justify-content-end">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                                </li>
                                {Array.from({ length: Math.ceil(cardItems.length / itemsPerPage) }, (_, index) => (
                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                                    </li>
                                ))}
                                <li className={`page-item ${currentPage === Math.ceil(cardItems.length / itemsPerPage) ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                <Certificate />
            </div>
        </>
    );
};

export default Project;
