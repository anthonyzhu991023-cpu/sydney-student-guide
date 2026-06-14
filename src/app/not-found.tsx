import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell not-found">
      <h1>这个任务入口暂时不存在</h1>
      <p>可能是攻略还没发布，或者链接写错了。</p>
      <Link href="/guides" className="button primary">
        返回攻略图书馆
      </Link>
    </section>
  );
}
