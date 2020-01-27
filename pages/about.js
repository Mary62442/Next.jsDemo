import Link from "next/link";
import Layout from '../components/MyLayout';

const About = () => (
    <div>      
      <Layout>
        <h1>About</h1>
        <Link href="/">
          <a>Go back to home</a>
        </Link>
      </Layout>
    </div>
);

export default About;