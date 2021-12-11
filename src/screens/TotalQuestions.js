import React, { useState, useEffect } from "react";
import axios from "axios";

function TotalQuestions() {
    const [allQuestions, setAllQuestions] = useState([]);

    useEffect(() => {
        const fetchRequest = async () => {
            const { data } = await axios.get(
                "/api/v1/question"
            );
            setAllQuestions(data);
        };
        fetchRequest();
    }, []);

    return (
        <div>
            <ul>
                {allQuestions.map((item) => (
                    <li key={item._id}>{item.question}</li>
                ))}
            </ul>
        </div>
    );
}

export default TotalQuestions;
