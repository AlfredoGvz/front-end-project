import { Link } from "react-router-dom";
import Modal from "./trial/Modal";
export default function Home() {
  return (
    <div className="hero fixed bottom-0 top-0 hero-own">
      <div></div>
      <div className="hero-content text-center text-rose-950">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link className="btn" to="/articles">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
