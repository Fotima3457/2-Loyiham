import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from "../img/photo_2022-12-05_16-28-57.jpg"
import img1 from "../img/photo_2022-11-01_00-55-24.jpg"
import img3 from "../img/photo_2022-11-01_00-55-20.jpg"
import img4 from "../img/photo_2022-11-03_00-39-34.jpg"
import img5 from "../img/photo_2022-11-05_13-51-58.jpg"
import img6 from "../img/photo_2022-12-05_21-23-51.jpg"

const bir = () => {
  return (
    <div style={{ marginTop: "-2%" }}>
      <Carousel variant="dark">
        <Carousel.Item>
          <img style={{  height: "720px" }}
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{color:"white",fontSize:"50px"}}>First gallery</h1>
            <h3 style={{color:"white", FontSize:"90px",fontWeight:"inherit"}}>Lorem ipsum dolor 
            sit amet consectetur 
            adipisicing elit. Quam 
            reprehenderit perspiciatis 
            dicta distinctio voluptas 
            similique, et magni exercit
            ationem quae dignissimos cul
            pa assumenda laudantium ul
            lam corporis nesciunt even
            iet neque blanditiis earum
             eos. Quia aliquam fugiat,
              velit nobis architecto q
              uidem iusto saepe sint u
              nde laudantium earum cons
               es id praesentium culpa?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{  height: "720px" }}
            className="d-block w-100"
            src={img1}
            alt="Second slide"
          />
          <Carousel.Caption>
          <h1 style={{color:"white",}}>Second gallery</h1>
          <h3 style={{color:"white", FontSize:"90px",fontWeight:"inherit"}}>Lorem ipsum dolor 
            sit amet consectetur 
            adipisicing elit. Quam 
            reprehenderit perspiciatis 
            dicta distinctio voluptas 
            similique, et magni exercit
            ationem quae dignissimos cul
            pa assumenda laudantium ul
            lam corporis nesciunt even
            iet neque blanditiis earum
             eos. Quia aliquam fugiat,
              velit nobis architecto q
              uidem iusto saepe sint u
              nde laudantium earum cons
              es id praesentium culpa?</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "720px" }}
            className="d-block w-100"
            src={img}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 style={{color:"black",}}>Third gallery</h1>
          <h3 style={{color:"black", FontSize:"90px",fontWeight:"inherit"}}>Lorem ipsum dolor 
            sit amet consectetur 
            adipisicing elit. Quam 
            reprehenderit perspiciatis 
            dicta distinctio voluptas 
            similique, et magni exercit
            ationem quae dignissimos cul
            pa assumenda laudantium ul
            lam corporis nesciunt even
            iet neque blanditiis earum
             eos. Quia aliquam fugiat,
              velit nobis architecto q
              uidem iusto saepe sint u
              nde laudantium earum cons
               es id praesentium culpa?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{  height: "720px" }}
            className="d-block w-100"
            src={img6}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 style={{color:"black",}}>Four gallery</h1>
          <h3 style={{color:"black", FontSize:"90px",fontWeight:"inherit"}}>Lorem ipsum dolor 
            sit amet consectetur 
            adipisicing elit. Quam 
            reprehenderit perspiciatis 
            dicta distinctio voluptas 
            similique, et magni exercit
            ationem quae dignissimos cul
            pa assumenda laudantium ul
            lam corporis nesciunt even
            iet neque blanditiis earum
             eos. Quia aliquam fugiat,
              velit nobis architecto q
              uidem iusto saepe sint u
              nde laudantium earum cons
               es id praesentium culpa?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{  height: "720px" }}
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 style={{color:"black",}}>Five gallery</h1>
          <h3 style={{color:"black", FontSize:"90px",fontWeight:"inherit"}}>Lorem ipsum dolor 
            sit amet consectetur 
            adipisicing elit. Quam 
            reprehenderit perspiciatis 
            dicta distinctio voluptas 
            similique, et magni exercit
            ationem quae dignissimos cul
            pa assumenda laudantium ul
            lam corporis nesciunt even
            iet neque blanditiis earum
             eos. Quia aliquam fugiat,
              velit nobis architecto q
              uidem iusto saepe sint u
              nde laudantium earum cons
               es id praesentium culpa?</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "720px" }}
            className="d-block w-100"
            src={img5}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h1 style={{color:"black",}}>Six gallery</h1>
          <h3 style={{color:"black", FontSize:"90px",fontWeight:"inherit"}}>Lorem ipsum dolor 
            sit amet consectetur 
            adipisicing elit. Quam 
            reprehenderit perspiciatis 
            dicta distinctio voluptas 
            similique, et magni exercit
            ationem quae dignissimos cul
            pa assumenda laudantium ul
            lam corporis nesciunt even
            iet neque blanditiis earum
             eos. Quia aliquam fugiat,
              velit nobis architecto q
              uidem iusto saepe sint u
              nde laudantium earum cons
               es id praesentium culpa?</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default bir