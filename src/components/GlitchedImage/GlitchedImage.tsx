import classes from './GlitchedImage.module.css';

export type GlitchedImageProps = {
  src: string;
  alt: string;
};

export const GlitchedImage = ({ src, alt }: GlitchedImageProps) => (
  <>
    <svg className={classes.filter}>
      <filter id="alphaRed">
        <feColorMatrix
          mode="matrix"
          values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
          result="joint"
        />
      </filter>
      <filter id="alphaGreen">
        <feColorMatrix
          mode="matrix"
          values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
          result="joint"
        />
      </filter>
      <filter id="alphaBlue">
        <feColorMatrix
          mode="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
          result="joint"
        />
      </filter>
      <filter id="alpha">
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </svg>
    <div className={classes.imgWrap}>
      <img className={classes.red} src={src} alt={alt} />
      <img className={classes.green} src={src} alt={alt} />
      <img className={classes.blue} src={src} alt={alt} />
    </div>
  </>
);
