import './Himachal.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { HimachalImages } from "../../../media/himachal/HimachalImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Himachal=()=>{
    const placeInfo = [
        {
          placeName: "Himachal",
          tagline: "The mountains are calling",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: HimachalImages.dp1,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp2,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp3,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp4,
          location: "Dubai",
          price: "INR 4999",
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
        <>
            <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                In Himachal, every sunrise feels like a blessing. 
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">T</span>reks
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.dc1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.dc2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Trekking camps 
                  <hr />
                </h2>
                <p>
                  The culture of Himachal, an emirate of the United Arab Emirates.
                  The UAE culture mainly revolves around the religion of Islam
                  and traditional Arab culture. The influence of Islamic and
                  Arab culture on its architecture, music, attire, cuisine, and
                  lifestyle are very prominent as well.
                </p>
                <p>
                  Five times every day, Muslims are called to prayer from the
                  minarets of mosques which are scattered around the country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">N</span>ature
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                  Himachal is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Himachal is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Himachal
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                  Himachal is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={HimachalImages.do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={HimachalImages.do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            What's included
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
            Himachal Pradesh, nestled in the heart of the western Himalayas, is a state renowned 
            for its stunning landscapes, serene valleys, and rich cultural heritage.
            </p>
            <p>
            Himachal Pradesh, nestled in the heart of the western Himalayas, is a state renowned 
            for its stunning landscapes, serene valleys, and rich cultural heritage. This region 
            is a paradise for nature lovers and adventure enthusiasts alike, offering everything 
            from snow-capped mountains and lush green forests to sparkling rivers and picturesque hill stations.
            </p>
            <p>
            Himachal Pradesh, nestled in the heart of the western Himalayas, is a state 
            renowned for its stunning landscapes, serene valleys, and rich cultural heritage. 
            This region is a paradise for nature lovers and adventure enthusiasts alike, offering
             everything from snow-capped mountains and lush green forests to sparkling rivers and 
             picturesque hill stations.
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best deals for you</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}