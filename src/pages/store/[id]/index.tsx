import { useRouter } from "next/router";

export default function StoreDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>店舗詳細: {id}</h1>
    </div>
  );
}
