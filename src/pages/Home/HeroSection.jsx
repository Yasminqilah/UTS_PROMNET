export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Welcome to My Website</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Yasmin Aqilah Nur Rachman</span>{" "}
            </h1>
            <p className="hero--section-description">
              Mahasiswa Pendidikan Ilmu Komputer Universitas Pendidikan Indonesia
              <br /> "Jadikan kelemahanmu sebagai bagian dari kelebihanmu"
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/aku.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  