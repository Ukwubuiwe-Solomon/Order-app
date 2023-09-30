import './featured.css'


const Featured = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://as2.ftcdn.net/v2/jpg/06/45/87/47/1000_F_645874708_wcdz5pfzSzHrJvbwIctK7LJuOojlXbaJ.jpg' alt='' className='featuredImg' />
            <div className='featuredTitle'>
                <h1>Dublin</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://as2.ftcdn.net/v2/jpg/06/45/87/47/1000_F_645874706_K0esgG63EUjm7J7A4ZrfntYL3mtLgSWt.jpg' alt='' className='featuredImg' />
            <div className='featuredTitle'>
                <h1>Austin</h1>
                <h2>541 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://as2.ftcdn.net/v2/jpg/04/71/11/09/1000_F_471110994_sBloEYoGCyzZDcq7IUoJneGdRg8u06oY.jpg' alt='' className='featuredImg' />
            <div className='featuredTitle'>
                <h1>Dallas</h1>
                <h2>623 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img src='https://as2.ftcdn.net/v2/jpg/00/05/89/29/1000_F_5892970_iPex6ZQEppogjl9b1FmrGr2dzOSjXAB6.jpg' alt='' className='featuredImg' />
            <div className='featuredTitle'>
                <h1>Calif</h1>
                <h2>213 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured