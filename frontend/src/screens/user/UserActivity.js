import welcomeImg from "../../assets/images/welcome.svg";
const UserActivity = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <img
                        src={welcomeImg}
                        alt="congrats"
                        className=" h-44 sm:h-60"
                    />
                </div>
            </div>
        </div>
    );
};

export default UserActivity;
