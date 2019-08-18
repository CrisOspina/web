import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

export default function CardOne (props) {
  const classes = useStyles()
  const { img, titleImg, tituloDescripcion, descripcion, toLink } = props

  return (
    <Fragment>
      <a href={toLink}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title={titleImg}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                { tituloDescripcion }
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                { descripcion }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </Fragment>
  )
}
