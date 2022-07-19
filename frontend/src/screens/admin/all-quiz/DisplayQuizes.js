import React, { useState } from "react";
import InputComponent from "../../../components/input/Input";
import AllQuizCard from "./AllQuizCard";

const DisplayAllQuizes = () => {
    const [queryString, setQueryString] = useState("");
    return (
        <div>
            <div className="bg-white w-full p-4 rounded-md shadow-md mb-10 ">
                <InputComponent
                    placeholder="Search Quiz Category"
                    label="Search Quiz"
                    className="w-full"
                    value={queryString}
                    onChange={(e) => setQueryString(e.target.value)}
                />
            </div>

            <div>
                <AllQuizCard />
                <AllQuizCard />
            </div>
        </div>
    );
};

export default DisplayAllQuizes;
