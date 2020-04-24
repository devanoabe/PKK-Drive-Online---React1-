import React, {Component} from 'react';  



class Home extends Component {  
  render(){  
    return (
      
      <div className="header col-12 ">
        <h1 style={{color: "#ff0000",
                fontSize: "250px",
                textShadow: "#ffffff 0px 0px 3px,   #ffffff 0px 0px 3px,   #ffffff 0px 0px 3px, #ffffff 0px 0px 3px,   #ffffff 0px 0px 3px,   #ffffff 0px 0px 3px",
                textAlign: "center",
                fontFamily: "'Berkshire Swash', cursive",
                marginTop: "210px",
                marginLeft: "11px",
                letterSpacing: "-10px",
                fontWeight: "bold",
                transform: "rotate(-5deg)"
                }}>RILE</h1>
        <h1 style={{color: "#ffffff",
                fontSize: "250px",
                textShadow: "#000000 0px 0px 3px,   #000000 0px 0px 3px,   #000000 0px 0px 3px, #000000 0px 0px 3px,   #000000 0px 0px 3px,   #000000 0px 0px 3px",
                textAlign: "center",
                fontFamily: "'Berkshire Swash', cursive",
                marginTop: "-315px",
                letterSpacing: "-10px",
                fontWeight: "bold",
                transform: "rotate(-5deg)"
                }}>RILE</h1>
        <h1 style={{color: "#ffbd4c",
                fontSize: "60px",
                textShadow: "#000000 0px 0px 3px,   #000000 0px 0px 3px,   #000000 0px 0px 3px, #000000 0px 0px 3px,   #000000 0px 0px 3px,   #000000 0px 0px 3px",
                textAlign: "right",
                fontFamily: "'Rock Salt', cursive",
                marginTop: "-425px",
                marginRight: "315px",
                transform: "rotate(15deg)"
                }}>No.1</h1>

        <div className="tentang ">
            <div className="kiri ">
                <h1>Apa yang Di<br />
                    maksud Dengan
                </h1>
                <h2>
                    RILE
                </h2>
                <p>
                    RILE merupakan singkatan dari Drive Lessons<br />
                    kita bisa belajar tanpa harus terikat jadwal yang telah<br />
                    ditetapkan
                    <br />
                    <br />
                    RILE memiliki kepada pelanggan visi dan misi cepat,<br />
                    mudah dan terpecaya
                </p>
            </div>
        </div>

        <div className="kelebihan">
            <h1>KELEBIHAN</h1>
            <h2>Rile no.1</h2>
            <div className="huruf1">
                TIDAK TERIKAT <br />
                OLEH JADWAL
            </div>
            <div className="huruf2">
                DIJAMIN BISA <br />
                NYETIR...
            </div>
            <div className="huruf3">
                CEPAT DALAM <br />
                BELAJAR...
            </div>
            <div className="pertama">
            </div>
            <div className="kedua">
            </div>
            <div className="ketiga">   
            </div>
            <div className="satu">
                <h1>NO.1</h1>
            </div>
            <div className="dua">
                <h1>NO.2</h1>
            </div>
            <div className="tiga">
                <h1>NO.3</h1>
            </div>
        </div>

        <div className="bingung">
        <div className="kanan">
                <h1>TUNGU APA LAGI</h1>
                <p><button>COBA</button></p>
            </div>
            <div className="kiri">
            </div>
        </div>

    </div>
    );  
  }  
}  
export default Home;