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

        <div className="contacts-social">
          <p>Or you can also find me on social media:</p>
          <div className="social-links">
            <a href="https://store.twentyonepilots.com/" target="_blank" rel="noopener noreferrer">Store</a>
            <a href="https://www.instagram.com/twentyonepilots?igsh=MXBhdjZ0MnR3eno1OQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com/@twentyonepilots?si=jDlwbCFh6yMZzZ1_" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
