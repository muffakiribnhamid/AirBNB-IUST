import React from 'react';
import styled from 'styled-components';

const Card = ({heading,image,title}) => {
  return (
    <StyledWrapper>
      <div className="card hover:bg-gray-200">
        <img className="image rounded-md hover:bg-gray-200" src={image}/>
        <div className="content hover:bg-slate-100 rounded-md cursor-pointer">
          <a href="#">
            <span className="title">
              {heading}
            </span>
          </a>
          <p className="desc">
            {title} 
          </p>
          <a className="action" href="#">
            Find out more
            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: 300px;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
  }

  .card a {
    text-decoration: none
  }

  .content {
    padding: 1.1rem;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 150px;
    background-color: rgb(239, 205, 255);
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563EB;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: .3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }`;

export default Card;
