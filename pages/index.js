import Link from 'next/link';
import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={'Home page'}>
      <h1>Hello</h1>
      <p><Link href={'/about'}><a>About</a></Link></p>
      <p><Link href={'/post/1'}><a>Post</a></Link></p>
    </MainLayout>
  )
}