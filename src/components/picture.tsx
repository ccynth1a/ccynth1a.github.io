
type PictureArgs = {
  src: string;
  alt: string;
  classes: string;
}

const Picture = ({src, alt, classes}: PictureArgs) => {
  return (
    <div className={`${classes} relative`}>
        <img src={src} alt={alt} className="image"/>
    </div>
  )
}

export default Picture;
