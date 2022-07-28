import React from "react";
import Message from "../../../components/message/Message";
import Spinner from "../../../components/spinner/Spinner";
import Title from "../../../components/text/Title";
import useNetwork from "../../../hooks/useNetwork";
import { CATEGORY_ENDPOINT } from "../../../routes/routes";
import ViewCategoriesCard from "./ViewCategoriesCard";

const ViewCategories = () => {
    const { error, loading, data, message } = useNetwork(CATEGORY_ENDPOINT);
    return (
        <div>
            <Title
                title="All Quiz Categories"
                className="border-b-2 rounded-md py-3 pl-2 border-b-primary shadow-md mb-3"
            />
            {loading ? (
                <Spinner />
            ) : message ? (
                <Message error={error}>{message}</Message>
            ) : data !== null && data.length > 0 ? (
                data.map((item) => (
                    <ViewCategoriesCard
                        key={item?.categoryID}
                        catID={item?.categoryID}
                        title={item?.title}
                        description={item?.description}
                    />
                ))
            ) : null}
        </div>
    );
};

export default ViewCategories;
