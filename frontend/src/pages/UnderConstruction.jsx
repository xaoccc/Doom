import { useNavigate } from "react-router-dom";

export default function UnderConstruction() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <section>
            <div className="container">
                <div className="flex event-details">
                    <img className="under-construction" src="https://res.cloudinary.com/dqgnfey3v/image/upload/v1731336282/DALL_E_2024-11-11_16.44.00_-_A_group_of_undead_skeletons_dressed_as_construction_workers_working_at_a_construction_site._They_are_wearing_yellow_hard_hats_orange_safety_vests_an_vucf0z.webp" alt="" />
                    <p class="centered">This page is not finished yet.</p>
                    <button onClick={goBack}>Go back</button>
                </div>
            </div>
        </section>

    )
}