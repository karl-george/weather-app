const Hero = ({ weather }) => {
  const date = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return (
    <div className='hero'>
      <div className='bg-hero rain'>
        <h2 className='hero-date'>
          {date.toLocaleDateString('en-UK', options)}
          {console.log(weather)}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
