import React, { useState } from "react";
import PrimaryBtn from "../../../components/button/PrimaryBtn";
import InputComponent from "../../../components/input/Input";
import Message from "../../../components/message/Message";
import Title from "../../../components/text/Title";
import request from "../../../request/request";
import { CATEGORY_ENDPOINT } from "../../../routes/routes";

const AddNewCategory = () => {
    const [formError, setFormError] = useState({
        title: "",
        description: "",
    });
    const [categoryTitle, setCategoryTitle] = useState("");
    const [categoryDesc, setCategoryDesc] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const validate = () => {
        const errors = {};
        if (!categoryTitle) {
            errors.title = "Title is  required!";
        }
        if (!categoryDesc) {
            errors.description = "Description is required!";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validFromData = validate();
        setFormError(validFromData);
        if (Object.keys(validFromData).length === 0) {
            console.log("Form is valid");
            setLoading(true);
            setMessage("");
            setError("");
            request
                .authPost({
                    endpoint: CATEGORY_ENDPOINT,
                    body: {
                        title: categoryTitle,
                        description: categoryDesc,
                    },
                })
                .then(() => {
                    setLoading(false);
                    setMessage("Category posted successfylly!");
                    setError(false);
                    setCategoryTitle("");
                    setCategoryDesc("");
                })
                .catch((error) => {
                    setLoading(false);
                    setMessage(error);
                    setError(true);
                });
        }
    };

    const handleClearForm = (e) => {
        e.preventDefault();
        setCategoryTitle("");
        setCategoryDesc("");
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
                        error={formError.title}
                    />
                    <InputComponent
                        label="Category Description"
                        placeholder="Enter Category Description"
                        value={categoryDesc}
                        onChange={(e) => setCategoryDesc(e.target.value)}
                        className="w-full max-w-lg"
                        component="textarea"
                        rows="10"
                        error={formError.description}
                    />
                </div>
                <div>
                    <PrimaryBtn
                        loading={loading}
                        title="Add Category"
                        onClick={handleSubmit}
                    />
                    <PrimaryBtn
                        title="Clear"
                        onClick={handleClearForm}
                        bg="bg-red-400"
                        className="ml-2 "
                    />
                </div>

                {message && <Message error={error}>{message}</Message>}
            </div>
        </form>
    );
};

export default AddNewCategory;
