import React, {Component} from 'react';  



class Transaksi extends Component {  
  render(){  
    return (
    <div className="body">
        <div className="kiri"></div>
      <div className="kanan">
        <h1>TRANSAKSI</h1>
        <hr/>
        <h3>Form Transaksi Drive Lessons</h3>
        <label><span>Name </span><input type="text" placeholder="username"/></label>
        <label><span>Email </span><input type="email" placeholder="@youremail"/></label>
        <label><span>Phone </span><input type="text" placeholder="+62"/></label>
        
        <label>
            <span>Mobil </span>
            <div className="box">
            <select>
            <option>Avansa</option>
            <option>Xenia</option>
            <option>Brio</option>
            </select>
            </div>

            <span1>Waktu </span1>    
            <div className="boxq">
            <select>
            <option>10.00 - 12.00</option>
            <option>13.00 - 15.00</option>
            <option>16.00 - 18.00 </option>
            </select>
            </div>
        </label>

        <div className="huruff"><h5>Bayar</h5></div>
        <label className="container">Tunai
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>

<label className="container">Transfer
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label>
            {/* <div className="box3">
            <select>
        <option>Tunai</option>
        <option>Transfer</option>
            </select>
            </div> */}

                
        <p><button>SEWA</button></p>
    </div>
    </div>
    );  
  }  
}  
export default Transaksi;