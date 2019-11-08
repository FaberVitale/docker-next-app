import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AppBar from 'components/AppBar';
import AppBarButton from 'components/AppBar/partials/AppBarButton';
import PageContent from 'components/PageContent';
import ExternalLink from 'components/ExternalLink';
import { apiEndpoints } from 'config/constants';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <main>
      <AppBar>
        <AppBarButton href="/user">user table</AppBarButton>
      </AppBar>
      <PageContent className="with-p">
        <article>
          <h2>Canditate: Fabrizio A. Vitale</h2>
          <section>
            <h3>Contacts</h3>
            <ul>
              <li>
                <a href="mailto:faber.vitale@gmail.com">
                  faber.vitale@gmail.com
                </a>
              </li>
              <li>
                <ExternalLink href="https://github.com/FaberVitale/">
                  github
                </ExternalLink>
              </li>
            </ul>
          </section>
          <section>
            <h3>Assignment</h3>
            <p>
              Develop a sigle page app in react that invokes the service
              <ExternalLink href="https://jsonplaceholder.typicode.com/users">
                jsonplaceholder.typicode.com/users
              </ExternalLink>
              .
            </p>
            <h4>Project description</h4>
            <p>
              This app is a single page app written with typescript and uses
              next.js as framework.
              <br />
              It includes 2 mocked api endpoint that invoke the requested
              service. This project includes a Dockerfile and can be run in a
              container.
            </p>
            <p>
              The user table built with{' '}
              <ExternalLink href="https://github.com/tannerlinsley/react-table/tree/v6.10.2">
                react-table
              </ExternalLink>{' '}
              is located at{' '}
              <Link href="/user">
                <a>/user page</a>
              </Link>
            </p>
          </section>
          <section>
            <h3>Website pages and api endpoints</h3>
            <ul>
              <li>
                <Link href="/">
                  <a href="/">Home, page path: `/`</a>
                </Link>
              </li>
              <li>
                <Link href="/user">
                  <a>User, page path: `/user`</a>
                </Link>
              </li>
              <li>
                <ExternalLink
                  href={apiEndpoints.root}
                >{`api endpoint root: \`${apiEndpoints.root}\``}</ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href={apiEndpoints.user}
                >{`api endpoint user \`${apiEndpoints.user}\``}</ExternalLink>
              </li>
            </ul>
          </section>
          <section>
            <h3>Main technologies used</h3>
            <ul>
              <li>
                <ExternalLink href="https://reactjs.org/">React</ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://www.typescriptlang.org/">
                  Typescript
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://github.com/zeit/styled-jsx">
                  Styled JSX
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://nodejs.org/en/">
                  Node.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://docs.docker.com/">
                  Docker
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://expressjs.com/">
                  ExpressJs
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://nodejs.org/en/">
                  Node.js
                </ExternalLink>
              </li>
            </ul>
          </section>
        </article>
      </PageContent>
      <style jsx>{`
        .page-content {
          padding: 1rem;
        }
      `}</style>
    </main>
  </div>
);

export default Home;
