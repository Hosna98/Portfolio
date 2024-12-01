

import "../../sass/Hero/Hero.scss";

export const Hero = () => {
  return (
    <section className ="container">
      <div className="content">
        <h1 className="Hero-title">
          Salut, Je suis Hosna Qachar
          </h1>
        <p className="description">Développeur web junior</p>
        <a href="/assets/cv/CV.pdf" className="contactBtn" download>
            Mon CV
        </a>
      </div>
      <img 
        src="/assets/hero/heroImage.png" 
        alt="Hero Image astronaute" 
        className="heroImg" 
       />
        <div className='topBlur'/>
        <div className='topBlurBottomBlur'/>
    </section>
  );
};
