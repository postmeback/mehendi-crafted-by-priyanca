import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainlogo from './images/logo192.png';
import sidelogo from './images/logo512.png';
import Carousel from 'react-bootstrap/Carousel'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="header">Mehendi Designs by Priyanca</h2>
        <div class="row">
      
      <div className="col-md-3">
         <h3>Image to set</h3>
         </div>

       <div className="col-md-9">

        <h3>Description</h3>
       </div>
       </div>

       <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={mainlogo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  {/* <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={sidelogo}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
      </header>

      <div className="row">
        <div className="col-md-2">
          <ul>
            <li>
            <a href="www.google.com">
            Facebook Page Link
          </a>
            </li>

            <li>
            <a href="window.location.href" >
            Facebook Page Link
          </a>
            </li>

            <li>
            <a href="mailto:someone@example.com">Send email</a>
            </li>
          </ul>
        </div>
<div className="vl">

</div>

        <div className="col-md-6">
          Copyright {(new Date().getFullYear())} Priyanca Pal
          <br/>
          Created with Affection by Arka Poddar
        </div>
        <div className="vl">

</div>
        <div className="col-md-3">
Contact here :
<br/>
Flat No: 5, "Hitaishi Housing Society", Action Area 1,
NewTown, Kol - 156
        </div>
      </div>
    </div>
  );
}

export default App;
