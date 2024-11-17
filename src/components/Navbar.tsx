import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="navbar">
        {/* ロゴ */}
        <Link href="/" className="navbar__logo">
          食べロード
        </Link>

        <div className="navbar__list">
          <Link href="/store" className="navbar__list--item">
            店舗リスト
          </Link>
          <Link href="/store/new" className="navbar__list--item">
            店舗登録
          </Link>
          <Link href="/user/likes" className="navbar__list--item">
            お気に入り
          </Link>
          <Link href="/user/login" className="navbar__list--item">
            ログイン
          </Link>
        </div>

        {/* モバイルボタン */}
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>

      {/* モバイルナビゲーションバー */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link href="/store" className="navbar__list--item--mobile">
              店舗リスト
            </Link>
            <Link href="/store/new" className="navbar__list--item--mobile">
              店舗登録
            </Link>
            <Link href="/user/likes" className="navbar__list--item--mobile">
              お気に入り
            </Link>
            <Link href="/user/login" className="navbar__list--item--mobile">
              ログイン
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
