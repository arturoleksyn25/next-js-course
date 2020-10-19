import Router from "next/router";
import MainLayout from "../../components/MainLayout";

export default function About() {

  const linkClickHandler = () => {
    Router.push('/');
  }

  return (
    <MainLayout title={'About page'}>
      <h1>Hello About page</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
    </MainLayout>
  )
}