import "./home.css";
import logo from "../assests/gameLogo.png";

export default function Home() {
    return (
        <>
            <div class="section" id="one">
                <div class="welcome">
                    <div class="logo">
                    <img src={logo} alt="logo" />
                    </div>

                <div class="text">
                <h3>
                    <div class="title">GameLibrary</div>
                </h3>
                </div>
                </div>

                <div class="button_row">
                    <div class="button">
                    <a href="#">
                        <button class="main_button large">LOG IN</button>
                    </a>
                    </div>
                    <div class="button">
                    <a href="#">
                        <button class="main_button large">
                        <i class="fa-regular fa-circle-question"></i>SIGN UP
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
}