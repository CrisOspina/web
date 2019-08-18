import React, { Fragment } from 'react'
import './styles.css'
import Card from '../Cards/Card'
import data from '../Cards/indexUpdate.json'

const Cards = (props) => {
  const datos = data.reverse()

  return (
    <Fragment>
      <div className='container container-main'>
        <div className='row pb-4'>
          { datos.map((data) => {
            return <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-card' key={data.id}>
              <Card
                titleImg={data.titleImg}
                img={data.img}
                tituloDescripcion={data.tituloDescripcion}
                descripcion={data.descripcion}
                toLink={data.toLink}
              />
            </div>
          })
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Cards
