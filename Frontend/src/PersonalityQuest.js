import logo from './logo.svg';
import './App.css';

function PersonalityQuest() {
    return (<div>
        <form action="submission.html" method="POST">
            <h1>Share your personality!</h1>
            <section className="energy" >
                <label htmlFor="energy" > Do you get energy from being around other people or do you recharge by being alone?</label>
                <span> I recharge with people</span>            
                <input type="range" name="energy" id="energy" value="3" min="1" max="5"/> 
                <span>I need time alone </span>
            </section>
            <section className="hobbies">
                <label htmlFor="hobbies">What do you enjoy doing?</label>
                <option value="Yoga">Yoga</option>
                <option value="Music">Music</option>
                <option value="Rugby">Rugby</option> <section>
                    <section className="extra-info">
                        <label htmlFor="extra">Tell us something about yourself!</label>

                        <textarea id="extra" name="extra" rows="3" cols="40">
                            My favorite movie is….
                        </textarea>
                    </section>


                </section>
    
            </section>
        </form>

    </div>
    );
}


export default PersonalityQuest;
