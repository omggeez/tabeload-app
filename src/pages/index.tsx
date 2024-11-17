import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>メイン</h1>
      <ul>
        <li>
          <Link href="/store">店舗リスト</Link>
        </li>
        <li>
          <Link href="/store/new">店舗登録</Link>
        </li>
        <li>
          <Link href="/store/1">店舗詳細</Link>
        </li>
        <li>
          <Link href="/store/1/edit">店舗編集</Link>
        </li>
        <li>
          <Link href="/user/login">ログイン</Link>
        </li>
        <li>
          <Link href="/user/mypage">マイページ</Link>
        </li>
        <li>
          <Link href="/user/likes">お気に入り</Link>
        </li>
      </ul>
    </>
  );
}
