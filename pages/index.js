import Link from "next/link"; //next/link does all the location.history handling for you
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import {useState, useEffect} from "react";

// Basic dynamic routing
/* const PostLink = props => (
    <li>
      <Link href={`/post1?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
); */

// Clean URL dynamic routing
// History Awareness: dynamic routing works pretty nicely with the browser history
const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.name}</a>
    </Link>
    <style jsx>{`
        li {
            list-style-type: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: blue;
            font-family: 'Arial';
        }

        a:hover {
            opacity: 0.6;
        }
        `}</style>
  </li>  
);

const App = (props) => {   
    
    return (    
    <div>
        <Layout>
            <h1>Hello World</h1>            
            <p>Hello everyone, this is text in a paragraph tag that is rendered in the page source!</p>            
            <h1>Batman TV Shows</h1>
            <ul>
            {props.shows.map(show => (
                <PostLink key={show.id} id={show.id} name={show.name} />                
            ))}
            </ul>
            <style jsx>{`
            h1,
            p {
            font-family: 'Arial';
            }

            ul {
            padding: 0;
            }
            
        `}</style>
        </Layout>
    </div>
)};

App.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
};

export default App;