import { useState } from "react";
import styles from "./styles.module.scss";

interface JokeProps {
  setup: string;
  punchline: string;
}

const Joke = (props: JokeProps) => {
  const {
    setup,
    punchline,
  } = props;
  const [
    isVisible,
    setIsVisible,
  ] = useState<boolean>(false);

  const punchlineWrapper = [
    styles.punchline,
    isVisible ? styles.visible : null,
  ].filter((className) => !!className).join(" ");
  return (
    <div className={styles.wrapper}>
      <div>
        {setup}
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>
        reveal
      </button>
      <div className={punchlineWrapper}>
        <div className={styles.punchlineReveal}>
          {punchline}
        </div>
      </div>
    </div>
  );
};

export default Joke;
