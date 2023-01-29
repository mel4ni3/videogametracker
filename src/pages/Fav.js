import "./home.css";
import data from "../components/Data";

import minecraft from "../assests/minecraft.png";
import animal from "../assests/animal_crossing.jpeg";
import gta from "../assests/gta5.png";


export default function Fav() {
    const { games } = data;

    return (
        <>
            <div class="sectionOther" id="one">
                <div class="welcome">

                    <div class="text">
                        <h3><div class="title">Favorites</div></h3>
                    </div>
                </div>

                    <div className="items">
                        <div className="card">
                            <h3>Minecraft</h3>
                            <img src={minecraft} alt="Minecraft" />
                            <br />
                            <i class="fa fa-thumbs-up"></i>
                        </div>

                        <div className="card">
                            <h3>Animal Crossing: New Horizons</h3>
                            <img src={animal} alt="Animal Crossing" />
                            <br />
                            <i class="fa fa-thumbs-up"></i>
                        </div>

                        <div className="card">
                            <h3>Grand Theft Auto 5</h3>
                            <img src={gta} alt="GTA" />
                            <br />
                            <i class="fa fa-thumbs-up"></i>
                        </div>
                    </div>

                
            </div>
        </>
    );
}

