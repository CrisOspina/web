import React, { Fragment } from 'react'
import './styles.css'

import Card from '../Cards/Card'
import data from '../Cards/indexUpdate.json'
import { ContenedorMain } from '../ContenedorMain/'

const Cards = () => {
  const datos = data.reverse()

  return (
    <Fragment>
      <ContenedorMain>
        <div className='row pb-4 animated fadeIn'>
          {datos.map(data => {
            return (
              <div
                className='col-12 col-sm-6 col-md-6 col-lg-4 col-card hvr-curl-bottom-left'
                key={data.id}
              >
                <Card
                  titleImg={data.titleImg}
                  img={data.img}
                  tituloDescripcion={data.tituloDescripcion}
                  descripcion={data.descripcion}
                  toLink={data.toLink}
                />
              </div>
            )
          })}
        </div>
      </ContenedorMain>
    </Fragment>
  )
}

export default Cards
