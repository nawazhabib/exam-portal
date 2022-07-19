import React, { useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import InputComponent from "../../../components/input/Input";
import Title from "../../../components/text/Title";

const AddNewCategory = () => {
    const [categoryTitle, setCategoryTitle] = useState("");
    const [categoryDesc, setCategoryDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        /* @TODO ==> Call The Backend  Tue Jul 19  */
    };

    const handleClearForm = (e) => {
        e.preventDefault();
        setCategoryTitle("");
        setCategoryDesc("");
        /* @TODO ==> Call The Backend  Tue Jul 19  */
    };
    return (
        <form>
            <Title
                title="Add New Category"
                className="py-2 rounded-md border-b-2 border-primary capitalize pl-2 shadow-md "
            />
            <div className="bg-white shadow-lg px-2 py-2 mt-10 rounded-md pb-4">
                <div className="">
                    <InputComponent
                        label="Category Title"
                        placeholder="Enter Category Title"
                        value={categoryTitle}
                        onChange={(e) => setCategoryTitle(e.target.value)}
                        className="w-full max-w-lg"
                    />
                    <InputComponent
                        label="Category Description"
                        placeholder="Enter Category Description"
                        value={categoryDesc}
                        onChange={(e) => setCategoryDesc(e.target.value)}
                        className="w-full max-w-lg"
                        component="textarea"
                        rows="10"
                    />
                </div>
                <div>
                    <PrimaryBtn title="Add Category" onClick={handleSubmit} />
                    <PrimaryBtn
                        title="Clear"
                        onClick={handleClearForm}
                        bg="bg-red-400"
                        className="ml-2 "
                    />
                </div>
            </div>
        </form>
    );
};

export default AddNewCategory;
