
export default function AnimationIntro() {
  const textIntroAnimation = [
    {
      letterFirstName: ["Y", "O", "A", "N", "N"],
      letterLastName: ["C", "R", "O", "G", "U", "E", "N", "N", "E", "C"],
    },
  ];
  return (
    <section className='section'>
      <video
        className='video'
        autoPlay
        muted
        src='/assets/videos/animations/intro/smoke.mp4'
        style={{ height: "100vh", width: "100vw" }}
      />

      <h1 className='h1'>
        <img
          className='img'
          src='/assets/imgs//animations/intro/profile.jpg'
          style={{
            height: "250px",
            width: "250px",
            border: "2px solid #F00",
            borderRadius: "50%",
          }}
        />
        {textIntroAnimation.map(({ letterFirstName, letterLastName }) => (
          <>
            <div className='tt'>
              {letterFirstName.map((item) => (
                <span>{item}</span>
              ))}
            </div>
            <div className='oo'>
              {letterLastName.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </>
        ))}
      </h1>
    </section>
  );
}
