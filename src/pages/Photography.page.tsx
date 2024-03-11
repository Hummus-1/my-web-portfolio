/* eslint-disable react/no-unescaped-entities */
import { Title } from '@mantine/core';
import { PageTemplate } from '@/components/PageTemplate/PageTemplate';
import classes from '../components/PageTemplate/PageTemplate.module.css';
import photoClasses from './Protography.module.css';
import { GlitchedImage } from '@/components/GlitchedImage/GlitchedImage';

export function PhotographyPage() {
  return (
    <PageTemplate
      effectiveImageHeighPercentage={0.65}
      blackMode
      primaryColor="snakeGreen"
      imageRoute="/static/images/snake.webp"
      titleSection={
        <div
          data-glitch="Photography"
          className={classes['glitched-title']}
          style={{ zIndex: 'inherit' }}
        >
          Photography
        </div>
      }
    >
      <div className={photoClasses.gallery}>
        <figure className={`${photoClasses['gallery__item--1']} ${photoClasses.gallery__img}`}>
          <GlitchedImage src="/public/static/images/photography/bridge.webp" alt="Bridge" />
        </figure>
        <figure className={`${photoClasses['gallery__item--2']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/cave.webp"
            className={photoClasses.gallery__img}
            alt="Cave"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--3']} ${photoClasses.gallery__img}`}>
          <GlitchedImage src="/public/static/images/photography/rocks.webp" alt="Rocks" />
        </figure>
        <figure className={`${photoClasses['gallery__item--4']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/papagayo.jpg"
            className={photoClasses.gallery__img}
            alt="Swimming in the sea"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--5']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/arc.jpg"
            className={photoClasses.gallery__img}
            alt="Glendalough Arc"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--6']} ${photoClasses.gallery__img}`}>
          <GlitchedImage src="/public/static/images/photography/statue.webp" alt="Kassel Statue" />
        </figure>
        <figure className={`${photoClasses['gallery__item--7']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/dogman.webp"
            className={photoClasses.gallery__img}
            alt="A man and a dog"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--8']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/family-forest.webp"
            className={photoClasses.gallery__img}
            alt="Family in a forest"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--9']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/branches.webp"
            className={photoClasses.gallery__img}
            alt="Branches and tree"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--10']} ${photoClasses.gallery__img}`}>
          <img
            src="/public/static/images/photography/black-wood.webp"
            className={photoClasses.gallery__img}
            alt="Black wood"
          />
        </figure>
        <figure className={`${photoClasses['gallery__item--link']} ${photoClasses.gallery__img}`}>
          <Title
            onClick={() => {
              window.location.href = 'https://www.behance.net/danielgarciaher2';
            }}
            size="xs"
          >
            <p>Link to my portfolio</p> <p>([◉"])</p>
          </Title>
        </figure>
      </div>
    </PageTemplate>
  );
}
