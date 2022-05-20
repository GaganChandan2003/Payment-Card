import React from 'react'

const Card = (props) => {
    
  return (
    <div>
        {
            props.value.map((el)=>
            (
                <>
                <div className={el.color}>
                    <div className='fchild'>
                        <h3>{el.date}</h3>
                        <img src={el.logo} className="image" alt="" />
                    </div>
                    <div className='button'><button>Case Study</button></div>
                    <div className='heading'><h3>{el.heading}</h3><h3>{el.subheading}</h3></div>
                    <div className='fchild'><h4>{el.devices}</h4><i class="fa-solid fa-arrow-right"></i></div>
                </div>
                </>
            ))
        }
    </div>
  )
}

export default Card