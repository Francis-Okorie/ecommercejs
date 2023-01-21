import dinning from '../img/png/dinning-img.png'
import '../Css/Dinning.css'

import React from 'react'

function Dinning() {
  return (
    <div>
        <section id="dinning" class="dinning">
            <div class="dinning__content">
                <h2 class="heading-2">Ultimate Dinning Experience Like <br/>No Other</h2>
                <p class="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se</p>
                <button class="cta">book a table</button>
            </div>
            <div className='dinning-img'>
            <img src={dinning} alt="dinning image" class="dinning__img"/>
            </div>
        </section>
    </div>
  )
}

export default Dinning
