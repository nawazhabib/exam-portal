import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../../components/button/PrimaryBtn";
import Container from "../../components/container/Container";
import { homeData } from "../../constants/constants";
const Home = () => {
    const navigate = useNavigate();
    const { img, title, desc, link, btn } = homeData;
    return (
        <>
            <Container className="grid place-items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-4  place-items-start lg:place-items-center">
                    <div className="mb-9 lg:mb-0">
                        <img src={img} alt="home_banner" />
                    </div>

                    <div>
                        <h1 className="text-6xl text-purple-50 font-extrabold mb-6 lg:mb-10">
                            {title}
                        </h1>
                        <p className="text-base text-gray-500">{desc}</p>

                        <PrimaryBtn
                            onClick={() => navigate(link)}
                            title={btn}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
