import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'


const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src: 'https://as1.ftcdn.net/v2/jpg/02/33/59/42/1000_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg'
    },
    {
      src: 'https://as1.ftcdn.net/v2/jpg/05/36/01/48/1000_F_536014802_DAwcObA7IbzJwJDjHlSNas6dMfglZeCs.jpg'
    },
    {
      src: 'https://as2.ftcdn.net/v2/jpg/05/35/35/55/1000_F_535355507_wuuR4ac5PksvI4bHOUe6bTsMjCdSzznm.jpg'
    },
    {
      src: 'https://as2.ftcdn.net/v2/jpg/04/91/60/25/1000_F_491602520_Tuo6sqXGQgTTXCiROFPWehUnwBNi5fJm.jpg'
    },
    {
      src: 'https://as2.ftcdn.net/v2/jpg/05/35/86/51/1000_F_535865130_cbrK0SEYnJsq3rE7wWitMjqQw2i0NsW6.jpg'
    },
    {
      src: 'https://as1.ftcdn.net/v2/jpg/04/98/88/62/1000_F_498886277_wTJymNo82rhyVb2gkpwCxLR0xYqAMC8g.jpg'
    }
  ]

  const handleOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }
   const handlemove = (direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber =slideNumber === 0 ? 5 : slideNumber-1
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
   }
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
      { open && <div className='slider'>
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)} />
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handlemove("l")}/>
        <div className='sliderWrapper'>
          <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight}  className='arrow' onClick={()=>handlemove("r")}/>
      </div>}
      <div className='hotelWrapper'>
      <button className='bookNow'>Reserve or Book Now!</button>
        <h1 className='hotelTitle'>Grand Hotel</h1>
        <div className='hotelAddress'>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New york</span>
        </div>
        <span className='hotelDistance'>Excellent location - 500m from center</span>
        <span className='hotelPriceHighlight'>Book a stay over $114 at this property and get a free airport taxi</span>
        <div className='hotelImages'>
          {
            photos.map((photo, i)=>(
              <div key={i} className='hotelImgWrapper'>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt='' className='hotelImg' />
              </div>
            ))
          }
        </div>
        <div className='hotelDetails'>
          <div className='hotelDetailTexts'>
            <h1 className='hotelTitle'> Stay in the heart of krakor</h1>
            <p className='hotelDesc'>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
          </div>
          <div className='hotelDetailPrice'>
            <h1>Perfect for a 9-night stay!</h1>
            <span>Location in the real heart of Krakor, excellent location score of 9.8!</span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
        </div>
        <MailList />
      <Footer />
      </div>
    
    </div>
  )
}

export default Hotel