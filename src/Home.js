import React from 'react'
import "./Home.css"
import Product from './Product'

export default function Home() {
  return (
    <div className="home">
        <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
          alt=""
        />
       
       <div className="home__row">
              <Product
                  id="1"
                  title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                  price={15.99}
                  rating={4}
                  image="https://media.gq.com/photos/6346f9421c22a0048efff207/master/w_320%2Cc_limit/Layer_7.jpg"
              />
              <Product
                  id="2"
                  title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                  price={120.25}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
              <Product
                  id="3"
                  title="Beauty picks"
                  price={100.25}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="4"
                  title="Citizen Watches BU0054-52L Calendrier"
                  price={314.01}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/81Ml8NQYfYL._AC_UX679_.jpg"
              />
              <Product
                  id="5"
                  title="RAK Magnetic Pickup Tool with LED Lights - Telescoping Magnet Pick Up Gadget Tool for Men, DIY Handyman, Father/Dad, Husband, Boyfriend, Him, Women"
                  price={16.99}
                  rating={5}
                  image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
              <Product
                  id="6"
                  title="Roll over image to zoom in ASUS ZenBook Duo UX481 Laptop, 14” FHD NanoEdge Bezel Touch, Intel Core i7-10510U, GeForce MX250, 16GB RAM, 1TB PCIe SSD, Innovative ScreenPad Plus, Windows 10 Pro, Celestial Blue, UX481FL-XS74T"
                  price={1399.95}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/814LADIi8NL._AC_SX522_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="7"
                  title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Dark Blue"
                  price={169.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/61KSB0XUzjL._AC_SX342_.jpg"
              />
              <Product
                  id="8"
                  title="Ibanez 4 String Bass Guitar, Right, Brown Sunburst (GSRM20BS)"
                  price={179.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/716KDhgBb2L._AC_SL1500_.jpg"
              />
               <Product
                  id="9"
                  title="Shop activity trackers and smartwatches"
                  price={169.99}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
              />
          </div>
          <div className="home__row">
              <Product
                  id="10"
                  title="Coolife Luggage 3 Piece Set Suitcase Spinner Hardshell Lightweight TSA Lock 4 Piece Set"
                  price={150}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/514TNyuuIfL._AC_UF226,226_FMjpg_.jpg"
              />
              <Product
                  id="11"
                  title="Logitech Webcam Deals"
                  price={58}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/41-M9EIrmOL._AC_UF226,226_FMjpg_.jpg"
              />
               <Product
                  id="12"
                  title="Beds, Frames & Bases"
                  price={140.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/51x9T7YVtpL._AC_UF226,226_FMjpg_.jpg"
              />
          </div>
        </div>

    </div>
  )
}
