import react, { useState } from "react"

function PersonalityQuest() {
    const [energy, setenergy] = useState(3);
    const [hobbies, sethobbies] = useState();
    const [extra, setextra] = useState("My favorite movie is…");
    return (<div>
        <form action="submission.html" method="POST">
            <h1>Share your personality!</h1>
            <section className="energy" >
                <label htmlFor="energy" > Do you get energy from being around other people or do you recharge by being alone?</label>
                <span> I recharge with people</span>
                <input type="range" name="energy" id="energy" min="1" max="5"
                    value={energy}
                    onChange={(event) => { setenergy(event.target.value) }} />
                <span>I need time alone </span>
            </section>
            <section className="hobbies">
                <label htmlFor="hobbies">What do you enjoy doing?</label>
                <select value={hobbies}
                    onChange={(event) => { sethobbies(event.target.value) }}>
                    <option value="Yoga">Yoga</option>
                    <option value="Music">Music</option>
                    <option value="Rugby">Rugby</option>  </select>
            </section>

            <section className="extra">
                <label htmlFor="extra">Tell us something about yourself!</label>

                <textarea value={extra}
                    onChange={(event) => { setextra(event.target.value) }} id="extra" name="extra" rows="3" cols="40">

                </textarea>
            </section>

        </form>

    </div>
    );
}


export default PersonalityQuest;
