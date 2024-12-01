import "../../sass/Contact/Contact.scss";


export const Contact = () => {
  return (
     <footer id="contact" className="contact-container">
        <div className="contact-text">
            <h2>Contact</h2>
            <p> N'hesitez pas à me contacter !</p>
        </div>
        <ul className="contact-links">
            <li className="contact-link">
                <img src="/assets/contact/emailicon.png" alt="Email icon"/>
                <a className="icone1"href="mailto:qachar.hosna@gmail.com">qachar.hosna@gmail.com</a>
            </li>
            <li className="contact-link">
                <img src="/assets/contact/linkedinicon.png" alt="Linkedin icon"/>
                <a href="https://www.linkedin.com/in/hosna98">https://www.linkedin.com/in/hosna98/</a>
            </li>
            <li className="contact-link">
                <img src="/assets/contact/githubicon.png" alt="Github icon"/>
                <a className="icone3"href='https://github.com/Hosna98'>https://github.com/Hosna98</a>
            </li>
        </ul>
  </footer>
   
  )
}
