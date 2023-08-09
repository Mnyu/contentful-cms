import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            a officiis quaerat modi quas dolorum? Velit accusantium expedita
            voluptas praesentium totam pariatur adipisci, hic cumque placeat,
            facere necessitatibus in inventore.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='hero-img' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
