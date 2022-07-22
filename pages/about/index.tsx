import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { MyTitle } from "../../interfaces/title";

interface AboutPage {
  title: MyTitle;
}

export default function About({ title }: AboutPage) {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About Page"}>
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Home</button>
      <button
        onClick={() => {
          Router.push("/posts");
        }}
      >
        Go back to posts
      </button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about");
  const data: MyTitle = await response.json();
  return { title: data.title };
};
