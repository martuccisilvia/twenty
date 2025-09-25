import React from "react";

const Contacts = () => {
    return (
        <div className="contacts-page">
            <h2>Contattami</h2>
            <p>Compila il form qui sotto per inviarmi un messaggio:</p>

            <form
                action="https://formspree.io/f/xwpqlnqn"
                method="POST"
                className="contacts-form"
            >
                <label>
                    Nome:
                    <input type="text" name="name" required />
                </label>

                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>

                <label>
                    Messaggio:
                    <textarea name="message" rows="5" required></textarea>
                </label>

                <button type="submit">Invia</button>
            </form>
        </div>
    );
};

export default Contacts;
