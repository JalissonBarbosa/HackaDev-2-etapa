import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  @keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }

  *::-webkit-scrollbar {
    width: 0;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  * {
    -ms-overflow-style: none;
  }

  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .carousel__viewport {
    position: absolute;
    top: 54px;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }

  .carousel__slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    background: ${({ url1 }) => "url(" + url1 + ")top center/cover"};
    counter-increment: item;
  }

  .carousel__slide:nth-child(2) {
    background: ${({ url2 }) => "url(" + url2 + ")top center/cover"};
  }
  .carousel__slide:nth-child(3) {
    background: ${({ url3 }) => "url(" + url3 + ")top center/cover"};
  }

  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }

  @media (hover: hover) {
    .carousel__snapper {
      animation-name: tonext, snap;
      animation-timing-function: ease;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    .carousel__slide:last-child .carousel__snapper {
      animation-name: tostart, snap;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel__snapper {
      animation-name: none;
    }
  }

  .carousel:hover .carousel__snapper,
  .carousel:focus-within .carousel__snapper {
    animation-name: none;
  }

  .carousel__navigation {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }

  .carousel__navigation-list,
  .carousel__navigation-item {
    display: inline-block;
  }

  .carousel__navigation-button {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #333;
    background-clip: content-box;
    border: 0.25rem solid transparent;
    border-radius: 50%;
    font-size: 0;
    transition: transform 0.1s;
  }
`;

const Carousel = ({ url1, url2, url3 }) => {
  return (
    <Container url1={url1} url2={url2} url3={url3}>
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
        </li>
        <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
        </li>
        <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
          <div className="carousel__snapper"></div>
        </li>
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
        </ol>
      </aside>
    </Container>
  );
};

export default Carousel;
