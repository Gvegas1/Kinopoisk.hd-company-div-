import React, { useState } from "react";

import Slider from "../../general/Slider/Slider";
import { Burger } from "../../general/Burger";
import { Container } from "../../general/Container";
import { BackgroundContainer } from "../../general/BackgroundContainer";

export const HomeSectionHero = () => {
  const [countKeys, setCountKeys] = useState(0);
  const [currentKeys, setCurrentCountKeys] = useState(1);

  return (
    <section className="H__section-hero">
      <BackgroundContainer backgroundImage="background-clouds__first-layer" />
      <Container sectionContainer="H__hero__container">
        <div className="H__hero__header">
          <Burger />
          <div className="H__hero__logo-wrapper">
            <span className="logo_darkGrey-img" />
          </div>
        </div>
        <h1 className="H__hero__title main-title">ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</h1>
        <div className="H__hero__rect-container">
          <div className="rect"></div>
          <div className="rect"></div>
          <div className="rect active">
            <span className="rect__count">03</span>
            <span className="rect__text text_small">Подсказки</span>
          </div>
          <div className="rect"></div>
        </div>
        <Slider positioningClassName="H__hero__slider">
          <Slider.Counter lastCount={countKeys} currentKey={currentKeys} />
          <Slider.ItemContainer
            callback={(lastCountKey, currentCountKey) => {
              setCountKeys(lastCountKey);
              setCurrentCountKeys(currentCountKey);
            }}
          >
            <BackgroundContainer backgroundImage="background-clouds__second-layer" />
            <Slider.Item countKey={1}>
              <Slider.Image
                positioningClassName="H__hero__slider__image-wrapper"
                backgroundImage="racer"
              />
              <p className="slider__description description">
                Для примера мы показали вам его лицо. В первой серии он прячется
                в подвале за мониторами, и пусть борода не собьёт вас с толку.
                Найдите героя и нажмите на паузу — ему не терпится отдать вам
                промокод.
              </p>
            </Slider.Item>
            <Slider.Item countKey={2}>
              <Slider.Image
                positioningClassName="H__hero__slider__image-wrapper"
                backgroundImage="racer"
              />
              <p className="slider__description description">
                2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum doloribus et reiciendis earum nam quae vitae eveniet,
                minima temporibus ipsa voluptatibus fugiat amet assumenda
                facilis at ratione ipsum aliquid aspernatur.
              </p>
            </Slider.Item>
            <Slider.Item countKey={3}>
              <Slider.Image
                positioningClassName="H__hero__slider__image-wrapper"
                backgroundImage="racer"
              />
              <p className="slider__description description">
                3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum doloribus et reiciendis earum nam quae vitae eveniet,
                minima temporibus ipsa voluptatibus fugiat amet assumenda
                facilis at ratione ipsum aliquid aspernatur.
              </p>
            </Slider.Item>
            <Slider.Item countKey={4}>
              <Slider.Image
                positioningClassName="H__hero__slider__image-wrapper"
                backgroundImage="racer"
              />
              <p className="slider__description description">
                4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum doloribus et reiciendis earum nam quae vitae eveniet,
                minima temporibus ipsa voluptatibus fugiat amet assumenda
                facilis at ratione ipsum aliquid aspernatur.
              </p>
            </Slider.Item>
          </Slider.ItemContainer>
          <a className="promocode-btn-wrapper" href="#">
            <span className="promocode__link-text">
              Искать промокод <span className="arrow-right svg" />
            </span>
          </a>
        </Slider>
        <a href="#" className="H__hero__home-link">
          <span className="home-link-text text_small">hd.kinopoisk.ru</span>
        </a>
        <div className="H__hero__action-wrapper">
          <span className="action-text text_small">Скрольте вниз</span>
          <span className="arrow-down svg"></span>
        </div>
      </Container>
    </section>
  );
};
