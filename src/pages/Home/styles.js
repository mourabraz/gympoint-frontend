import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafa;
  padding: 32px 16px;
  margin: 8px;
  /* min-height: calc(100vh - 8px); */
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    display: block;
    margin: 0 auto;
    width: 124px;
    img {
      width: 62px;
      display: inline-block;
      position: relative;
      top: 0;
      left: 12px;
    }

    img + img {
      width: 62px;
      display: inline-block;
      position: relative;
      top: 0;
      left: -12px;
    }
  }

  span {
    font-size: 29px;
    font-weight: bold;
    color: var(--color-primary);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 780px;
  p + p {
    margin-top: 4px;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    margin: 32px 0;
  }

  p {
    line-height: 1.8rem;
  }
`;

export const AlertaInfo = styled.div`
  padding: 32px;
  margin: 16px 32px;
  border: 1px solid var(--color-info-dark);
  border-radius: 8px;
  color: var(--color-info-dark);
  p + p {
    margin-top: 8px;
  }
`;

export const AlertaDanger = styled.div`
  padding: 32px;
  margin: 16px 32px;
  border: 1px solid var(--color-error-dark);
  border-radius: 8px;
  color: var(--color-error-dark);
  p + p {
    margin-top: 8px;
  }
`;

export const Examples = styled.div`
  margin-top: 32px;
  padding: 32px;
  border-radius: 8px;
  border: 1px solid var(--text-color-light);
  display: flex;
  flex-direction: column;
  hr {
    margin: 32px 0;
  }
`;
export const ImageGif = styled.div`
  margin-top: 16px;
  width: calc(780px - 64px);
  height: auto;
  img {
    width: 100%;
  }
`;
