import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img src='https://as2.ftcdn.net/v2/jpg/05/63/98/79/1000_F_563987998_EsOu8GsBK2mUccyEzn2MnowsNjKEUk3z.jpg' alt='' className='fpImg'/>
        <span className='fpName'>Aparthotel Stamoa elopi</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img src='https://as2.ftcdn.net/v2/jpg/00/05/89/29/1000_F_5892970_iPex6ZQEppogjl9b1FmrGr2dzOSjXAB6.jpg' alt='' className='fpImg'/>
        <span className='fpName'>Dalla Spark plosi</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $100</span>
        <div className='fpRating'>
            <button>6.5</button>
            <span>Good</span>
        </div>
      </div>
      <div className='fpItem'>
        <img src='https://as1.ftcdn.net/v2/jpg/00/06/85/30/1000_F_6853020_gXwN9fWhBHS1AwmDWxZw5F7QGCxYlZaH.jpg' alt='' className='fpImg'/>
        <span className='fpName'>Dublin Stamoa elopi</span>
        <span className='fpCity'>Irellse</span>
        <span className='fpPrice'>Starting from $90</span>
        <div className='fpRating'>
            <button>6.9</button>
            <span>Good</span>
        </div>
      </div>
      <div className='fpItem'>
        <img src='https://as2.ftcdn.net/v2/jpg/00/06/51/17/1000_F_6511728_Y3DgYHHJBl86iqZ6rfQo4Lq5VEDajET8.jpg' alt='' className='fpImg'/>
        <span className='fpName'>California parta estola</span>
        <span className='fpCity'>Obogram</span>
        <span className='fpPrice'>Starting from $200</span>
        <div className='fpRating'>
            <button>9.3</button>
            <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties