import React from 'react'
import img from "../img/mir1.jpg"
import img1 from "../img/mir2.jpg"
import img3 from "../img/mir5.jpg"
import img4 from "../img/mir4.jpg"

const nol = () => {
    return (
       <div>
       <h2 align="center" style={{fontWeight:"initial", fontSiz:"40px",marginTop:"2%"}}>Bizdagi kitoblardan namuna</h2>
       <div style={{display:"flex",justifyContent:"space-around",marginTop:'8%'}}>
        <div>
 
                <img style={{ width: "250px", height: "250px" }} src={img} alt="" /> <br />
                <span>To`siqlarga qaramay sevdik <br />
                    Holati:Sotuvda <br />
                    Narxi:50.000 <br />
                    Email:@Miss_Dasturchi_3457 <br />
                    Tel: 905333457 <br />
                    Viloyat:Farg`ona <br />
                    Tuman:Rishton <br />
                    Manzil:1-maktab yonida
                </span>
            </div>
            <div>
            <img style={{ width: "250px", height: "250px" }} src={img4} alt="" /> <br />
                <span>Kaktuslar ham gullaydi <br />
                    Holati:Yo`q<br />
                    Narxi:20.000 <br />
                    Email:@Miss_Dasturchi_3457 <br />
                    Tel: 905363457 <br />
                    Viloyat:Toshkent<br />
                    Tuman:Angren <br />
                    Manzil:1-maktab yonida 
                    </span>
            </div>
            <div>
                <img style={{ width: "250px", height: "250px" }} src={img1} alt="" /> <br />
                <span>Hayot yutqazgan joyingdan boshlanar<br />
                    Holati:Sotuvda <br />
                    Narxi:50.000 <br />
                    Email:@Miss_Dasturchi_3457 <br />
                    Tel: 905333457 <br />
                    Viloyat:Farg`ona <br />
                    Tuman:Rishton <br />
                    Manzil:1-maktab yonida
                </span>
            </div>
            <div>
            <img style={{ width: "250px", height: "250px" }} src={img3} alt="" /> <br />
                <span> O`zingga xush kelding <br />
                    Holati:Sotuvda <br />
                    Narxi:50.000 <br />
                    Email:@Asliddinabduqahhorov5<br />
                    Tel: 905333457 <br />
                    Viloyat:Farg`ona <br />
                    Tuman:Rishton <br />
                    Manzil:13-maktab to`g`risida
                    </span>
            </div>
        </div>
       </div>
    )
}

export default nol