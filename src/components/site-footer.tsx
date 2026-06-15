import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>悉尼生存攻略</strong>
        <p>像玩 RPG 一样，把悉尼留学生活拆成能完成的任务。</p>
      </div>
      <nav aria-label="页脚导航">
        <Link href="/guides">全部攻略</Link>
        <Link href="/categories/arrival">新手村任务</Link>
        <Link href="/studio">内容后台</Link>
      </nav>
    </footer>
  );
}
