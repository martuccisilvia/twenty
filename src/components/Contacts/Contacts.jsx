import "./Contacts.css";

const Contacts = () => {
    return (

        <div className="contacts-container"> 
            
            <div className="contacts-page">
                <h2>Contact Us</h2>
                <p>Fill out the form below to send me a message:</p>

                <form
                    action="https://formspree.io/f/xwpqlnqn"
                    method="POST"
                    className="contacts-form"
                >
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>

                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>

                    <label>
                        Message:
                        <textarea name="message" rows="5" required></textarea>
                    </label>

                    <button type="submit">Send</button>
                </form>
            </div>
        </div>);
};

export default Contacts;
