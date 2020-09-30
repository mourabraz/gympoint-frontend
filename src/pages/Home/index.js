/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import logoLeft from '~/assets/logo/logo-l@2x.png';
import logoRight from '~/assets/logo/logo-r@2x.png';
import ImgDashboardGif from '../../assets/gifs/1.gif';
import ImgAlunosGif from '../../assets/gifs/2.gif';
import ImgMatriculasGif from '../../assets/gifs/3.gif';

import {
  Container,
  Logo,
  Content,
  AlertaInfo,
  Introduction,
  Examples,
  ImageGif,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Logo>
        <div>
          <img src={logoLeft} alt="" />
          <img src={logoRight} alt="" />
        </div>
        <span className="logo">GYMPOINT</span>
      </Logo>

      <Content>
        <AlertaInfo>
          <p>
            Este sistema está online apenas com o propósito de expor o sistema,
            de forma a demonstrar algumas funcionalidades.
          </p>
          <p>
            <strong>
              Não se trata de um produto acabado e PORTANTO não deve ser usado
              com informações verdadeiras!
            </strong>
          </p>
          <p>
            Link do GitHub (Backend em Express):{' '}
            <a
              href="https://github.com/mourabraz/gympoint-backend"
              target="blank"
            >
              https://github.com/mourabraz/gympoint-backend
            </a>
          </p>
          <p>
            Link do GitHub (Frontend em ReactJS):{' '}
            <a
              href="https://github.com/mourabraz/gympoint-frontend"
              target="blank"
            >
              https://github.com/mourabraz/gympoint-frontend
            </a>
          </p>
          <p>O consumo da fila para o envio de emails está desligado.</p>

          <p>
            Poderá realizar um login de teste por meio do link abaixo:
            <br />
            <br />
            <Link to="/login">
              <strong>Login</strong>
            </Link>
            <br />
            <br />
            <i>Teste com conta existente:</i>
            <br />
            <strong>email - </strong> admin@gympoint.com
            <br />
            <strong>senha - </strong> 123456
          </p>

          <p>
            <br />
            <br />
            <i>Os dados serão apagados e recarregados quando necessário.</i>
            <br />
            <i>
              * Ao testar o sistema, peço a gentileza de não inserir conteúdo
              inapropriado.
            </i>
          </p>
        </AlertaInfo>

        <Introduction>
          <h1>O projeto &quot;Gympoint&quot;</h1>

          <p>Projeto realizado para apoiar o gerenciamento de uma Academia.</p>

          <p>
            A parte web do sistema (aqui só apresenta-se o funcionamento da
            parte web) é destinada aos gerentes da Academia, para cadastro e
            controle dos clientes que frequentem a academia ou que já tenham
            frequentado.
          </p>

          <p>
            No Dashboard é possível visualizar o número de entradas por dia, o
            número de entradas por hora e a lista dos aniversariantes dos
            próximos 30 dias
          </p>
        </Introduction>

        <Examples>
          <h3># Informações no Dashboard</h3>

          <ImageGif>
            <img src={ImgDashboardGif} alt="Show dashboard as GIF" />
          </ImageGif>

          <hr />

          <h3># CRUD de Alunos</h3>

          <ImageGif>
            <img src={ImgAlunosGif} alt="Crud de alunos as GIF" />
          </ImageGif>

          <hr />

          <h3># Planos e Matrículas de Alunos</h3>

          <ImageGif>
            <img src={ImgMatriculasGif} alt="Matriculas as GIF" />
          </ImageGif>
        </Examples>
      </Content>
    </Container>
  );
}
