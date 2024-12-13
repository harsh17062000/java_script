
import './Card.css';

const WinterCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img 
          src="https://media.istockphoto.com/id/643018240/photo/snowshoe-walker-running-in-powder-snow.webp?a=1&b=1&s=612x612&w=0&k=20&c=ACtjrNEDUcJ5Zi2kin4V8lCgCG3MM8kLKoTVdClPXuo=" 
          alt="Snowy Adventure" 
          className="card-image" 
        />
        <div className="card-content">
          <h3 className="card-title">Snowy Adventure</h3>
          <p className="card-description">Experience the thrill of snow.</p>
        </div>
      </div>

      <div className="card">
        <img 
          src="https://media.istockphoto.com/id/622767630/photo/hot-chocolate-in-winter.webp?a=1&b=1&s=612x612&w=0&k=20&c=VpvQr6IPtcOvTZXFVyiAdfPsMsSiVtl9HNa1hAqKPsE=" 
          alt="Cozy Cabin" 
          className="card-image" 
        />
        <div className="card-content">
          <h3 className="card-title">Cozy Cabin Retreat</h3>
          <p className="card-description">Relax in a warm, cozy cabin by the lake.</p>
        </div>
      </div>

      <div className="card">
        <img 
          src="https://plus.unsplash.com/premium_photo-1701454736122-14b846cfb3c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwaG9saWRheXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Winter Festival" 
          className="card-image" 
        />
        <div className="card-content">
          <h3 className="card-title">Winter Festival</h3>
          <p className="card-description">Join us for a magical winter festival with lights and music.</p>
        </div>
      </div>
    </div>
  );
};

export default WinterCards;
