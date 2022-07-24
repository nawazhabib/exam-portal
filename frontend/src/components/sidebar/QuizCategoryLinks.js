import React from "react";
import { FiHome } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useNetwork from "../../hooks/useNetwork";
import { CATEGORY_ENDPOINT } from "../../routes/routes";
import SidebarLink from "./SidebarLink";

const QuizCategoryLinks = () => {
    let { catId } = useParams();
    console.log(catId, "params");
    const { loading, data, error, message } = useNetwork(CATEGORY_ENDPOINT);
    console.log(data?.[0]?.categoryID, "data");
    return (
        <div>
            {data !== null &&
                data?.length > 0 &&
                data.map((item) => (
                    <SidebarLink
                        name={item.title}
                        path={`/user/category/${item.categoryID}`}
                        active={`${item.categoryID}` === `${catId}`}
                        icon={FiHome}
                    />
                ))}
        </div>
    );
};

export default QuizCategoryLinks;
