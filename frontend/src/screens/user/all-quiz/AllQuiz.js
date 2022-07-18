import { useParams } from "react-router-dom";
import Cards from "../card/Cards";
import Title from "./Title";

const CARDS = [
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
    {
        title: "JavaBasic",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laboriosam est quae reprehenderit commodi, ex eaque nobis beatae optio quaerat.",
        question: 10,
        marks: 100,
    },
];

const AllQuiz = () => {
    let { title } = useParams();
    return (
        <div>
            {/* title */}
            <Title title={title} />

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CARDS.map((item, index) => (
                    <div key={index} className="">
                        <Cards
                            title={item.title}
                            marks={item.marks}
                            desc={item.desc}
                            questions={item.question}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllQuiz;
