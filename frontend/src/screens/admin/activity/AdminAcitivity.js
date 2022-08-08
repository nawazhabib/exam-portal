import React from "react";
import activity from "../../../assets/images/Activity.png";
import categories from "../../../assets/images/categories.jpg";
import quizes from "../../../assets/images/Quiz.png";
import user from "../../../assets/images/users.png";
import {
    ADMIN,
    ALL_QUIZZ,
    ALL_USERS,
    VIEW_CATEGORY,
} from "../../../routes/routes";
import AdminCard from "./AdminCard";
const AdminActivity = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AdminCard
                    src={user}
                    title="Users"
                    link={`${ADMIN}/${ALL_USERS}`}
                />
                <AdminCard
                    src={categories}
                    title="Categories"
                    link={`${ADMIN}/${VIEW_CATEGORY}`}
                />
                <AdminCard src={activity} title="Activity" link={`${ADMIN}`} />
                <AdminCard
                    src={quizes}
                    title="Quizes"
                    link={`${ADMIN}/${ALL_QUIZZ}`}
                />
            </div>
        </div>
    );
};

export default AdminActivity;
