import React from 'react';
import styled from 'styled-components';

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  align-items: center;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  text-decoration: none;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
    transform: translateY(-1px);
  }
`;

const IconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`;

const Label = styled.span`
  font-size: 0.95rem;
  color: var(--secondary-color);
`;

const SocialLinks = ({ items, showLabels = true, className }) => {
  return (
    <LinksRow className={className}>
      {items.map((item) => {
        const isExternal = Boolean(item.external);
        return (
          <LinkButton
            key={item.label}
            href={item.href}
            aria-label={item.ariaLabel || item.label}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer noopener' : undefined}
          >
            <IconWrap>{item.icon}</IconWrap>
            {showLabels && item.label ? <Label>{item.label}</Label> : null}
          </LinkButton>
        );
      })}
    </LinksRow>
  );
};

export default SocialLinks;
